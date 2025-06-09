function changeText() {
    var heading = document.getElementById("heading");
    if (heading.innerHTML === "JavaScript") {
        heading.innerHTML = "is awesome";
    } else {
        heading.innerHTML = "JavaScript";
    }
}