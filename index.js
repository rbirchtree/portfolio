document.addEventListener('DOMContentLoaded',function(event){
  // array with texts to type in typewriter
  let dataText = ["About Rob Birch","Who is Rob Birch?","I am Rob Birch!"];
  
  // type one text in the typewriter
  // keeps calling itself until the text is finished
  function typeWriter(text, i, fnCallback) {
    // check if text isn't finished yet
    if (i < (text.length)) {
      // add next character to h1
     document.querySelector("h1").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

      // wait for a while and call this function again for next character
      setTimeout(function() {
        typeWriter(text, i + 1, fnCallback)
      }, 100);
    }
    // text finished, call callback if there is a callback function
    else if (typeof fnCallback == 'function') {
      // call callback after timeout
      setTimeout(fnCallback, 700);
    }
  }
  // start a typewriter animation for a text in the dataText array
   function StartTextAnimation(i) {
     if (typeof dataText[i] == 'undefined'){
        return;
      // exit loop
     }

     // check if dataText[i] exist
    if (i < dataText[i].length) {
      // text exists! start typewriter animation
     typeWriter(dataText[i], 0, function(){
       // after callback (and whole text has been animated), start next text
       StartTextAnimation(i + 1);
     });
    } 
  }
  // start the text animation
  StartTextAnimation(0);
});

function updateYear(){
  let newYear = new Date().getFullYear();
    return newYear;
};

let newYear = document.querySelector('#yearMod', updateYear());
newYear.innerHTML = updateYear();
