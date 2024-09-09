let handler = async (m, { conn }) => {
	var tutor = `Tutorial Penggunaan Bot :

1. Semua Fitur Bot Menggunakan Prefix Yaitu Harus Menggunakan Titik (.) Di Awal Perintah Agar Perintahnya Aktif.
Contoh: Ketik .menu 

2. Jika Kamu Ingin Mencari Sesuatu Kamu Bisa Lihat Di List Menu Internet, Kamu Bisa Menemukan Seperti YouTube Search.
Contoh Penggunaan: Ketik .yts Trending hari ini

3. Jika Ingin Mendownload Seperti Video, Reels Fb/Ig, Story Ig, Dan Lain Sebagainya Kamu Bisa Melihat Di List Menu 
Contoh Penggunaan: Ketik .instagram https://www.instagram.com/reel/****

4. Jika Ingin Mengubah Ataupun Menggunakan Fitur Yang Berhubungan Dengan Media Seperti Audio, Foto, Dan Video Kamu Harus Balas Chatnya Dan Ketik Perintahnya 
Contoh Penggunaan: Balas/Reply Vn Nya Terus Ketik .tomp3

5. Jika Kamu Kehabisan Limit Kamu Bisa Claim Ketik .claim

_Note: Jika Masih Tidak Mengerti Hubungin Owner Dengan Cara Mengetik .owner_
`
let name = global.author
  let fkon = {
    key: {
      fromMe: false,
      participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
      ...(m.chat ? { remoteJid: '16500000000@s.whatsapp.net' } : {})
    },
    message: {
      contactMessage: {
        displayName: `${name}`,
        vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
        verified: true
      }
    }
  };

	conn.relayMessage(m.chat, {
    extendedTextMessage: {
      text: tutor,
      contextInfo: {
        mentionedJid: [m.sender],
        externalAdReply: {
          title: wm,
          mediaType: 1,
          previewType: 0,
          renderLargerThumbnail: false,
          thumbnailUrl: 'https://telegra.ph/file/3b6855db1b8ca10858290.jpg',
          sourceUrl: 'https://chat.whatsapp.com/EgYMK47tFY723HOzUBQg7h',
        }
      }, mentions: [m.sender]
    }
  }, { quoted: fkon });
}

handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutor|tutorial)$/i

export default handler