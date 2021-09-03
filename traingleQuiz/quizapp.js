const quizForm = document.querySelector(".quiz-form");
const submitbtn = document.querySelector("#submit-btn");
const output=document.querySelector("#out-put");

const quizAnswer = ["90","90"];

console.log(output,submitbtn,quizForm);

function calculateScore()
{
    let score = 0;
    let index = 0;
 const formResults = new FormData(quizForm);
 for(let enteredvalue of formResults.values())
 {
     if(enteredvalue === quizAnswer[index])
     {
         score +=1;
     }
     index++;
 }
 console.log(score);
}

submitbtn.addEventListener("click", calculateScore);