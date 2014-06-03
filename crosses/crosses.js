
var divs= [{flag: true, type=""},{flag: true, type=""},{flag: true, type=""},
           {flag: true, type=""}, {flag: true, type=""}, {flag: true, type=""},
           {flag: true, type=""}, {flag: true, type=""}, {flag: true, type=""}];

}
var crosses = {

   changeToRed: function (i) {
    
         document.getElementById(i).onclick = function() {
            if(divs[i].flag == true) { // check if flag is true
             document.getElementById(i).css("background-color","red"); // change background
               divs[i].type="x"; // change type
               divs[i].flag = false; // update counter by +1

            }else { 
               alert("This place is taken"); // if flag is false, alert user
            }
         }  
   },

   changeToBlue: function (i) {
    
         if(divs[i].flag == true) { //  if flag is true the  div didnt clicked before
          document.getElementById(i).css("background-color","blue"); // change background
             divs[i].type="O"; // change type
              divs[i].flag = false; // update counter by +1
            }else { 
               alert("This place is taken"); // if flag is false, alert user
            }
         
      
   }


};