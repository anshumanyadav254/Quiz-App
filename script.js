const startButton=document.getElementById('start-btn');

const nextButton=document.getElementById('next-btn');

const questionContainerElement=document.getElementById('question-container')


const questionElement=document.getElementById('question')
const answerButtonsElement=document.getElementById('answer-buttons')

let shuffledQuestion,currentQuestionIndex


startButton.addEventListener("click",startGame)
nextButton.addEventListener('click',()=>{
    currentQuestionIndex++
    setNextQuestion()
})

function startGame()
{
   // console.log("Started")
    startButton.classList.add('hide')
    shuffledQuestion=questions.sort(()=>Math.random()-.5)
    currentQuestionIndex=0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}
function setNextQuestion()
{
    resetState()
   
    showQuestion(shuffledQuestion[currentQuestionIndex])


}
function showQuestion(question){
    questionElement.innerText=question.question
    question.answers.forEach( answer=>{
        const button=document.createElement('button')
        button.innerText=answer.text
        button.classList.add('btn')
        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}
function resetState()
{
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e)
{
    const selectButton=e.target
    const correct=selectButton.dataset.correct
    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children).forEach(button=>{
        setStatusClass(button,button.dataset.correct)
    }) 
    if(shuffledQuestion.length>currentQuestionIndex+1){
        nextButton.classList.remove('hide')
    }
    else{
        startButton.innerText='Restart'
        startButton.classList.remove('hide')
    }
    
}
function setStatusClass(element,correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }
    else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')

}

const questions=[
    {
        question:'What is value of 1+2+3+4 ?' ,
        answers:[
            
                {text: '10', correct:true},
                {text: '22', correct:false},
                {text:'32',  correct:false},
                 {text:'43',correct:false}
            
        ]
    },
    {
        question:'Who is Sunil chhetri ?' ,
        answers:[
            
                {text: 'Youtuber', correct:false},
                {text: 'Cricketer', correct:false},
               {text: 'Footballer', correct:true},
               {text: 'Athelet', correct:false}
            
        ]
    },
    {
        question:'Is web devolopment fun ?' ,
        answers:[
            
                {text: 'kinda', correct:false},
                {text: 'Yes', correct:true},
               {text: 'Um No', correct:false},
              {text: 'IDK', correct:false}
            
        ]
    },
    {
        question:'What is name of corona ?' ,
        answers:[
            
                {text: 'Covid-19', correct:true},
                {text: 'Covid-20', correct:false},
            {text: 'Covid-18', correct:false},
            {text: 'Covid-21', correct:false}
            
        ]
    },
    {
        question:'What fevorit shot of Virat Kohali ?' ,
        answers:[
            
                {text: 'The Swat Flick', correct:false},
                {text: 'The Cut', correct:false},
            {text: 'The Cover Drive', correct:true},
            {text: 'The Pull', correct:false}
            
        ]
    }
    
]
