function capturarDado() {
    
    let inputSet = document.getElementById("cep").value
    console.log(inputSet)
    buscarAPI(inputSet)

}



async function buscarAPI(inputSet) {
    let dados = await fetch(`https://viacep.com.br/ws/${inputSet}/json/`)
    .then(response => response.json())
    console.log(dados)
    dadosTela(dados)
    
}

function dadosTela(dados){
    document.getElementById("estado").value = dados.uf
    document.getElementById("cidade").value = dados.localidade
    document.getElementById("bairro").value = dados.bairro
    document.getElementById("endereco").value = dados.logradouro
    

}
 
