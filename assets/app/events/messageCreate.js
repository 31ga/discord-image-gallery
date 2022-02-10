const req = require('request');
const fs = require('fs');

module.exports = {
	name: 'messageCreate',
	execute(message) {
        if (message.author.bot || message.channel.name !== 'サイト用' || !message.attachments.size) { return; }
        const memberName = message.member.displayName;
        const files = message.attachments.filter(x => x.contentType.startsWith('image')).map(attachment => attachment.url);
        if (!files.length) { return; }
        files.forEach(file => {
            req(
                {method: 'GET', url: file, encoding: null},
                (e, r, b) => {
                    const orig = file.match('.+/(.+?)([\?#;].*)?$')[1];
                    const name = orig.split(".")[0];
                    const ext = orig.split(".").slice(-1)[0];
                    if(fs.existsSync('./images/' + memberName + '-' + name + '.'  + ext)) {
                        let num = 1;
                        while(true){
                            if(fs.existsSync('./images/' + memberName + '-' + name + '-' + num + '.' + ext)) {
                                num++;
                            } else {
                                break;
                            }
                        }
                        fs.writeFileSync('./images/' + memberName + '-' + name + '-' + num + '.' + ext, b, 'binary');
                    } else {
                        fs.writeFileSync('./images/' + memberName + '-' + name + '.'  + ext, b, 'binary');
                    }
                }
            )
        });
        message.react('📸');
    },
};