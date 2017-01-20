angular.module('alurapic').controller('FotoController', function($scope, $routeParams, recursoFoto, cadastroDeFotos){
	
	$scope.foto = {};
	$scope.mensagem = '';

	recursoFoto.get({fotoId : $routeParams.fotoId}, 
		function(foto){
			$scope.foto = foto;
		}, 
		function(erro){
			$scope.mensagem = 'Não foi possível obter a foto';
		}
	);

	/*$scope.submeter = function() {
		if($scope.formulario.$valid){
			if($routeParams.fotoId){
				recursoFoto.update({fotoId : $routeParams.fotoId}, $scope.foto, 
					function(){
						$scope.mensagem = 'Foto alterada com sucesso!';
					}, 
					function(erro){
						$scope.mensagem = 'Não foi possível alterar a foto ' + $scope.foto.titulo;
						console.log(erro);
					}
				);
			} else {
				recursoFoto.save($scope.foto, 
					function(){
						$scope.mensagem = 'Foto incluída com sucesso!';

						$scope.foto = {};

						$scope.formulario.$submitted = false;
					}, 
					function(erro){
						$scope.mensagem = 'Não foi possível incluir a foto.';
						console.log(erro);
					}
				);
			}
		}
	};*/

	$scope.submeter = function() {
		if($scope.formulario.$valid){
			cadastroDeFotos.cadastrar($scope.foto)
			.then(function(dados){
				$scope.mensagem = dados.mensagem;
				if(dados.inclusao) $scope.fotos = {};
			})
			.catch(function(erro){
				$scope.mensagem = erro.mensagem;
			})
		}
	};
});