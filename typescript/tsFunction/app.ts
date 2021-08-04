function sendGreeting (message = 'Hello', userName = 'there')
: void {
  console.log(`${message}, ${userName}`);
}

sendGreeting();
sendGreeting('Good morning');
sendGreeting('Good afternoon', 'Mr.Lee')

// Arrow function
const sendGreetingArrow = (message = 'Hello', userName = 'there')
: void => console.log(`${message}, ${userName}`);

sendGreetingArrow();
sendGreetingArrow('Good morning');
sendGreetingArrow('Good afternoon', 'Mr.Lee')