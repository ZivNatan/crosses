
var wrongMoveSound= new Audio();
var winTheGameSound= new Audio();
var gameOverSound= new Audio();

wrongMoveSound.src="soundEffects/wrongMoveSound.mp3";
winTheGameSound.src="soundEffects/winTheGameSound.mp3";
gameOverSound.src="soundEffects/gameOverSound.mp3";

var squares= [{isAvailable: true, type:""},{isAvailable: true, typ:""},{isAvailable: true, type:""},
           {isAvailable: true, type:""}, {isAvailable: true, type:""}, {isAvailable: true, type:""},
           {isAvailable: true, type:""}, {isAvailable: true, type:""}, {isAvailable: true, type:""}];

var clickCounter = 0;
var crosses = {

   changeBackgroundToX: function (iAsString) {
          
          var iAsInt = iAsString*1;
       
            if(squares[iAsInt].isAvailable == true) {                                        // check if flag is true
              
              document.getElementById(iAsString).style.backgroundImage="url(css/img/X.jpg)"; // change background
              crosses.changeData(iAsInt,"x");
               
              setTimeout(function(){
                crosses.checkRows();
                crosses.checkColumns();
                crosses.checkDiagonal();
              }, 200);
               
            }else { 
              wrongMoveSound.play();
              alert("This place is taken");  // if flag is false, alert user            
            }
  },

  changeBackgroundToO: function (iAsString) {
        
        var iAsInt = iAsString*1;

        if(squares[iAsInt].isAvailable == true) {           //  if flag is true the  div didnt clicked before
        
           
          document.getElementById(iAsString).style.backgroundImage="url(css/img/O.jpg)"; // change background
          crosses.changeData(iAsInt,"o");

          setTimeout(function(){
            crosses.checkRows();
            crosses.checkColumns();
            crosses.checkDiagonal();
          }, 200);
                 
        }else { 
          wrongMoveSound.play();
          alert("This place is taken"); // if flag is false, alert user
                
        } 
  },

  changeData:function(iAsInt,type){
      squares[iAsInt].type = type;          // change type
      squares[iAsInt].isAvailable = false; //flag false the div cannot be click agian
      clickCounter++;                     // update counter by +1
  },

  checkRows: function(){

          if(    ( (squares[0].type == "x") && (squares[1].type == "x") && (squares[2].type == "x") ) ||
                ( (squares[3].type == "x") && (squares[4].type == "x") && (squares[5].type == "x") ) ||
                ( (squares[6].type == "x") && (squares[7].type == "x") && (squares[8].type == "x") )  ){
                      winTheGameSound.play();
                      alert("X is the  winner!");  
                      location.reload();

                }
          if    (  ( (squares[0].type == "o") && (squares[1].type == "o") && (squares[2].type == "o") ) ||
                ( (squares[3].type == "o") && (squares[4].type == "o") && (squares[5].type == "o") ) ||
                ( (squares[6].type == "o") && (squares[7].type == "o") && (squares[8].type == "o") )  ){
                      winTheGameSound.play();
                      alert("O is the  winner!");
                      location.reload();
             }

   },             

    checkColumns: function(){

          if(    ( (squares[0].type == "x") && (squares[3].type == "x") && (squares[6].type == "x") ) ||
                ( (squares[1].type == "x") && (squares[4].type == "x") && (squares[7].type == "x") ) ||
                ( (squares[2].type == "x") && (squares[5].type == "x") && (squares[8].type == "x") )  ){
                      winTheGameSound.play();
                      alert("X is the  winner!");
                      location.reload();
                }
          if(  ( (squares[0].type == "o") && (squares[3].type == "o") && (squares[6].type == "o") ) ||
                ( (squares[1].type == "o") && (squares[4].type == "o") && (squares[7].type == "o") ) ||
                ( (squares[2].type == "o") && (squares[5].type == "o") && (squares[8].type == "o") )  ){
                      winTheGameSound.play();
                      alert("O is the  winner!");
                      location.reload();
             }
   }, 

      checkDiagonal: function(){

          if(   ( (squares[0].type == "x") && (squares[4].type == "x") && (squares[8].type == "x") ) ||
                ( (squares[2].type == "x") && (squares[4].type == "x") && (squares[6].type == "x") ) ) {
                      winTheGameSound.play();
                      alert("X is the  winner!");
                      location.reload();
                }
          if(  ( (squares[0].type == "o") && (squares[4].type == "o") && (squares[8].type == "o") ) ||
                ( (squares[2].type == "o") && (squares[4].type == "o") && (squares[6].type == "o") )  ) {
                      winTheGameSound.play();
                      alert("O is the  winner!");
                      location.reload();
             }
             crosses.checkTie();
   }, 
            
   checkTie: function(){
       if(    (squares[0].isAvailable == false) && (squares[1].isAvailable == false) &&  (squares[2].isAvailable == false)  &&
              (squares[3].isAvailable == false) && (squares[4].isAvailable == false) &&  (squares[5].isAvailable == false)  &&
              (squares[6].isAvailable == false) && (squares[7].isAvailable == false) &&  (squares[8].isAvailable == false)    )
                {
                      gameOverSound.play();
                      alert("Ohhhh its a tie!");
                      location.reload();
             }

   }

};

$(document).ready(function(){
  // for(var i =0; i<9; i++){
  //    var iAsString = i.toString();
  //    document.getElementById(iAsString).onclick = function() {
         
  //     if (clickCounter%2==0){
  //       crosses.changeToRed(iAsString);  
  //     }
  //     else{
  //       crosses.changeToBlue(iAsString);
  //     }
  //   };
  // }
  document.getElementById("0").onclick = function() {
         
      if (clickCounter%2==0){
        crosses.changeBackgroundToX("0");  
      }
      else{
        crosses.changeBackgroundToO("0");
      }
    };

      document.getElementById("1").onclick = function() {
         
      if (clickCounter%2==0){
        crosses.changeBackgroundToX("1");  
      }
      else{
        crosses.changeBackgroundToO("1");
      }
    };

       document.getElementById("2").onclick = function() {
         
      if (clickCounter%2==0){
        crosses.changeBackgroundToX("2");  
      }
      else{
        crosses.changeBackgroundToO("2");
      }
    };

       document.getElementById("3").onclick = function() {
         
      if (clickCounter%2==0){
        crosses.changeBackgroundToX("3");  
      }
      else{
        crosses.changeBackgroundToO("3");
      }
    };

       document.getElementById("4").onclick = function() {
         
      if (clickCounter%2==0){
        crosses.changeBackgroundToX("4");  
      }
      else{
        crosses.changeBackgroundToO("4");
      }
    };

       document.getElementById("5").onclick = function() {
         
      if (clickCounter%2==0){
        crosses.changeBackgroundToX("5");  
      }
      else{
        crosses.changeBackgroundToO("5");
      }
    };

       document.getElementById("6").onclick = function() {
         
      if (clickCounter%2==0){
        crosses.changeBackgroundToX("6");  
      }
      else{
        crosses.changeBackgroundToO("6");
      }
    };

       document.getElementById("7").onclick = function() {
         
      if (clickCounter%2==0){
        crosses.changeBackgroundToX("7");  
      }
      else{
        crosses.changeBackgroundToO("7");
      }
    };

       document.getElementById("8").onclick = function() {
         
      if (clickCounter%2==0){
        crosses.changeBackgroundToX("8");  
      }
      else{
       crosses.changeBackgroundToO("8");
      }
    };




});