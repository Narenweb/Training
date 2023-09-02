//Call back function
function doSomethingAsync(callback) {
    setTimeout(function() {
      console.log("Async operation completed");
      callback(); // Call the provided callback function
    }, 500);
  }
  
  function callbackFunction() {
    console.log("Callback function executed");
  }
  
  doSomethingAsync(callbackFunction);
  
  
  
  //setTimout example
  function check(){
      setTimeout(function(){
          console.log("it will print every 1 sec...");
          check(); //It will print every 1 sec
      },1000);
  }
  
  check();
  
  
  
  
  
  