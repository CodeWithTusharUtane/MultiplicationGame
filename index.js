// generating number for quetion updation on every refresh
const num1 = Math.ceil(Math.random()*10);
const num2 = Math.ceil(Math.random()*10);
// getting the elements
const scoreEl = document.getElementById("score1");
const quetionEl = document.getElementById("quetion1");
const inputEl = document.getElementById("ans1");
const formEl = document.getElementById("form");
//updating the quetion on every refresh
quetionEl.innerText = `what is ${num1} multiply ${num2} ?`


// checking the user answer
let score = JSON.parse(localStorage.getItem('score'));
const correctAns = num1 * num2;
if (!score) {
    score = 0;
}

scoreEl.innerText = `Score: ${score}`

formEl.addEventListener("submit", () => {
    const answer = +inputEl.value;
    if (answer == correctAns ) {
        score++;
        updatingLocalStorage();
    }else{
        score--;
        updatingLocalStorage();
    }
        
})

// saving score in local storage
function updatingLocalStorage(){
    localStorage.setItem("score", JSON.stringify(score));
}
