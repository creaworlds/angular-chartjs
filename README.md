angular-chartjs
===============

A Custom AngularJS Directive which allows the use of ChartJS


Features
--------
* Simplify the use of ChartJS on Angular Application

Dependencies
--------
* AngularJS (https://www.angularjs.org/)
* ChartJS (http://www.chartjs.org/)

Usage
--------
``` html
<canvas ng-chart="myChart" width="704" height="200"></canvas>
``` 
``` js
function myController($scope) {
  $scope.myChart.data = {
    labels : ["January","February","March","April","May","June","July"],
    datasets : [
      {
        fillColor : "rgba(220,220,220,0.5)",
        strokeColor : "rgba(220,220,220,1)",
        pointColor : "rgba(220,220,220,1)",
        pointStrokeColor : "#fff",
        data : [65,59,90,81,56,55,40]
      },
      {
        fillColor : "rgba(151,187,205,0.5)",
        strokeColor : "rgba(151,187,205,1)",
        pointColor : "rgba(151,187,205,1)",
        pointStrokeColor : "#fff",
        data : [28,48,40,19,96,27,100]
      }
    ]
  };
};
``` 
**You can use the attribute "type" to set the type of chart:**
``` html
<canvas ng-chart="myChart" type="bar" width="704" height="200"></canvas>
```

Contribution and Bug Report
--------
Feel free if you want to contribute. 

Please use the [GitHub issue tracker](https://github.com/creaworlds/angular-chartjs/issues) for bug
reports and feature requests.

Contributors
--------
 - [Anthony Acuña](http://www.creaworlds.com.mx/)

 License
--------
MIT, based on Angular Chartjs Directive
https://github.com/earlonrails/angular-chartjs-directive
