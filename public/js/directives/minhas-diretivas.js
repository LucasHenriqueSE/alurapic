angular.module('minhasDiretivas', []).directive('meuPainel', function() {
	
	var ddo = {};

	ddo.restrict = "AE";

	ddo.transclude = true;

	ddo.scope = {
		titulo: "@titulo"
	};

	ddo.templateUrl = 'js/directives/meu-painel.html';

	return ddo;

}).directive('minhaFoto', function() {

	var ddo = {};

	ddo.restrict = 'AE';

	ddo.scope = {
		titulo: '@titulo',
		url: '@url'
	};

	ddo.template = '<img class="img-responsive center-block" src="{{url}}" alt="{{titulo}}" />';

	return ddo;

}).directive('meuBotaoPerigo', function(){
	
	var ddo = {};

	ddo.restrict = 'E';

	ddo.scope = {
		acao: '&',
		nome: '@'
	}

	ddo.template = '<button class="btn btn-danger btn-block" ng-click="acao()">{{nome}}</button>';

	return ddo;
	
});