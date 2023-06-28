const quoteText = document.querySelector(".quote p"),
textArea = document.querySelector(".input_area"),
errorsTag = document.querySelector(".statsErrors"),
time = document.querySelector(".timeLeft"),
cpm = document.querySelector(".statsCPM"),
wpm = document.querySelector(".statsWPM"),
accuracy = document.querySelector(".statsAccuracy"),
timeSelector = document.getElementById("select-time");

let timer,
cpmCount = 0,
newCpm = 0,
wordCount = 0,
maxTime = 60,
timeLeft = maxTime,
charIndex = 0, wordIndex = 0, errors = 0, usertyping = 0, accuracyStat = 0 + "%";
let currCharQuote = [], currWordQuote = [];

function randomParagraph() {
    // Choose a randpm paragraph and display it in the quote text 
    let randIn = Math.floor(Math.random() * paragraphs.length);
    quoteText.innerHTML = "";
    currCharQuote = paragraphs[randIn].split("");
    currWordQuote = paragraphs[randIn].split(" ")
    paragraphs[randIn].split("").forEach(span => {
        let spantag =  `<span>${span}</span>`;
    quoteText.innerHTML += spantag;
    });
    quoteText.addEventListener("click", () => textArea.focus());
    document.addEventListener("keydown", () => textArea.focus());

}
// Function that starts when the user is typing 
function initTyping(){
    // Select the charachter of the randomparagraph made
    let quoteChar = quoteText.querySelectorAll("span");
    let charTyped = document.getElementById("myTextarea").value.split("")[charIndex];
    
    // The code only starts once and it doesnt call itself each time a charachter is typed 
    if (!usertyping){
        timer = setInterval(initTimer, 1000);
        usertyping = true;
    } 

    // Check if it is correct or incorrect 
    if (timeLeft > 0 ){

        // If hits backspace or beggining the sentence
        if (charTyped == null || charTyped == undefined){  
            charIndex --;
            // If hits backspace and there is a mistake
            if (quoteChar[charIndex].classList.contains("incorrect")){
                errors --;
            }
            quoteChar[charIndex].classList.remove("correct", "incorrect");

        } else {
            // Adds a class to the quote p class that is either correct or incorrect 
            if (quoteChar[charIndex].innerText === charTyped){
                quoteChar[charIndex].classList.add("correct"); 
            } else {
                quoteChar[charIndex].classList.add("incorrect");
                errors ++;
            }
            charIndex ++;
        }
        quoteChar.forEach(span => span.classList.remove("current"));
        if (currCharQuote.length > charIndex){
            quoteChar[charIndex].classList.add("current");
        }

        // If the paragraph ends reload another paragraph        
        if (quoteChar.length === charIndex) {
            //count the cpm when a new paragrah is loaded
            newCpm = (charIndex) + newCpm;
            reloadParagraph();
        }

        accuracyStat = Math.round((cpmCount*100) / (cpmCount + errors));
        accuracy.innerText = accuracyStat + "%";
        if (accuracyStat < 0 || accuracyStat == NaN){
            accuracyStat = 0
        }
        errorsTag.innerText = errors;
        cpm.innerText = cpmCount;
        wpm.innerText = wordCount;


        // Depending on the choice of time, multiply the time by 2 (30s) or 4 (15s) just call the reload function after the if statement
        timeSelected = selectTime();
        if (timeSelected == 1){
            cpmCount = (((charIndex - errors) + newCpm ));
        }
        else if (timeSelected == 2){
            cpmCount = (((charIndex - errors) + newCpm ) * 4);
        }
        else if (timeSelected == 3){
            cpmCount = (((charIndex - errors) + newCpm ) * 2);
        }

        // Update word count 
        let wordTyped = document.getElementById("myTextarea").value.split(" ");
        wordIndex = wordTyped.length-1;
        if (currCharQuote[charIndex] === " "){
            if (wordTyped[wordIndex] === currWordQuote[wordIndex]){
                if (timeSelected == 1){
                    wordCount++;
                }
                else if (timeSelected == 2){
                    wordCount = wordCount  + 4;
                }
                else if (timeSelected == 3){
                    wordCount = wordCount + 2;
                }
            }
        }
    }
}

function reloadParagraph() {
    // When the user finishes teh text it reloads a new one
    randomParagraph();
    quoteChar = quoteText.querySelectorAll("span");
    charIndex = 0;
    charTyped = document.getElementById("myTextarea").value.split("")[charIndex];
    textArea.value = "";
}

function initTimer() {
    if (timeLeft > 0) {
        timeLeft --;
        time.innerText = timeLeft;
    } else {
        clearInterval(timer);
    }
}

// When a new <option> is selected in the time tab
function selectTime() {
    const index = timeSelector.selectedIndex;
    //Is the index that is selected when choosing the time
    if (index==0){
        return 1;
    }
    else if (index==1){
        return 2;     
    }
    else if (index==2){
        return 3;
    }
}

function reloadStats() {
    // Reload every stat that is showing on the stat place 
    clearInterval(timer);
    timer,
    cpmCount = 0,
    newCpm = 0,
    wordCount = 0,
    timeLeft = maxTime,
    charIndex = 0, wordIndex = 0, errors = 0, usertyping = 0, accuracyStat = 0;
    currCharQuote = [], currWordQuote = [];
    

    // once it does that if the selected time is x we reload the paragraph and then change the time stat to x
    if (selectTime() == 1) {
        reloadParagraph();
        maxTime = 60;
        timeLeft = maxTime;
        time.innerText = maxTime;
    }
    if (selectTime() == 2) {
        reloadParagraph();
        maxTime = 15;
        timeLeft = maxTime;
        time.innerText = maxTime;
    }
    if (selectTime() == 3) {
        reloadParagraph();
        maxTime = 30;
        timeLeft = maxTime;
        time.innerText = maxTime;
    }


    

    accuracy.innerText = accuracyStat + "%";
    errorsTag.innerText = errors;
    cpm.innerText = cpmCount;
    wpm.innerText = wordCount;

}


randomParagraph();
textArea.addEventListener("input", initTyping);






// Poner tres botones, try again,  choose time, choose language




// El otro bug es que cuando borras todo el texto en el text box, todo se bugea, esto creo que es imposible resolver 


//enseñar un mensaje de que el test a acabado! chequea tus stats (que salga en el quotetext)

/* Split the screen in half */








css |
    | 
/* Control the left side */
.split-left {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
    left: 0;
    width: 35%;
    background-color: grey	;
  }
  
  /* Control the right side */
  .split-right {
    height: 100%;
    position: fixed;
    z-index: 1;
    top: 0;
    overflow-x: hidden;
    padding-top: 20px;
    right: 0;
    width: 65%;
    background-color: rgb(77, 67, 67);
  }

.header {
  text-align: middle left;
  margin-top: 20px;
  margin-left: 50px;
  font-weight: bold;
  font-size: 30px;
  color: aliceblue;

}
.result-details{
  display:flex;
  list-style-type: none;
  margin-left: 100px;
  text-align: center;
}

.split-left .quote {
  background-color: #cbda4649;
  font-size: 1.5rem;
  margin: 10px;
  padding: 25px;
  box-shadow: black 5px 8px 5px;
  overflow-y: auto;
  max-height: 300px;
  word-wrap: normal break-word inherit;
  position: static;
}

.quote p span{
  word-break: normal;
  position: relative;

}

.quote p span.correct {
  color: rgb(16, 106, 16);
}

.quote p span.incorrect {
  color: rgb(125, 41, 41);
  background-color: rgb(247, 101, 101);
  outline: 1px solid  rgb(83, 11, 11);
  border-radius: 3px;
  border: none;
}

/* quote p span.current, is for the blinking caret before the text when the class is current*/
.quote p span.current {
  color: black;
  
}

.quote p span.current:before {
  content: "";
  right: 100%;
  bottom: 0;
  height: 90%;
  opacity: 0;
  width: 2px;
  position: absolute; 
  background-color: black;
  animation: blink 1s ease-in-out infinite;
}

@keyframes blink {
  50% {
    opacity: 1;
  }
} 
  

  


.timer, .errors, .accuracy,
.cpm, .wpm {
  background-color: #b3b59f;
  height: 80px;
  width: 105px;
  margin: 8px;
  padding: 12px;
  border-radius: 20%;
  box-shadow: black 5px 8px 5px;

}

.input_area {
  background-color: #38382b;
  height: 364px;
  width: 734px;
  font-size: 1.5rem;
  font-weight: 100;
  margin-left: 100px;
  margin-top: 50px;
  padding: 20px;
  border: 0px;
  box-shadow: black 5px 8px 5px;
}
input.input_area {
  padding: 0px 12px 60px 12px;
}
  

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header_text {
  text-align: center;
  font-weight: bold;
}

.curr_time, .curr_errors,
.curr_accuracy, .curr_cpm,
.curr_wpm {
  text-align: center;
  margin-top: 5px;
  font-weight: bold;
}

.buttons {
  display:flex;
  margin-left: 150px;
  list-style-type: none;
  text-align: center;
  
}

.button-inside {
  margin-right: 40px;
  margin-left: 40px;
  margin-top: 40px;
  background-color: black;
  border: none;
  color: white;
  padding: 15px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 14px;

}

#stats { 
  font-size: 30px;
  font-weight:lighter;
}






