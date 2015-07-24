var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {
	$scope.name = "";
	$scope.pronom="";
	$scope.person="";
	$scope.tense="";
	$scope.one = 0;
	$scope.two = 0;
	$scope.message = "Ecrie le verb et tape enter";
	$scope.check = function() {

		if ($scope.name == $scope.target)
			return 1;
		else return 0;
	};

	$scope.validate = function($event) {
		$scope.message = "";
		if ($event.which === 13) {
			if ($scope.check() == 1) {
				$scope.message = "Correct!";
				$scope.newVerb();
			}
			else {
				$scope.message = "Incorrect!";
			}

		}
	};

	$scope.newVerb = function() {

		var iRandomVerb = Math.floor((Math.random() * $scope.verbs.length));
		console.log("iRandomVerb: " + iRandomVerb);
		$scope.verb = $scope.verbs[iRandomVerb];
		var iRandomTime = Math.floor((Math.random() * 2) );
		console.log("iRandomTime: " + iRandomTime);
		var iRandomPerson = Math.floor((Math.random() * 6) );
		console.log("iRandomPerson: " + iRandomPerson);
		$scope.verb = $scope.verbs[iRandomVerb];

		$scope.target = $scope.verb.t[iRandomTime][iRandomPerson];
		$scope.pronom=pronoms[iRandomPerson];
		$scope.tense=tenses[iRandomTime];
		$scope.person=person[iRandomPerson];


		if ($scope.target == "" || $scope.target == null) alert(iRandomPerson);
		$scope.name = "";

	};

	$scope.verbs = verbs;
});