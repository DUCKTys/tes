import { pinterestdl } from 'ironman-api'
import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
  if (!args[0]) throw 'urlnya mana?'
  let pin = await pinterestdl(args[0])
  let vid = pin.ironman.url

    await m.reply('_Sedang proses mengirim..._')
  await conn.sendMessage(m.chat, 
            { video: { url: vid } , caption: 'Nih kak videonya :3' }
        );
}
handler.help = ['pinterestdl'].map((v) => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(pinterestdl|pindl)$/i
handler.register = true
handler.limit = true

export default handler