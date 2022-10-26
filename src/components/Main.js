import React, {useState} from "react"
function getRandomNumber(max) {
    return Math.floor(Math.random() * Math.floor(max));}
 function shuffleArray(arr) {
        return arr.sort(function (a, b) { return Math.random() - 0.5 })
      } ;
function startOver(){
  let currentProblemNumber = document.getElementsByClassName("currentProblem");
   currentProblemNumber = 1;
  let  scoreNumber =document.getElementsByClassName("currentScore");
    scoreNumber = 0;
};
export default function Main(){
    const [count , setCount] = useState(1);
    function increaseCount(){
      setCount(prevCount => prevCount + 1)
    }
  const [score, setScore] = useState(0);
        //  let problemCounter = 1;
            let firstNumber = getRandomNumber(10);
            let secondNumber = getRandomNumber(10);
            let productString =`${firstNumber} * ${secondNumber}`;
            let choiceArray = [0,0,0,0];
        let answer = firstNumber * secondNumber;
  function checkAnswer(event){
    if(answer === parseInt(event.target.innerText) ){
        setScore(prevScore => prevScore + 1)
    }
 };
 function startOver(){
  setScore(prevScore => 0)
  setCount(prevCount => 1)
  let showElements = document.querySelectorAll('.show-hide');
  showElements.forEach((element)=> element.style.display = 'block');
 }
  function updateProblemNumber (){
    let problemNumber = document.getElementsByClassName("currentProblem");
    problemNumber += 1;
    return (
        {problemNumber}
    )
  }
  if (count > 9){
    let hiddenElements = document.querySelectorAll('.show-hide');
    hiddenElements.forEach((element)=> element.style.display ='none');
  }
       for(let i =0; i<3; i++){
        choiceArray[i]= getRandomNumber(82);
    }
    choiceArray[3] = answer;
    shuffleArray(choiceArray);
    return(
        <main>
    <section id="problem">
      <div className="expression show-hide">
       {productString}
        </div>
      <p>
        Problem: <span className="currentProblem">{count}</span>/10 | Score: <span className="currentScore">{score}</span>
      </p>
    </section>
    <section id="answers" className="show-hide">
      <ul>
        <li onClick ={(e)=>{ increaseCount();checkAnswer(e)}}  >{choiceArray[0]}</li>
        <li  onClick ={(e)=>{ increaseCount();checkAnswer(e)}}>{choiceArray[1]}</li>
        <li  onClick ={(e) =>{ increaseCount();checkAnswer(e)}}>{choiceArray[2]}</li>
        <li  onClick ={(e) =>{ increaseCount(); checkAnswer(e)}}>{choiceArray[3]}</li>
      </ul>
    </section>
    <button onClick ={startOver} id="btnStartOver">Start Over</button>
  </main>
    )
}