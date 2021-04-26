var sueldo = /** @class */ (function () {
    function sueldo() {
        this.nombre = document.getElementById("nombre").value;
        this.sueldom = parseFloat(document.getElementById("sueldo").value);
        this.horas = parseInt(document.getElementById("horas").value);
        this.hextras = parseInt(document.getElementById("hextras").value);
    }
    sueldo.prototype.setNombre = function () {
        document.getElementById("nombreT").value = this.nombre;
    };
    sueldo.prototype.calcularSueldo = function () {
        var suel = this.sueldom * this.horas;
        if (this.hextras > 0) {
            var suelh = this.sueldom * (this.hextras * 2);
            suel = suel + suelh;
        }
        return suel;
    };
    sueldo.prototype.calcularImpuesto = function () {
        var impuesto = this.calcularSueldo() / 100;
        impuesto = impuesto * 16;
        return impuesto;
    };
    sueldo.prototype.calcularSueldoNeto = function () {
        var sueldoN = this.calcularSueldo() - this.calcularImpuesto();
        return sueldoN;
    };
    sueldo.prototype.resultados = function () {
        document.getElementById("sueldoh").value = this.calcularSueldo().toString();
        document.getElementById("impuesto").value = this.calcularImpuesto().toString();
        document.getElementById("sueldof").value = this.calcularSueldoNeto().toString();
    };
    return sueldo;
}());
function calcular() {
    var objeto = new sueldo();
    var nombre = document.getElementById("nombre").value;
    var sueldom = document.getElementById("sueldo").value;
    var horas = document.getElementById("horas").value;
    var hextras = document.getElementById("hextras").value;
    if (nombre == "") {
        alert("Debes de agregar el nombre");
        return false;
    }
    else if (sueldom == "") {
        alert("Debes de agregar el sueldo");
        return false;
    }
    else if (horas == "") {
        alert("Debes de agregar las horas");
        return false;
    }
    else if (hextras == "") {
        alert("Debes de agregar las horas extras o en su defecto poner 0");
        return false;
    }
    else {
        $('#exampleModal').modal('show');
    }
    objeto.setNombre();
    objeto.resultados();
}
function limpiar() {
    document.getElementById("nombre").value = "";
    document.getElementById("sueldo").value = "";
    document.getElementById("horas").value = "";
    document.getElementById("hextras").value = "";
}
