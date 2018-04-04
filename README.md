#Masked Authenticated Messaging with mam.node.js wrapper. 

The following repo provides simple examples on how to broadcast data through the Tangle using MAM.
In the example folder you will find a file to send a message (publishPublicStart.js) and another to receive it by using the given root (fetchAsync.js)
Both files require minor edits as described on the comments

# Requirements

NodeJs 7+ and npm installed. 
Because async is not supported previous to v7, you must be sure to have at least v7 installed. If you dont have node installed just do 

apt install nodejs

