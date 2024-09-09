let handler = async (m, { conn ,text }) => {
let user = global.db.data.users[m.sender]
user.afk = + new Date
user.afkReason = text
m.reply(`${conn.getName(m.sender)} is now AFK${text ? ': ' + text : ''}`)
} 
handler.help = ['afk [alasan]']
handler.tags = ['main']
handler.command = /^afk$/i

export default handler
//@${who.split`@`[0]}        /////@${m.sender.split`@`[0]