const free = 50
const prem = 1000
let handler = async (m, { isPrems }) => {
  let time = global.db.data.users[m.sender].lastclaim + 14400000
  if (new Date - global.db.data.users[m.sender].lastclaim < 14400000 ) throw `Anda sudah klaim harian hari ini\nTunggu selama ${msToTime(time - new Date())} lagi`
  global.db.data.users[m.sender].coin += isPrems ? prem : free
  global.db.data.users[m.sender].limit += 20
  m.reply(`+${isPrems ? prem : free} ⓉCoin dan +20 limit`)
  global.db.data.users[m.sender].lastclaim = new Date * 1
}
handler.help = ['claim']
handler.tags = ['xp']
handler.command = /^(claim)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true 
handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit "
}