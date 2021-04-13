let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • Indosat Ooredoo [081515860089]
│ • Telkomsel [081334177340]
╰──
┏ GOPAY
│• +62XXXXXXXXX
│• +62XXXXXXXXX
┗
┏ OVO
│• +62XXXXXXXXX
│• +62XXXXXXXXX
└─
◩ NIH KAN MO RAMADHAN SETIDAKNYA ANDA DONASI OK
*©* *DavidBotRespond*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
