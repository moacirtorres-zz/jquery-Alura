let frase = $(".frase").text()

let numeroPalavras = frase.split(" ").length

let tamanhoFrase = $("#tamanho-frase")

tamanhoFrase.text(numeroPalavras)

var campo = $(".campo-digitacao")

campo.on("input", function() {
	let conteudo = campo.val()
	let qtdPalavras = conteudo.split(/\S+/).length - 1
	$("#contador-palavras").text(qtdPalavras)
	$("#contador-caracteres").text(conteudo.length)

})
