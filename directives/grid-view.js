angular.module('ui').directive('gridView', [
	  'gridViewConfiguration'

	, function (gridViewConfiguration) {
		'use strict';

		return {
			  restrict: 'C'
		  	, templateUrl: gridViewConfiguration.templateUrl
			, scope: {
				'gridViewItemTemplateUrl': '@'
				, 'ngModel': '='
			}
			, require = '^ngModel'
			, controller: [
				  '$scope'
				, function	($scope) {
					var gridViewCtrl = this;

					gridViewCtrl.getGridViewTemplateUrl = function () {
						return $scope.gridViewItemTemplateUrl;	
					};
				}
			]
		}
	}
]);

angular.module('ui').directive('gridViewItem', [
	function () {
		'use strict';

		return {
			restrict: 'C'
			, require: '^gridView'
			, 
		}
	}
]);

angular.module('ui').provider('gridViewConfiguration', [
	function gridViewConfigurationProvider() {
	
		var 
			  cfg = {}
			, cfgInterface = {
				getValue = function (valueName) {
					return cfg[valueName];
				}
			}
		;

		this.setValue = function (valueName, value) { 
			cfg[valueName] = value;
		};

		this.$get = [function () {
			return cfgInterface;
		}];

	}
]);