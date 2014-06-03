
var divs= [{flag: true, type=""},{flag: true, type=""},{flag: true, type=""},
           {flag: true, type=""}, {flag: true, type=""}, {flag: true, type=""},
           {flag: true, type=""}, {flag: true, type=""}, {flag: true, type=""}];

var clickCounter = 0;
var crosses = {

   changeToRed: function (i) {
    
         document.getElementById(i).onclick = function() {
            if(divs[i].flag == true) { // check if flag is true
             document.getElementById(i).style.backgroundColor = "red"; // change background
               divs[i].type="x"; // change type
               divs[i].flag = false; //flag false the div cannot be click agian
               clickCounter++; // update counter by +1

            }else { 
               alert("This place is taken"); // if flag is false, alert user
            }
         }  
   },

   changeToBlue: function (i) {
    
         if(divs[i].flag == true) { //  if flag is true the  div didnt clicked before
          document.getElementById(i).style.backgroundColor = "blue"; // change background
             divs[i].type="o"; // change type
              divs[i].flag = false; //flag false the div cannot be click agian
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
         else(  ( (divs[0].type == "o") && (divs[1].type == "o") && (divs[2].type == "o") ) ||
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
         else(  ( (divs[0].type == "o") && (divs[3].type == "o") && (divs[6].type == "o") ) ||
                ( (divs[1].type == "o") && (divs[4].type == "o") && (divs[7].type == "o") ) ||
                ( (divs[2].type == "o") && (divs[5].type == "o") && (divs[8].type == "o") )  ){

                      alert("O is the  winner!");
             }
   }, 

      checkDiagonal: function(){

         if(    ( (divs[0].type == "x") && (divs[4.type == "x") && (divs[8].type == "x") ) ||
                ( (divs[2].type == "x") && (divs[4].type == "x") && (divs[6].type == "x") ) ) {

                      alert("X is the  winner!");
                }
         else(  ( (divs[0].type == "o") && (divs[4].type == "o") && (divs[8].type == "o") ) ||
                ( (divs[2].type == "o") && (divs[4].type == "o") && (divs[6].type == "o") )  ) {

                      alert("O is the  winner!");
             }
   }, 
            


};

$(document).ready(function(){

   if (clickCounter%2==0){
      crosses.changeToRed();
      
   }
   else{
      crosses.changeToBlue();
   }




   };