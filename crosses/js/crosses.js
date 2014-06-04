
var divs= [{flag: true, type:""},{flag: true, typ:""},{flag: true, type:""},
           {flag: true, type:""}, {flag: true, type:""}, {flag: true, type:""},
           {flag: true, type:""}, {flag: true, type:""}, {flag: true, type:""}];

var clickCounter = 0;
var crosses = {

   changeToRed: function (iAsString) {
          var iAsInt= iAsString*1;
       
            if(divs[iAsInt].flag == true) { // check if flag is true
             document.getElementById(iAsString).style.backgroundColor = "red"; // change background
               divs[iAsInt].type="x"; // change type
               divs[iAsInt].flag = false; //flag false the div cannot be click agian
               clickCounter++; // update counter by +1

            }else { 
               alert("This place is taken"); // if flag is false, alert user
            }
           
   },

   changeToBlue: function (iAsString) {
          var iAsInt= iAsString*1;

         if(divs[iAsInt].flag == true) { //  if flag is true the  div didnt clicked before
          document.getElementById(iAsString).style.backgroundColor = "blue"; // change background
             divs[iAsInt].type="o"; // change type
              divs[iAsInt].flag = false; //flag false the div cannot be click agian
               clickCounter++; // update counter by +1
            }else { 
               alert("This place is taken"); // if flag is false, alert user
            } 
   },

   checkRows: function(){

          if(    ( (divs[0].type == "x") && (divs[1].type == "x") && (divs[2].type == "x") ) ||
                ( (divs[3].type == "x") && (divs[4].type == "x") && (divs[5].type == "x") ) ||
                ( (divs[6].type == "x") && (divs[7].type == "x") && (divs[8].type == "x") )  ){

                      alert("X is the  winner!");
                }
          if    (  ( (divs[0].type == "o") && (divs[1].type == "o") && (divs[2].type == "o") ) ||
                ( (divs[3].type == "o") && (divs[4].type == "o") && (divs[5].type == "o") ) ||
                ( (divs[6].type == "o") && (divs[7].type == "o") && (divs[8].type == "o") )  ){

                      alert("O is the  winner!");
             }

   },             

    checkColumns: function(){

          if(    ( (divs[0].type == "x") && (divs[3].type == "x") && (divs[6].type == "x") ) ||
                ( (divs[1].type == "x") && (divs[4].type == "x") && (divs[7].type == "x") ) ||
                ( (divs[2].type == "x") && (divs[5].type == "x") && (divs[8].type == "x") )  ){

                      alert("X is the  winner!");
                }
          if(  ( (divs[0].type == "o") && (divs[3].type == "o") && (divs[6].type == "o") ) ||
                ( (divs[1].type == "o") && (divs[4].type == "o") && (divs[7].type == "o") ) ||
                ( (divs[2].type == "o") && (divs[5].type == "o") && (divs[8].type == "o") )  ){

                      alert("O is the  winner!");
             }
   }, 

      checkDiagonal: function(){

          if(   ( (divs[0].type == "x") && (divs[4].type == "x") && (divs[8].type == "x") ) ||
                ( (divs[2].type == "x") && (divs[4].type == "x") && (divs[6].type == "x") ) ) {

                      alert("X is the  winner!");
                }
          if(  ( (divs[0].type == "o") && (divs[4].type == "o") && (divs[8].type == "o") ) ||
                ( (divs[2].type == "o") && (divs[4].type == "o") && (divs[6].type == "o") )  ) {

                      alert("O is the  winner!");
             }
   }, 
            


};

$(document).ready(function(){
  for(var i =0; i<9; i++){
     var iAsString = i.toString();
     document.getElementById(iAsString).onclick = function() {
        
      if (clickCounter%2==0){
        crosses.changeToRed(iAsString);  
      }
      else{
        crosses.changeToBlue(iAsString);
      }
    };
  }

});