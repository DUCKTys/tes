import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')

m.reply(`https://wa.me/6287765570421?text=.ur%20${sn}`)
}

handler.help = ['unreg']
handler.tags = ['exp']
handler.command = /^unreg$/i
handler.register = true
export default handler