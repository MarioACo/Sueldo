class sueldo{
    public nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value;
    public sueldom:number = parseFloat((<HTMLInputElement>document.getElementById("sueldo")).value);
    public horas:number = parseInt((<HTMLInputElement>document.getElementById("horas")).value);
    public hextras:number = parseInt((<HTMLInputElement>document.getElementById("hextras")).value);

    public setNombre():any{
        (<HTMLInputElement>document.getElementById("nombreT")).value = this.nombre;
    }
    public calcularSueldo():number{
        let suel:number = this.sueldom * this.horas;
        if(this.hextras > 0){
            let suelh:number = this.sueldom * (this.hextras * 2);
            suel = suel + suelh;
        }
        return suel;

    }
    public calcularImpuesto():number{
        let impuesto:number = this.calcularSueldo() / 100;
        impuesto = impuesto * 16;
        return impuesto; 
    }
    public calcularSueldoNeto():number{
        let sueldoN:number = this.calcularSueldo() - this.calcularImpuesto();
        return sueldoN;
    }
    public resultados(){
        
        (<HTMLInputElement>document.getElementById("sueldoh")).value = this.calcularSueldo().toString();
        (<HTMLInputElement>document.getElementById("impuesto")).value = this.calcularImpuesto().toString();
        (<HTMLInputElement>document.getElementById("sueldof")).value = this.calcularSueldoNeto().toString();
    }

}

function calcular(){
    let objeto = new sueldo();
    let nombre:string = (<HTMLInputElement>document.getElementById("nombre")).value;
    let sueldom:string = (<HTMLInputElement>document.getElementById("sueldo")).value;
    let horas:string = (<HTMLInputElement>document.getElementById("horas")).value;
    let hextras:string = (<HTMLInputElement>document.getElementById("hextras")).value;
    if(nombre==""){
        alert("Debes de agregar el nombre");
        return false;
    }else if(sueldom == ""){
        alert("Debes de agregar el sueldo");
        return false;

    }else if(horas == ""){
        alert("Debes de agregar las horas");
        return false;
    }else if(hextras == ""){
        alert("Debes de agregar las horas extras o en su defecto poner 0");
        return false;
    }else{
        $('#exampleModal').modal('show');
    }
    objeto.setNombre();
    objeto.resultados();
}

function limpiar(){
    (<HTMLInputElement>document.getElementById("nombre")).value = "";
    (<HTMLInputElement>document.getElementById("sueldo")).value = "";
    (<HTMLInputElement>document.getElementById("horas")).value = "";
    (<HTMLInputElement>document.getElementById("hextras")).value = "";
}