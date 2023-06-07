$(document).ready(function(){
    
    $("#login-btn").click(function(){
        alert("Funcionalidade ainda não implementada");
    })

    $("#registro-btn").click(function(){
        alert("Funcionalidade ainda não implementada");
    })

    $("#telefoneCadastro").mask("(00) 00000-0000",{placeholder: "(00) 12345-6789"});
    $("#cpfCadastro").mask("000.000.000-00");
    $("#cepCadastro").mask("00000-000");


    $(".formCadastro").validate({
        rules:{
            nomeCadastro: {
                required: true
            },
            emailCadastro: {
                required: true,
                email: true
            },
            telefoneCadastro: {
                required: true
            },
            cpfCadastro:{
                required: true
            },
            enderecoCadastro: {
                required: true
            },
            numeroCasa:{
                required: false
            },
            bairroCasa: {
                required: false
            },
            cepCadastro:{
                required: true
            }
        },
        messages: {
            nomeCadastro: "Nome obrigatório",
            emailCadastro: "Email obrigatório",
            telefoneCadastro: "Telefone obrigatório",
            cpfCadastro: "CPF obrigatório",
            enderecoCadastro: "Rua obrigatória",
            cepCadastro: "CEP obrigatório"
        },
    
    })
})