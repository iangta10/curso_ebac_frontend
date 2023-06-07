$(document).ready(function(){
    let tarefa = 0;
    const tamanhoTask = [];

    $("form").on("submit", function(e){
        e.preventDefault();
        const tarefaAdicionada = $("#adicionar-tarefa").val();        
        const novoItem = $(`<li id="list">        
        <span class="text">
            <input class="chkBox" type="checkbox" id="task-${tarefaAdicionada}">
            <label for="task-${tarefaAdicionada}">${tarefaAdicionada}</label> 
        </span>  
        </li>`);
        $(novoItem).appendTo("ul")
        $("#adicionar-tarefa").val("")
        tamanhoTask.push(tarefa);
        tarefa+=1;
        console.log(tarefa);
        console.log(tamanhoTask);
    })

})