onload = () => {
    document.querySelector('#bt-0').onclick = () => digito(0);
    document.querySelector('#bt-1').onclick = () => digito(1);
    document.querySelector('#bt-2').onclick = () => digito(2);
    document.querySelector('#bt-3').onclick = () => digito(3);
    document.querySelector('#bt-4').onclick = () => digito(4);
    document.querySelector('#bt-5').onclick = () => digito(5);
    document.querySelector('#bt-6').onclick = () => digito(6);
    document.querySelector('#bt-7').onclick = () => digito(7);
    document.querySelector('#bt-8').onclick = () => digito(8);
    document.querySelector('#bt-9').onclick = () => digito(9);
    document.querySelector('#bt-comma').onclick = () => virgula();
    document.querySelector('#bt-ac').onclick = () => limpa();
    document.querySelector('#bt-divide').onclick = () => operador('/');
    document.querySelector('#bt-multiply').onclick = () => operador('*');
    document.querySelector('#bt-minus').onclick = () => operador('-');
    document.querySelector('#bt-add').onclick = () => operador('+');
    document.querySelector('#bt-equals').onclick = calcula;
    document.querySelector('#nightMode').onclick = darkTheme;
    document.querySelector('#dayMode').onclick = lightTheme;



};

// Variáveis para armazenarmos o valor, o operador e o estado da calculadora
let sValor = '0'; //valor que será apresentado no display
let ehNovoNumero = true; //indica se o próximo digito é de um novo numero
let valorAnterior = 0; //valor acumulado para uma operação
let operacaoPendente = null; //operação acumulada

//Atualização do visor
const atualizaVisor = () => {
    let [parteInteira, parteDecimal] = sValor.split(',');
    let v = '';
    c = 0;
    for (let i = parteInteira.length - 1; i >= 0; i--) {
        if (++c > 3) {
            v = '.' + v;
            c = 1;
        }
            v = parteInteira[i] + v;
    }
    v = v + (parteDecimal ? ',' + parteDecimal : '');
    document.querySelector('#display').textContent = v;
    document.querySelector('#Anterior').textContent = valorAnterior;

};

//Tratamento do clique no botão de digito
const digito = (n) => {
    if(ehNovoNumero) {
        sValor = '' + n;
        ehNovoNumero = false;
    }
    else sValor += n;
    atualizaVisor();
};

//Tratamento do clique no botão de ponto decimal
const virgula = () => {
    if (ehNovoNumero) {
        sValor = '0,';
        ehNovoNumero = false;
    } else
        if (sValor.indexOf(',') == -1) sValor += ',';
    atualizaVisor();
};

//Tratamento do clique no botão AC (All Clear)
const limpa = () => {
    ehNovoNumero = true;
    valorAnterior = 0;
    sValor = '0';
    operadocaoPendente = null;
    atualizaVisor();
};

//converte a string do valor para um numero real
const valorAtual = () => parseFloat(sValor.replace(',', '.'));



//tratamento do clique nos botões de operadores
const operador = (op) => {
    calcula();
    valorAnterior = sValor;
    operacaoPendente = op;
    ehNovoNumero = true;
    //acumula nova operação
};

const calcula = () => {
    if (operacaoPendente != null) {
        valorAnterior = parseFloat(valorAnterior);
        switch (operacaoPendente) {
            case '+': resultado = valorAnterior + valorAtual(); break;
            case '-': resultado = valorAnterior - valorAtual(); break;
            case '*': resultado = valorAnterior * valorAtual(); break;
            case '/': resultado = valorAnterior / valorAtual(); break;
        }
        console.log(typeof valorAnterior);
        sValor = resultado.toString().replace('.', ',');
        //
    }
    ehNovoNumero = true;
    operacaoPendente = null;
    valorAnterior = 0;
    atualizaVisor();
};




// Mudança do tema dia para noite

/*function darkTheme () {
    document.querySelector('#bt-divide').className = ("btn, btn-dark, btn-block, button-text"),
    document.querySelector('#bt-minus').className = ("btn, btn-dark, btn-block, button-text"),
    document.querySelector('#bt-add').className = ("btn, btn-dark, btn-block, button-text"),
    document.querySelector('#bt-multiply').className = ("btn, btn-dark, btn-block, button-text"),
    document.querySelector('#bt-equals').className = ("btn, btn-info, btn-block, button-text"),
}*/

const darkTheme = () => {
    //ativa/desativa o botão night mode
    document.querySelector('#dayMode').className = ("dayMode")
    document.querySelector('#nightMode').className = ("none")
    //Botões Operadores e Igual/AC
    document.querySelector('#bt-divide').className = ("btn btn-secondary btn-block button-text")
    document.querySelector('#bt-minus').className = ("btn btn-secondary btn-block button-text")
    document.querySelector('#bt-add').className = ("btn btn-secondary btn-block button-text")
    document.querySelector('#bt-multiply').className = ("btn btn-secondary btn-block button-text")
    document.querySelector('#bt-equals').className = ("btn btn-info btn-block button-text")
    document.querySelector('#bt-ac').className = ("btn btn-danger btn-block button-text")
    //Botões numéricos
    document.querySelector('#bt-1').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-2').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-3').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-4').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-5').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-6').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-7').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-8').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-9').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-0').className = ("btn btn-dark btn-block button-text")
    // botões de caracteres
    document.querySelector('#bt-comma').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-rBracket').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#bt-lBracket').className = ("btn btn-dark btn-block button-text")
    document.querySelector('#barra').className = ("btn btn-dark btn-block button-text")
    // container principal
    document.querySelector('#card-body').className = ("bodyDark")
    // cabeçalho/display numérico
    document.querySelector('#calculadoraHeader').className = ("headerDark")
    document.querySelector('#bg').className = ("bgDark")
    document.querySelector('#cal').className = ("calDark")
}

const lightTheme = () => {
    //ativa/desativa o botão night mode
    document.querySelector('#dayMode').className = ("none")
    document.querySelector('#nightMode').className = ("nightMode")
    //Botões Operadores e Igual/AC
    document.querySelector('#bt-divide').className = ("btn btn-warning btn-block button-text")
    document.querySelector('#bt-minus').className = ("btn btn-warning btn-block button-text")
    document.querySelector('#bt-add').className = ("btn btn-warning btn-block button-text")
    document.querySelector('#bt-multiply').className = ("btn btn-warning btn-block button-text")
    document.querySelector('#bt-equals').className = ("btn btn-success btn-block button-text")
    document.querySelector('#bt-ac').className = ("btn btn-danger btn-block button-text")
    //Botões numéricos
    document.querySelector('#bt-1').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-2').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-3').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-4').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-5').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-6').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-7').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-8').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-9').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-0').className = ("btn btn-light btn-block button-text")
    // botões de caracteres
    document.querySelector('#bt-comma').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-rBracket').className = ("btn btn-light btn-block button-text")
    document.querySelector('#bt-lBracket').className = ("btn btn-light btn-block button-text")
    document.querySelector('#barra').className = ("btn btn-light btn-block button-text")
    // container principal
    document.querySelector('#card-body').className = ("bodyLight")
    // cabeçalho/display numérico
    document.querySelector('#calculadoraHeader').className = ("headerLight")
    document.querySelector('#bg').className = ("bgLight")
    document.querySelector('#cal').className = ("calLight")
}



