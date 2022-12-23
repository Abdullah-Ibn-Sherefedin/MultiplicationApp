const num1 = Math.ceil (Math.random()*10);

const num2 = Math.ceil (Math.random()*10);

const questionEl=document.getElementById("question");

const formEl=document.getElementById("form");

const inputEl=document.getElementById("input");

const ScoreEl=document .getElementById("Score")

questionEl.innerText=`What is ${num1} multiplied by ${num2}?`;

const correctAns=num1*num2;

let Score = JSON.parse(localStorage.getItem("Score"));

if (!Score){
    Score = 0;
}

ScoreEl.innerText = `Score: ${Score}`

formEl.addEventListener("submit", ()=>{
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        Score ++;
        updateLocalStorage();
    }else{
        Score --;
        updateLocalStorage();
    }
});

function updateLocalStorage(){
    localStorage.setItem("Score", JSON.stringify(Score));
}
