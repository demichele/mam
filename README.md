# Masked Authenticated Messaging with mam.node.js wrapper. 

![MAM](http://iotahispano.com/wp-content/uploads/MAM.png)

The following repo provides simple examples on how to broadcast data through the Tangle using MAM.
In the example folder you will find a file to send a message (publishPublicStart.js) and another to receive it by using the Root provided after the sending is done (fetchAsync.js). The code was taken from http://www.iotameetup.nl/2nd-iota-meetup-18-12-2017-amsterdam/ (Thanks Harm van den Brink!). Both files require minor edits as described on the comments

# Requirements

Instructions in here are only for Linux (Debian/Ubuntu/Debian based). MacOS should be similar and Windows ... well, I don't know about that =(

## NodeJs 7+ and npm installed. 
Because async is not supported previous to NodeJS v7, you must be sure to have at least v7 installed. If you dont have NodeJS installed just do:

    apt install nodejs npm

If you already have node installed check your version: 

    node -v

If your version is not 7+ then you need to upgrade Node. You can do this by typing the following commands

    npm cache clean -f
    npm install -g n
    n stable

## IOTA Javascript Library

You will also need the [IOTA JS library](https://github.com/iotaledger/iota.lib.js/). To install it just type

    npm install iota.lib.js

# Running the examples

Edit both files in the examples directory to change
1) Absolute path to mam.node.js 
2) Node and port with PoW enabled (Check IOTA Dance nodes list)
3) Some seed (avoid using an existing seed with balance on it)
4) yourMessage value to reflect what you wanna send

Once you have this done, just open your console and execute publishPublicStart.js

    node publishPublicStart.js

That will give you a Root and adddress to search the transaction. You will need to provide the Root in the fetchAsync.js file in order to retrieve the data. Once you did this, run fetchAsync.js

    node fetchAsync.js

That's all!
