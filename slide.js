var radio = document.querySelector('.manual-btn');
var cont = 1;
/*define que o primeiro radio vai ser o selecionado*/ 
document.getElementById('radio1').checked = true;

/*Define um intervaulo entre as imagens do carrossel*/
setInterval(() => {
    proximaImg()
}, 5000);

function proximaImg(){
  cont++
  if(cont > 3){
    cont = 1; 
  } 
  document.getElementById('radio'+cont).checked = true;

}