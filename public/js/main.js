var tempoInicial = $("#tempo-digitacao").text()
var campo = $(".campo-digitacao")



$(document).ready(function(){
	atualizaTamanhoFrase()
	inicializaContadores()
	inicializaCronometro()
	$("#reiniciar-jogo").on("click", reiniciaJogo)
	inicializarMarcadores()
})

function atualizaTamanhoFrase() {

	let frase = $(".frase").text()
	let numeroPalavras = frase.split(" ").length

	let tamanhoFrase = $("#tamanho-frase")


	tamanhoFrase.text(numeroPalavras)

}



// Contador de caracteres e palavras

function inicializaContadores() {

	campo.on("input", function() {
	let conteudo = campo.val()
	let qtdPalavras = conteudo.split(/\S+/).length - 1
	$("#contador-palavras").text(qtdPalavras)
	$("#contador-caracteres").text(conteudo.length)

})

}




//Implementando gameover no código


function inicializaCronometro() {

	var tempoRestante = $("#tempo-digitacao").text()
	campo.one("focus", function() {
	$("#reiniciar-jogo").attr("disabled",true)	

	var cronometroID = setInterval(function(){

		tempoRestante--
		$("#tempo-digitacao").text(tempoRestante)
		if (tempoRestante < 1) {
			campo.attr("disabled", true)
			clearInterval(cronometroID)
			$("#reiniciar-jogo").attr("disabled", false);
			campo.css("background-color", "lightgray")
			campo.css("border", "3px solid black")
			inserePlacar()
		}
	}, 1000)

})


}




// Reinicializando o jogo

function reiniciaJogo() {
	
	campo.attr("disabled", false)
	campo.val("")
	$("#contador-palavras").text("0")
	$("#contador-caracteres").text("0")
	$("#tempo-digitacao").text(tempoInicial)
	campo.css("background-color", "white")
	inicializaCronometro()
	
}

// Verificando digitação


function inicializarMarcadores() {

var frase = $(".frase").text()

campo.on("input", function() {
	var digitado = campo.val()
	var comparavel = frase.substr(0, digitado.length)
	if (digitado == comparavel) {
		campo.css("border", "3px solid blue")
	} else {
		campo.css("border", "3px solid red")
		}

	})
}



// Implementando elementos na tabela de pontuação

function inserePlacar() {
	var tabela = $(".placar").find("table")
	var corpoTabela = $(".placar").find("tbody")
	var usuario = "Moacir"
	var numPalavras = $("#contador-palavras").text()
	var linha = novaLinha(usuario, numPalavras)
	linha.find(".botao-remover").click(removeLinha)
	corpoTabela.prepend(linha)
}

function removeLinha() {

$(".botao-remover").click(function(event) {
			event.preventDefault()
			$(this).parent().parent().remove() 
	})
}

function novaLinha(usuario, numPalavras) {
	var linha = $("<tr>")
	var colunaUsuario = $("<td>").text(usuario)
	var colunaPalavras = $("<td>").text(numPalavras)
	var colunaRemover = $("<td>")
	var link = $("<a>").addClass("botao-remover").attr("href", "#")
	var icone = $("<i>").addClass("small").addClass("material-icons").text("delete")
	link.append(icone)
	colunaRemover.append(link)
	linha.append(colunaUsuario)
	linha.append(colunaPalavras)
	linha.append(colunaRemover)

	console.log(linha)

	return linha
}