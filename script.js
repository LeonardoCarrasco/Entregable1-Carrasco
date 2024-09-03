
const monedas = [
    {"moneda" :"dolar", "valor" : 1305},
    {"moneda" :"euro", "valor" : 1425},
    {"moneda" :"real", "valor" : 168}
]


function convertidorDeMoneda (valorusuario, monedaUsuario){
    let resultado = 0

        if (valorusuario == null || monedaUsuario == null) {
            monedas.forEach(moneda => {
                if (moneda.moneda == monedaUsuario) {
                    console.log(valorusuario, moneda.valor)
                    return resultado = valorusuario / moneda.valor
                }
                else if (moneda.moneda == monedaUsuario){
                    resultado = valorusuario / moneda.valor
                }
                else if(moneda.moneda == monedaUsuario){
                    resultado = valorusuario / moneda.valor
                }
                
            });
        }

        return resultado
}

let usuarioDinero = prompt("ingrese el dinero a convertir")
let monedaUsuario = prompt("elegir moneda")

console.log(usuarioDinero + " pesos argentinos en "+ monedaUsuario +" son: " + convertidorDeMoneda(usuarioDinero, monedaUsuario))
