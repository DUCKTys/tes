import { createHash } from 'crypto'
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial Number kosong'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number salah'
  user.registered = false
  m.reply('```Success Unreg !```')
}
handler.command = /^ur?$/i
handler.register = true

export default handler