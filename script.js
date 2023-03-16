let countdown;
let timeLeft = 45;
let buzzerTime = 5;
let playerATime = 15;
let playerBTime = 15;
let playerAUsed = false;
let playerBUsed = false;
let player1Score = 0;
let player2Score = 0;

const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('startButton');
const resetTimerBtn = document.getElementById('resetTime');
const playerAButton = document.getElementById('playerA');
const playerBButton = document.getElementById('playerB');
const player1ScoreDisplay = document.getElementById('player1Score');
const player2ScoreDisplay = document.getElementById('player2Score');
const player1PlusButton = document.getElementById('player1Plus');
const player1MinusButton = document.getElementById('player1Minus');
const player2PlusButton = document.getElementById('player2Plus');
const player2MinusButton = document.getElementById('player2Minus');
const resetButtonA = document.getElementById('resetA');
const resetButtonB = document.getElementById('resetB');
const player1Name = document.getElementById('player1Name');
const player2Name = document.getElementById('player2Name');


resetTimerBtn.addEventListener('click', resetTimer);
startButton.addEventListener("click", function() {

    if(startButton.getElementsByTagName("p")[0].innerHTML == "Start"){
      startButton.getElementsByTagName("p")[0].innerHTML = "Stop";
      startButton.getElementsByTagName("img")[0].src = "assets/stop.png";
        startTimer();
        return;
    }

    if(startButton.getElementsByTagName("p")[0].innerHTML == "Stop"){
      startButton.getElementsByTagName("p")[0].innerHTML = "Start";
      startButton.getElementsByTagName("img")[0].src = "assets/play.jpg";
        stopTimer();
        return;
    }

});

playerAButton.addEventListener('click', extendPlayerA);
playerBButton.addEventListener('click', extendPlayerB);
player1PlusButton.addEventListener('click', () => updateScore('player1', 1));
player1MinusButton.addEventListener('click', () => updateScore('player1', -1));
player2PlusButton.addEventListener('click', () => updateScore('player2', 1));
player2MinusButton.addEventListener('click', () => updateScore('player2', -1));
resetButtonA.addEventListener('click', resetScoresA);
resetButtonB.addEventListener('click', resetScoresB);


function startTimer() {
  if (countdown) return; // Don't start if already running
  countdown = setInterval(() => {
    timeLeft--;
    if(timeLeft == 5){
      timerDisplay.innerHTML = '5';
      timerDisplay.classList.add('times-up');
      playBuzzer();
      return;
    }
    if (timeLeft == 0) {
      clearInterval(countdown);
      countdown = null;
      timeLeft = 0;
      timerDisplay.innerHTML = '0';
      timerDisplay.classList.add('times-up');
      // playBuzzer();
      return;
    }
    timerDisplay.innerHTML = timeLeft;
    if (timeLeft <= buzzerTime) {
      timerDisplay.classList.add('buzzer');
    }
  }, 1000);
}

function stopTimer() {
  if (!countdown) return; // Don't stop if not running
  clearInterval(countdown);
  countdown = null;
  timerDisplay.classList.remove('buzzer');
}

function extendPlayerA() {
  if (playerAUsed) return; // Only use once
  timeLeft += playerATime;  
  playerAUsed = true;
  timerDisplay.innerHTML = timeLeft;
  playerAButton.classList.add('used');
  playerAButton.style.backgroundColor = 'red';

}

function extendPlayerB() {
  if (playerBUsed) return; // Only use once
  timeLeft += playerBTime;
  playerBUsed = true;
  timerDisplay.innerHTML = timeLeft;
  playerBButton.classList.add('used');
  playerBButton.style.backgroundColor = 'red';
}

function playBuzzer() {
  const audio = new Audio('./audio/beep.wav');
  audio.play();
}

function updateScore(player, delta) {
  if (player === 'player1') {
    player1Score += delta;
    player1ScoreDisplay.innerHTML = player1Score;
  } else if (player === 'player2') {
    player2Score += delta;
    player2ScoreDisplay.innerHTML = player2Score;
  }
}

function resetScoresA() {
  player1Score = 0;
  player1ScoreDisplay.innerHTML = 0;
  player1Name.innerHTML = 'Player A';
}
function resetScoresB() {
    player2Score = 0;
    player2ScoreDisplay.innerHTML = 0;
    player2Name.innerHTML = 'Player B';

  }

function resetTimer(){

    timeLeft = 45;
    player1Score = 0;
    player2Score = 0;
    playerAUsed = false;
    playerBUsed = false;
    timerDisplay.innerHTML = '45';
    player1ScoreDisplay.innerHTML = 0;
    player2ScoreDisplay.innerHTML = 0;
    player1Name.innerHTML = 'Player A';
    player2Name.innerHTML = 'Player B';
    document.getElementById('playerA').style.backgroundColor = 'green';
    document.getElementById('playerB').style.backgroundColor = 'green';
    startButton.getElementsByTagName("p")[0].innerHTML = "Start";
    startButton.getElementsByTagName("img")[0].src = "assets/play.jpg";
    stopTimer();
    return;

}

// Reset the timer and
