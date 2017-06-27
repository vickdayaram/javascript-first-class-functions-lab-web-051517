
function countdown(callback){
  window.setTimeout(
    function(){
      callback();
    }, 2000
  );
}

function multiplierValue(number){
  return number
}

function createMultiplier(value){
  return function(number){
     return value * number
  }
}

let doubler = createMultiplier(2)
let tripler = createMultiplier(3)

function multiplier(a, b){
  return a * b
}

let doublerWithBind = createMultiplier.bind(2)
let triplerWithBind = createMultiplier.bind(3)
