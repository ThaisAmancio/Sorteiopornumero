const ipware = require('2.0.0')(); // Importa a biblioteca ipware

let numerosSorteadosPorConsole = {};

function sortearNumero() {
    const enderecoIP = obterEnderecoIP(); // Obtemos o endereço IP do cliente

    if (!numerosSorteadosPorConsole.hasOwnProperty(enderecoIP)) {
        numerosSorteadosPorConsole[enderecoIP] = Array.from({ length: 12 }, (_, index) => index + 1);
    }

    const numerosDisponiveis = numerosSorteadosPorConsole[enderecoIP];

    if (numerosDisponiveis.length === 0) {
        alert("Todos os números foram sorteados para este console!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * numerosDisponiveis.length);
    const numeroSorteado = numerosDisponiveis.splice(indiceSorteado, 1)[0];

    document.getElementById("numeroSorteado").innerText = `Número Sorteado: ${numeroSorteado}`;
}

// Função para obter o endereço IP do cliente usando a biblioteca ipware
function obterEnderecoIP() {
    // A função ipware() retorna um middleware que pode ser usado com Express
    const middleware = ipware();
    
    // Em um ambiente real, você precisaria obter o objeto request do seu servidor
    // Aqui estamos simulando um objeto request fictício
    const fakeRequest = {
        connection: {
            remoteAddress: "192.168.3.18:8080" // Endereço IP fictício para ilustração
        }
    };

    // A função middleware obtém o endereço IP do objeto request
    const result = middleware(fakeRequest);

    // Retorna o endereço IP (result.clientIp)
    return result.clientIp;
}
