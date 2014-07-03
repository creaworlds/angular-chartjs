/*
*	Angular ChartJS Plugin v1.0.0
*	https://github.com/creaworlds/angular-chartjs
*	
*	Copyright 2014, Antony Acuña
*	Release under the MIT License
*	https://github.com/creaworlds/angular-chartjs/blob/master/LICENSE
*
*	Based on Angular Chartjs Directive
*	https://github.com/earlonrails/angular-chartjs-directive
*/

/* It is recommended that this file will minified before serving.	*/

'use strict';
angular.module('ngChart', []).
  directive('ngChart', function () {
  	var baseWidth = 600;
  	var baseHeight = 400;

  	return {
		// use only as attribute
  		restrict: 'A',
  		template: '<canvas></canvas>',
  		replace: 'true',

		// Isolate the scope allow multiple charts in the same page
  		scope: {
			//bind the model, example: ng-chart="model"
  			chartObject: "=ngChart"
  		},

		// binding
  		link: function (scope, element, attrs) {
  			var canvas = element[0],
				context = canvas.getContext('2d'),
				chart;

			// default chart options
  			var options = {
  				type: attrs.type || "Line",
  				width: attrs.width || baseWidth,
  				height: attrs.height || baseHeight
  			};

  			// Set the width and height of canvas
  			canvas.width = options.width;
  			canvas.height = options.height;

  			// set the canvas id if attribute is defined
  			if (attrs.id) canvas.id = attrs.id;

  			// create the chart
  			chart = new Chart(context);

  			// Update when chart type changes
  			scope.$watch(function () { return element.attr('type'); }, function (value) {
  				if (!value) return;
  				options.type = value;
  				chart[options.type](scope.chartObject.data, scope.chartObject.options);
  			});

  			//Update when chart data changes
  			scope.$watch(function () { return scope.chartObject; }, function (value) {
  				if (!value) return;
  				chart[options.type](scope.chartObject.data, scope.chartObject.options);
  			});
  		}
  	}
  });
