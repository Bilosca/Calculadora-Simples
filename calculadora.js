// Selecao de Elementos HTML
const calculadora = document.querySelector('#principal')
const keys = calculadora.querySelector("div#botoes-area div#botoes")
const display = document.querySelector("#valores")

// Captura o evento do "click"
keys.addEventListener("click", e =>{

    //Se o target do click for o botao:
    //  Key recebe o botao clicado
    //  acao recebe o dataSet do botao
    //  botaoPressionado recebe o conteudo do botao
    //  displayedNumbers recebe o valor a mostra no input
    //  TipoBotaoAnterior e um data-*
    if(e.target.matches("button")){
        const key = e.target
        const acao = key.dataset.acao
        const botaoPressionado = key.textContent
        const displayedNumbers = display.value
        const tipoBotaoAnterior = calculadora.dataset.tipoBotaoAnterior


        Array.from(key.parentNode.children).forEach(
            k => k.classList.remove("isDepressed"))
        console.log(calculadora.dataset)

        //Se o dataSet nao for uma acao entao e um numero
        if(!acao){

            //Caso o numero no input seja 0 || o tipo do botao for "operador":
            if(displayedNumbers === "0" || tipoBotaoAnterior === "operador"){
                display.value = botaoPressionado 
                calculadora.dataset.tipoBotaoAnterior = ""
               
            }
            else{
                display.value = displayedNumbers + botaoPressionado

                if(botaoPressionado === "0")
                    display.value = displayedNumbers + botaoPressionado
            }
        }

        //se a acao for igual um dos operadores:
        //  Adiciona uma nova classe no botao
        //  define o TipoBotaoAnterior como "operador"  
        if( acao === "soma" ||
            acao === "subtrai" ||
            acao === "multiplica" || 
            acao === "divide"){
                key.classList.add("isDepressed")

                calculadora.dataset.tipoBotaoAnterior = "operador"
            }
        
        // Se a acao for igual o operador de igual
        if(acao === "calcula"){
            console.log("igual")
        }

        // se a acao for igual o operador decimal
        if(acao === "decimal"){
            display.value = displayedNumbers + "."
        }

        // se a acao for limpar
        if(acao ==="limpa"){
            display.value = ""
        }
        console.log(key.classList)

    }
})


