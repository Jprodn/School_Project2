import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;



// //given functions
// /**
//  * Utility function to generate a random number from min to max (inclusive)
//  * @param {number} min The lowest integer to return
//  * @param {number} max The highest integer to return
//  */
//  function getRandomInteger(min, max) {
//   return min + Math.floor(Math.random() * Math.floor(max - min + 1));
// }
// /**
// * Utility function to shuffle the items in an array
// * @param {object} arr
// */
// function shuffleArray(arr) {
//   return arr.sort(function (a, b) { return Math.random() - 0.5 })
// }

// //vars
// const NUMBER_OF_QUESTIONS_PER_GAME = 10;
// const MIN_OPERAND_VALUE = 0;
// const MAX_OPERAND_VALUE = 9;
// let currentQuestion = generateQuestion();
// let game = {
//   currentQuestionNumber: 1,
//   numberCorrect: 0,
//   startOver: function() {
//       this.currentQuestionNumber = 0;
//       this.numberCorrect = 0;
//       nextQuestion();
//   }
// };

// //document
// document.addEventListener('DOMContentLoaded', setPage, displayQuestion(currentQuestion));

// //functions
// function newGame(){
//   document.querySelectorAll('.show-hide').forEach((element) => {
//       element.classList.remove('hidden');
//   });
//   game.startOver();
// }

// function setPage() {
//   let answerLis = document.querySelectorAll('section#answers li');
//   answerLis.forEach( (li) => {
//       li.addEventListener('click', userSelectedAnswer);
//   });

//   document.getElementById('btnStartOver').addEventListener('click', newGame);
// }

// function userSelectedAnswer(choice) {
//   let answerAsString = choice.target.innerText;
//   let answer = parseInt(answerAsString);
//   gradeAnswer(currentQuestion, answer);
//   displayScore();
//   if (game.currentQuestionNumber === NUMBER_OF_QUESTIONS_PER_GAME){
//       endGame();
//   }
//   else{
//       nextQuestion();
//   }
// }

// function endGame(){
//   document.querySelectorAll('.show-hide').forEach( (element) => {
//       element.classList.add('hidden');
//   });
// }

// function nextQuestion() {
//   game.currentQuestionNumber++;
//   currentQuestion = generateQuestion();
//   displayScore();
//   displayQuestion(currentQuestion);
// }

// function gradeAnswer(question, answer) {
//   if (question.correctAnswer === answer) {
//       game.numberCorrect++;
//       return true;
//   } else {
//       return false;
//   }
// }

// function generateQuestion() {
//   let operand1 = getRandomInteger(MIN_OPERAND_VALUE, MAX_OPERAND_VALUE);
//   let operand2 = getRandomInteger(MIN_OPERAND_VALUE, MAX_OPERAND_VALUE);
//   let possibleAnswers = [];
//   possibleAnswers.push(operand1 * operand2);
//   for (let i = 1; i <= 3; i++){
//       while (possibleAnswers[i] === undefined) {
//           let randomAnswer = getRandomInteger(MIN_OPERAND_VALUE * MIN_OPERAND_VALUE, MAX_OPERAND_VALUE * MAX_OPERAND_VALUE);
//           if ( !possibleAnswers.includes(randomAnswer)){
//               possibleAnswers[i] = randomAnswer;
//           }
//       }
//   }
//   shuffleArray(possibleAnswers);
//   return {
//       operand1: operand1,
//       operand2: operand2,
//       possibleAnswers: possibleAnswers,
//       correctAnswer: operand1 * operand2
//   }
// }

// function displayQuestion(question) {
//   let problemDiv = document.querySelector('section#problem > div');
//   problemDiv.innerText = `${question.operand1} * ${question.operand2}`;
//   let answerLis = document.querySelectorAll('section#answers li');
//   for (let i = 0; i < answerLis.length; i++){
//       answerLis[i].innerText = question.possibleAnswers[i];
//   }
// }

// function displayScore(){
//   document.querySelector('span.currentProblem').innerText = game.currentQuestionNumber;
//   document.querySelector('span.currentScore').innerText = game.numberCorrect;
// }

