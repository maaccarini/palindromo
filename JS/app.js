const VerifyBttn = document.getElementById('button_click-main');
const InputBox = document.getElementById('input_wordTyped-main')

function isThisWordPalindrome(palavra){
    let palavraTeste = palavra;
    let separandoAsLetrasDaPlavra = palavraTeste.split('');
    console.log(separandoAsLetrasDaPlavra);
    let palavraInvertida = separandoAsLetrasDaPlavra.reverse();
    palavraInvertida = palavraInvertida.join('');
    if(palavraTeste == palavraInvertida){
        console.log(`Palavra ${palavraTeste} é palíndromo`);
        alert(`Palavra ${palavraTeste} é palíndromo`);
    }
    else{
        console.log(`Palavra ${palavraTeste} não é palíndromo`);
        alert(`Palavra ${palavraTeste} não é palíndromo`);
    }
    clearCamp();
}

function clearCamp(){
    InputBox.value = '';
}

VerifyBttn.addEventListener('click', () => isThisWordPalindrome(InputBox.value));