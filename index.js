/* Codded by @Tio
Credits : Tio Permana
Buat Para mastah Jangan  di ketawain Soalnya masih Belajar.
SESSION BOT - BOTCAHBOTz
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');

async function whatsAPP() {
	const conn = new WAConnection();
	conn.logger.level = 'warn';
	conn.version = [2, 2143, 3];

	conn.on('connecting', async () => {
		console.log(`${chalk.green.bold('Tio')}${chalk.blue.bold('_Permana')}
${chalk.white.italic('TIO-Bot')}
${chalk.blue.italic('⏳ Menghubungkan ke Whatsapp... Tunggu bentar:-)')}`);
	});

  conn.on('open', async () => {
		console.log(
			chalk.green.bold('BOTCAH-X QR Code: '),
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo()))
		);
		await conn.sendMessage(
			conn.user.jid,
			'' +
				Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())),
			MessageType.text
		);
		if (conn.user.jid.startsWith('90')) {
			await conn.sendMessage(
				conn.user.jid ,

				'*!! Ini Rahasia Jangan Sebar Kode ini ' +
					conn.user.name +
					'* !!\n\n by TioxBOTCAHBOTz',
				MessageType.text
			);
		} else {
			await conn.sendMessage(
				conn.user.jid,
				'*!! Ini Rahasia Jangan Sebar Kode ini ' +
					conn.user.name +
					'* !!\n\n by TioxBOTCAHBOTz',
				MessageType.text
			);
		}
		console.log(
			chalk.red.bold(
				"Salin sesi ini!!"
			),
			chalk.red.bold(
				'Paste di file session bot lu ya..'
			)
		);
		process.exit(0);
	});

	await conn.connect();
}

whatsAPP();
