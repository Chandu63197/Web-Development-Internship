function convertToFar() {
    // To Get the input value
    var celsius = document.getElementById("celsius").value;

    // To Check if the input is empty
    if (celsius === "") {
        alert("Please enter a temperature in Celsius");
        return;
    }

    // Convert to Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Display the result
    document.getElementById("result").innerHTML = celsius + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit";
}