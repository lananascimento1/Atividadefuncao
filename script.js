// Função para calcular a gorjeta
const calcularGorjeta = (valor, qualidade) => {
    let porcentagem;

    switch (qualidade) {
        case 'muitobom':
            porcentagem = 0.20; // 20%
            break;
        case 'bom':
            porcentagem = 0.15; // 15%
            break;
        case 'regular':
            porcentagem = 0.10; // 10%
            break;
        case 'ruim':
            porcentagem = 0.05; // 5%
            break;
        case 'muitoruim':
            porcentagem = 0.02; // 2% (corrigido de 0.2 para 0.02)
            break;
        default:
            porcentagem = 0;
            break;
    }

    return valor * porcentagem;
};

// Função para exibir o resultado
const exibirResultado = (gorjeta) => {
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.textContent = `Gorjeta sugerida: R$ ${gorjeta.toFixed(2)}`;
};

// Adiciona um event listener ao botão de calcular
document.getElementById('calcularGorjeta').addEventListener('click', () => {
    const valorConta = parseFloat(document.getElementById('valorConta').value);
    const qualidadeServico = document.querySelector('.botoes .active')?.dataset.qualidade;

    if (!isNaN(valorConta) && valorConta > 0 && qualidadeServico) {
        const gorjeta = calcularGorjeta(valorConta, qualidadeServico);
        exibirResultado(gorjeta);
    } else {
        alert("Por favor, insira um valor válido para a conta e selecione a qualidade do serviço.");
    }
});

// Adiciona evento de clique para os botões de emoji
document.querySelectorAll('.botoes button').forEach(button => {
    button.addEventListener('click', function () {
        // Remove a classe 'active' de todos os botões
        document.querySelectorAll('.botoes button').forEach(btn => btn.classList.remove('active'));
        // Adiciona a classe 'active' ao botão clicado
        this.classList.add('active');
    });
});

const botoes = document.querySelectorAll('.botoes button');

botoes.forEach(button => {
    button.addEventListener('click', function () {
        // Remove a classe 'ativo' de todos os botões
        botoes.forEach(btn => btn.classList.remove('ativo'));
        // Adiciona a classe 'ativo' ao botão clicado
        this.classList.add('ativo');
    });
});

