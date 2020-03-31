let frase = $(".frase").text()

let numeroPalavras = frase.split(" ").length

let tamanhoFrase = $("#tamanho-frase")

tamanhoFrase.text(numeroPalavras)

var campo = $(".campo-digitacao")

// Contador de caracteres e palavras

campo.on("input", function() {
	let conteudo = campo.val()
	let qtdPalavras = conteudo.split(/\S+/).length - 1
	$("#contador-palavras").text(qtdPalavras)
	$("#contador-caracteres").text(conteudo.length)

})

//Implementando gameover no código


var tempoRestante = $("#tempo-digitacao").text()
campo.one("focus", function() {

	var cronometroID = setInterval(function(){

		tempoRestante--
		$("#tempo-digitacao").text(tempoRestante)
		if (tempoRestante < 1) {
			campo.attr("disabled", true)
			clearInterval(cronometroID)
		}
	}, 1000)	

})



