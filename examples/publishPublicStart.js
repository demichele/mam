// Replace this with absolute path to your mam.node.js
var Mam = require('/home/carpincho/node/mam/scripts/mam.node.js')
let IOTA = require('iota.lib.js');
var iota = new IOTA({ provider: 'http://your.pow.enabled.node:14265' })

let yourMessage = 'Aqui carpincho enviando un mensaje via MAM!'

// Please supply a SEED --> 81 chars of A-Z9 //
let seed = '';
 // Length: AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

let mamState = null;

async function fetchStartCount(){
    let trytes = iota.utils.toTrytes('START');
    let message = Mam.create(mamState, trytes);
    console.log('The first root:');
    console.log(message.root);
    console.log();
    // Fetch all the messages upward from the first root.
    return await Mam.fetch(message.root, 'public', null, null);
}

async function publish(packet){
    // Create the message.
    let trytes = iota.utils.toTrytes(JSON.stringify(packet))
    let message = Mam.create(mamState, trytes);
    // Set the mam state so we can keep adding messages.
    mamState = message.state;
    console.log('Sending message: ', packet);
    console.log('Root: ', message.root);
    console.log('Address: ', message.address);
    console.log();
    // Attach the message.
    return await Mam.attach(message.payload, message.address);
}

// Initiate the mam state with the given seed at index 0.
mamState = Mam.init(iota, seed, 2, 0);

// Fetch all the messages in the stream.
fetchStartCount().then(v => {
    // Log the messages.
    let startCount = v.messages.length;
    console.log('Messages already in the stream:');
    for (let i = 0; i < v.messages.length; i++){
        let msg = v.messages[i];
        console.log(JSON.parse(iota.utils.fromTrytes(msg)));
    }
    console.log();

    // To add messages at the end we need to set the startCount for the mam state to the current amount of messages.
    mamState = Mam.init(iota, seed, 2, startCount);
    
	let newMessage = Date.now() + ' ' + yourMessage;

    // Now the mam state is set, we can add the message.
    publish(newMessage);
}).catch(ex => {
    console.log(ex);
});