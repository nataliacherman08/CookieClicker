let score = 0;
let incrementation= 0;
let addition = 0;
document.getElementById("auto-clicker").addEventListener("click", () =>{
    incrementation += 1;
})
setInterval( () =>{

    let test = document.getElementById("score")
    addition = parseInt(test.innerHTML) + incrementation
    test.innerHTML = addition
},100)