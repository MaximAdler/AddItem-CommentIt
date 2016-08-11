var app = angular.module("app");

app.controller("CommentController", ['$scope', '$http', function($scope, $http) {
  $http.get("./data/comments.json").success(function(data){
    $scope.comment = data;
  })

  $scope.addComment = function(){
    if($scope.txtcomment !=''){
      $scope.comment.push({"text":$scope.txtcomment});
      $scope.txtcomment = '';
    }
  }
}])






function FrmController($scope) {
    $scope.comment = [];
    $scope.btn_add = function() {
        if($scope.txtcomment !=''){
        $scope.comment.push($scope.txtcomment);
        $scope.txtcomment = '';
        }
    }
}
