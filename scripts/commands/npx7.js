const fs = require("fs");
module.exports = {
  config:{
	name: "npx7",
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
      'https://drive.google.com/uc?id=1Z6uj0fQh_aZe2Efog2tu9hu0mY0vXCX',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("😅")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0 || body.indexOf("")==0) {
		var msg = {
				body: "",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("😇", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
