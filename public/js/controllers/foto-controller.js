angular.module('alurapic').controller('FotoController', function($scope, $http, $routeParams){
	
	$scope.foto = {};
	$scope.mensagem = '';

	if($routeParams.fotoId){
		$http.get('v1/fotos/' + $routeParams.fotoId)
		.success(function(foto){
			$scope.foto = foto;
		}).error(function(erro){
			$scope.mensagem = 'Não foi possível encontrar a foto ' + $scope.foto.titulo;
		});
	} else {
		$http.get("v1/fotos")
		.success(function(fotos){
			$scope.fotos = fotos;
		}).error(function(erro){
			console.log(erro);
		});
	}

	$scope.submeter = function() {
		if($scope.formulario.$valid){
			if($routeParams.fotoId){
				$http.put('v1/fotos/' + $routeParams.fotoId, $scope.foto)
				.success(function(){
					$scope.mensagem = 'Foto ' + $scope.foto.titulo + ' foi alterada com sucesso!';
				}).error(function(erro){
					$scope.mensagem = 'Não foi possível editar a foto ' + $scope.foto.titulo;
					console.log(erro);
				});
			} else {
				$http.post('v1/fotos', $scope.foto)
				.success(function(){
					$scope.mensagem = 'Foto incluída com sucesso!';	
					$scope.foto = {};
				}).error(function(erro){
					$scope.mensagem = 'Não foi possível incluir a foto.';
					console.log(erro);
				});
			}
		}
	};
});