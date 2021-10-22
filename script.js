const display = document.querySelector('.result-display');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

/*Variável criada para verificar se foi selecionado um operador, para que
seja possível limpar o display e mostrar o segundo valor da operação */
let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () =>{
    if(operacaoPendente()){
        const numeroAtual = Number(display.textContent);
        novoNumero = true;

        const resultado = eval (`${numeroAnterior}${operador}${numeroAtual}`);
        atualizarDisplay(resultado);
    }
}

const atualizarDisplay = (texto) => {
    if(novoNumero){
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
}
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);
/*Adiciona o evento click em cada objeto do nosso array numeros*/
numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = (evento) =>{
    if(!novoNumero){
        calcular();
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = Number(display.textContent);
    }
}
/*Adiciona o evento click em cada objeto do nosso array operadores*/
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));