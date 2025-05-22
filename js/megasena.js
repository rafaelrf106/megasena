document.addEventListener('DOMContentLoaded', function() {
    const generationBtn = document.getElementById('generateBtn');
    const numberElements = document.querySelectorAll('.number'); // Certifique-se de que o seletor está correto, como '.number'

    // Gera números aleatórios ao carregar a página
    generateRandomNumbers();

    generationBtn.addEventListener('click', generateRandomNumbers);

    function generateRandomNumbers() {
        // Gera 6 números inteiros, únicos e aleatórios entre 1 e 60
        const numbers = [];
        while (numbers.length < 6) {
            const randomNum = Math.floor(Math.random() * 60) + 1;
            if (!numbers.includes(randomNum)) { // Corrigido o erro, comparando com 'numbers' e não 'numberElements'
                numbers.push(randomNum);
            }
        }

        // Ordenar os números (como no sorteio da Mega-Sena)
        numbers.sort((a, b) => a - b);

        // Atualizar os elementos com animação
        numberElements.forEach((element, index) => { // Corrigido a sintaxe do 'forEach'
            element.textContent = numbers[index]; // Atualiza o conteúdo de cada elemento

            // Atualiza a classe da animação
            element.classList.remove('animate'); // Certifique-se de que a classe é 'animate'

            // Adiciona a classe de animação
            setTimeout(() => {
                element.classList.add('animate');
            }, 200); // Define um tempo para adicionar a animação
        });
    }
});
