window.onload = () => {
    let score = 0.0; //score
    let incrementation= 0.0; // c'est la valuer qui va s'ajouter
    let multiplifier = 1; // multiplie le click
    let priceAutoClicker = 25;
    let priceButtonX2 = 5; // prix initial du bouton X2
    let clickCounter = 0; //************************************************ */
    let priceBonus = 5;// price for bonus
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
        score = score - priceButtonX2;
        scoreTitle.innerHTML = score
        priceButtonX2 = Math.floor(priceButtonX2 * 1.4);
        let displayPrice = buttonX2.getElementsByClassName("price"); 
        displayPrice[0].textContent = priceButtonX2;// changer dans le html
        multiplier = multiplier * 2; 

    })
    // -------------------------


    //  bonus x200 on clic
    timedCount.addEventListener("click", () =>{
        score = score - priceBonus;
        scoreTitle.innerHTML = score
        priceBonus = Math.floor(priceBonus * 1.4);
        let timeElm = document.getElementById('timedCount');
        let displayPrice = timeElm.getElementsByClassName("price"); 
        displayPrice[0].textContent = priceBonus;// changer dans le html
        let timeLeft = 10;
        let timerId = setInterval(countdown, 1000);
        multiplier = multiplier * 2;
        
        function countdown(){
            if (timeLeft == -1) {
                clearTimeout(timerId);
                multiplier = multiplier / 2;
                
            } else {
                let displayTime = timeElm.getElementsByClassName("compteur");
                displayTime[0].textContent = timeLeft;
                timeLeft--;
                
            }
        }  
    });
    // -------------------------------

    //----------------- disabled fct
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
    // ------------------- score min
    function minScore(minus){
        scoreTitle.innerHTML = parseFloat(scoreTitle.innerHTML) - minus
    }
}

