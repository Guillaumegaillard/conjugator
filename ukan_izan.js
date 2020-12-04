var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {
	$scope.verbs = verbs;
	$scope.deters = deters;
	$scope.names = names;
	$scope.adjs = adjs;
	$scope.pronoms = pronoms;
	$scope.shown_verb_tab = false;

	$scope.deter1 = "";
	$scope.adj1="";
	$scope.name1="";
	
	$scope.deter2 = "";
	$scope.adj2="";
	$scope.name2="";

	$scope.verb="";
	$scope.infinitif="";

	$scope.hints = [];
	$scope.shownHints = [];
	$scope.num_hints = 0;

	$scope.target = "";
	$scope.target_chunks = {"name1":"", "ordin1":"", "adj1":"", "verb":"", "name2":"", "adj2":"", "ordin2":""};

	$scope.message = " Écrire la traduction. NB: l'ordre des mots n'est pas vérifié ici.";

	$scope.check = function() {

		var form_input=$scope.client_input.toLowerCase().replace(" .","").replace(".","").replace(/  /g," ").split(" ").sort();
		var form_target=$scope.target.toLowerCase().replace(".","").split(" ").sort();

		var is_same=true;
		var i = form_target.length;
		if (i!=form_input.length) {
			is_same= false;
		} else {
			while (i--) {
			    if (form_input[i] !== form_target[i]) is_same= false;
			};			
		};

		// console.log("input chunks: " + form_input);
		// console.log("target chunks: " + form_target);

		// if ($scope.client_input == $scope.target)
		// if (form_input == form_target)
		if (is_same)
			return 1;
		else return 0;
	};

	$scope.validate = function($event) {
		$scope.message = "";
		if ($event.which === 13) {
			if ($scope.check() == 1) {
				$scope.message = " Correct !";
				// $scope.newTest();
			}
			else {
				$scope.message = " Incorrect !";
			}

		}
	};

	$scope.newTest = function() {

		$scope.deter1 = "";
		$scope.adj1="";
		$scope.name1="";
		
		$scope.deter2 = "";
		$scope.adj2="";
		$scope.name2="";

		$scope.verb="";
		$scope.infinitif="";

		$scope.hints=[];
		$scope.num_hints = 0;
		$scope.shownHints=[];
		$scope.shown_verb_tab = false;

		$scope.message = " Écrire la traduction. NB: l'ordre des mots n'est pas vérifié ici.";

		$scope.target = "";
		$scope.target_chunks = {"name1":"", "suf_name1":"", "ordin1":"", "adj1":"", "verb":"", "name2":"", "suf_name2":"", "adj2":"", "ordin2":""};

		var vowelRegex = '^[aieouAIEOUéèêÊÉÈËëÜü].*'; //TODO: French H muda


		//////// NAME GROUP 1
		var iRandom_name1 = Math.floor((Math.random() * (1+$scope.names.length)));
		var name1_is_pronom;
		var name1_is_prenom = false;
		var name1;
		if (iRandom_name1 == 0) {
			name1_is_pronom=true;
			var iRandom_pron1 = Math.floor((Math.random() * ($scope.pronoms.length)));
			name1 = pronoms[iRandom_pron1];
		} else {
			name1_is_pronom=false;
			name1 = names[iRandom_name1-1];
		}

		$scope.name1 = name1.fr;
		$scope.hints.push(name1);
		$scope.target_chunks["name1"]=name1.eus;




		if (!(name1_is_pronom)) {
			var iRandom_deter1 = Math.floor((Math.random() * ($scope.deters.length)));
			if (name1.fr_f && "fr_f" in deters[iRandom_deter1]) {
				$scope.deter1 = deters[iRandom_deter1].fr_f;
			} else {
				$scope.deter1 = deters[iRandom_deter1].fr;
			}
			if (deters[iRandom_deter1].num == "plur") {
				if (deters[iRandom_deter1].quant == "ordin") {
					if (Math.floor((Math.random() *2))>0) {
						$scope.deter1 = "les "+$scope.deter1;
						$scope.target_chunks["suf_name1"]="ak";
					};
				} else {
					if (deters[iRandom_deter1].quant == "deter") $scope.target_chunks["suf_name1"]="ak";
					if (deters[iRandom_deter1].quant == "indet") $scope.target_chunks["ordin1"]=deters[iRandom_deter1].eus;
				};
				if ("plur_fr" in name1) {$scope.name1 = name1.plur_fr;} else{$scope.name1 +="s";}
			} else{
				if (deters[iRandom_deter1].quant == "deter") $scope.target_chunks["suf_name1"]="a";
				if (deters[iRandom_deter1].quant == "indet") $scope.target_chunks["ordin1"]=deters[iRandom_deter1].eus;
			};
			if (deters[iRandom_deter1].quant == "ordin") {
				$scope.hints.push(deters[iRandom_deter1]);
				$scope.target_chunks["ordin1"]=deters[iRandom_deter1].eus;
			}
			if (deters[iRandom_deter1].quant == "indet") $scope.hints.push(deters[iRandom_deter1]);

			


			var iRandom_adj1 = Math.floor((Math.random() * (1+$scope.adjs.length)));
			if (iRandom_adj1 == 0) {
				$scope.adj1 = "";
				if ((deters[iRandom_deter1].num == "sing") && ($scope.name1.match(vowelRegex)) && ("fr_before_vowel" in deters[iRandom_deter1])) {
					$scope.deter1 = deters[iRandom_deter1].fr_before_vowel;
				};
				if ($scope.name1.charAt(0)==$scope.name1.charAt(0).toUpperCase()) {				
					name1_is_prenom = true;
					if (deters[iRandom_deter1].num == "sing") {
						if (deters[iRandom_deter1].quant == "deter") $scope.deter1 = "";
						// if ($scope.target_chunks["suf_name1"]=="a") $scope.target_chunks["suf_name1"]="";
					}

				};
			} else {
				if (deters[iRandom_deter1].num == "plur") {
					if (name1.fr_f) {
						if ("fr_f_plur" in adjs[iRandom_adj1-1]) {
							$scope.adj1 = adjs[iRandom_adj1-1].fr_f_plur;
						} else{
							if ("fr_f" in adjs[iRandom_adj1-1]) {
								$scope.adj1 = adjs[iRandom_adj1-1].fr_f+"s";
							} else {$scope.adj1 = adjs[iRandom_adj1-1].fr+"es";}
						}
					} else {
						if ("plur_fr" in adjs[iRandom_adj1-1]) {
							$scope.adj1 = adjs[iRandom_adj1-1].plur_fr;
						} else {$scope.adj1 = adjs[iRandom_adj1-1].fr+"s";}
					}
				} else {
					if (name1.fr_f) {
						if ("fr_f" in adjs[iRandom_adj1-1]) {
							$scope.adj1 = adjs[iRandom_adj1-1].fr_f;
						} else {$scope.adj1 = adjs[iRandom_adj1-1].fr+"e";}
					} else {$scope.adj1 = adjs[iRandom_adj1-1].fr;};
					if (($scope.adj1.match(vowelRegex)) && ("fr_before_vowel" in deters[iRandom_deter1])) {
						$scope.deter1 = deters[iRandom_deter1].fr_before_vowel;
					};
				};
				$scope.adj1+=" ";
				$scope.hints.push(adjs[iRandom_adj1-1]);
				$scope.target_chunks["adj1"]=adjs[iRandom_adj1-1].eus;

			}
		};


		//////// VERB
		var iRandom_verb = Math.floor((Math.random() * $scope.verbs.length));
		var infinitif=$scope.verbs[iRandom_verb];
		$scope.infinitif=$scope.verbs[iRandom_verb];
		var pers;
		var pers_COD = 0;

		if (!(name1_is_pronom)) {
			if (deters[iRandom_deter1].num == "plur") {
				pers=5;
			} else {
				pers=2;				
			}
			
		} else {pers=name1.fr_pers;};

		// $scope.verb = infinitif.fr;
		$scope.verb = infinitif.fr_c[pers];

		if ((pers == 0) && ($scope.verb.match(vowelRegex))) {
			$scope.name1 = "j'";
		} else {
			$scope.name1 += " ";			
		};


		// NAME GROUP 2
		var iRandom_name2 = Math.floor((Math.random() * (1+$scope.names.length)));
		var name2_is_adj;
		var name2_is_prenom = false;
		var name2;

		if (iRandom_name2 == 0 && infinitif.trans) iRandom_name2=Math.floor((Math.random() * ($scope.names.length)))+1;

		if (iRandom_name2 == 0) {
			name2_is_adj=true;
			var iRandom_adj2 = Math.floor((Math.random() * ($scope.adjs.length)));
			name2 = adjs[iRandom_adj2];
			if (iRandom_adj2!=iRandom_adj1-1) $scope.hints.push(name2);


			if ((name1_is_pronom && name1.fr_pers>2) || (!(name1_is_pronom) && deters[iRandom_deter1].num == "plur")) {
				if (name1.fr_f) {
					if ("fr_f_plur" in name2) {
						$scope.name2 = name2.fr_f_plur;
					} else{
						if ("fr_f" in name2) {
							$scope.name2 = name2.fr_f+"s";
						} else {$scope.name2 = name2.fr+"es";}
					}
				} else {
					if ("plur_fr" in name2) {
						$scope.name2 = name2.plur_fr;
					} else {$scope.name2 = name2.fr+"s";}
				};
				$scope.target_chunks["suf_name2"]="ak";
			} else {
				if (name1.fr_f) {
					if ("fr_f" in name2) {
						$scope.name2 = name2.fr_f;
					} else {$scope.name2 = name2.fr+"e";}
				} else {$scope.name2 = name2.fr;};
				$scope.target_chunks["suf_name2"]="a";
			}
			// $scope.target_chunks["suf_name2"]=$scope.target_chunks["suf_name1"];

		} else {
			name2_is_adj=false;
			name2 = names[iRandom_name2-1];
			$scope.name2 = name2.fr;
			if (iRandom_name2!=iRandom_name1) $scope.hints.push(name2);
		};

		$scope.target_chunks["name2"]=name2.eus;


		if (!(name2_is_adj)) {
			var iRandom_deter2 = Math.floor((Math.random() * ($scope.deters.length)));
			if (name2.fr_f && "fr_f" in deters[iRandom_deter2]) {
				$scope.deter2 = deters[iRandom_deter2].fr_f;
			} else {
				$scope.deter2 = deters[iRandom_deter2].fr;
			}
			if (deters[iRandom_deter2].num == "plur") {
				if (deters[iRandom_deter2].quant == "ordin") {
					$scope.target_chunks["ordin2"]=deters[iRandom_deter2].eus;
					if ( (name1_is_pronom) || ( (!(name1_is_pronom)) && (iRandom_deter1!=iRandom_deter2) )) $scope.hints.push(deters[iRandom_deter2]);

					if (Math.floor((Math.random() *2))>0) {
						$scope.deter2 = "les "+$scope.deter2;
						$scope.target_chunks["suf_name2"]="ak";
					}
				} else {
					if (deters[iRandom_deter2].quant == "deter") $scope.target_chunks["suf_name2"]="ak";
					if (deters[iRandom_deter2].quant == "indet") $scope.target_chunks["ordin2"]=deters[iRandom_deter2].eus;
				};
				if ("plur_fr" in name2) {$scope.name2 = name2.plur_fr;} else{$scope.name2 +="s";}
			} else {
				if (deters[iRandom_deter2].quant == "deter") $scope.target_chunks["suf_name2"]="a";
				if (deters[iRandom_deter2].quant == "ordin") {
					if ( (name1_is_pronom) || ( (!(name1_is_pronom)) && (iRandom_deter1!=iRandom_deter2) )) $scope.hints.push(deters[iRandom_deter2]);
					$scope.target_chunks["ordin2"]=deters[iRandom_deter2].eus;
				};
				if (deters[iRandom_deter2].quant == "indet") $scope.target_chunks["ordin2"]=deters[iRandom_deter2].eus;
			};
			if (deters[iRandom_deter2].quant == "indet") {
				// $scope.hints.push(deters[iRandom_deter2]);
				if ( (name1_is_pronom) || ( (!(name1_is_pronom)) && (iRandom_deter1!=iRandom_deter2) )) $scope.hints.push(deters[iRandom_deter2]);
			}


			var iRandom_adj2 = Math.floor((Math.random() * (1+$scope.adjs.length)));
			if (iRandom_adj2 == 0) {
				$scope.adj2 = "";
				if ((deters[iRandom_deter2].num == "sing") && ($scope.name2.match(vowelRegex)) && ("fr_before_vowel" in deters[iRandom_deter2])) {
					$scope.deter2 = deters[iRandom_deter2].fr_before_vowel;
				};
				if ($scope.name2.charAt(0)==$scope.name2.charAt(0).toUpperCase()) {
					name2_is_prenom = true;
					if (deters[iRandom_deter2].num == "sing") {
						if (deters[iRandom_deter2].quant == "deter") $scope.deter2 = "";
						// if ($scope.target_chunks["suf_name2"]=="a") $scope.target_chunks["suf_name1"]="";
					}
				};
			} else {
				if (deters[iRandom_deter2].num == "plur") {
					if (name2.fr_f) {
						if ("fr_f_plur" in adjs[iRandom_adj2-1]) {
							$scope.adj2 = adjs[iRandom_adj2-1].fr_f_plur;
						} else{
							if ("fr_f" in adjs[iRandom_adj2-1]) {
								$scope.adj2 = adjs[iRandom_adj2-1].fr_f+"s";
							} else {$scope.adj2 = adjs[iRandom_adj2-1].fr+"es";}
						}
					} else {
						if ("plur_fr" in adjs[iRandom_adj2-1]) {
							$scope.adj2 = adjs[iRandom_adj2-1].plur_fr;
						} else {$scope.adj2 = adjs[iRandom_adj2-1].fr+"s";}
					}
				} else {
					if (name2.fr_f) {
						if ("fr_f" in adjs[iRandom_adj2-1]) {
							$scope.adj2 = adjs[iRandom_adj2-1].fr_f;
						} else {$scope.adj2 = adjs[iRandom_adj2-1].fr+"e";}
					} else {$scope.adj2 = adjs[iRandom_adj2-1].fr;};
					if (($scope.adj2.match(vowelRegex)) && ("fr_before_vowel" in deters[iRandom_deter2])) {
						$scope.deter2 = deters[iRandom_deter2].fr_before_vowel;
					};
				};
				$scope.adj2+=" "
				if (iRandom_adj2!=iRandom_adj1) $scope.hints.push(adjs[iRandom_adj2-1]);
				$scope.target_chunks["adj2"]=adjs[iRandom_adj2-1].eus;

			}
		};

		


		///////// CHANGE SUFFIXES OF GN1 IF NORK
		if (infinitif.trans) {
			if (deters[iRandom_deter2].num == "plur") pers_COD = 1;
			if ($scope.target_chunks["suf_name1"]=="ak") $scope.target_chunks["suf_name1"]="ek";
			if ($scope.target_chunks["suf_name1"]=="a") $scope.target_chunks["suf_name1"]="ak";
			if ($scope.target_chunks["suf_name1"]=="") $scope.target_chunks["suf_name1"]="k";
			if (name1_is_pronom) $scope.target_chunks["suf_name1"]="k";			
		};
		$scope.target_chunks["verb"]=infinitif.eus_c[pers_COD][pers];

		// console.log("target chunks: " + $scope.target_chunks["name1"]);
		// console.log("target chunks: " + $scope.target_chunks["suf_name1"]);
		// console.log("target chunks: " + $scope.target_chunks["ordin1"]);
		// console.log("target chunks: " + $scope.target_chunks["adj1"]);
		// console.log("target chunks: " + $scope.target_chunks["verb"]);
		// console.log("target chunks: " + $scope.target_chunks["name2"]);
		// console.log("target chunks: " + $scope.target_chunks["suf_name2"]);
		// console.log("target chunks: " + $scope.target_chunks["adj2"]);
		// console.log("target chunks: " + $scope.target_chunks["ordin2"]);


		///////// GATHER THE BASQUE

		//GN1
		// ordin goes first
		// then name
		// except bat
		var bat1 = false;
		var bat2 = false;
		var lastchar;
		var last_is_vowel;


		var name1_is_last_and_prenom = name1_is_prenom;
		var name2_is_last_and_prenom = name2_is_prenom;

		

		if (($scope.target_chunks["ordin1"]=="bat")||(($scope.target_chunks["ordin1"].length>0)&&(deters[iRandom_deter1].quant == "indet"))) {
			bat1=true;
			$scope.target+=$scope.target_chunks["name1"];
			name1_is_last_and_prenom=false;
		} else {
			if ($scope.target_chunks["ordin1"].length > 0){
				$scope.target+=$scope.target_chunks["ordin1"];
				$scope.target+=" ";
			};
			$scope.target+=$scope.target_chunks["name1"];
		};
		
		// adj bears suffix unless bat
		if ($scope.target_chunks["adj1"].length > 0){
			name1_is_last_and_prenom=false;
			$scope.target+=" ";
			$scope.target+=$scope.target_chunks["adj1"];
		};

		if (bat1) {
			$scope.target+=" ";
			$scope.target+=$scope.target_chunks["ordin1"];			
		};

		if ($scope.target_chunks["suf_name1"].length > 0){

			// pronom +k (trans) except if already a k (zuek, beraiek) 
			if ((name1_is_pronom) && ($scope.target.slice(-1)!="k") ) {
				$scope.target+=$scope.target_chunks["suf_name1"];
			} else {
				if (!(name1_is_pronom)){
					lastchar=$scope.target.slice(-1);
					if (name1_is_last_and_prenom){
						if ($scope.target_chunks["suf_name1"]=="a") $scope.target_chunks["suf_name1"]="";
						// if ($scope.target_chunks["suf_name1"]=="ak") $scope.target_chunks["suf_name1"]="ak";
						if (infinitif.trans) {
							if ($scope.target_chunks["suf_name1"]=="ak") $scope.target_chunks["suf_name1"]="k";
						}
						if (($scope.target_chunks["suf_name1"]=="ak")&&(lastchar=="a")) $scope.target_chunks["suf_name1"]="k";
						if ($scope.target_chunks["suf_name1"]=="ek") $scope.target_chunks["suf_name1"]="k"; //TODO: check that (Guillaumeek?)
						// if ($scope.target_chunks["suf_name1"]=="k") $scope.target_chunks["suf_name1"]="k";

					};
					if ($scope.target_chunks["suf_name1"].length > 0){
						last_is_vowel= (lastchar.match(vowelRegex));

						// +r if r
						if (lastchar=="r") $scope.target+="r";

						// +e if indet conson + ergative (k)
						if ($scope.target_chunks["suf_name1"]=="k") {
							if (!(last_is_vowel)) $scope.target+="e";
							$scope.target+="k";
						// else -a if already a + suf
						} else {
							if ((lastchar=="a")&&(!(name1_is_last_and_prenom))) $scope.target=$scope.target.slice(0,-1);
							$scope.target+=$scope.target_chunks["suf_name1"];
						}
					};
				};
			};
		};
		$scope.target+=" ";

		//GN2 ###################################################################################
		// if ($scope.target_chunks["ordin2"]=="bat"){
		if (($scope.target_chunks["ordin2"]=="bat")||(($scope.target_chunks["ordin2"].length>0)&&(deters[iRandom_deter2].quant == "indet"))) {
			bat2=true;
			$scope.target+=$scope.target_chunks["name2"];
			name2_is_last_and_prenom=false;
		} else {
			if ($scope.target_chunks["ordin2"].length > 0){
				$scope.target+=$scope.target_chunks["ordin2"];
				$scope.target+=" ";
			};
			$scope.target+=$scope.target_chunks["name2"];
		};
		
		if ($scope.target_chunks["adj2"].length > 0){
			name2_is_last_and_prenom=false;
			$scope.target+=" ";
			$scope.target+=$scope.target_chunks["adj2"];
		};
		if (bat2) {
			$scope.target+=" ";
			$scope.target+=$scope.target_chunks["ordin2"];			
		};

		if ($scope.target_chunks["suf_name2"].length > 0){
			lastchar=$scope.target.slice(-1);
			if (name2_is_last_and_prenom){
				if ($scope.target_chunks["suf_name2"]=="a") $scope.target_chunks["suf_name2"]="";
				if (($scope.target_chunks["suf_name2"]=="ak")&&(lastchar=="a")) $scope.target_chunks["suf_name2"]="k";
			};
			if ($scope.target_chunks["suf_name2"].length > 0){
				if (lastchar=="r") $scope.target+="r";
				if ((!(name2_is_last_and_prenom))&&(lastchar=="a")) $scope.target=$scope.target.slice(0,-1);
				$scope.target+=$scope.target_chunks["suf_name2"];
			};
		};

		// verb
		$scope.target+=" ";
		$scope.target+=$scope.target_chunks["verb"];

		$scope.client_input = "";
		$scope.num_hints=$scope.hints.length;

	};

	

	$scope.newHint = function(){
		if ($scope.num_hints>0) {
			$scope.num_hints-=1
			$scope.shownHints.push($scope.hints.pop());
		}
	};

	$scope.correction = function(){
		$scope.message = $scope.target+".";
	};

	$scope.show_verb_tab = function(){
		$scope.shown_verb_tab = true;

	};

	
});


app.filter('capitalize', function() {
    return function(input) {
      return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1) : input;
      // return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});

