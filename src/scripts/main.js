document.addEventListener('DOMContentLoaded', function() {  // Esse código garante que a function a só será executada após o DOM estar totalmente carregado.
    document.getElementById('form-sorteador').addEventListener('submit', function(evento) {
        evento.preventDefault();
        let numeroMax = document.getElementById('numero-maximo').value;
        numeroMax = parseInt(numeroMax); //garantindo q retorna um NUM inteiro

        let numeroAleatorio = Math.random() * numeroMax;    //mathRandom eh um numero aleatorio
        numeroAleatorio = Math.floor (numeroAleatorio + 1);   //math.floor aproxima para baixo! math.round, se der 1,5, aproxima p cima!
                                                                // +1 pra nunca sortear o numero 0
        document.getElementById('resultado-valor').innerText = numeroAleatorio;   //innertext para texto
        document.querySelector('.resultado').style.display = 'block';   //so vai aparecer qnd for clicado!
    })
})


