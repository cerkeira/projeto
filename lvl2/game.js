window.onload=function () {
    // VARIAVEIS
var jogador1= document.getElementById("jogador1");
var jogador2= document.getElementById("jogador2");
var jogador3= document.getElementById("jogador3");

// POSICIONAMENTOS
iniciar();

    console.log(jogador1.style.left);
    
    window.onkeydown=function(){
        processatecla(window.event.key);
        console.log(window.event.key);
}

document.getElementById("continuar").onclick=function(){
    alert("Ainda não está pronto.");
}
}
var n=30;
function iniciar(){
    document.getElementById("vencedor").style.display="none";
    document.getElementById("derrotado").style.display="none";
    jogador1.style.display="block";
jogador2.style.display="none";
jogador3.style.display="none";
jogador2.style.left=880+"px";
jogador3.style.left=23+"px";
jogador1.style.left=Math.floor(Math.random()*421)+21+'px';
jogador1.style.top=83+"px";
document.getElementById("gato").style.top=81+"px";
document.getElementById("gato").style.left=460+"px";
document.getElementById("irmao").style.top=262+"px";
document.getElementById("irmao").style.left=226+"px";
document.getElementById("pai").style.top=419+"px";
document.getElementById("pai").style.left=183+"px";
document.getElementById("mae").style.top=414+"px";
document.getElementById("mae").style.left=390+"px"; 
document.getElementById("gato").style.display="block";
document.getElementById("irmao").style.display="block";
document.getElementById("pai").style.display="block";
document.getElementById("mae").style.display="block";
document.getElementById("conf4").src="assets/errado_jogo_lab3.jpg";
document.getElementById("conf3").src="assets/errado_jogo_lab3.jpg";
document.getElementById("conf2").src="assets/errado_jogo_lab3.jpg";
document.getElementById("conf1").src="assets/errado_jogo_lab3.jpg";
temporizador= setTimeout (derrota, 30000);
contador=setInterval (counter, 1000);
}
function processatecla(evt){
    // RESTART E ALERS
    if (evt=="r"){
    clearInterval (contador);
    clearTimeout (temporizador);
    n=30;
    iniciar();
        
    }
    if (evt!="d" && evt!="a" && evt!="ArrowRight" && evt!="ArrowLeft"){
        return;
    }
    if (parseInt(jogador3.style.left)>475){
        document.getElementById("vencedor").style.display="block";
        clearInterval (contador);
        clearTimeout (temporizador);
        return;
    }
    // MOVIMENTO
    if (evt == "d" || evt=="ArrowRight"){
        if(parseInt(jogador1.style.left)>880||parseInt(jogador2.style.left)>880||parseInt(jogador3.style.left)>880){
            return;
        }
        if(jogador1.style.display=="block"){
            jogador1.style.left=parseInt(jogador1.style.left)+5+"px";
        }
        if(jogador2.style.display=="block"){
            jogador2.style.left=parseInt(jogador2.style.left)+5+"px";
        }
        if(jogador3.style.display=="block"){
            jogador3.style.left=parseInt(jogador3.style.left)+5+"px";
        }
    }
    if (evt == "a" || evt=="ArrowLeft"){
        if(parseInt(jogador1.style.left)<20||parseInt(jogador2.style.left)<20||parseInt(jogador3.style.left)<20){
            return;
        }
        if(jogador1.style.display=="block"){
            jogador1.style.left=parseInt(jogador1.style.left)-5+"px";
        }        
        if(jogador2.style.display=="block"){
            jogador2.style.left=parseInt(jogador2.style.left)-5+"px";
        }
        if(jogador3.style.display=="block"){
            jogador3.style.left=parseInt(jogador3.style.left)-5+"px";
        }
        
    }
    // ANDARES
    if (parseInt(jogador1.style.left)>760){
        if(document.getElementById("gato").style.display!="none"){
            alert("Não te esqueças do Tobias!")
            return;
        }
        jogador1.style.display="none";
        jogador2.style.display="block";
    }
    if (parseInt(jogador2.style.left)<90){
        jogador2.style.display="none";
        jogador3.style.display="block"; 
    }
    // COLISOES
    if (parseInt(jogador1.style.left)>460 && parseInt(jogador1.style.left)<540){
        document.getElementById("gato").style.display="none";
        document.getElementById("conf4").src="assets/certo_lab3.jpg";
    }
    
    if (parseInt(jogador2.style.left)>226 && parseInt(jogador2.style.left)<260){
        document.getElementById("irmao").style.display="none";
        document.getElementById("conf3").src="assets/certo_lab3.jpg";
    }
    if (parseInt(jogador3.style.left)>156 && parseInt(jogador3.style.left)<218){
        document.getElementById("pai").style.display="none";
        document.getElementById("conf2").src="assets/certo_lab3.jpg";
    }
    if (parseInt(jogador3.style.left)>362 && parseInt(jogador3.style.left)<421){
        document.getElementById("mae").style.display="none";
        document.getElementById("conf1").src="assets/certo_lab3.jpg";
    }

    
    console.log(evt);
}
// FIM
function derrota (){
    console.log("perdeu");
    // document.getElementById("derrotado").style.display="block";
    clearInterval (contador);
    clearTimeout (temporizador);
}
function counter(){
    if (n>0){
       n--;
    document.getElementById("contador").innerHTML=n; 
    }else{
        clearInterval;
    }
}