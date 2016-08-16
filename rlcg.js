var bigInt = require("big-integer");

function rlcg(seed){
  if(seed===undefined){
    this.seed = bigInt(42);
  } else {
    this.seed = bigInt(seed);
  }
  this.A = bigInt("1bk7am76uy5hcxq16fcqkwxmr",35);//6364136223846793005 //41c9roc33ffeys2wpfeta3wd
  this.C = bigInt("1atak74jd74hd83756kncx458",35);//1442695040888963407//345245243524351213
  this.M = bigInt("zzzzzzzzzzzzzzzzzzzzzzzzz",35);//9223372036854775808//zzzzzzzzzzzzzzzzzzzzzzzzz
  this.IN = bigInt("41c9roc33ffeys2wpfeta3wd",35);//13877824140714322085//4654452103859546277//41c9roc33ffeys2wpfeta3wd
  
}

rlcg.prototype.next = function(){
  this.seed = bigInt(this.A).times(this.seed).plus(this.C).mod(this.M);
  return(this.seed);
};

rlcg.prototype.prev = function(){
  this.seed = bigInt(this.seed).minus(this.C).multiply(this.IN).mod(this.M);
  if (this.seed.isNegative()) {
    this.seed= bigInt(this.seed).plus(this.M);
  }
  return(this.seed);
};

module.exports = rlcg;
