const readLineSync = require("readline-sync");
const userName = readLineSync.question("What is your name? ");
console.log(`Hello ${userName.toUpperCase()}!!!
Welcome to WHAT DO YOU KNOW ABOUT YUVRAJ 🤠`);

var Score = 0;
const play = function (question, answer) {
  var userAns = readLineSync.question(question);

  if (userAns === answer) {
    console.log("Correct!!");
    Score++;
  } else {
    console.log("Wrong answer!");
  }
};

var questions = [
  {
    Question: "Where do i live? ",
    Answer: "Bihar",
  },
  {
    Question: "What is my favourite Mobile game ",
    Answer: "PUBG",
  },
  {
    Question: "What is my favourite color? ",
    Answer: "Blue",
  },
  {
    Question: "Who is my favourite cricketer? ",
    Answer: "Dhoni",
  },
  {
    Question: "What is my favourite Language? (JavaScirpt/C#/C++)",
    Answer: "JavaScript",
  },
];

for (var i = 0; i < questions.length; i++) {
  var currentQ = questions[i];
  play(currentQ.Question, currentQ.Answer);
}

if (Score > 0) {
  console.log(`YAY!! Your score is: ${Score}`);
} else {
  console.log("Bad luck! Your score is", Score);
}
