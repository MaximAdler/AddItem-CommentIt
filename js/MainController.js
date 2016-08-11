var app = angular.module('app');

app.controller('MainController',['$scope',function($scope){
$scope.name='Type name here...';
$scope.rows = ['First item with custom name','Second  item is active'];
$scope.counter = 1;
$scope.addRow = function(){
	$scope.rows.push($scope.name + ' '+$scope.counter);
  $scope.counter++;
};



$scope.removeRow = function(name){
		var index = -1;
		var arr = eval( $scope.rows );
		for( var i = 0; i < arr.length; i++ ) {
			if( arr[i].name === name ) {
				index = i;
				break;
			}
		}
		if( index === -1 ) {
			alert( "Something gone wrong" );
		}
		$scope.rows.splice( index, 1 );
	};

}])





// angular.module('MyApp', [])
// .controller('MainController', [ '$scope', function($scope) {
//
//   $scope.rows = ['Row 1', 'Row 2'];
//
//   $scope.counter = 3;
//
//   $scope.addRow = function() {
//
//     $scope.rows.push('Row ' + $scope.counter);
//     $scope.counter++;
//   }
// }]);
