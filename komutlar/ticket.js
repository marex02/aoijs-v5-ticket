module.exports = [{
  name:"ticket",
  type:"interaction",
  prototype:"slash",
  code:`
  $addButton[1;Ticket Aç!;3;ticketaç;no;🎟️]
  🎟️ Ticket oluşturmak için aşağıdaki button'u kullanın.
  $useChannel[$slashOption[kanal]]
 
$setServerVar[tickets;true]
 $setServerVar[tkategori;$slashOption[kategori]]
  $interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{description:Ticket sistemi başarıyla ayarlandı.\n\nKanal: <#$slashOption[kanal]>\nKategori: <#$slashOption[kategori]>}{color:F48A08}};;;;;no]
  $onlyIf[$channelType[$slashOption[kanal]]==text;{"content":"$getServerVar[cross] Bir metin kanalı belirtin.","options":{"interaction": true}}]
  $onlyIf[$channelType[$slashOption[kategori]]==category;{"content":"$getServerVar[cross] Bir kategori belirtin.","options":{"interaction": true}}]
  $onlyPerms[admin;{"content":"$getServerVar[cross] Bunun için **__Yönetici__** iznin olmalı.","options":{"interaction": true}}]
  `
  },{
    name:"ticketaç",
    type:"interaction",
    prototype:"button",
    code:`
    $addButton[1;;2;ticketkapat;no;🔒]
    $author[1;$userTag;$authorAvatar]
    $description[1;🔒 Ticket'ı kapatmak için aşağıdaki button'u kullanın.]
    $color[1;F48A08]
    $useChannel[$get[ticket]]
    $interactionReply[🎟️ Ticket'ın başarıyla açıldı. <#$get[ticket]>;;;;;yes]
    $setUserVar[tkanal;$get[ticket]]
    $setChannelVar[tkullanıcı;$authorID;$get[ticket]]
    $modifyChannelPerms[$guildID;$get[ticket];-viewchannel]
    $let[ticket;$newTicket[ticket;;$getServerVar[tkategori];yes;Hata]]
    $onlyIf[$getUserVar[tkanal]==;{"content":"$getServerVar[cross] Zaten bir ticket açmışsın. <#$getUserVar[tkanal]>","ephemeral": true,"options":{"interaction": true}}]
$onlyIf[$getServerVar[tickets]==true;{"content":"$getServerVar[cross] Ticket sistemi kapatılmış.","options":{"interaction": true }}]
    `
    },{
      name:"ticketkapat",
      type:"interaction",
      prototype:"button",
      code:`
      $sendDM[**$serverName** adlı sunucuda açtığınız ticket kapatıldı.;$getChannelVar[tkullanıcı]]
      $interactionReply[;{newEmbed:{author:$userTag[$getChannelVar[tkullanıcı]]:$userAvatar[$getChannelVar[tkullanıcı]]}{description:🔒 Ticket <@$getChannelVar[tkullanıcı]> adlı üyeye başarıyla kapatıldı.\n\n🔓 Ticket'ı geri açmak için 🔓 button'unu kullanın.\n\n🗑️ Ticket'ı silmek için 🗑️ button'unu kullanın.}{color:F48A08}};{actionRow:{button::3:ticketgeriaç:no:🔓}{button::4:ticketsil:no:🗑️}};;;;;no]
      $modifyChannelPerms[$getChannelVar[tkullanıcı];$channelID;-viewchannel]
      `
      },{
        name:"ticketgeriaç",
        type:"interaction",
        prototype:"button",
        code:`
        $sendDM[**$serverName** adlı sunucuda açtığınız ticket geri açıldı.;$getChannelVar[tkullanıcı]]
        $interactionReply[;{newEmbed:{author:$userTag[$getChannelVar[tkullanıcı]]:$userAvatar[$getChannelVar[tkullanıcı]]}{description:🔓 Ticket <@$getChannelVar[tkullanıcı]> adlı üyeye tekrardan açıldı.\n\nTicket'ı kapatmak için 🔒 button'unu kullanın.}{color:F48A08}};{actionRow:{button::2:ticketkapat:no:🔒}};;;;;no]
        $modifyChannelPerms[$getChannelVar[tkullanıcı];$channelID;+viewchannel]
        `
        },{
          name:"ticketsil",
          type:"interaction",
          prototype:"button",
          code:`
          $closeTicket
          $wait[1s]
          $setUserVar[tkanal;;$getChannelVar[tkullanıcı]]
          `
          },{
            name:"ticket-kapat",
            type:"interaction",
            prototype:"slash",
            code:`
            $setServerVar[tkategori;]
            $interactionReply[;{newEmbed:{author:$userTag:$authorAvatar}{description:$getServerVar[tick] Ticket sistemi kapatıldı.}{color:F48A08}};;;;;no]
            $onlyIf[$getServerVar[tickets]!=false;{"content":"$getServerVar[cross] Ticket sistemi zaten kurulmamış.","options":{"interaction": true}}]
            $onlyPerms[admin;{"content":"$getServerVar[cross] Bunun için **__Yönetici__** iznin olmalı.","options":{"interaction": true}}]
            `
            }]