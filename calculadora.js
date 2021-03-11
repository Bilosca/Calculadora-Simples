const calculadora = document.querySelector('#principal')
const keys = calculadora.querySelector("div#botoes-area div#botoes")

keys.addEventListener("click", e =>{
    if(e.target.matches("button")){
        const key = e.target
        const acao = key.dataset.acao
    
        if(!acao){
            console.log("numero")
        }

        if( acao === "soma" ||
            acao === "subtrai" ||
            acao === "multiplica" || 
            acao === "divide"){
                console.log("operador")
            }
        
        if(acao === "calcula"){
            console.log("igual")
        }

        if(acao === "decimal"){
            console.log("decimal")
        }

        if(acao ==="limpa"){
            console.log("limpa")
        }
    }
})


