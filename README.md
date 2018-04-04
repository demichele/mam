# Masked Authenticated Messaging with mam.node.js wrapper. 

The following repo provides simple examples on how to broadcast data through the Tangle using MAM.
In the example folder you will find a file to send a message (publishPublicStart.js) and another to receive it by using the given root (fetchAsync.js)
Both files require minor edits as described on the comments

# Requirements

## NodeJs 7+ and npm installed. 
Because async is not supported previous to v7, you must be sure to have at least v7 installed. If you dont have node installed just do:

    apt install nodejs npm

If you already have node installed check your version: 

    node -v

If your version is not 7+ then you need to upgrade Node. You can do this by typing the following commands

    npm cache clean -f
    npm install -g n
    n stable

## IOTA Javascript Library

You will also need the IOTA JS library. To install it just type

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
