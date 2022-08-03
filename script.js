import questions from './questions.json' assert {type: 'json'};


const questionEl=document.querySelector('.question')
const answerAEl=document.querySelector('#a_label>span');
const answerBEl=document.querySelector('#b_label>span');
const answerCEl=document.querySelector('#c_label>span');
const answerDEl=document.querySelector('#d_label>span');

const btn=document.querySelector('button');

const progressBar=document.querySelectorAll('.progressBar');

let currentQuestion = 0;
let points=0;

quiz();


function quiz() {
  if(currentQuestion<questions.length) {
    progressBar[currentQuestion].classList.add('progressBarActive');
    document.querySelector('.questionNumber').innerHTML = `question ${currentQuestion+1}/5`;
  }
  questionEl.textContent = questions[currentQuestion].question;

  answerAEl.textContent=questions[currentQuestion].a;
  answerBEl.textContent=questions[currentQuestion].b;
  answerCEl.textContent=questions[currentQuestion].c;
  answerDEl.textContent=questions[currentQuestion].d;
  }
btn.addEventListener("click",()=>{
  const radioList=document.querySelectorAll('input');
  let clientAns;
  radioList.forEach(element=>{if(element.checked) clientAns=element});
  if(clientAns.id===questions[currentQuestion].correct){
    points++;
  }
  if(currentQuestion<questions.length-1){
    currentQuestion++;
    quiz();
  }
  else{
    final();
  }

});

const questionBox = document.querySelector('.questionCard')
function final(){
  questionBox.innerHTML=`<h1>Twoje punkty to: ${points}</h1>`;
}