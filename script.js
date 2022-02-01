
window.onload = init;

function init(){
  if("form" in localStorage){
    carregaDados();
  }
  setInterval(autosave,5000);
}

function carregaDados(){
  var form = JSON.parse( localStorage.getItem("form") );
    document.getElementById("pNome").value = form.pnome;
    document.getElementById("sNome").value = form.snome;
    document.getElementById("sCV").value = form.conteudo;
    alert("Dados recuperados, clique em limpar para apagá-los");
}

function autosave(){
  console.log("deveria salvar agora");
  var primeiro = document.getElementById("pNome").value;
  var sobre = document.getElementById("sNome").value;
  var cv = document.getElementById("sCV").value;

  console.log(primeiro, sobre, cv);

  var form = {
    pnome : primeiro,
    snome : sobre,
    conteudo : cv
  };

  localStorage.setItem("form", JSON.stringify(form) );
}

function relogio(){
  var data=new Date();
  var hor=data.getHours();
  var min=data.getMinutes();
  var seg=data.getSeconds();

  if(hor < 10){
    hor="0"+hor;
  }
  if(min < 10){
    min="0"+min;
  }
  if(seg < 10){
    seg="0"+seg;
  }

  var horas=hor + ":" + min + ":" + seg;

    document.getElementById("rel").value=horas;
  }

  var timer=setInterval(relogio,1000);