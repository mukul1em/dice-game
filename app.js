var scores, roundScores, activePlayer, gamePlaying;

gamePlaying = true ;


//document.querySelector('#current-'+ activePlayer).innerHTML = '<em>' + dice + '</em>' ;  //for italic text

//var x = document.querySelector('#score-0 ').textContent; // to read the value at the id score-1 and store it to variable x



//console.log(x);





init();

document.querySelector('.dice').style.display = 'none'; //display setting of dice to none 

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';


// eventlistner performs function when the user clicks the roll button
document.querySelector('.btn-roll').addEventListener('click',  function() {
    if(gamePlaying) {
        //1. random number
    var dice = Math.floor(Math.random() * 6) +1;
    
    //2 display the result
    var diceDOM =  document.querySelector('.dice');
    diceDOM.style.display = 'block';
    
    diceDOM.src = 'dice-' + dice + '.png';
    //3.update the round score if the roller number is not 1
    
    if (dice !== 1) {
        // add score
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    }else {
        // next player
        nextPlayer();
    }
        
        
    
  }
    
});


document.querySelector('.btn-hold').addEventListener('click', function () {
    
    if (gamePlaying){
        // add current score to global score 
    scores[activePlayer]+= roundScores;
    
    
    
    // update UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer]
    
    // check if the player won the game
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else {
         nextPlayer();
    }
    // next player
   
        
    }
    
    
    
    
    
    // check if the player won the game
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer =1: activePlayer =0;
    roundScores = 0;
        
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
        
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
        //document.querySelector('.player-0-panel').classList.remove('active');
        
        //document.querySelector('.player-1-panel').classList.add('active');
        
    document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);
   
function init() {
    scores = [0,0];
    activePlayer = 0;
    roundScores = 0;
    gamePlaying= true
    
    
    document.querySelector('.dice').style.display = 'none'; //display setting of dice to none 

    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}                                           
                                                   
                                                   