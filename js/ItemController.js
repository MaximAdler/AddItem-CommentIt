var app = angular.module('app');

app.controller('ItemController', ['$scope', '$http', function($scope, $http) {

    $http.get('./data/rows.json').success(function(data) {
        $scope.rows = data;
    });

    $scope.addRow = function() {
      if($scope.name !=''){
        $scope.rows.push({'name': $scope.name});
        $scope.name = '';
      }
    };



    // $scope.removeRow = function(name){
    // 		var index = -1;
    // 		var arr = eval( $scope.rows );
    // 		for( var i = 0; i < arr.length; i++ ) {
    // 			if( arr[i].name === name ) {
    // 				index = i;
    // 				break;
    // 			}
    // 		}
    // 		if( index === -1 ) {
    // 			alert( "Something gone wrong" );
    // 		}
    // 		$scope.rows.splice( index, 1 );
    // 	};
    $scope.removeRow = function(idx) {

        $scope.rows.splice(idx, 1);
    };
}]);
