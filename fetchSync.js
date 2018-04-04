var Mam = require('/home/carpincho/node/mam/scripts/mam.node.js')
var IOTA = require('iota.lib.js')
var iota = new IOTA({ provider: 'http://173.212.193.59:14265' })

// Init State
let root = 'WFNNRZVERDKIVGHLSXQNKRLRKB9CTCCPAYMMQGCFKLBTKOBBHJIOUISAEBLPPSOGLXGDHUSQHFLY9GTKQ'

// Initialise MAM State
var mamState = Mam.init(iota)

// Publish to tangle
const publish = async packet => {
    var message = Mam.create(mamState, packet)
    mamState = message.state
    await Mam.attach(message.payload, message.address)
    return message.root
}

const execute = async () => {
    // Publish and save root.
    root = await publish('Pasando mensajes via MAM en la Tangle!')
    // Publish but not save root
    //await publish('POTATOTWO')

    ///////////////////////////////////
    // Fetch the messages syncronously
    var resp = await Mam.fetch(root, 'public')
    console.log(resp)
}

execute()
