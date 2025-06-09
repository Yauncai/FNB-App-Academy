function showWeatherQuote() {
    var weather = document.getElementById("weather").value;
    var quote = "";
    switch (weather) {
        case "sunny":
            quote = "It's a bright and beautiful day!";
            break;
        case "rainy":
            quote = "Don't forget your umbrella!";
            break;
        case "cloudy":
            quote = "A perfect day to relax indoors.";
            break;
        case "windy":
            quote = "Hold onto your hat!";
            break;
        case "snowy":
            quote = "Time for some snow fun!";
            break;
        default:
            quote = "";
    }
    document.getElementById("weather-quote").innerHTML = quote;
}