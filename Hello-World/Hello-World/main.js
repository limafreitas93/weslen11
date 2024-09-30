let nomeUsuário = "";
let elemento = document.querySelector("#qual e o seu nome ");

while(nomeUsuário == ""){
    nomeUsuário = prompt("qual e o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = 'seja muito bem-vindo.';
}else{
    elemento.textContent = nomeUsuário;
}