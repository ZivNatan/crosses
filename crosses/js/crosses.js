
var wrongMoveSound= new Audio();
var winTheGameSound= new Audio();
var gameOverSound= new Audio();

wrongMoveSound.src="soundEffects/wrongMoveSound.mp3";
winTheGameSound.src="soundEffects/winTheGameSound.mp3";
gameOverSound.src="soundEffects/gameOverSound.mp3";

var squares= [{isAvailable: true, type:""},{isAvailable: true, typ:""},{isAvailable: true, type:""},
           {isAvailable: true, type:""}, {isAvailable: true, type:""}, {isAvailable: true, type:""},
           {isAvailable: true, type:""}, {isAvailable: true, type:""}, {isAvailable: true, type:""}];

var WinnerStatus= false;
var turnsIndicator = 0;
var crosses = {

  changeBackgroundToX: function (squareIndex) {  
      var squareIndex = squareIndex*1;
        if (squares[squareIndex].isAvailable == true) {                                        // check if flag is true  
           document.getElementById(squareIndex).style.backgroundImage="url(css/img/X.jpg)"; // change background 
        }
  },

  changeBackgroundToO: function (squareIndex) {
      var squareIndex = squareIndex*1;
        if (squares[squareIndex].isAvailable == true) {           //  if flag is true the  div didnt clicked before
           document.getElementById(squareIndex).style.backgroundImage="url(css/img/O.jpg)"; // change background         
        }
  },

  changeData:function(squareIndex,player){
      squares[squareIndex].type = player;          // change type
      squares[squareIndex].isAvailable = false; //flag false the div cannot be click agian   
  },

  checkGameStatus: function(){
      setTimeout(function(){
        crosses.checkRows();
        crosses.checkColumns();
        crosses.checkDiagonal();
        crosses.checkTie();
      }, 5);  
  },

  checkRows: function(){
      var playerType="x";
        for(var i=0; i<2;i++){      
          if(    ( (squares[0].type ==playerType) && (squares[1].type == playerType) && (squares[2].type == playerType) ) ||
                ( (squares[3].type == playerType) && (squares[4].type == playerType) && (squares[5].type == playerType) ) ||
                ( (squares[6].type == playerType) && (squares[7].type == playerType) && (squares[8].type == playerType) )  ){
                      winTheGameSound.play();
                      WinnerStatus= true;
                      alert(playerType+" is the  winner!");  
                      location.reload();
          }
          playerType="o";
        }
  },             

  checkColumns: function(){
        var playerType="x";
        for(var i=0; i<2;i++){  
          if(    ( (squares[0].type == playerType) && (squares[3].type == playerType) && (squares[6].type == playerType) ) ||
                ( (squares[1].type == playerType) && (squares[4].type == playerType) && (squares[7].type == playerType) ) ||
                ( (squares[2].type == playerType) && (squares[5].type == playerType) && (squares[8].type == playerType) )  ){
                      winTheGameSound.play();
                      WinnerStatus= true;
                      alert(playerType+ " is the  winner!");
                      location.reload();
          }
          playerType="o";
        }    
  }, 

  checkDiagonal: function(){
        var playerType="x";
        for(var i=0; i<2;i++){ 
          if(   ( (squares[0].type == playerType) && (squares[4].type == playerType) && (squares[8].type == playerType) ) ||
                ( (squares[2].type == playerType) && (squares[4].type == playerType) && (squares[6].type == playerType) ) ) {
                      winTheGameSound.play();
                      WinnerStatus= true;
                      alert("X is the  winner!");
                      location.reload();
          }
          playerType="o";
        }  
  }, 
            
  checkTie: function(){
       if(    (squares[0].isAvailable == false) && (squares[1].isAvailable == false) &&  (squares[2].isAvailable == false)  &&
              (squares[3].isAvailable == false) && (squares[4].isAvailable == false) &&  (squares[5].isAvailable == false)  &&
              (squares[6].isAvailable == false) && (squares[7].isAvailable == false) &&  (squares[8].isAvailable == false) && (WinnerStatus==false)   )
                {
                      gameOverSound.play();
                      alert("Ohhhh its a tie!");
                      location.reload();
             }

  }

};

$(document).ready(function(){

  $("div").each(function(squareIndex, value) { 
        document.getElementById(squareIndex).onclick = function() {
            if(squares[squareIndex].isAvailable == true){   
               if (turnsIndicator%2==0){
                     crosses.changeBackgroundToX(squareIndex);
                     crosses.changeData(squareIndex,"x");  
                }
                else{
                    crosses.changeBackgroundToO(squareIndex);
                    crosses.changeData(squareIndex,"o");
                }
                crosses.checkGameStatus();
                turnsIndicator++;
            }
        };
});

  // for(var i =0; i<9; i++){
  //   var index= i;
  //   var squareIndex = i.toString();
  //   $(document.getElementById(squareIndex)).each(function(index){
       
  //   });                    
  // }
  
  

  // document.getElementById("0").onclick = function() {
    
  //   if(squares[0].isAvailable == true) {   
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
  //   if(squares[1].isAvailable == true) {       
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
  //   if(squares[2].isAvailable == true) {       
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
  //   if(squares[3].isAvailable == true) {       
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
  //   if(squares[4].isAvailable == true) {       
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
  //   if(squares[5].isAvailable == true) {       
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
  //   if(squares[6].isAvailable == true) {       
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
  //   if(squares[7].isAvailable == true) {       
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
  //   if(squares[8].isAvailable == true) {       
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