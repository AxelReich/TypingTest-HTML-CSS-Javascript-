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
        if (accuracyStat < 0 || accuracyStat == isNaN(accuracyStat)){
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
        //substracts depending on the time
        if (currCharQuote[charIndex - 1] === " " && currCharQuote[charIndex - 1] === " ") {
            if (wordTyped[wordIndex] === currWordQuote[wordIndex]) {
                if (timeSelected == 1) {
                    wordCount--;
                } else if (timeSelected == 2) {
                    wordCount = wordCount - 4;
                } else if (timeSelected == 3) {
                    wordCount = wordCount - 2;
                }
            }
        }
        //adds depending on the time 
        else if (currCharQuote[charIndex] === " "){
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
        console.log(wordTyped)
        console.log(currCharQuote[charIndex])

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








// Otro bug es cuando escribo una palabra bien y borro, el word count aumenta. esto resolverlo en la linea 101 
// Un bug esque cuando escribes, en el quote se bugea el cursor, esto se lo puediera quitar sin en cursor os simplemente. Esto se arregla en css
// El otro bug es que cuando borras todo el texto en el text box, todo se bugea, esto creo que es imposible resolver


//enseñar un mensaje de que el test a acabado! chequea tus stats (crear un div que salga una vez que se acaba el tiempo if time == 0 que salga osea que este desaparecido y justo salga cuando acaba el tiempo)
    // Buscar en internet como hacerlo


//subirlo a la web 