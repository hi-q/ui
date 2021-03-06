angular.module('ui').directive('gridView', [
	  'gridViewConfiguration'

	, function (gridViewConfiguration) {
		'use strict';

		return {
			  restrict: 'C'
		  	, templateUrl: gridViewConfiguration.templateUrl
			, scope: {
				, 'ngModel': '='
			}
			, require: '^ngModel'
			, controller: [
				  '$scope'
				, function	($scope) {
					
				}
			]
		}
	}
]);

angular.module('ui').directive('gridViewItem', [
	'gridViewConfiguration'
	, function (gridViewConfiguration) {
		'use strict';

		return {
			  restrict: 'C'
			, require: '^gridView'
			, templateUrl: gridViewConfiguration.itemTemplateUrl
		}
	}
]);

angular.module('ui').provider('gridViewConfiguration', [
	function gridViewConfigurationProvider() {
	
		var 
			  cfg = {}
			, cfgInterface = {
				getValue: function (valueName) {
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