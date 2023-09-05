var imagenes=[
    "leon.png",
    "jagadores.jpg",
    "cota.jpg",
    "LEON.jpg",
    "OIP (1).jpg",
    "OIP (2).jpg",
    "OIP.jpg",
    "OIP (3).jpg"
]
var info=[
    "escudo de leon",
    "jugadores del club leon",
    "Rodolfo Cota el portero de leon",
    "Elias Hernandez","Brian Rubio",
    "Osvaldo Rodriguez",
    "Jose Alfonso Alvarado Perez",
    "Estadio leon"
]
var i=0;

function siguiente() {
    i++;
    var numeros=7;
    if (i > numeros){
        i=0;
    }
    var actualizarimagen=imagenes[i];
    var actualizarinfo=info[i];
    document.getElementById("escudo").src=actualizarimagen;
    document.getElementById("nombres").innerHTML=actualizarinfo;
}