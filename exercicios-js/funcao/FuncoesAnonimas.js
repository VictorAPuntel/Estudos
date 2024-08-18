const soma = function(x, y) {
    return x + y
}

const imrprimirResultado = function(a, b, operacao=soma) {
    console.log(operacao(a, b));
}

imrprimirResultado(3, 4)
imrprimirResultado(3, 4, soma)
imrprimirResultado(3, 4, function(x, y){
    return x - y
})
imrprimirResultado(3, 4, (x, y) => x * y)

const pessoal = {
    falar: function() {
        console.log('Opa');
    }
}

pessoal.falar()