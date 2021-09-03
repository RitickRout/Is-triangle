const enteredValues= document.querySelectorAll(".inp-ut");
const calculateBtn = document.querySelector("#btn");
const output = document.querySelector("#out-put");

function sumof(a,b)
{
 var sum = a**2 + b**2;
 return sum;
}

function calculateHypotenuse()
{
 let sum = sumof(Number(enteredValues[0].value),Number(enteredValues[1].value))
 let hypotenues = Math.sqrt(sum);
 
 console.log(hypotenues);
output.innerText ="Hypotenous = "+hypotenues;

}

calculateBtn.addEventListener("click",calculateHypotenuse);