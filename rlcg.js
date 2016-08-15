var bigInt = require("big-integer");

function rlcg(seed){
  if(seed===undefined){
    this.seed = bigInt(42);
  } else {
    this.seed = bigInt(seed);
  }
  this.A = bigInt("6364136223846793005");
  this.C = bigInt("1442695040888963407");
  this.M = bigInt("9223372036854775808");
  this.IN = bigInt("13877824140714322085");
  
}

rlcg.prototype.next = function(){
  this.seed = bigInt(this.A).times(this.seed).plus(this.C).mod(this.M);
  return(this.seed);
};

rlcg.prototype.prev = function(){
  this.seed = bigInt(this.seed).minus(this.C).multiply(this.IN).mod(this.M);
  return(this.seed);
};

module.exports = rlcg;
