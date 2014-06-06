

var wrongMoveSound= new Audio();
var winTheGameSound= new Audio();
var gameOverSound= new Audio();

wrongMoveSound.src="soundEffects/wrongMoveSound.mp3";
winTheGameSound.src="soundEffects/winTheGameSound.mp3";
gameOverSound.src="soundEffects/gameOverSound.mp3";

var squares= [{}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""},
                  {hasntUsed: true, type:""}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""},
                  {hasntUsed: true, type:""}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""}];

var thereIsAwinner= false;
var currntPlayer = "x";
var crosses = {

  emptySqureClick: function(squareIndex,currntPlayer){
      crosses.changeBackground(squareIndex,currntPlayer);
      crosses.defineSquare(squareIndex,currntPlayer);
  }, 

  changeBackground: function (squareIndex,currntPlayer) {  
      if (currntPlayer=="x"){                                         
        document.getElementById(squareIndex).style.backgroundImage="url(css/img/X.jpg)";
      } 
      else{
        document.getElementById(squareIndex).style.backgroundImage="url(css/img/O.jpg)";
      }
  },

  defineSquare:function(squareIndex,currntPlayer){
      squares[squareIndex].type = currntPlayer;          
      squares[squareIndex].hasntUsed = false;  
  },

  checkIfGameOver: function(currntPlayer){
      setTimeout(function(){
        crosses.checkRowsWin(currntPlayer);
        crosses.checkColumnsWin(currntPlayer);
        crosses.checkDiagonalWin(currntPlayer);
        crosses.checkTie();
      }, 5);  
  },

  checkRowsWin: function(currntPlayer){  
      if (    ( (squares[0].type == currntPlayer) && (squares[1].type == currntPlayer) && (squares[2].type == currntPlayer) ) ||
              ( (squares[3].type == currntPlayer) && (squares[4].type == currntPlayer) && (squares[5].type == currntPlayer) ) ||
              ( (squares[6].type == currntPlayer) && (squares[7].type == currntPlayer) && (squares[8].type == currntPlayer) )  ){         
               
                thereIsAwinner= true;
                crosses.gameOver(currntPlayer);           
      }        
  },             

  checkColumnsWin: function(currntPlayer){
        if (   ( (squares[0].type == currntPlayer) && (squares[3].type == currntPlayer) && (squares[6].type == currntPlayer) ) ||
               ( (squares[1].type == currntPlayer) && (squares[4].type == currntPlayer) && (squares[7].type == currntPlayer) ) ||
               ( (squares[2].type == currntPlayer) && (squares[5].type == currntPlayer) && (squares[8].type == currntPlayer) )  ){
                      
                  thereIsAwinner= true;
                  crosses.gameOver(currntPlayer);              
          }     
  }, 

  checkDiagonalWin: function(currntPlayer){
        if (   ( (squares[0].type == currntPlayer) && (squares[4].type == currntPlayer) && (squares[8].type == currntPlayer) ) ||
               ( (squares[2].type == currntPlayer) && (squares[4].type == currntPlayer) && (squares[6].type == currntPlayer) ) ) {
                
                thereIsAwinner= true;                
                crosses.gameOver(currntPlayer);     
          }
        
         
  }, 
            
  checkTie: function(){
       if(    (squares[0].hasntUsed == false) && (squares[1].hasntUsed == false) &&  (squares[2].hasntUsed == false) &&
              (squares[3].hasntUsed == false) && (squares[4].hasntUsed == false) &&  (squares[5].hasntUsed == false) &&
              (squares[6].hasntUsed == false) && (squares[7].hasntUsed == false) &&  (squares[8].hasntUsed == false) && (thereIsAwinner==false)   ){
              currntPlayer = "its a tie";
              crosses.gameOver(currntPlayer);
        }

  },

  gameOver: function(currntPlayer){

    if (currntPlayer == "its a tie"){
        gameOverSound.play();
        alert("Ohhhh its a tie!");
        location.reload();

    }else{
        winTheGameSound.play();
        thereIsAwinner= true;
        alert(currntPlayer + " is the winner!");
        location.reload();
    }

  },

  changePlayerTurn:function(currntPlayer){
      if (currntPlayer = "o"){
          currntPlayer = "x";
      }else{
          currntPlayer = "o";
      }
  },

  init: function(squareIndex){
        $("div").each(function(squareIndex) { 
            document.getElementById(squareIndex).onclick = function() {
                if (squares[squareIndex].hasntUsed == true){   
                    crosses.emptySqureClick (squareIndex,currntPlayer);
                    crosses.checkIfGameOver();
                    crosses.changePlayerTurn(currntPlayer);
                }
            };
        });         
  } 
  

};
 
$(document).ready(function(){
      for (var squareIndex=1; squareIndex<10; squareIndex++){ 
        crosses.init(squareIndex);   
      }

  // for(var i =0; i<9; i++){
  //   var index= i;
  //   var squareIndex = i.toString();
  //   $(document.getElementById(squareIndex)).each(function(index){
       
  //   });                    
  // }
  
  

  // document.getElementById("0").onclick = function() {
    
  //   if(squares[0].hasntUsed == true) {   
  //     if (turnsIndicator%2==0){
  //       crosses.changeBackgroundToX("0");
  //       crosses.changeData(0,"x");  
  //     }
  //     else{
  //       crosses.changeBackgroundToO("0");
  //       crosses.changeData(0,"o");
  //     }
  //     crosses.checkGameStatus();
  //     turnsIndicator++;                     // update counter by +1
  //   }
  // };

  // document.getElementById("1").onclick = function() {
  //   if(squares[1].hasntUsed == true) {       
  //     if (turnsIndicator%2==0){
  //       crosses.changeBackgroundToX("1");  
  //       crosses.changeData(1,"x");  
  //     }
  //     else{
  //       crosses.changeBackgroundToO("1");
  //       crosses.changeData(1,"o");  
  //     }
  //     crosses.checkGameStatus();
  //     turnsIndicator++;  
  //   }
  // };

  // document.getElementById("2").onclick = function() {
  //   if(squares[2].hasntUsed == true) {       
  //     if (turnsIndicator%2==0){
  //       crosses.changeBackgroundToX("2");
  //       crosses.changeData(2,"x");  
  //     }
  //     else{
  //       crosses.changeBackgroundToO("2");
  //       crosses.changeData(2,"o");
  //     }
  //     crosses.checkGameStatus();
  //     turnsIndicator++;  
  //   }  
  // };

  // document.getElementById("3").onclick = function() {
  //   if(squares[3].hasntUsed == true) {       
  //     if (turnsIndicator%2==0){
  //       crosses.changeBackgroundToX("3"); 
  //       crosses.changeData(3,"x"); 
  //     }
  //     else{
  //       crosses.changeBackgroundToO("3");
  //       crosses.changeData(3,"o");
  //     }
  //     crosses.checkGameStatus();
  //     turnsIndicator++;       
  //   }
  // };

  // document.getElementById("4").onclick = function() {
  //   if(squares[4].hasntUsed == true) {       
  //     if (turnsIndicator%2==0){
  //       crosses.changeBackgroundToX("4");
  //       crosses.changeData(4,"x");  
  //     }
  //     else{
  //       crosses.changeBackgroundToO("4");
  //       crosses.changeData(4,"o");
  //     }
  //     crosses.checkGameStatus();
  //     turnsIndicator++;       
  //   }  
  // };

  // document.getElementById("5").onclick = function() {
  //   if(squares[5].hasntUsed == true) {       
  //     if (turnsIndicator%2==0){
  //       crosses.changeBackgroundToX("5");
  //       crosses.changeData(5,"x");  
  //     }
  //     else{
  //       crosses.changeBackgroundToO("5");
  //       crosses.changeData(5,"o");
  //     }
  //     crosses.checkGameStatus();
  //     turnsIndicator++;       
  //   } 
  // };

  // document.getElementById("6").onclick = function() {
  //   if(squares[6].hasntUsed == true) {       
  //     if (turnsIndicator%2==0){
  //       crosses.changeBackgroundToX("6");
  //       crosses.changeData(6,"x");  
  //     }
  //     else{
  //       crosses.changeBackgroundToO("6");
  //       crosses.changeData(6,"o");
  //     }
  //     crosses.checkGameStatus();
  //     turnsIndicator++;       
  //   }
  // };

  // document.getElementById("7").onclick = function() {
  //   if(squares[7].hasntUsed == true) {       
  //     if (turnsIndicator%2==0){
  //       crosses.changeBackgroundToX("7");
  //       crosses.changeData(7,"x");  
  //     }
  //     else{
  //       crosses.changeBackgroundToO("7");
  //       crosses.changeData(7,"o");
  //     }
  //     crosses.checkGameStatus();
  //     turnsIndicator++;       
  //   }  
  // };

  // document.getElementById("8").onclick = function() {
  //   if(squares[8].hasntUsed == true) {       
  //     if (turnsIndicator%2==0){
  //       crosses.changeBackgroundToX("8");
  //       crosses.changeData(8,"x");  
  //     }
  //     else{
  //      crosses.changeBackgroundToO("8");
  //      crosses.changeData(8,"o");
  //     }
  //     crosses.checkGameStatus();
  //     turnsIndicator++;       
  //   }
  // };




});

