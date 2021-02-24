window.onload = () => {
    let score = 0.0; //score
    let incrementation= 0.0; // c'est la valuer qui va s'ajouter
    let multiplier = 1; // multiplicateur de click score
    let priceAutoClickerRon = 25;
    let priceAutoClickerHermione = 300;
    let priceAutoClickerHarry = 1000;
    let priceAutoClickerDobby = 2000;
    let priceButtonX2 = 5; // prix initial du bouton X2

    let priceBonus = 5;// price for bonus
    const scoreTitle = document.getElementById("score");
    const autoClickerRon = document.getElementById("auto-clicker_ron");
    const autoClickerHermione = document.getElementById("auto-clicker_hermione");
    const autoClickerHarry = document.getElementById("auto-clicker_harry");
    const autoClickerDobby = document.getElementById("auto-clicker_dobby");
    const buttonX2 = document.getElementById("buttonX2");
    

    disabled()
    // auto-clicker event on ron
    autoClickerRon.addEventListener("click", () =>{
        incrementation += 0.1; // increse the incrementation in the set interval
        minScore(priceAutoClickerRon);
        // modif the button
        autoClickerRon.children[2].innerHTML = parseInt(autoClickerRon.children[2].innerHTML) + 1;
        priceAutoClickerRon = priceAutoClickerRon + (priceAutoClickerRon *0.2);
        autoClickerRon.children[1].children[0].innerHTML = parseInt(priceAutoClickerRon);
        addRon();
        disabled();
    })

    // autoclick event on hermione 
    autoClickerHermione.addEventListener("click", () =>{
        incrementation += 0.5; // increse the incrementation in the set interval
        minScore(priceAutoClickerHermione);
        // modif the button
        autoClickerHermione.children[2].innerHTML = parseInt(autoClickerHermione.children[2].innerHTML) + 1;
        priceAutoClickerHermione = priceAutoClickerHermione + (priceAutoClickerHermione *0.2);
        autoClickerHermione.children[1].children[0].innerHTML = parseInt(priceAutoClickerHermione);
        addHermione();
        disabled();
    })

       // autoclick event on harry 
       autoClickerHarry.addEventListener("click", () =>{
        incrementation += 1; // increse the incrementation in the set interval
        minScore(priceAutoClickerHarry);
        // modif the button
        autoClickerHarry.children[2].innerHTML = parseInt(autoClickerHarry.children[2].innerHTML) + 1;
        priceAutoClickerHarry = priceAutoClickerHarry + (priceAutoClickerHarry *0.2);
        autoClickerHarry.children[1].children[0].innerHTML = parseInt(priceAutoClickerHarry);
        addHarry();
        disabled();
    })

        // auto-clicker event on dobby
        autoClickerDobby.addEventListener("click", () =>{
            incrementation += 1; // increse the incrementation in the set interval
            minScore(priceAutoClickerDobby);
            // modif the button
            autoClickerDobby.children[2].innerHTML = parseInt(autoClickerDobby.children[2].innerHTML) + 1;
            priceAutoClickerDobby = priceAutoClickerDobby + (priceAutoClickerDobby *0.2);
            autoClickerDobby.children[1].children[0].innerHTML = parseInt(priceAutoClickerDobby);
            addDobby();
            disabled();
        })

    // on click
    document.getElementById("click").addEventListener("click", () =>{
        score = parseFloat(scoreTitle.innerHTML) +multiplier;
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
        displayPrice[0].children[0].textContent = priceButtonX2;// changer dans le html
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
        displayPrice[0].children[0].textContent = priceBonus;// changer dans le html
        let timeLeft = 10;
        let timerId = setInterval(countdown, 1000);
        multiplier = multiplier * 2;
        
        function countdown(){
            if (timeLeft == -1) {
                clearTimeout(timerId);
                multiplier = multiplier / 2;
                let displayTime = document.getElementsByClassName("clockDown"); 
                displayTime[0].textContent = "Timer ";
            } else {
                let displayTime = document.getElementsByClassName("clockDown"); 
                displayTime[0].textContent = "Timer "+timeLeft;
                timeLeft--;
                
            }
        }  
    });
    // -------------------------------

    //----------------- disabled fct
    function disabled(){    
        let buttonClick = document.querySelectorAll(".clickModif")
        buttonClick.forEach(button =>{
            if (parseFloat(button.children[1].children[0].innerHTML) <= parseFloat(score)){
                button.disabled = false;
                button.classList.remove("disabled")
            }
            else{
                button.disabled = true;
                button.classList.add("disabled")
            }
        })
    }
    // ------------------- score min
    function minScore(minus){
        scoreTitle.innerHTML = parseFloat(scoreTitle.innerHTML) - minus
    }

    // ron
    function addRon(){
        document.getElementById("ronSection").innerHTML += '<img src="./assets/img/ron.png" alt="ron">';
    }

    function addHermione(){
        document.getElementById("hermioneSection").innerHTML += '<img src="./assets/img/hermione.png" alt="hermione">';
    }

    function addHarry(){
        document.getElementById("harrySection").innerHTML += '<img src="./assets/img/potter.png" alt="harry">';
    }
    function addDobby(){
        document.getElementById("dobbySection").innerHTML += '<img src="./assets/img/dobby.png" alt="harry">';
    }
}

