const fs = require("fs");
module.exports = {
  config:{
	name: "npx2",
        version: "1.0.1",
        prefix: false,
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	category: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      'https://i.imgur.com/mM5fFFV.mp4',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("joy")==0 || body.indexOf("Joy")==0 || body.indexOf("jubaed")==0 || body.indexOf("Jubaed")==0 || body.indexOf("Jubaet")==0 || body.indexOf("জয়")==0 || body.indexOf("Admin")==0 || body.indexOf("Bot er admin")==0 || body.indexOf("Joy Ahmed")==0 || body.indexOf("joy khan")==0) {
		var msg = {
				body: "হারিয়ে ফেলেছি মানসিক শান্তি",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
