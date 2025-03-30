function essaPalavraEUmPalindromo(palavra){
    let palavraTeste = palavra;
    let separandoAsLetrasDaPlavra = palavraTeste.split('');
    console.log(separandoAsLetrasDaPlavra);
    let palavraInvertida = separandoAsLetrasDaPlavra.reverse();
    palavraInvertida = palavraInvertida.join('');
    if(palavraTeste == palavraInvertida){
        console.log(`Palavra ${palavraTeste} é palíndromo`);
    }
    else{
        console.log(`Palavra ${palavraTeste} não é palíndromo`);
    }
}

essaPalavraEUmPalindromo('ovo')