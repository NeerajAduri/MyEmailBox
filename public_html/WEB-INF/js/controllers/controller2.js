

app.controller('second', ['$scope', '$timeout', function($scope, $timeout) {
    console.log("Hi");
    $scope.welcome = 'Welcome to my profile';
    
    $timeout(function(){
    	$scope.welcome='Hope you will like it!';
    },2000);
    
}]);

