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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUNJTTVseWdoMnVQN09Ja2ZNMENKMkxjYUI3MHY5STJqSjlSN2RmOUNYdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0ZneU1PYy9JdTZ1S1VuVWN3dnZVWUQ0RXRCQUZpK0huSjJUcnVKRTBSTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSHFnUXd0TzZLMUthcldZL2ExMEVsWFhyR09zTlQ4ZG5od2FleE1ZbkZvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCV0NzTUNYVUZLaFZWVWgwTmI0SHNrQTZHaTM5WkV2YW5tZzJoRzc2UmlJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGc2xvZGZRblAxSUJVL25UR21TV0ZJVEp5L3lJb0JJazMrTUZOOFMyblU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFnd3NvME5sZzM2UE5MMVRIcE1NUTFINHpVTTAxTkZwczdyRllVS25URjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0M3MHJjS3I2TGhFSnNObWFldkNPNldKeitpV01Jc1Jhemw5NDNzN1gzMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU2hJSnRvVnBiaWxPVGxKUjVoS0ViZzhwZHlpZkRqZXlac3VKNmNqZTR5TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV5VEEzczFZTDBrVjREUUM5cHB1Y2lWY3ZNSDRDeis0ZVJrbjBUS3I0UHRvTjRlYllpRHR6NktOQytiQU5SSitxcEFuc3JicFNmNEFYSzdPZWE4ekFRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTkzLCJhZHZTZWNyZXRLZXkiOiJXaTd2SjdPaC9STjZVMm0zS0lvazRyVjQzeFBrNzJabzRKOXM5KzJnejlRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWa3VCWXpSdVFrbUFqek5rbUFHdldnIiwicGhvbmVJZCI6IjNmNWIzZDZkLTQ3MzktNDk5Ni1hODE5LWQ5MmY1NDY2MGM1ZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYcHJkVUdUUkdrNW1YdTIrNGgwOTk1Zm9TTjQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia1JhdUlDNlV5THNCY2hoei9xa1lhTWdpdEpnPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkIxVDg1OExaIiwibWUiOnsiaWQiOiIyMzQ5MTE4MjMxOTU3OjU1QHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQemxuMUFRMmNUbXVnWVlCU0FBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ3Mm15MkRaYnBjbHRKUkVjeEJ0eCtNV1FYZHQxL1dpSHRndXVjNXBWV0hBPSIsImFjY291bnRTaWduYXR1cmUiOiJ0U1psUmc5eFRCeTVBdXE4NFhEV2V1Y3ZLcTBWb24yZGZmMUEvdEZ1cDdYTnBnU2UzTm1hYmtxbk84Z2N0UEhNK3RmTVRVZHlhaHI5anlVcWoxUUZDQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoidEprblM5U3Nna0YyeUFNNGxsMGRleUhTM0R5VnY0T3VJU3dsZ2NSbUt6cUFPZ1pnSjh6UFBQSXlFMjJXbU1jOUFhc1B0aFRCOVFUcUYvdGlFdlkrQnc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTE4MjMxOTU3OjU1QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmNOcHN0ZzJXNlhKYlNVUkhNUWJjZmpGa0YzYmRmMW9oN1lMcm5PYVZWaHcifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzM5Mjc1MjcsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRXljIn0=
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
