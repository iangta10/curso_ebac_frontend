const form = document.getElementById("numbers");
let formEValido = false;

function validaNumero(n1, n2){
    if(n2>n1){
        formEValido = true;
    }else{
        formEValido = false;
    }
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const n1 = document.getElementById("numero-menor");
    const n2 = document.getElementById("numero-maior");
    const mensagemDeSucesso = `O número <b>${n2.value}</b> é maior que o número <b>${n1.value}</b>`;

    n1.addEventListener('keyup', function(e){
        if(e.target.value != ''){
            document.querySelector(".sucess-message").style.display = 'none';
        }
    })

    validaNumero(n1.value, n2.value);
    if (formEValido){
        n2.classList.remove("error");
        document.querySelector(".error-message").style.display = 'none';
        const containerMensagemDeSucesso = document.querySelector(".sucess-message");
        containerMensagemDeSucesso.style.display = 'block';
        containerMensagemDeSucesso.innerHTML = mensagemDeSucesso;

        n1.value = '';
        n2.value = '';
    } else{
        n2.style.border = 'error';
        document.querySelector(".error-message").style.display = 'block';
    }
})