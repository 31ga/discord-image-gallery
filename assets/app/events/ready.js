module.exports = {
    name: 'ready',
	once: true,
	execute(client) {
		console.log(`${client.user.tag} 画像担当、準備完了`);
	},
};