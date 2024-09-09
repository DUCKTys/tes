let handler = async (m, { conn }) => {

  if (m.sender.startsWith('62') || m.sender.startsWith('+62')) {
    var txt = `
(Indonesian)
_*Ketentuan Layanan BOT *_

1. *DILARANG KERAS MERUBAH TIMER/PESAN SEMENTARA*
Bot akan secara otomatis melakukan banning terhadap nomormu, untuk unban silahkan lapor owner (+${global.nomorown}).

2. *DILARANG MENGIRIM MEDIA NSFW*
Bot akan otomatis mendeteksi media dan melakukan banning terhadap nomormu, untuk unban silahkan lapor owner (+${global.nomorown}).

3. *DILARANG SPAM NOMOR BOT*
Bot akan melakukan ban permanent jika ada indikasi spam pada nomormu.

4. *CHAT OWNER BILA PERLU*
Tidak ada gunanya chat ke nomor bot, karena nomor bot tersimpan di server dan owner tidak akan melihat chatmu.

 _*Jika tidak tau cara menggunakan/memakai bot ketik .tutorial*_
 _*Jika masih tidak paham chat owner di grup bot, ketik .grupbot atau klik text  di atas*_

*Ketentuan ini terakhir diperbarui pada 20 Mei 2024.*
`
  } else {

    txt = `
(English)
**Term of Service 
`
  }

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
      text: txt,
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

handler.help = ['rules']
handler.tags = ['info']
handler.command = /^(rules|peraturan)$/i

export default handler
