const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "3BcRACZL#7yjKFWQWZo-0tpFIebjED28RJgkTExXTPT3H_1IkaDw",  //මෙතනට ඔයාගෙ සෙශන් කෝඩ් එක දාන්න
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/Qp22bZ1/IMG-20241129-WA0428.jpg",
ALIVE_MSG: process.env.ALIVE_IMG || "*HEY DEAR* ${pushname}\n *I Am AlIVE NOW....! 🖐🏻*",
SUDO_NB: process.env.SUDO_NB || "94742398003",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE:"true"
};

