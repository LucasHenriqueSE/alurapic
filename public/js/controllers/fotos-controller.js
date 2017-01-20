angular.module('alurapic').controller('FotosController', function($scope, recursoFoto){

	$scope.fotos = [];
	$scope.filtro = '';
	$scope.mensagem = '';

	/*$http.get("v1/fotos")
	.success(function(fotos){
		$scope.fotos = fotos;
	}).error(function(erro){
		console.log(erro);
	});*/

	recursoFoto.query(
		function(fotos){
			$scope.fotos = fotos;
		}, 
		function(erro){
			console.log(erro);
		}
	);
	
	/*$http.delete('v1/fotos/' + foto._id)
	.success(function(){
		$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
		var indiceDaFoto = $scope.fotos.indexOf(foto);
		$scope.fotos.splice(indiceDaFoto, 1);
	}).error(function(erro){
		$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
		console.log(erro);
	});*/

	$scope.remover = function(foto){
		recursoFoto.delete({fotoId : foto._id}, 
			function(){
				$scope.mensagem = 'Foto ' + foto.titulo + ' removida com sucesso!';
				var indiceDaFoto = $scope.fotos.indexOf(foto);
				$scope.fotos.splice(indiceDaFoto, 1);
			}, 
			function(erro){
				$scope.mensagem = 'Não foi possível remover a foto ' + foto.titulo;
				console.log(erro);
			}
		);
	};
});