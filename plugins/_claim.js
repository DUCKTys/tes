let handler = async (m,{ conn} ) => {
  m.reply('code fitur berubah menjadi .claim')
}
handler.command = /^(claimlimit|bansos)$/i

handler.disable = false

export default handler
