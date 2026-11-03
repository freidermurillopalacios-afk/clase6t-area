const inputNum1 = document.getElementById("numero");
const inputNum2 = document.getElementById("numero2");
const opcion = document.getElementById("opcion");
const imagen = document.getElementById("imagenPrincipal");
const salida2 = document.getElementById("salida2");

function calcularOperacion() {
    let num1 = Number(inputNum1.value);
    let num2 = Number(inputNum2.value);
    let seleccionada = opcion.value;

    if (seleccionada === "suma") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Eqd4bRhJCms7Ml-qmQbDmIFl-7Q6E4hux27UDTOivg&s=10";
    } else if (seleccionada === "resta") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblxJCpwQa5ZK8DvMi0XzU8sZt3WEo5fT5BPcYqpvmkQ&s=10";
    } else if (seleccionada === "mult") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS7tcmQNNVOL_3aO3HVSV2WwqPQNguPXYjjJMrUjauQw&s=10";
    } else if (seleccionada === "division") {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYnDuK2rlJZpvtyKs20PnfAblSlceyysl_9UZvNC2rJQ&s=10";
    } else {
        imagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtholkRXoCkCoxBvyUTXgnx42WbcWscPbEFC95HipG4g&s=10";
        salida2.textContent = "Selecciona una operación.";
        return;
    }

    if (inputNum1.value === "" || inputNum2.value === "") {
        salida2.textContent = "Por favor ingresa ambos números.";
        return;
    }
    let resultado = 0;
    if (seleccionada === "suma") {
        resultado = num1 + num2;
        salida2.textContent = "El resultado de la suma es: " + resultado;
    } else if (seleccionada === "resta") {
        resultado = num1 - num2;
        salida2.textContent = "El resultado de la resta es: " + resultado;
    } else if (seleccionada === "mult") {
        resultado = num1 * num2;
        salida2.textContent = "El resultado de la multiplicación es: " + resultado;
    } else if (seleccionada === "division") {
        if (num2 === 0) {
            salida2.textContent = "Error: No se puede dividir entre cero.";
            return;
        }
        resultado = num1 / num2;
        salida2.textContent = "El resultado de la división es: " + resultado;
    }
}

opcion.addEventListener("change", calcularOperacion);
inputNum1.addEventListener("input", calcularOperacion);
inputNum2.addEventListener("input", calcularOperacion);
