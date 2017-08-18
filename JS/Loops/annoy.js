var answer = prompt("are we there yet?");

while(answer.indexOf("yes" && "yeah") === -1){
  var answer = prompt("are we there yet");
}

alert("Yay!");

wrong way:
if(answer === "yes"){
  alert("Yay!");
} else {
  var answer = prompt("are we there yet?");
}
