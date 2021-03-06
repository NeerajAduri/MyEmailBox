
var app = angular.module('app', ['ngRoute']);

var reg = new RegExp('^[0-9]$');
var url = new URL(window.location);
var arr= url.href.split('/');



var ID=arr[6];

app.config(function ($routeProvider) {
    
    $routeProvider
    .when('/', {
        templateUrl: '../public_html/WEB-INF/pages/List.html',
        controller: 'mainController'
    })
    
    .when('/create', {
        templateUrl: '../public_html/WEB-INF/pages/Create.html',
        controller: 'mainController'
    })
    
    
    .when(('/view/:reg' ), {
        templateUrl: '../public_html/WEB-INF/pages/View.html',
        controller: 'mainController'
    })
    
/*    .when(('/view'), {
        templateUrl: '/WEB-INF/pages/View.html',
        controller: 'mainController'
    })           -               --- -  if reload is not needed route to this instead */
    
    .when('/list', {
        templateUrl: '../public_html/WEB-INF/pages/List.html',
        controller: 'mainController'
    })
});
/*
app.controller('mainController', ['$scope', '$http', '$location', '$rootScope',  function($scope, $http, $location,$rootScope) {
    
    $scope.name = 'Main';
    $scope.thanks="";
    
    $rootScope.mailList= null;
    $rootScope.mailID=null;
    $rootScope.mailInfo=null;
    
    $scope.submit1 = function() {
    	$http({
            method: 'GET',
            url: 'https://5c5a21f9af3ff700140de477.mockapi.io/api/email'
         }).then(function (response){
        	 $rootScope.mailList=response.data;
        	 console.log(response.data);
         },function (error){
        	 console.log(error);
         });
        }; 
    
    $scope.submit2 = function() {
    	    $rootScope.mailID=ID;
    //    	console.log($rootScope.mailID);
    	$http({
            method: 'GET',
            url: 'https://5c5a21f9af3ff700140de477.mockapi.io/api/email/'+  $rootScope.mailID
         }).then(function (response){
        	 $rootScope.mailInfo=response.data;
        	 console.log($rootScope.mailInfo);
         },function (error){
             console.log(error);
         });
        }; 
    
/*    
    if reload is not needed use this instead
        $scope.submit3 = function(par) {
    	    $rootScope.mailID=par;
    	    ID=par;
    	$http({
            method: 'GET',
            url: 'https://5c5a21f9af3ff700140de477.mockapi.io/api/email/'+  $rootScope.mailID
         }).then(function (response){
        	 $rootScope.mailInfo=response.data;
        //	 $location.path("/view" + $rootScope.mailID )
        //	 console.log($rootScope.mailInfo);
         },function (error){
             console.log(error);
         });
        }; */
    /*
        $scope.cbox=function(par,value){
            var divid= "div"+par.toString();
            var x=document.getElementById(divid);
            if(value===true){x.style.backgroundColor="#c2dbff";}
            else{x.style.backgroundColor="rgba(242,245,245,0.8)";}
            
        }

}]);

*/