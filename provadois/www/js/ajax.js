$(document).ready(function(){
	$.ajax({
		type: 'GET',
		url: 'http://swapi.co/api/people/',
		dataType: 'json',
		data: { get_param: 'value' },
		error: function(erro){
			alert(erro.responseText);
		},
		success: function(data){

			var divNomes = document.querySelector("#nomes");

			$.each(data.results, function(i, obj){
				divNomes.innerHTML += "<p><a id='nome' href=javascript:pega('"+obj.url+"');>"   + obj.name + "</a></p>";
				
			});
		}
	});
});

	function pega(pessoa) {
		
		$.ajax({
			type: 'GET', 
			url: pessoa,
			dataType:'json',
			data: { get_param: 'value' },
			
			error: function(erro) {
				alert(erro.responseText);
			},
			
			success: function(data) {
				var divPeople = document.querySelector("#divPessoas");
				divPeople.innerHTML = "";
				divPeople.innerHTML += "<p>Nome: "  + data.name + "</p><p>Altura: " + data.height + "</p><p>Cor do Cabelo: " + data.hair_color + "</p><p>Cor da Pele: " + data.skin_color + "</p>";
	}});
	};
	