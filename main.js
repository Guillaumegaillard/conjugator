var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
    $scope.name = "";
	$scope.one=0;
	$scope.two=0;
	$scope.check=function(){
	
	if($scope.name==$scope.target)
	return "ok!";
	else return "Try again";
	};
	
	$scope.validate=function($event){
	if($event.which === 13)
	alert($event);
	}
    
	$scope.newVerb=function(){
	
	iRandomVerb= Math.floor((Math.random()*$scope.verbs.length));
	$scope.verb=$scope.verbs[iRandomVerb];
	iRandomPerson= Math.floor((Math.random()*2)+1);
	$scope.verb=$scope.verbs[iRandomVerb];
	
	switch(iRandomPerson){
	case 1:
	$scope.target=$scope.verb.p1;
	$scope.one++;
	break;
	case 2:
	$scope.target=$scope.verb.p2;
	$scope.two++;
	break;
	
	}
	if($scope.target==""||$scope.target==null)alert(iRandomPerson);

	};
	
	$scope.verbs=[{"name":1,"p1":"verb 1a", "p2":"verb 1b"},
				   {"name":2,"p1":"verb 2a", "p2":"verb 2b"}];
});