import { readdirSync, statSync, unlinkSync } from 'fs'
import { join } from 'path'

let handler = async (m, { conn, usedPrefix, args }) => {
	const sesi = ['./sessions']
	const deletedFiles = [], array = []
	sesi.forEach(dirname => {
		readdirSync(dirname).forEach(file => {
			if (file !== 'creds.json') array.push(join(dirname, file))
		})
	})
	array.forEach(file => {
		const stats = statSync(file)
		if (stats.isDirectory()) {
			console.log(`Skipping directory: ${file}`)
		} else {
			unlinkSync(file)
			deletedFiles.push(file)
		}
	})
	
    
m.reply('semua session sudah di hapus')

     if (!process.send) throw 'npm start'
    if (global.conn.user.jid == conn.user.jid) {
    await m.reply('> ```R E S T A R T . . .```')
    process.send('reset')
  } else throw 'sudah selesai melakukan restart'    
}


handler.command = /^clear$/i


export default handler