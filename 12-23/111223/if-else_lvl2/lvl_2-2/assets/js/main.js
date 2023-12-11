function checkAirQuality() {
    let airQuality = document.getElementById("airQuality").value;
    let qualityNumber = document.querySelector("span")
    const message1 = document.getElementById("message1")
    const message2 = document.getElementById("message2")

    if (airQuality <= 50) {
        qualityNumber.innerHTML = `${airQuality}`
        document.body.style.backgroundColor = "#00e400";
        message1.textContent = "Level of health concern: Good"
        message2.textContent = "Level of health effect Little or no risk"
        
    } 
    else if (airQuality >50 && airQuality <= 100) {
        qualityNumber.innerHTML = `${airQuality}`
        document.body.style.backgroundColor = "#ffff00"; 
        message1.textContent = "Level of health concern: Moderate"
        message2.textContent = "Level of health effect: Acceptable quality"
    } 
    else if (airQuality >100 && airQuality <= 150) {
        qualityNumber.innerHTML = `${airQuality}`
        document.body.style.backgroundColor = "#e40000";
        message1.textContent = "Level of Health: Unhealthy for sensitive groups"
        message2.textContent = "Level of health effect: Generable publics not likely affected"
    }
}