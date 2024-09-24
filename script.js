
const monedas = {
    "USD": {
        "USD": 1, "EUR": 0.94, "ARS": 365, "CLP": 860, "UYU": 38.5},
    "EUR": {
        "USD": 1.06, "EUR": 1, "ARS": 385, "CLP": 910, "UYU": 41},
    "ARS": {
        "USD": 0.0027,"EUR": 0.0026,"ARS": 1,"CLP": 2.36,"UYU": 0.105},
    "CLP": {
        "USD": 0.0012, "EUR": 0.0011, "ARS": 0.42, "CLP": 1, "UYU": 0.044},
    "UYU": {
        "USD": 0.026, "EUR": 0.024, "ARS": 9.5,"CLP": 22.7, "UYU": 1}
    };

// function convertidorDeMoneda (valorusuario, monedaUsuario){
//     let resultado = 0

//         if (valorusuario != null || monedaUsuario != null) {
//             monedas.forEach(moneda => {
//                 if (moneda.moneda == monedaUsuario) {
//                     console.log(valorusuario, moneda.valor)
//                     return resultado = valorusuario / moneda.valor
//                 }
//                 else if (moneda.moneda == monedaUsuario){
//                     resultado = valorusuario / moneda.valor
//                 }
//                 else if(moneda.moneda == monedaUsuario){
//                     resultado = valorusuario / moneda.valor
//                 }
                
//             });
//         }

//         return resultado
// }

// let usuarioDinero = prompt("ingrese el dinero a convertir")
// let monedaUsuario = prompt("elegir moneda")

//console.log(usuarioDinero + " pesos argentinos en "+ monedaUsuario +" son: " + convertidorDeMoneda(usuarioDinero, monedaUsuario))

const seleccionOrigen = document.querySelector("#monedaOrigen");
const seleccionDestino = document.querySelector("#monedaDestino");
const resultado = document.querySelector("#resultado");
const btnConvertir = document.querySelector("#btn");
const btnRenovar = document.querySelector("#renovar");

seleccionOrigen.addEventListener("change",() => console.log(seleccionOrigen.value)),
seleccionDestino.addEventListener("change",() => console.log(seleccionDestino.value))
function convertirMoneda(monto, monedaOrigen, monedaDestino){

    if(Math.sign(monto) == 1){
        console.log("segui nomas capo")
    }
    else{
        alert("Debes ingresar un numero. Debes ingresar un numero positivo.")
        console.log("no mi rey no podes pasar")
        document.querySelector("#monto").value = ""

        return
    }
    
    const valorMoneda = monedas[monedaOrigen][monedaDestino];
    const resultado = monto * valorMoneda;
    return resultado.toFixed(2)

}

btnConvertir.addEventListener("click", (e) =>{
    e.preventDefault();

    const monedaOrigen = seleccionOrigen.value;
    const monedaDestino = seleccionDestino.value;

    if(monedaOrigen != "" && monedaDestino != ""){

    console.log(monedaOrigen)
    console.log(monedaDestino)

    const monto = document.querySelector("#monto").value;

    const convertido = convertirMoneda(monto, monedaOrigen, monedaDestino);

    console.log(convertido)
    resultado.value = convertido;

    }
    else{
        alert("completa los campos")
    }
}   
)

btnRenovar.addEventListener("click", () => {
    document.querySelector("#form").reset();
    resultado.value = "";

})



