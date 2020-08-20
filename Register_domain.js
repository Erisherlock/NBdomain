const nblib = require('nblib');
async function test(){

await nblib.init({
  API:"https://api.nbdomain.com/v1/", //resolver endpoint
  minerAPI:"https://merchantapi.taal.com", //endpoint of miner API
  token:"cftcftcft", //api token required by resolver
  debug:true, //enable debug or not.
  enable_write:true  //enable functions that can update and write value to NBdomain
});
//Register a domain using the privateKey. The domain will be paid by the privateKey and registered under its public key
//ref is the publick Key of the agent. Default value is null.

const ret = await nblib.registerDomain(domain,privateKey,ref=null);
console.log(ret);
}

test();
