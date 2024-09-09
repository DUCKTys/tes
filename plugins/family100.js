import { family100 } from '@bochilteam/scraper'
import fs from 'fs'
let winScore = 2
async function handler(m) {
    this.game = this.game ? this.game : {}
    let id = 'family100_' + m.chat
    if (id in this.game) {
        if (this.game[id].id !== undefined) return this.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini' + '\nKetik *pas* untuk mengakhiri', this.game[id].msg)
        delete this.game[id]
        throw false
    }
    this.game[id] = {}
    const json = await family100()  

    let caption = `
*Soal:* ${json.soal}

Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}

+${winScore} *ⓉCoin tiap jawaban benar*
    `.trim()
    this.game[id] = {
        id,
        msg: await m.reply(caption),
        ...json,
        terjawab: Array.from(json.jawaban, () => false),
        winScore,
    }
}
handler.help = ['family100']
handler.tags = ['game']
handler.group = true
handler.coin = 2
handler.register = true
handler.command = /^family100$/i

export default handler