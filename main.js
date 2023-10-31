function tocaSomPom(){
    document .querySelector( '#som_tecla_pom') .play();
 }
 const listaDeBotoes = document.querySelectorAll('.tecla');


 let contador = 0
 
 
 while (contador < listaDeBotoes.length)  {
     listaDeBotoes[contador].onclick = tocaSomPom;
     console.log("contador: " + contador);
    contador += 1;
 } 
