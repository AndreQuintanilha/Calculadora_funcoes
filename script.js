// Função para inserir valores na tela da calculadora
function inserir(valor) {
    const inputTela = document.getElementById('inputTela');
    inputTela.value += valor;
}

// Função para apagar a tela da calculadora
function apagar() {
    document.getElementById('inputTela').value = '';
}

// Função de backspace para apagar o último caractere
function backspace() {
    const inputTela = document.getElementById('inputTela');
    inputTela.value = inputTela.value.slice(0, -1); // Remove o último caractere
}

// Função para calcular o resultado
function calcular() {
    const inputTela = document.getElementById('inputTela');
    let expressao = inputTela.value;

    try {
        // Verifica se há raiz quadrada na expressão
        if (expressao.includes('√')) {
            const numero = expressao.split('√')[1];
            expressao = Math.sqrt(parseFloat(numero));
        }
        // Verifica se há porcentagem na expressão
        else if (expressao.includes('%')) {
            const [numero, porcentagem] = expressao.split('%');
            expressao = (parseFloat(numero) * parseFloat(porcentagem)) / 100;
        } else {
            // Avalia a expressão para outras operações
            expressao = eval(expressao);
        }

        inputTela.value = expressao;
    } catch (error) {
        inputTela.value = 'Erro';
    }
}