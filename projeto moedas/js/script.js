function carregarMoedas(){

    const requisicaoHttp = new XMLHttpRequest()
    requisicaoHttp.open("GET","https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL",false)
    requisicaoHttp.send()
    
    const resposta = JSON.parse(requisicaoHttp.responseText)
    const moeda = resposta

    const moedas = moeda
   
    adicionarCardMoeda(moedas)
 

    function adicionarCardMoeda(moedas){

        const divCardElemento = document.createElement("div")
        divCardElemento.classList.add("card")
    
        const divElemento = document.getElementById("conteudo-moeda")
    
        const nameElemento = document.createElement("h1")
        nameElemento.innerHTML = moedas.USDBRL.name
        divCardElemento.appendChild(nameElemento)

        const bidElemento = document.createElement("h1")
        bidElemento.innerHTML = moedas.USDBRL.bid
        divCardElemento.appendChild(bidElemento)


        const name1Elemento = document.createElement("h1")
        name1Elemento.innerHTML = moedas.EURBRL.name
        divCardElemento.appendChild(name1Elemento)

        const bid1Elemento = document.createElement("h1")
        bid1Elemento.innerHTML = moedas.EURBRL.bid
        divCardElemento.appendChild(bid1Elemento)


        const name2Elemento = document.createElement("h1")
        name2Elemento.innerHTML = moedas.BTCBRL.name
        divCardElemento.appendChild(name2Elemento)

        const bid2Elemento = document.createElement("h1")
        bid2Elemento.innerHTML = moedas.BTCBRL.bid
        divCardElemento.appendChild(bid2Elemento)
    
        divElemento.appendChild(divCardElemento)
      
    
    }
    
}
