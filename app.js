//El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

const ingresoNombres = document.querySelector('#amigo');
const listaAmigos = document.querySelector('#listaAmigos');
const amigoSorteado = document.getElementById('resultado');

//Función a aplicar cuando el input está vacío.
function validacion(){
    alert('Debes ingresar un nombre.');
    ingresoNombres.value = '';
}

function actualizarLista(){
    //Se limpia para mostrar la lista nva.
    amigoSorteado.innerHTML = '';

    amigos.push(ingresoNombres.value);
    listaAmigos.innerHTML = '';
    for (let amigo in amigos){
        const liAmigo = document.createElement('li');

        liAmigo.innerHTML = amigos[amigo];
        listaAmigos.appendChild(liAmigo);
    }
}

function agregarAmigo(){
    //Add la función trim() para que los nombres que son espacios vacíos, sean inválidados.
    if (ingresoNombres.value.trim() === ''){
        validacion();
    } else{
        actualizarLista();
    }
    ingresoNombres.value = '';
}

function sortearAmigo(){
    if (amigos.length > 0){
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSecreto = amigos[indiceAleatorio];

        const liSorteado = document.createElement('li');
        liSorteado.innerHTML = `El amigo secreto es: ${amigoSecreto}`;

        amigoSorteado.appendChild(liSorteado);

        //Se limpia la lista de amigos que se muestra en pantalla, una vez que se haya llevado a cabo el sorteo.
        listaAmigos.innerHTML = '';

        //Se limpia el array para generar una lista nva.
        amigos = [];
    }
}
