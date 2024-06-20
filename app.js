const seattle = {
    nombre: 'Seattle',
    direccion: '2901 3rd avenue #300, Seattle',
    horaInicio: '6am',
    horaCierre: '7pm',
    galletasPorHora: [], //empty array
    maxCustomerPerHour: 50,
    estimated: function(){
        this.galletasPorHora.push(generarNumeroRandom(1, 1000))
    }
}

function generarNumeroRandom(min, max) {
    return Math.round(Math.random() * (max - min) + min)  
  }