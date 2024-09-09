let handler = async (m, { conn, usedPrefix, command, text }) => {
  if (!text) throw `Contoh\n${usedPrefix}${command} pesan @tag pesan`
  let cm = copy(m)
  let who
  if (text.includes('@0')) who = '0@s.whatsapp.net'
  else if (m.isGroup) who = cm.participant = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw 'Tag seseorang'
  cm.key.fromMe = false
  cm.message[m.mtype] = copy(m.msg)
  let sp = '@' + who.split`@`[0]
  let [fake, ...real] = text.split(sp)
  conn.fakeReply(m.chat, real.join(sp).trimStart(), who, fake.trimEnd(), m.isGroup ? m.chat : false, {
    contextInfo: {
      mentionedJid: conn.parseMention(real.join(sp).trim())
    }
  })
}
handler.help = ['fitnah _@user <pesan>_']
handler.tags = ['fun']
handler.command = /^(fitnah)$/
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true 
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
export default handler

function copy(obj) {
  return JSON.parse(JSON.stringify(obj))
}
