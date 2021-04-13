let handler = function (m) {
  // this.sendContact(m.chat, '6285865829368', 'Nurutomo', m)
  this.sendContact(m.chat, '6285865829368', 'Owner Felicia', m)
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler
