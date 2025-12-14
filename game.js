  let score = JSON.parse(localStorage.getItem('score')) || {
     wins: 0,
     losses: 0,
     ties:0
    };
     let result ='';
     updateScore();
     updaterersults();
  const rock = document.querySelector('.js-move-button1');
   rock.addEventListener('click', ()=>{
     playGame('rock');
   });
   document.body.addEventListener('keydown',(event)=>{
     if (event.key === 'r'){
          playGame('rock');
     }else if(event.key === 'p'){
          playGame('paper');
     }else if(event.key === 's'){
          playGame('scissors');
     }
   });
 function updateScore() {
      document.querySelector('.p-button').innerHTML = `wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`;
 }
 function updaterersults(){
     document.querySelector('.presults').innerHTML = result;
 }

   
    function pickcomputerMove(){
           let computerMove = '';
          const randomNum = Math.random();
          if(randomNum >= 0 && randomNum < 1/3 ){
               computerMove = 'rock';
          }
          else if(randomNum >= 1/3 && randomNum < 2/3){
               computerMove = 'paper';
               
          }
          else if(randomNum >= 2/3 && randomNum < 1){
               computerMove = 'scissors';
               }
               return computerMove;
    }
    function playGame(playerMove){
               const computerMove = pickcomputerMove();
              
          if (playerMove === 'scissors'){
               
               if(computerMove === 'paper'){
                    result = 'you win'
               }
               else if(computerMove === 'rock'){
                    result = 'you lose'
               }
               else if(computerMove === 'scissors'){
                    result = 'Tie'
               }}
          else if(playerMove === 'rock'){
               if(computerMove === 'paper'){
                    result = 'you lose'
               }
               else if(computerMove === 'rock'){
                    result = 'Tie'
               }
               else if(computerMove === 'scissors'){
                    result = 'you win'
               }}
          else if(playerMove === 'paper'){
                    
               if(computerMove === 'paper'){
                    result = 'Tie'
               }
               else if(computerMove === 'rock'){
                    result = 'you win'
               }
               else if(computerMove === 'scissors'){
                    result = 'you lose'
               }
          }
          if (result === 'you win'){
               score.wins += 1;
          }else if(result === 'you lose'){
               score.losses +=1;
          }else if(result === 'Tie'){
               score.ties +=1;
     }          
      localStorage.setItem('score',JSON.stringify(score));
      
     updateScore();
     updaterersults();
     document.querySelector('.pmoves').innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="icon"> <img src="images/${computerMove}-emoji.png" alt="" class="icon"> computer`;

    /* alert(`you picked ${playerMove}. computer picked ${computerMove}.${result}
wins: ${score.wins}, losses: ${score.losses}, ties: ${score.ties}`); */
    
     
          
          
    }
    let isautplaying = false;
    let intervalid;
    function autoplay(){
     
     if (!isautplaying){
           intervalid = setInterval( function(){
                    const playerMove = pickcomputerMove();
                    playGame(playerMove);
               },1000);
          isautplaying =true;
     }else {
          
          clearInterval(intervalid);
          isautplaying =false;
          
          
     }
     const btn = document.querySelector('.js-auto-btn');
     if(btn.innerText === 'Stop'){
          document.querySelector('.js-auto-btn').innerText = 'Auto Play';
     }else{
          document.querySelector('.js-auto-btn').innerText = 'Stop';
     }
         
    }