module.exports = {
  name:"$alwaysExecute",
  code:`
  $createApplicationCommand[$guildID;ticket-kapat;Ticket sistemini kapatırsınız.;true;slash]
  $createApplicationCommand[$guildID;ticket;Ticket sistemini ayarlarsınız.;true;slash;kategori:Bir kategori belirtin.:true:7;kanal:Bir kanal belirtin.:true:7]
  $suppressErrors
  `
}
