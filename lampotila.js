function laske(form) {
    const inputValue = form.input.value;
    const vaihdos = form.vaihdos.value;
    const desimaali = form.desimaali.value;
    
    if (inputValue != "" && desimaali != "") {

        if(vaihdos == "celsiusToFahrenheit" || vaihdos == "celsiusToKelvin") {
            return document.getElementById("para").innerHTML = celsius(inputValue)
        }
        
        if(vaihdos == "fahrenheitToKelvin" || vaihdos == "fahrenheitToCelsius") {
            return document.getElementById("para").innerHTML = fahrenheit(inputValue);
        } 
        
        if(vaihdos == "kelvinToFahrenheit" || vaihdos == "kelvinToCelsius") {
            return document.getElementById("para").innerHTML = kelvin(inputValue);
        }

    }
    
    if (inputValue == "" || desimaali == "") {
        document.getElementById("para").innerHTML = "Syötä lämpötila ja valitse desimaali";
    }

}

function celsius(value) {

    if (Number(value) < -273.15) {
        return "Alle absoluuttisen nollapisteen, ei ole mahdollista.";
    }

    if (form.vaihdos.value == "celsiusToFahrenheit") {
        let output = Number(value) * 1.8 + 32;
        return output.toFixed(form.desimaali.value);
    }

    if (form.vaihdos.value == "celsiusToKelvin") {
        let output = Number(value) + 273.15;
        return output.toFixed(form.desimaali.value);
    }

}

function fahrenheit(value) {

    if (Number(value) < -459.67) {
        return "Alle absoluuttisen nollapisteen, ei ole mahdollista.";
    }

    if (form.vaihdos.value == "fahrenheitToKelvin") {
        let output = (Number(value) + 459.67) / 1.8;
        return output.toFixed(form.desimaali.value);
    }

    if (form.vaihdos.value == "fahrenheitToCelsius") {
        let output = (Number(value) - 32) / 1.8;
        return output.toFixed(form.desimaali.value);
    }
}


function kelvin(value) {

    if(Number(value) < 0) {
        return "Alle absoluuttisen nollapisteen, ei ole mahdollista.";
    }

    if (form.vaihdos.value == "kelvinToFahrenheit") {
        let output = Number(value) * 1.8 - 459.67;
        return output.toFixed(form.desimaali.value);
    }

    if (form.vaihdos.value == "kelvinToCelsius") {
        let output = Number(value) - 273.15;
        return output.toFixed(form.desimaali.value);
    }
}