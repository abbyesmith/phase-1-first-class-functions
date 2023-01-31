function runFiveMiles() {
  console.log("Go for a five-mile run");
}
function liftWeights() {
    console.log("Pump iron");
}
function swimFortyLaps() {
    console.log("Swim 40 laps");
}

function exerciseRoutine(postRunActivity) {
    runFiveMiles();
    postRunActivity();
  }

function returnFunction(){
    return function() {console.log("Return Function???")}
}

//exerciseRoutine(()=> {console.log("Arrow function!")})
newFunction = returnFunction()
console.log(newFunction())

function receivesAFunction(callBackFunction){
    callBackFunction()
}

//receivesAFunction(liftWeights)

function returnsANamedFunction(){
    function testFunction(){
        console.log("YAY for Testing")
    }
    return testFunction
}

function returnsAnAnonymousFunction() {
    return()=>{console.log("Arrow function!")}
}