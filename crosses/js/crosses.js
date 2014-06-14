

var wrongMoveSound= new Audio();
var winTheGameSound= new Audio();
var gameOverSound= new Audio();

wrongMoveSound.src="soundEffects/wrongMoveSound.mp3";
winTheGameSound.src="soundEffects/winTheGameSound.mp3";
gameOverSound.src="soundEffects/gameOverSound.mp3";

var squares= [  {hasntUsed: true, type:""}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""},
                {hasntUsed: true, type:""}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""},
                {hasntUsed: true, type:""}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""} ];

var currntPlayer = "x";
var thereIsAwinner= false;
var crosses = {

    emptySqureClick: function(squareIndex){
        crosses.changeBackground(squareIndex);
        crosses.defineSquare(squareIndex);
    }, 

    changeBackground: function (squareIndex) {  
        if (currntPlayer=="x"){                                         
            document.getElementById(squareIndex).style.backgroundImage="url(css/img/X.jpg)";
        } 
        else{
            document.getElementById(squareIndex).style.backgroundImage="url(css/img/O.jpg)";
        }
     },

    defineSquare:function(squareIndex){
        squares[squareIndex].type = currntPlayer;          
        squares[squareIndex].hasntUsed = false;  
    },

    checkIfGameOver: function(currntPlayer){
        setTimeout(function(){
        crosses.checkRowsWin(currntPlayer);
        crosses.checkColumnsWin(currntPlayer);
        crosses.checkDiagonalWin(currntPlayer);
        crosses.checkTie();
        }, 10);  
    },

    checkRowsWin: function(currntPlayer){  
        if (   ( (squares[0].type == currntPlayer) && (squares[1].type == currntPlayer) && (squares[2].type == currntPlayer) ) ||
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
        if (   (squares[0].hasntUsed == false) && (squares[1].hasntUsed == false) &&  (squares[2].hasntUsed == false) &&
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

    changePlayerTurn:function(){
        if (currntPlayer === "o"){
            return  currntPlayer = "x";
        }else{
            return  currntPlayer = "o";
        }
    },

    init: function(){
        $(".default").each(function(squareIndex) {
            
            document.getElementById(squareIndex).onclick = function() {
                if (squares[squareIndex].hasntUsed == true){   
                    crosses.emptySqureClick (squareIndex,currntPlayer); 
                    crosses.checkIfGameOver(currntPlayer);
                    currntPlayer =  crosses.changePlayerTurn();
                }
            };
            
        });         
    } 
  

};
 
$(document).ready(function(){
       
    crosses.init();   
});

