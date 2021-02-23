window.onload = () => {
    let score = 0.0; //score
    let incrementation= 0.0; // c'est la valuer qui va s'ajouter
    let multiplifier = 1; // multiplie le click
    let priceAutoClicker = 25;
    let priceButtonX2 = 5; // prix initial du bouton X2
    const scoreTitle = document.getElementById("score");
    const autoClicker = document.getElementById("auto-clicker");
    const buttonX2 = document.getElementById("buttonX2");
    

    disabled()
    // auto-clicker event
    autoClicker.addEventListener("click", () =>{
        incrementation += 0.1; // increse the incrementation in the set interval
        minScore(priceAutoClicker);
        // modif the button
        autoClicker.children[2].innerHTML = parseInt(autoClicker.children[2].innerHTML) + 1;
        priceAutoClicker = priceAutoClicker + (priceAutoClicker *0.2);
        autoClicker.children[1].innerHTML = parseInt(priceAutoClicker);
        disabled()
    })

    // on click
    document.getElementById("click").addEventListener("click", () =>{
        score = parseFloat(scoreTitle.innerHTML) +multiplifier;
        scoreTitle.innerHTML = score.toFixed(1);
        disabled()
    })




    // --------------------------------
    setInterval( () =>{
        score = parseFloat(scoreTitle.innerHTML) + incrementation;
        scoreTitle.innerHTML = score.toFixed(1);
        disabled()
    }, 100)



    //       -------------------------
    buttonX2.addEventListener("click", () =>{
        priceButtonX2 = priceButtonX2 * 2; 
        // changer dans le html
        multiplifier = multiplifier * 2; 
        console.log(multiplifier);
    })

    function disabled(){    
        let buttonClick = document.querySelectorAll(".clickModif")
        buttonClick.forEach(button =>{
            if (parseFloat(button.children[1].innerHTML) <= parseFloat(score)){
                button.disabled = false;
            }
            else{
                button.disabled = true;
            }
        })
    }
    function minScore(minus){
        scoreTitle.innerHTML = parseFloat(scoreTitle.innerHTML) - minus
    }
}

