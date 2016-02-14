// To run:
// npm install && node 01-helloworld.js

var Bot = require('slackbots');
var CHANNEL = "#edgeacademy";

var settings = {
  token:  'TOKEN', //Replace this with your token
  name: 'AcademyBot', //Replace this with the Bot's name
  id: 'academybot' //Replace this with the Bot's handle
};

var params = {
  icon_emoji: ':unicorn_face:', //replace this with whatever icon you want the bot to post as
  link_names: 1 //Ensures formatting in messages posted by your bot is respected
};

var bot = new Bot(settings);

bot.on('start', function() {
  console.log("Started");
});

bot.on('message', function(message) {
  if(message.type === "message") {
    var text = message.text;
    console.log("Got a message: " + text);
  }
});