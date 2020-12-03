let userName = 'Sara';
userName ? console.log('hello $userName'):
console.log('Hello');
let userQuestion = "Can you answer my question?";
console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case  0:
    eightBall = "it is certain";
    break;
  case  2:
    eightBall = "It is decidedly so";
    break;
  case  3:
    eightBall = "Reply hazy try again";
    break;
  case  4:
    eightBall = "Cannot predict now";
    break;
  case  5:
    eightBall = "Do not count on it";
    break;
  case  6:
    eightBall = "My sources say no";
    break;
  case  7:
    eightBall = "Outlook not so good";
    break;
  case  8:
    eightBall = "Signs point to yes";
    break;
    // additional cases...
}
console.log(`The eight ball answered: ${eightBall}`); 