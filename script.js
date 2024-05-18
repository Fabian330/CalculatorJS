const display = document.getElementById("display")

display.value = "0";

function toDisplay(input){
    if(display.value == "Error" || display.value == "NaN" || display.value == "0"){
        display.value = "";
        display.value += input;
    }else{
        display.value += input;
    }
}

function removeDisplay(){
    display.value = display.value.toString().slice(0, -1);
}

function clearAllDisplay(){
    display.value = "0";
}

function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}