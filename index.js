//written by snowyv4/0comment, plz provide creds
//before starting make sure there is already a shulker in the item frame and that the bot can pick up one shulker from the itemframe
const mineflayer = require("mineflayer");
const { promisify } = require('util')
const sleep = promisify(setTimeout)

const OPTIONS = {
  host: "8b8t.me",
  username: "",
  port: '25565',
  version: '1.20.1'
};
const bot = mineflayer.createBot(OPTIONS);

async function dupe() {
  let item = bot.inventory.findInventoryItem('yellow_shulker_box')
  const frame = bot.nearestEntity((entity) => entity.name === "item_frame")

  await sleep(1 * 1000)
  bot.equip(item, 'hand')
  await sleep(100)
  bot.activateEntity(frame)
  await sleep(100)
  bot.attack(frame, swing = true)
  dupe()
}

bot.on('login', () => {
  bot.chat('/8b8t')
})
bot.on('chat', async (username, message) => {
  if(username==='0comment' || username==='J3VU') {
    if(message==='!begindupe') {
      dupe()
    }
  }
})
