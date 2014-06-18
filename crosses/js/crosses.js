

var wrongMoveSound= new Audio();
var winTheGameSound= new Audio();
var gameOverSound= new Audio();

wrongMoveSound.src="soundEffects/wrongMoveSound.mp3";
winTheGameSound.src="soundEffects/winTheGameSound.mp3";
gameOverSound.src="soundEffects/gameOverSound.mp3";

var squares= [  {hasntUsed: true, type:""}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""},
                {hasntUsed: true, type:""}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""},
                {hasntUsed: true, type:""}, {hasntUsed: true, type:""}, {hasntUsed: true, type:""} ];

var currentPlayer = "X";
var thereIsAwinner= false;

function creatGamePage  (){
    var header = $("<div id='header'></div>").html("lets go!");
    var container = $( "<div id='container'></div>");
    container = putSquresInContainer(container);
    var logo = $("<div id='logo'></div>").html("Ziv Natan &#169; <img src='css/img/logo.jpg'/>");
    var body = $("body").prepend(header).append(container);
    body= $(body).append(logo);
};

function putSquresInContainer (container){
    for (var i=0; i<9; i++){
        container = $(container).append("<div class='empty-squares' id=" +i+ "></div>") ; 
    }
        return container;
    };

var crossesHandler = {

    emptySqureActivated: function(squareIndex){
        crossesHandler.changeBackground(squareIndex);
        crossesHandler.setSquareValues(squareIndex);
    }, 

    changeBackground: function (squareIndex) {  
        if (currentPlayer=="X"){                                         
            document.getElementById(squareIndex).style.backgroundImage="url(css/img/X.jpg)";
        } 
        else{
            document.getElementById(squareIndex).style.backgroundImage="url(css/img/O.jpg)";
        }
     },

    setSquareValues:function(squareIndex){
        squares[squareIndex].type = currentPlayer;          
        squares[squareIndex].hasntUsed = false;  
    },

    checkIfThereIsWinner: function(){
        if (crossesHandler.checkRowsWin() || crossesHandler.checkColumnsWin()||
            crossesHandler.checkDiagonalWin() == true){
            return true;
        }else{
            return false;
        }  
    },

    checkRowsWin: function(){  
        if (   ( (squares[0].type == currentPlayer) && (squares[1].type == currentPlayer) && (squares[2].type == currentPlayer) ) ||
               ( (squares[3].type == currentPlayer) && (squares[4].type == currentPlayer) && (squares[5].type == currentPlayer) ) ||
               ( (squares[6].type == currentPlayer) && (squares[7].type == currentPlayer) && (squares[8].type == currentPlayer) )  ){         
               
                return true;
                          
        }else{
            return false;
        }        
    },             

    checkColumnsWin: function(){
        if (   ( (squares[0].type == currentPlayer) && (squares[3].type == currentPlayer) && (squares[6].type == currentPlayer) ) ||
               ( (squares[1].type == currentPlayer) && (squares[4].type == currentPlayer) && (squares[7].type == currentPlayer) ) ||
               ( (squares[2].type == currentPlayer) && (squares[5].type == currentPlayer) && (squares[8].type == currentPlayer) )  ){
                      
                return true;
                            
        }else{
            return false;
        }     
    }, 

    checkDiagonalWin: function(){
        if (   ( (squares[0].type == currentPlayer) && (squares[4].type == currentPlayer) && (squares[8].type == currentPlayer) ) ||
               ( (squares[2].type == currentPlayer) && (squares[4].type == currentPlayer) && (squares[6].type == currentPlayer) ) ) {
                
                return true;                    
        }else{
            return false;
        }       
    }, 
            
    checkTie: function(){
        if (   (squares[0].hasntUsed == false) && (squares[1].hasntUsed == false) &&  (squares[2].hasntUsed == false) &&
               (squares[3].hasntUsed == false) && (squares[4].hasntUsed == false) &&  (squares[5].hasntUsed == false) &&
               (squares[6].hasntUsed == false) && (squares[7].hasntUsed == false) &&  (squares[8].hasntUsed == false) && 
               (crossesHandler.checkIfThereIsWinner()==false) ){
                
                return true;
        }else{
            return false;
        }


    },

    announcesTheTie: function(){
        gameOverSound.play();
        alert("Ohhhh its a tie!");
    },

    announcesTheWinner: function(){
        winTheGameSound.play();      
        alert(currentPlayer + " is the winner!");
                   
    },

    reloadGame: function(){
        location.reload();
    },

    changePlayerTurn:function(){
        if (currentPlayer === "O"){
            currentPlayer =  "X";
        }else{
            currentPlayer =  "O";
        }
    },

    init: function(){
        
        $("#container").delegate(".empty-squares","click",function(){
           var squareIndex = this.id;
            if (squares[squareIndex].hasntUsed == true){   
                crossesHandler.emptySqureActivated (squareIndex);
                setTimeout(function(){                              //letting the square backgroundImg time to upload       
                    if (crossesHandler.checkIfThereIsWinner() == true){
                            crossesHandler.announcesTheWinner();
                            crossesHandler.reloadGame();
                    }
                    if (crossesHandler.checkTie() == true){
                            crossesHandler.announcesTheTie();
                            crossesHandler.reloadGame();
                    }else{
                        crossesHandler.changePlayerTurn();
                    } 
                }, 10); 
            }  
        });          
    }

};
 
$(document).ready(function(){
    creatGamePage();
   
    crossesHandler.init();   
});

   


  