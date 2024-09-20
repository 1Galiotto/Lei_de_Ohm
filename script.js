
      function trocarParaInfo1() {
            var btn1 = document.getElementById('bt1');
            var btn2 = document.getElementById('bt2');
            // Obtém o elemento com o id "pre2"
            var preElemento = document.getElementById("pre2");
            // Define a primeira informação com imagens
            preElemento.innerHTML = `
                <p>A pirâmide é dividida em três partes: no topo, colocamos a tensão (V ou U), e na base, lado a lado, estão a corrente (I) e a resistência (R).</p>

                <p>A ideia é usar a pirâmide para isolar qualquer uma das variáveis de acordo com a fórmula. Por exemplo:</p>

                <p><b>Se você deseja encontrar a corrente (<i>I</i>), cubra o I na pirâmide. Isso mostra que:</b></p>
                <img src="i.png" alt="Corrente" class="imgpre">

                <p>Se você deseja encontrar a resistência (<i>R</i>), cubra o R na pirâmide. Isso mostra que:</p>
                <img src="r.png" alt="Resistência" class="imgpre">

                <p>Se você deseja encontrar a tensão (<i>V</i>), cubra o V. Isso mostra que V = </p>
                <img src="v.png" alt="Tensão" class="imgpre">
                <p>I⋅R (corrente vezes a resistência).</p>
            `;
            btn1.classList.add('maior');
            btn2.classList.remove('maior');
        }

        function trocarParaInfo2() {
            var btn1 = document.getElementById('bt1');
            var btn2 = document.getElementById('bt2');
            // Obtém o elemento com o id "pre2"
            var preElemento = document.getElementById("pre2");
            preElemento.style.transition = "all 0.3s ease-in-out";
            // Define a segunda informação com imagens e conversões
            preElemento.innerHTML = `
                <p><b>Conversões frequentemente usadas em eletricidade:</b></p>
                <ul>
                    <li><b>mA para A:</b> 1 miliampere (mA) é igual a 0,001 ampere (A). Para converter de mA para A, divida o valor por 1000. Exemplo: 500 mA = 0,5 A.</li>
                    <li><b>A para mA:</b> 1 ampere (A) é igual a 1000 miliamperes (mA). Para converter de A para mA, multiplique o valor por 1000. Exemplo: 0,25 A = 250 mA.</li>
                    <li><b>kΩ para Ω:</b> 1 quilo-ohm (kΩ) é igual a 1000 ohms (Ω). Para converter de kΩ para Ω, multiplique o valor por 1000. Exemplo: 5 kΩ = 5000 Ω.</li>
                    <li><b>Ω para kΩ:</b> 1 ohm (Ω) é igual a 0,001 quilo-ohm (kΩ). Para converter de Ω para kΩ, divida o valor por 1000. Exemplo: 2000 Ω = 2 kΩ.</li>
                </ul>

                <p>Você pode usar estas imagens e informações para entender a aplicação da Lei de Ohm e as conversões comuns.</p>
            `;
            btn1.classList.remove('maior');
            btn2.classList.add('maior');
        }