# Discord.js Bot Template

## About

This template basically offers the absolute bare minimum for a Discord bot written in the TS language.

## Warning
- This guide expects you to have an application created in the developer portal already.

## Features
- Slash commands
- Slash command example
- Event usage example
- Environment variable file

## Configuration:

In the file called `.env` you will find 3 values that you need to fill in yourself consisting the bot token and the bot's application ID

It should look something like this:
```
# Discord stuff
TOKEN = ""
CLIENT_ID = ""
```

In case you don't know where to find these 3 values:

- Go to the [developer portal](https://discord.com/developers/applications) select your application, navigate to "Bot" and copy the token.
- Go to the [developer portal](https://discord.com/developers/applications) select your application, navigate to "General information" and copy the "CLIENT_ID" value.
  
## Install NPM packages
- Open a command prompt and type `npm i` this should install the required NPM packages from the package.json file

## Refreshing slash commands
After every change you make to a command such as the name of the command or the description, you need to execute the following in the command prompt:

`node .\deploy-commands.js`

The result should be:

![image](https://github.com/Yorick20022/discordjs-template/assets/125297057/db8f2746-1b68-4bd2-8ea3-262455de6780)

## Run the bot
- Open the command prompt again and run the bot using `npm run start`
- The command prompt should have now printed `Ready! Logged in as {YourAppName#XXXX}`
- In your Discord server the bot should look like this:

  ![image](https://github.com/Yorick20022/discordjs-template/assets/125297057/00f87c19-5f97-4a34-bf2b-87f9118b2d6d)
