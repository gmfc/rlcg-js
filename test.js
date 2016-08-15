var rlcg = require('./rlcg.js');

function main(){
  var rand = new rlcg();
  for(var i=0;i<10000;i++){
    console.log(rand.next().toString());
  }
  
}


main();
