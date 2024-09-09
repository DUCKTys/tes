import fs from 'fs'

let handler = async (m, { conn }) => {
let teks = 'donasi'
let dana = global.pdana
let saweria = global.psaweria
let pulsa = global.ppulsa
let gopay = global.pgopay
let numberowner = global.nomorown
let anu = `Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
┌〔 Donasi 〕
├ Saweria  : ${saweria}
├ Gopay     : ${gopay}
├ Pulsa Xl  : ${pulsa}
├ Dana       : ${dana}
└────
Kamu akan mendapat akses *Premium* jika berdonasi:

Donasi Seikhlasnya
┌〔 N O T E 〕
├ Waktu premium di tentukan
├ dari jumlah donasi
└────

Berapapun donasi kalian akan sangat berarti 👍

•Harga sewa
┌〔 L I S T 〕
├ 07 Hari  : Rp 10.000
├ 14 Hari  : Rp 20.000
├ 30 Hari  : Rp 40.000
├ Bisa request hari
└────

• Jangan ragu untuk sewa bot ini, karena kami menjanjikan fitur yang terbaik kepada anda, anda juga bisa request fitur yang anda inginkan.

• kalian tidak akan mendapatkan penawaran seperti ini dari bot lainya, karena motto kita selaku pembuat bot adalah "pelanggan senang, kami juga ikut senang".

• Kompensasi ketika ada kejadian sesuatu?, Tentu jelas ada, Karena kami melayani anda dengan segenap hati. 

Sekian dari saya terima gaji :D

Contact Owner:
wa.me/${numberowner} (Owner)
`
  m.reply(anu)
}

handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate|sewa|nyewa)$/i

export default handler
