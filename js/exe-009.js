function CriarTurmas(){
    let quantidadeDeTurmas = document.querySelector("#quantidadeDeTurmas").value;
    let campos = document.querySelector("#campos");
    campos.innerHTML = " ";

    for(let i = 1; i <=quantidadeDeTurmas; i++){
        campos.innerHTML += "Turma" + i + "<input type='number' id 'turma'"+i+"max='40' <br>";

    }
}

function MediaDeAlunos(){
    let quantidadeDeTurmas = document.querySelector("#quantidadeDeTurmas").value;
    let totalAlunos = 0;
    for(let i = 1; i <= quantidadeDeTurmas; i++){
        totalAlunos +=parseFloat(document.querySelector("#turma" +i).value);
    }
    let media = totalAlunos/quantidadeDeTurmas;
    document.querySelector("#resultado").innerHTML = "A média de alunos por turma é: " + media;
}