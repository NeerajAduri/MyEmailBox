/**
 * 
 */

app.controller('controller1', ['$scope','$http',function($scope,$http) {
	$scope.bookingForm={};
	$scope.bookingForm.location="Hyderabad";
	$scope.bookingForm.boatingType=null;
	$scope.bookingForm.dateOfRide=null;
	$scope.bookingForm.noOfPeople=null;
	$scope.bookingForm.contactNo=null;
	$scope.bookingForm.newsletter=null;
	$scope.bookingForm.message=null;
	
	$scope.jobs=null;
    
    console.log($scope.bookingForm.location);
    
    
    
	
    $scope.submit = function() {
    	console.log("Hi");
    	$http({
            method: 'GET',
            url: 'https://indreed.herokuapp.com/api/jobs/?l=United%20States'
         }).then(function (response){
        	 $scope.jobs=response;
         },function (error){
        	 console.log(error);
         });
        };
        
    }]);