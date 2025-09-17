let amigos = [];
let amigosMostrados = [];

const nombres = document.querySelector('#amigo');
const lista = document.querySelector('#listaAmigos');
const resultado = document.getElementById('resultado');

function agregarAmigo(){
   if(nombres.value.trim() === ''){
        alert('Por favor, ingresa un nombre válido.');
        return;
    }
    else if(amigos.some(amigo => amigo.toLowerCase() === nombres.value.trim().toLowerCase()))  {
        alert('Este nombre ya está en la lista.');
        return; 
 }       
   else {
        adherirLista();
   }

}

function adherirLista(){
     amigos.push(nombres.value.trim());
        nombres.value = ''; 
        console.log(amigos);
        MostrarLista(amigos)
        return;
        
}
function MostrarLista(amigos){
    lista.innerHTML = '';
    amigos.forEach(amigo => {
        const liAmigo = document.createElement('li');
        liAmigo.textContent = amigo;
        lista.appendChild(liAmigo);
    });              
    return;
}
function sortearAmigo(){
    if(amigos.length < 2){
        alert('Necesitas al menos 2 amigos para realizar el sorteo.');
        return;
    }   
       const amigosRestantes = amigos.filter(amigo => !amigosMostrados.includes(amigo));
    if(amigosRestantes.length === 0){
        resultado.textContent = 'Ya todos han sido sorteados.';
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigosRestantes.length);
    const secreto = amigosRestantes[indiceAleatorio];

    amigosMostrados.push(secreto); 
    resultado.textContent = `El amigo secreto es: ${secreto}`;
    return;
}
function reiniciarSorteo(){
    amigos = [];
    amigosMostrados = [];
    lista.innerHTML = '';
    resultado.textContent = '';
    nombres.value = '';
    return;
}   