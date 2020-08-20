
const nblib = require('nblib');
async function test(){

await nblib.init({
  API:"https://api.nbdomain.com/v1/", //resolver endpoint
  minerAPI:"https://merchantapi.taal.com", //endpoint of miner API
  token:"cftcftcft", //api token required by resolver
  debug:true, //enable debug or not.
  enable_write:true  //enable functions that can update and write value to NBdomain
});
//buy the domain using the privateKey. The domain will be paid by the privateKey and transfered to its public key
//The domain must be already in sell state in order to buy it.
//If the seller has specified buyer, othe the buyer can buy it. Otherwise, anyone can buy.

const ret = await nblib.buyDomain(domain,privateKey);

console.log(ret);
}

test();
