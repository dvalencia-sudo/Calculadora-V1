function valor(x) {
    document.getElementById("display").value += x;
}

function calcular() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

function borrar(){
    document.getElementById("display").value = "";
}
