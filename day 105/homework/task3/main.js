// 4) შექმენით Node.js პროგრამა, სადაც გამოიყენებთ core modules (console, process, os, util). დაწერეთ მინიმუმ 50 ხაზიანი კოდი, რომელიც აჩვენებს: 
// - კონსოლში შეტყობინებების დაბეჭდვას  
// - process.argv გამოყენებას command line არგუმენტებისთვის  
// - ოპერაციული სისტემის მონაცემების მიღებას os module-ით  
// -util-ის ფუნქციების გამოყენებას კოდის ფორმატირებისთვის  
// გაუშვით პროგრამა ბრძანებით 'node file_name.js' და ჩაიწერეთ შედეგები


const os = require('os');
const util = require('util');

console.log("Node.js Core Modules Demo");

console.info("Program started successfully.");

console.warn("This is a warning message.");

console.error("This is an error example.");

console.log("Process ID:", process.pid);
console.log("Node Version:", process.version);
console.log("Current Directory:", process.cwd());

console.log("Command Line Arguments:");
console.log(process.argv);

const name = process.argv[2] || "Guest";
const age = process.argv[3] || "Unknown";

console.log(`Name: ${name}`);
console.log(`Age: ${age}`);

console.log("-----------------------------------");


console.log("Operating System Information");

console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("Hostname:", os.hostname());

console.log(
  "System Uptime:",
  Math.floor(os.uptime() / 60),
  "minutes"
);

console.log(
  "Total Memory:",
  Math.round(os.totalmem() / 1024 / 1024),
  "MB"
);

console.log(
  "Free Memory:",
  Math.round(os.freemem() / 1024 / 1024),
  "MB"
);

console.log("CPU Cores:", os.cpus().length);


const userInfo = util.format(
  "User: %s | Age: %d",
  name,
  Number(age)
);

console.log(userInfo);

const student = {
  name : name,
  age: age,
  course: "Node.js",
  active: true
};

console.log("Student Object:");

console.log(
    util.inspect(student, {
        colors: false,
        depth: null
    })
);

console.time("Loop Timer");

for (let i = 0; i < 1000000; i++) {
}

console.timeEnd("Loop Timer");
console.log("Program Finished Successfully.")