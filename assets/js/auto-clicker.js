window.onload = () => {
    let incrementation= 0;
    let addition = 0;
    let score = 0;
    let multiplifier = 1; 

    let priceButtonX2 = 500;


    const scoreTitle = document.getElementById("score")
    const autoClicker = document.getElementById("auto-clicker");
    const buttonX2 = document.getElementById("buttonX2");


    autoClicker.addEventListener("click", () =>{
        incrementation += 1;
        autoClicker.children[2].innerHTML = parseInt(autoClicker.children[2].innerHTML) + 1
    })


    document.getElementById("click").addEventListener("click", () =>{
        score = parseInt(scoreTitle.innerHTML) +multiplifier;
        scoreTitle.innerHTML = score
    })



    // --------------------------------

    setInterval( () =>{
        score = parseInt(scoreTitle.innerHTML) + incrementation
        scoreTitle.innerHTML = score
    }, 2000)



    //       -------------------------
    buttonX2.addEventListener("click", () =>{
        priceButtonX2 = priceButtonX2 * 2; 
        // changer dans le html
        multiplifier = multiplifier * 2; 
        console.log(multiplifier)
    })
}