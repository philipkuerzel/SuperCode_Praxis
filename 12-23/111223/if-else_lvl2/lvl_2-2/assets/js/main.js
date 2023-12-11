function checkAirQuality() {
    let airQuality = document.getElementById("airQuality").value;
    const message = document.getElementById("message")
    if (airQuality <= 50) {
        document.body.style.backgroundColor = "#00e400";
        message.textContent = "Level of health concern: Good Level of health effect Little or no risk"
        
    } 
    else if (airQuality >50 && airQuality <= 100) {
        document.body.style.backgroundColor = "#ffff00"; 
        message.textContent = "Level of health concern: Moderate Level of health effect: Acceptable quality"
    } 
    else if (airQuality >100 && airQuality <= 150) {
        document.body.style.backgroundColor = "#e40000";
        message.textContent = "Unhealthy for sensitive groups. Level of health effect: Generable publics not likely affected"
    }
}