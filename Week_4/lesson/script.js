// Global 
var globalMessage = "I am a global variable!";

function showScope() {
    // Local 
    var localMessage = "I am a local variable!";
    document.getElementById("scope-demo").innerHTML =
        globalMessage + "<br>" + localMessage;
}

showScope();


document.getElementById("scope-demo").innerHTML = localMessage; // Uncaught ReferenceError