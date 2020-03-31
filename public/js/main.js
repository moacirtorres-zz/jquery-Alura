let frase = $(".frase").text()

let numeroPalavras = frase.split(" ").length

let tamanhoFrase = $("#tamanho-frase")

tamanhoFrase.text(numeroPalavras) 
