globalThis.vars={}
globalThis.methods=[
  [
    (()=>{
      console.log("test1")
    }),
    (()=>{
      console.log("test2")
    }),
    (()=>{
      console.log("test3")
    })
    //each function is ran in order
  ]
  //put test method as array of functions
]

globalThis.tests = [  
  () => {}, //KEEP THIS
  () => {
    console.log("being tested")
  } //example
];

globalThis.tags = [
  "BASE", //KEEP THIS
  "consoleLogTest" //example
];

bfg = function(logMsg) {
logMsg+=''
let logArr = logMsg.match(/.{1,2000}/g)
if(myId===null){
for (let log of logArr)api.broadcastMessage(log)
} else for (let log of logArr) api.sendMessage(myId,log)
}

test = [0,0,0] //[test inx, test type inx, code block inx]
results={}
wait = 0

function tick() {
  if (wait != 20) {
    wait++;
    return;
  }
  wait = 0;

  // Snapshot current triple
  let [testIndex, typeIndex, blockIndex] = test;

  // Grab the block BEFORE advancing
  let block = globalThis.methods[typeIndex][blockIndex];

  // Advance indices
  test[2]++; // move to next block
  if (test[2] >= globalThis.methods[typeIndex].length) {
    test[2] = 0;
    test[1]++; // next method
  }
  if (test[1] >= globalThis.methods.length) {
    test[1] = 0;
    test[0]++; // next snippet
  }
  if (test[0] >= globalThis.tests.length) {
    //delete results.BASE
    bfg(JSON.stringify(results));
    wait = 40;
    return; // stop here
  }

  // Update testF to current snippet
  testF = globalThis.tests[test[0]];

  // Execute block LAST
  if (typeof block === "function") {
    block();
  }
}
