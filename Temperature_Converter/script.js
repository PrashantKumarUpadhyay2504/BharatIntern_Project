
const celsius = document.querySelector("#Celsius");
const fahrenheit = document.querySelector("#Fahrenheit");
const Kelvin = document.querySelector("#Kelvin");

window.addEventListener("load", ()=>celsius.focus());

celsius.addEventListener("input", () => {
    fahrenheit.value=((celsius.value*9)/5+32).toFixed(2);
    Kelvin.value=(celsius.value + 273.15)
    if(!celsius.value) fahrenheit.value ="";
    if(!celsius.value) Kelvin.value ="";
});

fahrenheit.addEventListener("input", () => {
    celsius.value=(((fahrenheit.value - 32)* 5)/9).toFixed(2);
    Kelvin.value =((((fahrenheit.value -32)*5)/9)+273.15).toFixed(2);
    if(!fahrenheit.value) celsius.value ="";
    if(!fahrenheit.value) Kelvin.value ="";
});

Kelvin.addEventListener("input", () => {
    celsius.value=(Kelvin.value - 273.15).toFixed(2);
    fahrenheit.value=((((Kelvin.value - 273.15)*9)/5)+32).toFixed(2);
    if(!Kelvin.value) celsius.value= "";
    if(!Kelvin.value) fahrenheit.value="";
})