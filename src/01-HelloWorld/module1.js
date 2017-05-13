function sayHello() {
    console.log("Hello - from module1");
}

var helloString = "Hello - from module1";

module.exports.sayHello = sayHello;
module.exports.helloString = helloString;

