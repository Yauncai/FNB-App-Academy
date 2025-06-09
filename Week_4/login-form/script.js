function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    checkUserCreds(username, password);
}

function checkUserCreds(username, password) {
    var systemUsername = "Yauncai";
    var systemPassword = "******";
    var message = document.getElementById("login-message");
    if (username === systemUsername && password === systemPassword) {
        message.style.color = "limegreen";
        message.innerHTML = "Login successful!";
    } else {
        message.style.color = "red";
        message.innerHTML = "Invalid username or password.";
    }
}