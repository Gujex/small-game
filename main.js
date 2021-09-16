
var player = document.getElementById('box'); 
var Timer = document.getElementById('timer');
var score = document.getElementById('score');




Timer.innerHTML = 20;
ScoreNumber = 0;
CurrentTimer = 20;
var interval = setInterval(StartTime, 800);

var sounder = new Audio();
sounder.src = 'Sound/lasagna.wav'

document.body.addEventListener ('click', function() {
    sounder.play();
})


var restartBtn = document.getElementById('restart').addEventListener('click', function(){
    Timer.innerHTML = 20;
    ScoreNumber = 0;
    CurrentTimer = 20;
    score.innerHTML = ScoreNumber;
})



player.addEventListener('click', function() {

    
    var RandomPositionX = Math.floor(Math.random() *420);
    var RandomPositionY = Math.floor(Math.random() * 528);
    var RandomScale = Math.floor(Math.random() * 90);

    if (RandomScale < 10) {
        RandomScale = 15;
        player.style.marginLeft = RandomPositionX + "px";
        player.style.marginTop = RandomPositionY + "px";
        
      
        

        
    }

    player.style.marginLeft = RandomPositionX + "px";
    player.style.marginTop = RandomPositionY + "px";
    player.style.width = RandomScale + "px";
    player.style.height = RandomScale + "px";
    
    ScoreNumber++;
    score.innerHTML = ScoreNumber;
})

function StartTime() {
    CurrentTimer --;
    Timer.innerHTML = CurrentTimer;

    if(CurrentTimer < 1) {
        EndGame();
        clearInterval(interval);

        
    }


    function EndGame() {
        Swal.fire(`Time out, Your score is ${ScoreNumber}`);
        
    }
}

