let amigos = [];

//Función para agregar un amigo a la lista
function agregarAmigo() {
    let cuadroTexto = document.getElementById('amigo');
    let nombre = cuadroTexto.value.trim();
    if (nombre === '') {
        alert('¡Escribe un nombre primero!');
        return;
    }
        
    if (amigos.includes(nombre)) {
        alert('¡Este nombre ya está en la lista!');
        return;
    }
        
    amigos.push(nombre);
    cuadroTexto.value = '';    
    mostrarLista();
}


//Función para mostrar la lista de amigos en pantalla
function mostrarLista() {
    let listaElemento = document.getElementById('listaAmigos');
    listaElemento.innerHTML = '';

    if (amigos.length === 0) {
        listaElemento.innerHTML = '<li>No hay amigos en la lista todavía</li>';
        return;
    }
    
    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = (i + 1) + '. ' + amigos[i];
        listaElemento.appendChild(elementoLista);
    }
}


//Función para sortear un amigo secreto
function sortearAmigo() {    
    let resultadoElemento = document.getElementById('resultado');

    if (amigos.length < 2) {
        resultadoElemento.innerHTML = '<li>Necesitas al menos 2 amigos para hacer el sorteo</li>';
        return;
    }

    let numeroAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[numeroAleatorio];
    resultadoElemento.innerHTML = '<li>¡El amigo secreto es: ' + amigoSorteado + '!</li>';
}


//Función para que el botón Enter también funcione
document.addEventListener('DOMContentLoaded', function() {
    let cuadroTexto = document.getElementById('amigo');    
    cuadroTexto.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            agregarAmigo();
        }
    });
    mostrarLista();
});