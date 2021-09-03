const basendHeight = document.querySelectorAll(".input-1");
const calculateAreabtn = document.querySelector("#butt-on");
const results = document.querySelector("#out-put")
console.log(results);

function findArea()
{
 let base = Number(basendHeight[0].value);
 let height = Number(basendHeight[1].value);
 const area = 0.5*base*height;
results.innerText = "calculated area is = "+area;

}

calculateAreabtn.addEventListener("click", findArea );