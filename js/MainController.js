var app = angular.module('app');

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

//items

    $http.get('./data/rows.json').success(function(data) {
        $scope.rows = data;
    });
    $scope.addRow = function() {
      if(this.name){
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

//comments

    $http.get("./data/comments.json").success(function(data){
      $scope.comment = data;
    })
    $scope.addComment = function(){
      if(this.txtcomment){
        $scope.comment.push({"text":$scope.txtcomment});
        $scope.txtcomment = '';
      }
    }









}]);
