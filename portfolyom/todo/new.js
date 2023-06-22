const questions = [
    {
        question:"Türkiye'de ilk Kovid-19 vakası ne zaman tespit edildi?",
        answers:[
            {text: "11 Mart 2020" , correct:true},
            {text: "1 Nisan 2020" , correct:false},
            {text: "11 Mart 2021" , correct:false},
            {text: "3 Mart 2021" , correct:false},
        ]
    },
    {
        question:"Türkiye'de ilk Kovid-19 vakası ne zaman tespit edildi?",
        answers:[
            {text: "11 Mart 2020" , correct:true},
            {text: "1 Nisan 2020" , correct:false},
            {text: "11 Mart 2021" , correct:false},
            {text: "3 Mart 2021" , correct:false},
        ]
    },
    {
        question:"Türkiye'de ilk Kovid-19 vakası ne zaman tespit edildi?",
        answers:[
            {text: "11 Mart 2020" , correct:true},
            {text: "1 Nisan 2020" , correct:false},
            {text: "11 Mart 2021" , correct:false},
            {text: "3 Mart 2021" , correct:false},
        ]
    },
    {
        question:"Türkiye'de ilk Kovid-19 vakası ne zaman tespit edildi?",
        answers:[
            {text: "11 Mart 2020" , correct:true},
            {text: "1 Nisan 2020" , correct:false},
            {text: "11 Mart 2021" , correct:false},
            {text: "3 Mart 2021" , correct:false},
        ]
    }

];


const questionElement= document.getElementById("question");
const answerBtns= document.getElementById("answer-btn");
const nextButton= document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextButton.innerHTML="next";
    showQuestion();

}

function showQuestion(){
    resetState();
    let currentQuestion= questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML=questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerBtns.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}

   function resetState(){
    nextButton.style.display = "none";
    while(answerBtns.firstChild){
        answerBtns.removeChild(answerBtns.firstChild);
    }
   }

   function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect= selectedBtn.dataset.correct=== "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerBtns.children).forEach(button=> {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display="block";
   }


function showScore(){
    resetState();
    questionElement.innerHTML =`You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML= "play again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}


   nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
   })


startQuiz();