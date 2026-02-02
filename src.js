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

globalThis.results = {BASE:{}};

let wait = 0;
let test = [0, 0, 0]; // [testIndex, methodIndex, blockIndex]
let testF = null;
globalThis.BASE = results.BASE;

function bfg(logMsg) {
  logMsg += "";
  let logArr = logMsg.match(/.{1,2000}/g) || [];
  if (myId === null) {
    for (let log of logArr) api.broadcastMessage(log);
  } else {
    for (let log of logArr) api.sendMessage(myId, log);
  }
}

function tick() {
  if (wait == void 0 || ++wait < 20) return;
  wait = 0;

  let [ti, mi, bi] = test;
  let block = methods[mi][bi];

  if (
    ++bi >= methods[mi].length &&
    !(bi = 0, ++mi < methods.length) &&
    !(mi = 0, ++ti < tests.length)
  ) {
    bfg(JSON.stringify(results));
    wait = void 0;
    return;
  }

  test[0] = ti;
  test[1] = mi;
  test[2] = bi;

  testF = tests[ti];
  if (typeof block === "function") block();
}

function addResult(field, value, baseValue) {
  const key = tags[test[0]] ?? test[0];
  if (results.BASE[field] == void 0) {
    results.BASE ??= {}
    results.BASE[field] = baseValue
  }else{
    results[key] ??= {};
    results[key][field] = value
  }
}
