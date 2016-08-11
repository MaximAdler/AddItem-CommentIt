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

    $scope.addRow = function() {
        if (this.name) {
            $scope.rows.push({
                name: $scope.name
            });
            $scope.name = '';

            localStorage.setItem('rows', JSON.stringify($scope.rows));
        }
    };

    $scope.removeRow = function(idx) {
        $scope.rows.splice(idx, 1);
        localStorage.setItem('rows', JSON.stringify($scope.rows));
    };



    //comments

    $http.get("./data/comments.json").success(function(data) {
        $scope.comment = data;
    })
    $scope.addComment = function() {
        if (this.txtcomment) {
            $scope.comment.push({
                "text": $scope.txtcomment
            });
            $scope.txtcomment = '';
        }
    }


}]);
