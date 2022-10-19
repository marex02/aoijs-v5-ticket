const aoijs = require("aoi.js")
const bot = new aoijs.Bot({
token: process.env.token, 
prefix: "$getServerVar[prefix]", 
intents: "all" 
}) 

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./komutlar/")

////////// Callbackler \\\\\\\\\\
bot.onJoin()
bot.onLeave()
bot.onMessage()
bot.onInteractionCreate()

////////// Durum \\\\\\\\\\
bot.status({
text:"Maxi Code ❤️ Adabowale",
type:"PLAYING",
status:"dnd",
time: 12
})

////////// Variableler \\\\\\\\\\
bot.variables({
  prefix:"+",
  tickets:"false",
  tkategori:"",
  tkullanıcı:"",
  tkanal:"",
  tick:"<:maxi_tick:1032358297921126430>",
  cross:"<:maxi_carpi:1032358203272474677>"
})
