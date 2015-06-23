app.angular.module('example', [
	'common.fabric',
	'common.fabric.utilities',
	'common.fabric.constants'
])

.controller('PremiPresentationEditorCtrl', ['$scope', 'Fabric', 'FabricConstants', 'Keypress', function($scope, Fabric, FabricConstants, Keypress) {

	$scope.fabric = {};
	$scope.FabricConstants = FabricConstants;


	//
	// Init
	// ================================================================
	$scope.init = function() {
		$scope.fabric = new Fabric({
			JSONExportProperties: FabricConstants.JSONExportProperties,
			textDefaults: FabricConstants.textDefaults,
			shapeDefaults: FabricConstants.shapeDefaults,
			json: {}
		});

		$scope.test="TEST_TXT";
	};
}]);
