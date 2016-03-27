/*Botty.js
Author: Kimberly Lanman
Description: My first slackbot project!
 */

module.exports = function(bot) {


    //Catches  'curse' words and responds with an attempt at being amusing
    bot.hear(/(damn.*)|(shit.*)|(hell)/i, function (msg) {
        if(msg.match[1]){
          return msg.send("It's getting real PG in here");
        }
        else if(msg.match[2]){
            return msg.send("Excuse your language!");
        }
        else if(msg.match[3]){
            return msg.send("Oh heck no");
        }
    })

    //Catches a common misspelling of embarrass and 'embarrasses' people by calling them out
    bot.hear(/(embarass me|embarass)/i, function(msg) {
            return msg.reply("*embarrass..idiot")
    })

    //Assigns array of different responses to a variable 'looks'
    var looks = ['like a 1','like a 5','like a 10', 'like Gods most wondrous creature','fug','Scrumtrulescent: definition- so great that any other word employed would be woefully insufficient, and would serve only to limit the sheer magnitude of the greatness intended as a descriptor']

    //Responds to the question: 'How do I look today?'and invokes msg.random with the 'looks' array as a parameter. 
    bot.respond(/(How do I look today\?)/i, function(msg) {
         return msg.send(msg.random(looks));
     })
}

