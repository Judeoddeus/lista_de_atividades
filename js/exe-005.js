for(let i = 1; i <= 50; i++){
    //aqui verifico se o número é impar, todo número que dividido por 2 sobrar um resto diferente de 0 é impar.
    if(i%2 != 0){
        document.querySelector("#contagem").innerHTML += i + " ";
    }
}