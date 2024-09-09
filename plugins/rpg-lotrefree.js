
let handler = async (m, { conn, usedPrefix }) => {
    let user = global.db.data.users[m.sender]
    let _md = `${Math.floor(Math.random() * 200)}`.trim()
    let _dm = `${Math.floor(Math.random() * 0)}`.trim()        
    let md = (_md * 1)
    
    let _lg = `${Math.floor(Math.random() * 15)}`.trim()
    let _gl = `${Math.floor(Math.random() * 0)}`.trim()
    let lg = (_lg * 1)
    let _timers = (86400000 - (new Date - user.lastlotre))
    let timers = clockString(_timers) 
      if (new Date - user.lastlotre > 86400000) {
       
       m.reply(`selamat anda mendapatkan\n*• ${md} ⓉCoin*\n*• ${lg} Limit*`) 
        user.coin += md * 1
        user.limit += lg * 1
        user.lastlotre = new Date * 1
    } else {
        m.reply(`Anda sudah menggunakan Lotre harian\n\n_*${timers}*_`)
 }
}
handler.help = ['lotrefree']
handler.tags = ['game']
handler.command = /^(lotrefree|lotref|lf|lotre)$/i
handler.register = true
handler.fail = null

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}