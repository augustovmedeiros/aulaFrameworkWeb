function ativarCabecalhos(){
    let cabecalhos = document.querySelectorAll('.header-text');
    cabecalhos.forEach(cabeca => {
        if(cabeca.style.display == 'none'){
            cabeca.style.display = 'block';
        }else{
            cabeca.style.display = 'none';
        }
      });
}

function verificarIdade(){
    let idade = parseInt(document.getElementById("idade-text").value);
    if(idade >= 18){
        document.querySelector('.maior').style.display = 'block';
        setTimeout(function(){
            document.querySelector('.maior').style.display = 'none';
        }, 1000);
    }
    else if(idade <= 17){
        document.querySelector('.menor').style.display = 'block';
        setTimeout(function(){
            document.querySelector('.menor').style.display = 'none';
        }, 1000); 
    }
    document.getElementById("idade-text").value = "";
}

function adicionarDados(){
    let dado = document.getElementById("dado-text").value;
    if(dado != ""){
        document.getElementById("dados-add").innerHTML += "<p>" + dado +"</p>";
        document.getElementById("dado-text").value = "";
    }

}