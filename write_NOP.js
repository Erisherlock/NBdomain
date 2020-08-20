
const nblib = require('nblib');
async function test(){

await nblib.init({
  API:"https://api.nbdomain.com/v1/", //resolver endpoint
  minerAPI:"https://merchantapi.taal.com", //endpoint of miner API
  token:"cftcftcft", //api token required by resolver
  debug:true, //enable debug or not.
  enable_write:true  //enable functions that can update and write value to NBdomain
});
//The commands of a domain is linked by a special UTXO.
//Under some rare cases, the UTXO may be consumed by wrong transaction
//This function is used to re-issue a new UTXO

const ret = await domain.writeNOP();
console.log(ret);
}

test();
