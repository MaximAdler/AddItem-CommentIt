var app = angular.module('app');

app.controller('MainController', ['$scope', '$window', '$http', '$compile', function($scope, $window, $http, $compile) {

    //items

    $scope.rows = get();
    $scope.$watch('rows', function(newValue, oldValue) {
        set(newValue);
    }, true)

    $scope.addRow = function(name) {
        if (this.row.name) {
            $scope.rows.push({
                name: $scope.row.name,
                comments: []
            })
            $scope.row.name = '';
        }
    }

    $scope.removeRow = function(i) {
        $scope.rows.splice(i, 1);
    };

    //Comments

    $scope.addComment = function() {
        if ($scope.currentRow) {
            if (this.txtcomment) {
                $scope.currentRow.comments.push($scope.txtcomment)
                $scope.txtcomment = '';
            }
        }
    }

    $scope.onComments = function(i) {
        $scope.rowIndex = i;
        $scope.currentRow = $scope.rows[i];
    }

    //localStorage

    function get() {
        if (!$window.localStorage.rows) {
            $window.localStorage.rows = JSON.stringify([]);
        }
        return JSON.parse($window.localStorage.rows);
    }

    function set(rows) {
        $window.localStorage.rows = JSON.stringify(rows);
    }

}]);
