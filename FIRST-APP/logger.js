const EventEmitter = require("events");

const url = "http://www.markOnline.io/log";

class Logger extends EventEmitter {
  logg(message) {
    this.emit("logging", { data: " unknown", url: "http://" });
  }
}

// exporting the whole object:function
// module.exports.logFunction = logg;
// exporting a single function

module.exports = Logger;
