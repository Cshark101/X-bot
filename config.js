//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidpromise2003@gmail.com";
global.location = "Lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Mek-d1/X-bot";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VarIiQL5a24AU5ZCVV0G";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/mx0z4n.jpg";
global.devs = "2349133354644";
global.sudo = process.env.SUDO || "2349133354644";
global.owner = process.env.OWNER_NUMBER || "2349133354644";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/mx0z4n.jpg";
global.waPresence = process.env.WAPRESENCE || "unavailable";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2347013349642,234xxxxx";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://x-bot-session.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUdhWW9EdmNGWGlHbmtqRktMcDBmZHNXVUhyVWRSVVRlNG80SXJWSHJYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidXIrZVF0a1h6bU1Lc09IOS9rODRrcWJienFKWUtBZjJCUlZPZzM3dlloYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjQnpOd0w1QkZ5aVFzSkQ3M0JONVV1NldJR0RxS0pHd2EwSCtCeUxMYVdNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0TExNWXpHOGFXYTlPSFNHSmxQTjBOZFU0TWNUOWdqRVZaUXhUWTN5UFdRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1QeVlBUVNLSHJKd0FEeGwvaU1oeEtjMldVNG40WUxIWkwxYmZxa211MEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJPSnBiSEovN3MrNTY5UGxweWNabUFHSThrRjgzK1BUR0Rad1NNZEVyZ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUFZZmZXc09lQ0xxaTh0bGkrVUJaZ1ZVMi93ZjVKZWczcjc2RjN5SEczcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTG9WZVZmQUVBVjZJclBEc3NVNjRURnpOazR6K1dnaXRSbWVyeG94dU5RMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZMZGxiSzAzY3lXdWM5VmlLRjZ2SlArVHk0TksxQ01IRnVCVDEwaTE0dk01NG9OalJGcDdjdjM3bzVIZVhIcTQ0YnNWV1U0K3pyS0pzdVF5TWhGcWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg0LCJhZHZTZWNyZXRLZXkiOiIxbnlNZXgwdkpoTm84R3RlRmduTEF6WWpCR1EzR3hLQ0ZYRFVHOGJzQ09rPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrN0h1ekZQQ1R6ZTI4V1dNSXFyUWJRIiwicGhvbmVJZCI6ImEyNzdlMWE1LWQ2YzMtNDExMC05ZWIwLWFhMmY0MTRiOWY5ZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGRlFFSjBUbjJmQ1lDZVRkTE5TMXRVMWRJUFE9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEY5Z091dFpNc2FybXJFM0ZLY3I2ZDZJcVhFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkJBWDQ1UDgyIiwibWUiOnsiaWQiOiIyMzQ5MTE4MjMxOTU3OjYwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQemxuMUFRZzV6bnVnWVlDaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3Mm15MkRaYnBjbHRKUkVjeEJ0eCtNV1FYZHQxL1dpSHRndXVjNXBWV0hBPSIsImFjY291bnRTaWduYXR1cmUiOiJucUx5cTRzb1Y0Rk5RTS9nTEc4S0gvNmpUUUNFc3U1VlZHNGhnNTlGSjBpdmgvT1pjNGM4dENOb29BdDgzVWVZdFlqdEpnU1Bmb1hYbk9pWHZuSTZBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoieDhDb2lDL2RwT3QrenU3NksveGltOHRySEpLOEhueUZ5Z0JMSmo5dnNyaUN1MElKYjI3MGRYbDBWVG53WnlzME16d3FSZWpoSlFNUU5xbHlETVdralE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTE4MjMxOTU3OjYwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNOcHN0ZzJXNlhKYlNVUkhNUWJjZmpGa0YzYmRmMW9oN1lMcm5PYVZWaHcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM5Mzg3MDYsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXlrIn0=
"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "©-X-:bot",
  author: process.env.PACK_AUTHER || "☠᭄𝕯𝖆𝖛𝖎𝖉✰࿐☠",
  packname: process.env.PACK_NAME || "Sticker by",
  botname: process.env.BOT_NAME || "-X-:bot",
  ownername: process.env.OWNER_NAME || "-X-",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyDGaxLsz6PLvHvONZPeGuLUaf6UR9yIonc",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "PLATINUM").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
