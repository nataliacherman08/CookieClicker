// window.onload = () => {
    let incrementation= 0.0;
    let score = 0.0;
    let multiplier = 1; // multiplicateur de click score
    let priceAutoClicker = 25;
    let priceButtonX2 = 5;// augmentation du prix du multiplicateur
    let clickCounter = 0; //************************************************ */

    const scoreTitle = document.getElementById("score")
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
        score = parseFloat(scoreTitle.innerHTML) +multiplier;
        scoreTitle.innerHTML = score.toFixed(1);
        // clickCounter ++;
        disabled()     
    })
   
//-----------tentative apparition bouton bonus--ça fout le brun --------
// document.getElementById("click").addEventListener("click", () =>{
//     clickCounter ++;
//     if (clickCounter >= 10) {
//         for (let i = 0; i >= 1; i++) {
//             let newButton = document.createElement("button");
//             newButton.id = "timedCount";
//             newButton.classList.add("clickModif");
//             newButton.innerHTML = 5;
//             document.body.appendChild(newButton);
//         }
//     }
// })



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
  //  ----------------step 11  button bonus----------//

    timedCount.addEventListener("click", () =>{
        let priceBonus = 5;
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
       //-----------fin------step 11-----button bonus--------// 
    
//-------------------ses ajouts-------------//


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

// }


