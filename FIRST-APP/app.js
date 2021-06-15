// first node program
// function biometrics(name) {
//   return console.log(name);
// }

// biometrics("olawale mark kareem");

// javascript have global/ built-in fumctions' global fxn are functijns that can be accessed anywhere in the browser..
// they include.... console.log, setTimeout(), clearTimeout(), SetInterval(), clearInterval(),
// they can all be accessed via the windows object, e.g, windows.console.log(), windows.setTimeout() e.t.c
// in Node the windows object doesn't exist instead we have the global object, so likewise, global.console.log(), global.setTimeout() e.t.c

// in node every file is a module, this means all variable defined in the file stays private to the file and are not avilable outside the scope of the file
// var mark = "happy";
// console.log(global.mark);

//module keyword is not a global function
// console.log(module);

//loading a module as an object

// const logger = require("./logger");
// console.log(logger);
// logger.logFunction("message of God");

//loadina a module with just a single function
// const logger = require("./logger");
// logger("message of  God");

// console.log(module);
// console.log(__filename);
// console.log(__dirname);

// built-in nodemodules
//the path
// const path = require("path");
// var pathObject = path.parse(__filename);
// console.log(pathObject);

//the os
// const os = require("os");
// var totalMachineTime = os.uptime();
// var totalMemory = os.totalmem();
// var freeMemory = os.freemem();

// console.log(`the total memory of this machine is ${totalMemory} bytes`);

// the filesystem
// const fs = require("fs");
//the synchronous file access
// const files = fs.readdirSync("./");
// console.log(files);
// fs.readdir("./", function (err, files) {
//   //   if (err) console.log(`error: ${err}`);
//   //   else console.log(`files: ${files}`);
//   err ? console.log(`errors: ${err}`) : console.log(`files: ${files}`);
// });

// event emittter' this is a class in node
// the naming of a class in node is with caps

// const EventEmitter = require("events");
// const emitter = new EventEmitter();

// // the listener
// // beware of using template literal on the listener
// emitter.on("messaged logged", (arg) => console.log("listener called :", arg));
// // raising an event and adding an event arg
// emitter.emit("messaged logged", { id: 1, url: "http://" });

// extending event emmitter from one class to the other usinga class
// const EventEmitter = require("events");
// const Logger = require("./logger");
// const logger = new Logger();
// logger.on("logging", (arg) => console.log("listener called", arg));
// logger.logg("message");

//http module
// note most node core modules are event emitter, meaning they raise events independently
const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("hello world");
    res.end();
  }
  if (req.url === "/api/courses") {
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.listen(3000);
console.log("listening on port 3000");


