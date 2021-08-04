function sendGreeting(message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'there'; }
    console.log(message + ", " + userName);
}
sendGreeting();
sendGreeting('Good morning');
sendGreeting('Good afternoon', 'Mr.Lee');
// Arrow function
var sendGreetingArrow = function (message, userName) {
    if (message === void 0) { message = 'Hello'; }
    if (userName === void 0) { userName = 'there'; }
    return console.log(message + ", " + userName);
};
sendGreetingArrow();
sendGreetingArrow('Good morning');
sendGreetingArrow('Good afternoon', 'Mr.Lee');
