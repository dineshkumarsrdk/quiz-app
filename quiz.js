const questions = [
  {
    question: "What position does Harry play in Quidditch?",
    options: ['Quaffle', 'Sweeper ', 'Seeker', 'Chaser'],
    correctAnswer: 'Seeker'
  },
  {
    question: "To whom does the Sorcerer’s Stone belong?",
    options: ['Harry Potter', 'Voldemort', 'Dumbledore', 'Nicolas Flamel'],
    correctAnswer: 'Nicolas Flamel'
  },
  {
    question: "To whom does the invisibility cloak belong originally?",
    options: ['Voldemort', 'James Potter', 'Dumbledore', 'Hagrid'],
    correctAnswer: 'James Potter'
  },
  {
    question: "What is Sirius Black's Animagus?",
    options: ['Black dog', 'Wolf ', 'Deer', 'Panther'],
    correctAnswer: 'Black dog'
  },
  {
    question: "The wand Harry chooses at Ollivander’s contains material from type of creature?",
    options: ['Unicorn', 'Phoenix', 'Dragon', 'Centaur'],
    correctAnswer: 'Phoenix'
  }
]

let score = 0;
let currentQuestion = 0;

const questionEle = document.querySelector('#question');
const optionEle = document.querySelector('#options');
const scoreEle = document.querySelector('#score');
const nextEle = document.querySelector('#next');
nextEle.addEventListener('click', () => {
  scoreEle.textContent = `Score: ${score}/${questions.length}`;
  nextQuestion();
});
showQuestion();

function showQuestion(){
  const {question, options, correctAnswer} = questions[currentQuestion];
  questionEle.textContent = question;
  const shuffledOptions = shuffleOptions(options);
  shuffledOptions.forEach((option) => {
    const btn = document.createElement('button')
    btn.textContent=option;
    optionEle.appendChild(btn);
    btn.addEventListener('click', ()=>{
      if(btn.textContent === correctAnswer){
        score++;
      } else {
        score -= 0.25;
      }
      console.log(score);
      scoreEle.textContent = `Score: ${score}/${questions.length}`;
      nextQuestion();
    });
  });
}

function nextQuestion(){
  currentQuestion++;
  optionEle.textContent='';
  if(currentQuestion === questions.length){
    nextEle.remove();
    questionEle.textContent = 'You have completed the quiz successfully!';
  } else {
    showQuestion();
  }
}

function shuffleOptions(answers){
  for(let i=0; i<answers.length; i++){
    let j = Math.floor(Math.random()*answers.length);
    [answers[i], answers[j]] = [answers[j], answers[i]];
  }
  return answers;
}


