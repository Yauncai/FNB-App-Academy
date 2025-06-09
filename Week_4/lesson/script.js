function changeText() {
    var heading = document.getElementById("heading");
    if (heading.innerHTML === "JavaScript") {
        heading.innerHTML = "is awesome";
    } else {
        heading.innerHTML = "JavaScript";
    }
}

function subNumbers(num1, num2) {
    return num1 - num2;
}

// usage
document.getElementById("subtraction").innerHTML = subNumbers(10, 7);