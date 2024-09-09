import { instagramdl } from '@bochilteam/scraper'
import fetch from 'node-fetch'

var handler = async (m, { args, conn, usedPrefix, command }) => {
    if (!args[0]) throw `Ex:\n${usedPrefix}${command} https://www.instagram.com/reel/blablabla`;

    m.reply('Sedang mengunduh video/foto...')
    
    try {
        let res = await bochil.snapsave(args[0]);
        let media = await res[0].url;
      
        const sender = m.sender.split(`@`)[0];

        if (!res) throw 'Can\'t download the post';
      
        await conn.sendFile(m.chat, media, "", "nih kak video/fotonya", m);

    } catch (e) {
      conn.reply(m.chat, 'Gagal mengunduh video', m);
    }
}

handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(ig?)$/i
handler.limit = true
handler.register = true

export default handler