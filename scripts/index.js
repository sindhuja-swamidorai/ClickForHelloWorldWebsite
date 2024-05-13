"use strict";

// Let the window's onload know there is a function called init
window.onload = init;    // Do not put () after init!
                         // This isn't calling init now -- it 
                         // saying call the init function when
                         // the window finishes loading

// The init function connect the button to the code that
// should run when the button is clicked
function init() {
   // Find the helloBtn
   const helloBtn = document.getElementById("helloBtn");

   // Let helloBtn's onclick know there is a function
   // called onHelloBtnClicked that should be called when
   // the button is clicked
   helloBtn.onclick = onHelloBtnClicked; 

   // Find the clearBtn
   let clearBtn = document.getElementById("clearBtn");

   // Let clearBtn's onclick know there is a function
   // called onClearBtnClicked that should be called when
   // the button is clicked
   clearBtn.onclick = onClearBtnClicked; 

}



// This function is called when helloBtn is clicked
function onHelloBtnClicked() {
   // Find the messageDiv
   let messageDiv = document.getElementById("messageDiv");
   // Set the contents of the div
   messageDiv.innerHTML = "Hello World!";
}

// This function is called when clearBtn is clicked
function onClearBtnClicked() {
    // Find the messageDiv
    let messageDiv = document.getElementById("messageDiv"); 
    // Clear the contents of the div
    messageDiv.innerHTML = "";
 }
 
