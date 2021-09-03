const angles = document.querySelectorAll(".input-1");
const isTrianglebtn = document.querySelector("#isTraingle-btn");
const output = document.querySelector("#out-put")


function sumofAngles(angle1,angle2,angle3)
{
    const sum = Number(angle1)+Number(angle2)+Number(angle3);
    return sum;
}


function isTraingle()
{
   var sum = sumofAngles(angles[0].value,angles[1].value,angles[2].value);
   
   if(sum === 180)
   {
       output.innerText="Yeh it is a triangle";
   }else{
       output.innerText="no the entered numbers doesn't forms a triangle";
   }
    
}

isTrianglebtn.addEventListener("click", isTraingle)