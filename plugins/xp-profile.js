import PhoneNumber from 'awesome-phonenumber'
import { xpRange } from '../lib/levelling.js'
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.profilePictureUrl(who)
  } catch (e) {

  } finally {
    let { name, limit, coin, spin, exp, lastclaim, registered, regTime, age, level, role } = global.db.data.users[who]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let premium = global.db.data.users[m.sender].premiumTime
    let prems = `${premium > 0 ? 'Yes': 'No'}`
conn.reply(m.chat, `      _*PROFILE*_
   • *Name:* ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})
   • *Number:* ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
   • *Link:* https://wa.me/${who.split`@`[0]}
   • *Age:* ${registered ? age : ''}
   • *Exp:* ${exp} (${exp - min} / ${xp})
   • *Status:* ${role}
   • *Limit:* ${limit}
   • *ⓉCoin:* ${coin}
   • *Spin:* ${spin}
   • *Register:* ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}
`, m, false )
    let mentionedJid = [who]
  }
}

handler.help = ['profile [@user]']
handler.tags = ['info']
handler.command = /^profile|pp|profil$/i
export default handler