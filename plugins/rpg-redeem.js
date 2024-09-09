const cooldown = 100000000000
let handler = async(m, { conn, args, usedPrefix }) => {
let user = global.db.data.users[m.sender]
let ctimer = (new Date - user.lastcode)
let _ctimer = (cooldown - ctimer)
let timers = clockString(_ctimer)
    if (args.length == 0) return conn.reply(m.chat, `Harap masukan code transaksi anda..!!`, m)
    let kodes = args[0] == 'free'
    if (kodes) {
   if (user.lastcode < cooldown) {
    conn.reply(m.chat, `*SELAMAT!*\n\nKamu telah mendapatkan\n+25000 XP ✨\n+1000 ⓉCoin 🪙\n+25 Limit 💳`, m)
    user.exp += 25000
    user.limit += 25
    user.coin += 1000
    user.spin += 100
    
   user.lastcode = new Date * 1
   } else {
   return m.reply(`Code gift anda sudah kadaluarsa...`.trim())
   }
   } else {
   return m.reply(htki + ' KODE SALAH ' + htka)
   }
}
handler.help = ['redeem']
handler.tags = ['rpg']
handler.command = /^(redeem)$/i

handler.cooldown = cooldown
export default handler

function clockString(ms) {
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000)
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [d, ' *Days ☀️*\n ', h, ' *Hours 🕐*\n ', m, ' *Minute ⏰*\n ', s, ' *Second ⏱️* '].map(v => v.toString().padStart(2, 0)).join('')
}