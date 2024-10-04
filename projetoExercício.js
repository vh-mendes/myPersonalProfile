let listaDeAlunos = [];
function adicionarAluno() {
    //obter o nome do aluno
    let nomeAluno = document.getElementById('nomeAluno').value;

    //Verifica se o campo não está vazio 
    if (nomeAluno !== "") {
        listaDeAlunos.push(nomeAluno); //adiciona o aluno na lista
        atualizarListaAlunos(); //atualiza a lista de alunos
        document.getElementById('nomeAluno').value = "";   //limpa a caixa de texto
    } else{
        alert ('Por favor digite o nome do aluno');
    }
}

function  atualizarListaAlunos (){ //Seleciona a lista (ul)
    let lista = document.getElementById('listaAlunos');
    lista.innerHTML = ""; //limpa a lista antes de usar
    listaDeAlunos.forEach(function(aluno){
        let li = document.createElement('li');
        li.textContent = aluno;

        lista.appendChild(li);
    })
}