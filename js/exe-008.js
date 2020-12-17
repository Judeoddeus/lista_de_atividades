function MediaDeAlunos(){
    let turma1 = document.querySelector("#turma1").value;
    let turma2 = document.querySelector("#turma2").value;
    let turma3 = document.querySelector("#turma3").value;

    let media = (+turma1 + +turma2 + +turma3) / 3;

    document.querySelector("#resultado").innerHTML = "A média por turma é : " + media;
}