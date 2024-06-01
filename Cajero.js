class cajeroAutomatico{
	constructor(){
		this.saldo = 1000;
  	}

	consultarSaldo(){
		console.log("Su saldo disponible es: $" + this.saldo)
	}

	retirarDinero(monto){
		if(monto > 0 && monto <= this.saldo){
			this.saldo -= monto
			console.log("Retiro $" + monto + ".Su saldo actual es: $" + this.saldo)
		
		} else {
			console.log("No hay suficiente saldo disponible para realizar esta operación.")
			}

	}

	depositarDinero(monto){
		if(monto > 0){
			console.log("Depositó $" + monto + ". Su saldo actual es: $" + this.saldo)
		} else {
			console.log("el monto a depositar debe ser mayor a cero.")
		}

	}
}

let cajero = new cajeroAutomatico();

cajero.consultarSaldo()
cajero.depositarDinero(500)
cajero.retirarDinero(200)
cajero.consultarSaldo()