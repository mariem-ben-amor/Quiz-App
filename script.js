const quizData = {
    Allgemeinwissen: [
        {
            question: "Wie viele Kontinente gibt es auf der Welt?",
            answers: [
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "7", correct: true },
            ],
        },
        {
            question: "Wer malte die Mona Lisa?",
            answers: [
                { text: "Leonardo da Vinci", correct: true },
                { text: "Pablo Picasso", correct: false },
                { text: "Vincent van Gogh", correct: false },
            ],
        },
        {
            question: "Wie viele Planeten hat unser Sonnensystem?",
            answers: [
                { text: "7", correct: false },
                { text: "8", correct: true },
                { text: "9", correct: false },
            ],
        },
        {
            question: "Wer schrieb das Theaterstück 'Faust'?",
            answers: [
                { text: " Johann Wolfgang von Goethe", correct: true },
                { text: "Friedrich Schiller", correct: false },
                { text: " William Shakespeare", correct: false },
            ],
        },
        {
            question: "Welches ist das größte Organ des menschlichen Körpers?",
            answers: [
                { text: " Herz", correct: false },
                { text: "Haut ", correct: true },
                { text: " Leber", correct: false },
            ],
        },
        {
            question: "In welchem Jahr fiel die Berliner Mauer?",
            answers: [
                { text: " 1987", correct: false },
                { text: "1989  ", correct: true },
                { text: " 1991", correct: false },
            ],
        },
        {
            question: "Wie heißt die Hauptstadt von Kanada?",
            answers: [
                { text: " Ottawa ", correct: true },
                { text: "Toronto  ", correct: false },
                { text: " Vancouver", correct: false },
            ],
        },
        {
            question: "Welches Element hat die Ordnungszahl 1 im Periodensystem?",
            answers: [
                { text: " Sauerstoff ", correct: false },
                { text: "Helium  ", correct: false },
                { text: " Wasserstoff ", correct: true },
            ],
        },
        {
            question: "Welcher Planet ist der größte in unserem Sonnensystem?",
            answers: [
                { text: " Mars ", correct: false },
                { text: "Jupiter   ", correct: true },
                { text: " Saturn ", correct: false },
            ],
        },
        {
            question: "Wie viele Knochen hat ein erwachsener Mensch?",
            answers: [
                { text: " 206  ", correct: true },
                { text: "215   ", correct: false },
                { text: " 189 ", correct: false },
            ],
        },

    ],
    Wissenschaft: [
        {
            question: "Welches Element hat das chemische Symbol 'O'?",
            answers: [
                { text: "Wasserstoff", correct: false },
                { text: "Sauerstoff", correct: true },
                { text: "Helium", correct: false },
            ],
        },
        {
            question: "Wer hat die Relativitätstheorie entwickelt?",
            answers: [
                { text: "Isaac Newton", correct: false },
                { text: "Albert Einstein", correct: true },
                { text: "Galileo Galilei", correct: false },
            ],
        },
        {
            question: "Welches ist das häufigste Element im Universum?",
            answers: [
                { text: "Helium", correct: false },
                { text: "Wasserstoff ", correct: true },
                { text: "Sauerstoff", correct: false },
            ],
        },
        {
            question: "Welches Organ im menschlichen Körper produziert Insulin?",
            answers: [
                { text: "Leber", correct: false },
                { text: "Bauchspeicheldrüse ", correct: true },
                { text: "Milz", correct: false },
            ],
        },
        {
            question: "Welche Blutgruppe ist der Universalspender?",
            answers: [
                { text: "AB+", correct: false },
                { text: "0-", correct: true },
                { text: " A+", correct: false },
            ],
        },
        {
            question: "Welcher Wissenschaftler entdeckte die Schwerkraft?",
            answers: [
                { text: " Galileo Galilei", correct: false },
                { text: " Isaac Newton", correct: true },
                { text: "Albert Einstein", correct: false },
            ],
        },
        {
            question: "Wie nennt man die Umwandlung von Wasser in Wasserdampf?",
            answers: [
                { text: "Kondensation", correct: false },
                { text: "Sublimation", correct: false },
                { text: "Verdampfung", correct: true },
            ],
        },
        {
            question: "Was ist die kleinste Einheit eines chemischen Elements?",
            answers: [
                { text: "Atom ", correct: true },
                { text: "Molekül", correct: false },
                { text: "Proton", correct: false },
            ],
        },
        {
            question: "Wie nennt man den Prozess, bei dem Pflanzen Sonnenlicht in Energie umwandeln?",
            answers: [
                { text: "Gärung", correct: false },
                { text: "Photosynthese ", correct: true },
                { text: "Osmose", correct: false },
            ],
        },
        {
            question: "Welches Vitamin wird durch Sonnenlicht in der Haut produziert?",
            answers: [
                { text: "Vitamin C", correct: false },
                { text: "Vitamin D", correct: true },
                { text: "Vitamin A", correct: false },
            ],
        },
    ],
    Geografie: [
        {
            question: "In welcher Stadt befindet sich der Eiffelturm?",
            answers: [
                { text: "London", correct: false },
                { text: "Paris", correct: true },
                { text: "Berlin", correct: false },
            ],
        },
        {
            question: "Was ist die größte Wüste der Welt?",
            answers: [
                { text: "Sahara", correct: false },
                { text: "Antarktis", correct: true },
                { text: "Gobi", correct: false },
            ],
        },
        {
            question: "Welches ist das größte Land der Welt nach Fläche?",
            answers: [
                { text: "Kanada", correct: false },
                { text: "China", correct: false },
                { text: "Russland ", correct: true },
            ],
        },
        {
            question: "Welcher Fluss ist der längste der Welt?",
            answers: [
                { text: "Amazonas", correct: false },
                { text: "Nil ", correct: true },
                { text: "Mississippi", correct: false },
            ],
        },
        {
            question: "Wie viele Kontinente gibt es auf der Erde?",
            answers: [
                { text: "5", correct: false },
                { text: "6", correct: false },
                { text: "7", correct: true },
            ],
        },
        {
            question: "Welches ist das bevölkerungsreichste Land der Welt?",
            answers: [
                { text: "Indien ", correct: true },
                { text: "China", correct: false },
                { text: "USA", correct: false },
            ],
        },
        {
            question: "Welcher Ozean ist der größte?",
            answers: [
                { text: "Atlantischer Ozean", correct: false },
                { text: " Indischer Ozean", correct: false },
                { text: "Pazifischer Ozean", correct: true },
            ],
        },
        {
            question: "In welchem Land befinden sich die Pyramiden von Gizeh?",
            answers: [
                { text: "Mexiko", correct: false },
                { text: "Ägypten ", correct: true },
                { text: "Griechenland", correct: false },
            ],
        },
        {
            question: "Was ist die Hauptstadt von Australien?",
            answers: [
                { text: "Sydney", correct: false },
                { text: "Melbourne ", correct: false },
                { text: "Canberra ", correct: true },
            ],
        },
        {
            question: "Welche Wüste ist die größte der Welt?",
            answers: [
                { text: "Sahara", correct: false },
                { text: "Antarktis  ", correct: true },
                { text: "Gobi", correct: false },
            ],
        },
    ],
    };


const questionElement= document.getElementById('question');
const timeElement= document.getElementById('time');
const answerButtons = document.getElementById('answer-buttons');
const nextButton=document.getElementById('next-btn');
const zurückButton=document.getElementById('zurück-btn');
let displayTime=document.getElementById('displayTime');
let timerContainer=document.getElementById('timerContainer');
let currentQuestionIndex=0;
let score=0;

//Themenauswahl und Spielstart
let currentTheme = ""; // Das gewählte Thema
let currentQuestions = []; // Die Fragen des aktuellen Themas

function startQuiz(theme) {
    
    document.getElementById("theme-selection").style.display = "none"; // Themenauswahl ausblenden
    document.querySelector(".quiz").style.display = "block"; // Quiz anzeigen
    currentTheme = theme;
    currentQuestions = quizData[theme]; // Fragen des Themas laden
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML="Next";
    showQuestion(); // Erste Frage anzeigen
    watchStart();

    
}

function showQuestion() {
    resetState();
    document.getElementById("theme-selection").style.display = "none"; // Themenauswahl ausblenden

    let currentQuestion = currentQuestions[currentQuestionIndex];
    let questionNo=currentQuestionIndex +1;
    questionElement.style.display = "block";//
    document.getElementById("question").innerHTML = questionNo+ "."+ currentQuestion.question;

    currentQuestion.answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        
    });
}


function resetState(){
nextButton.style.display="none";
while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
}

}

function selectAnswer(e){
const selectedBtn = e.target;
const isCorrect=selectedBtn.dataset.correct==="true";
if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;

} else{
    selectedBtn.classList.add("incorrect");
}
Array.from(answerButtons.children).forEach(button => {
if(button.dataset.correct==="true"){
    button.classList.add("correct");
}
button.disabled= true;
});
nextButton.style.display = "block";


}

nextButton.addEventListener("click", ()=>{
    currentQuestionIndex++;
    if(currentQuestionIndex < currentQuestions.length){ 
    showQuestion();
    } 
    else{
        currentQuestionIndex= 0;
        showScore();
        showTime();
        
    }
});


//Zurück zum Hauptmenü

function showScore() {
    resetState();
    questionElement.innerHTML = `Du hast ${score} von ${currentQuestions.length} Punkten erreicht!`;
    zurückButton.style.display="block";
    zurückButton.onclick = returnToMainMenu; // Zurück zum Hauptmenü
    watchStop(); // Timer stoppen
}
    
function returnToMainMenu() {
    // Alles zurücksetzen
    watchReset(); // Timer zurücksetzen
    nextButton.style.display = "none";
    zurückButton.style.display="none";

    currentTheme = ""; // Aktuelles Thema zurücksetzen
    document.querySelector(".quiz").style.display = "none"; // Quiz ausblenden
    document.getElementById("theme-selection").style.display = "flex"; // Hauptmenü anzeigen
    timeElement.innerHTML = ""; // Zeittext zurücksetzen
    timerContainer.style.display = "none"; // Timer ausblenden
    questionElement.style.display = "none";

}
        


let [seconds, minutes, hours]=[0,0,0];
let timer=0;
function stopwatch(){
    displayTime.style.display="flex";
    timerContainer.style.display="flex";

    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
let h =(hours <10 ? "0":"")+ hours;
let m =(minutes <10 ? "0":"")+ minutes;
let s =(seconds <10 ? "0":"") + seconds;
displayTime.innerHTML= h + ":" + m + ":"+ s;
return(h,m,s);
}

function watchStart() {
    clearInterval(timer); // Alte Timer entfernen
    timer = setInterval(stopwatch, 1000); // Timer starten
}


function watchStop(){
    clearInterval(timer);
}
function watchReset(){
    clearInterval(timer);
    [seconds, minutes, hours]=[0,0,0];
    displayTime.innerHTML="00:00:00";
}

function showTime() {
    timeElement.innerHTML='Gebrauchte Zeit: '+ hours + 'Std und '+ minutes + 'Min und ' + seconds+'Sek' ;
    watchReset();
    timerContainer.style.display="none";        
}
