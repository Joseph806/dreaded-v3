const session = process.env.SESSION || '';
const mongoURI = process.env.MONGO_URI || '';
const mycode = process.env.CODE || '254';
const botname = process.env.BOTNAME || 'SEJOTECH';
const herokuAppName = process.env.HEROKU_APP_NAME || '';
const herokuApiKey = process.env.HEROKU_API_KEY || 'HRKU-4491fe41-8664-4d8f-9417-41c0c895877c';

module.exports = {
  session,
  mongoURI,
  mycode,
  botname,
  herokuAppName,
  herokuApiKey,
};