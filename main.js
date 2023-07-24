const btnTry = document.querySelector("#btnTry");
const btnRst = document.querySelector("#btnRst");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let xAttempts = 0
let randomNumber = Math.round(Math.random() * 10);

btnTry.addEventListener('click',clickAction);
btnRst.addEventListener('click',clickReset);
document.addEventListener('keydown',enterPress)

function clickAction(event){
    const number = document.getElementById('number');
    if(number.value == '')
    {
        alert('Favor preencher o número!');
        return
    }
    event.preventDefault();

    xAttempts++;

    if(Number(number.value) ==  randomNumber)
    {
        toggleScreen();
        screen2.querySelector(".screen2 h1").innerText = `Acertou em ${xAttempts} tentativas!`
    }else{
        alert('Tente novamente!')
    }

    number.value = "";
}

function clickReset(){
    toggleScreen();
    xAttempts = 0;
    randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function enterPress(e){
    if(e.key=='Enter' && screen1.classList.contains('hide'))
    {
        clickReset();
    }
}
