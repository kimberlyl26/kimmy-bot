# kimmy-bot
kimmy-bot is a chat bot built on the [Hubot][hubot] framework. It is
generated [generator-hubot][generator-hubot].

[heroku]: http://www.heroku.com
[hubot]: http://hubot.github.com
[generator-hubot]: https://github.com/github/generator-hubot

# Installation and Running kimmy-bot Locally

`$npm install -g yo hubot generator-hubot`
`yo hubot`
If the above is successful you will be prompted for a few things. 
When prompted for Bot Adapter, make sure you specify slack
`Bot Adapter: slack`
Then
`npm install hubot-slack --save`

Test your bot locally by running the command below with your API token in 'TOKEN-GOES-HERE':
`HUBOT_SLACK_TOKEN=TOKEN-GOES-HERE ./bin/hubot --adapter slack`

# Kimmy-bot specific functions- scripts/botty.js
   Once you've connected with the command above, open slack and try one or more of the following either in a
   chat room after you've invited kimmy-bot or in a direct-message. 
   
   Try uttering a moderate non offensive curse word and kimmy-bot might respond! 
    
  
   Kimmy-bot will embarrass you if you spell embarrass wrong!
   
   Try asking kimmy-bot directly: 'How do I look today?' a couple of times and hope to get one of the better responses! 
   
     

You can also start kimmy-bot locally without using the slack adapter by running:

    % bin/hubot

