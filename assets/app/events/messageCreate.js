const req = require('request');
const fs = require('fs');

module.exports = {
	name: 'messageCreate',
	execute(message) {
        if (message.author.bot || message.channel.name !== "サイト用") { return; }
        const files = message.attachments.filter(x => x.contentType.startsWith("image")).map(attachment => attachment.url);
        files.forEach(file => {
            req(
                {method: 'GET', url: file, encoding: null},
                (e, r, b) => {
                    fs.writeFileSync('./images/' + file.match(".+/(.+?)([\?#;].*)?$")[1], b, 'binary');
                }
            )
        });
        console.log(files);
        message.react("📸");
    },
};