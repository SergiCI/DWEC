//Creamos una funcion cuenta en la que alla tres condiciones posibles de uso ya sea para sacar el dinero porque alla suficiente ya sea pagando con tarjeta de credito y sin saldo
function cuenta (saldo,retirar,tienetarjetacredito) {
    if (saldo >= retirar){
        let saldoNuevo = saldo - retirar
        console.log(`Retirada exitosa.\n Saldo restante: ${saldoNuevo}`)
    }else if(saldo < retirar && tienetarjetacredito == true){
        console.log("Saldo insuficiente, pagando con tarjeta de credito")
    }else{
        console.log("Saldo insuficiente")
    }
}
cuenta(10000,9800,true)