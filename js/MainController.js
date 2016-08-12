var app = angular.module('app');

app.controller('MainController', ['$scope', '$http', function($scope, $http) {

    //items

    // $http.get('./data/rows.json').success(function(data) {
    //     $scope.rows = data;
    // });

    $scope.saved = localStorage.getItem('rows');
    $scope.rows = (localStorage.getItem('rows') !== null) ? JSON.parse($scope.saved) : $http.get('./data/rows.json').success(function(data) {
        $scope.rows = data;
    });
    localStorage.setItem('rows', JSON.stringify($scope.rows));

    $scope.rowsIndex = 0;

    $scope.index = function(id) {
       $scope.rowsIndex = id;
      console.log(id);
    }

    $scope.addRow = function() {
        if (this.name) {
            $scope.rows.push({
                name: $scope.name,
                id: $scope.rows.lenght + 1
            });
            $scope.name = '';

            localStorage.setItem('rows', JSON.stringify($scope.rows));
        }
    };

    $scope.removeRow = function(idx) {
        $scope.rows.splice(idx, 1);
        localStorage.setItem('rows', JSON.stringify($scope.rows));
    };

//Select Row


$scope.showDetails = true;
    // $scope.selectedRow = null;
    //
    // $scope.getDetails = function(app) {
    //     $scope.selectedRow = app;
    // };

    //comments






$scope.savedCom = localStorage.getItem('comment');
$scope.comment = (localStorage.getItem('comment') !== null) ? JSON.parse($scope.savedCom) : $http.get('./data/comments.json').success(function(data) {
    $scope.comment= data;
});
localStorage.setItem('comment', JSON.stringify($scope.comment));

    $scope.addComment = function() {
        if (this.txtcomment) {
            $scope.comment.push({
                text: $scope.txtcomment
            });
            $scope.txtcomment = '';
            localStorage.setItem('comment',JSON.stringify($scope.comment));
        }
    }


}]);
