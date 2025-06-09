function changeText() {
    var heading = document.getElementById("heading");
    if (heading.innerHTML === "JavaScript") {
        heading.innerHTML = "is awesome";
    } else {
        heading.innerHTML = "JavaScript";
    }
}

function addNumbers(num1, num2) {
    document.getElementById("addition").innerHTML = num1 + num2;
}

// usage
addNumbers(10, 7);