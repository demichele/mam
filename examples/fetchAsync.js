var Mam = require('/home/carpincho/node/mam/scripts/mam.node.js')
var IOTA = require('iota.lib.js')
var iota = new IOTA({ provider: 'http://173.212.193.59:14265' })

// Init State
// INSERT THE ROOT IN HERE!
let root = 'VHN9KSGBJBHZDWHAKTOJMRGBYVYAGHCYGKAFHYGCZIDBXDHAPALTUEHYDMUYCUDVBLMYVEXJPLALYYIEV'

// Initialise MAM State
var mamState = Mam.init(iota)

// Publish to tangle
const publish = async packet => {
  var trytes = iota.utils.toTrytes(JSON.stringify(packet))
  var message = Mam.create(mamState, trytes)
  mamState = message.state
  await Mam.attach(message.payload, message.address)
  return message.root
}

// Callback used to pass data out of the fetch
const logData = data => console.log(JSON.parse(iota.utils.fromTrytes(data)))

const execute = async () => {
  var resp = await Mam.fetch(root, 'public', null, logData)
  console.log(resp)
}

execute()
