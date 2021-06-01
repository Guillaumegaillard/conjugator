var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

	$scope.version_Hau_Hori_Hura = version_Hau_Hori_Hura;

	$scope.names = names;
	$scope.adjs = adjs;

	$scope.shown_hhh_tab = false;
	$scope.shown_solutions = false;

	$scope.adj1="";
	$scope.name1="";
	
	$scope.hints = [];
	$scope.shownHints = [];
	$scope.num_hints = 0;

	$scope.targets = [""];
	$scope.target = "";
	$scope.target_chunks = [{"name1":"", "adj1":""}];

	$scope.message = " Écrire la traduction.";
	$scope.fr_phrase = ""

	$scope.check = function() {

		var sol_id=0;
		var num_sols = $scope.targets.length;
		for (sol_id; sol_id < num_sols ; sol_id ++) {

			var form_input=$scope.client_input.toLowerCase().replace(" .","").replace(".","").replace(/  /g," ").split(" ").sort();
			var form_target=$scope.targets[sol_id].toLowerCase().replace(".","").split(" ").sort();

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
			if (is_same) return 1;
		};
		return 0;
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

		// $scope.deter1 = "";
		$scope.adj1="";
		$scope.name1="";
		
		$scope.hints=[];
		$scope.num_hints = 0;
		$scope.shownHints=[];
		$scope.shown_hhh_tab = false;
		$scope.shown_solutions = false;

		$scope.message = " Écrire la traduction. Ci : proche. Là : intermédiaire. Là-bas/lointain : loin. ";
		$scope.fr_phrase = ""

		$scope.targets = [""];
		$scope.target = "";
		$scope.target_chunks = [{"name1":"", "demons1":"", "adj1":""}];
		var target_len=$scope.targets.length;
		var i;

		var vowelRegex = '^[aieouAIEOUéèêÊÉÈËëÜü].*'; 


		//////// NAME GROUP 1
		var femi_proba=50; //percent
		var name1;
		var iRandom_name1 = 0;
		var fem1 = (Math.floor((Math.random() * 100))<femi_proba);

		iRandom_name1 = 1+(Math.floor((Math.random() * ($scope.names.length))));
		name1 = names[iRandom_name1-1];

		if (fem1){
			var fem_exists=false;
			if(name1.fr_f) {
				$scope.name1 = name1.fr;
				fem_exists=true;
			}
			if("fr_f_suf" in name1) {
				$scope.name1 = name1.fr+name1.fr_f_suf;
				fem_exists=true;
			}
			if("fr_f_form" in name1) {
				$scope.name1 = name1.fr_f_form;
				fem_exists=true;
			};
			if (!(fem_exists)) {
				fem1=false;
				$scope.name1 = name1.fr;
			}
		} else {
			if(name1.fr_f) fem1=true;
			$scope.name1 = name1.fr;
		}

		$scope.hints.push(name1);
		for (i = 0; i < target_len; i++) { 
			$scope.target_chunks[i]["name1"]=name1.eus;
		}

		if ("syns_eus" in name1){
			var syn_id=0;
			var num_syns = name1.syns_eus.length;
			for (syn_id; syn_id < num_syns ; syn_id ++) {
				// find the syn
				var word;
				
				for (word of $scope.names){
					if (("word_id" in word) && (word.word_id==name1.syns_eus[syn_id])) {
						// console.log(word.eus);
						break;
					}
					
				};

				var index = $scope.hints.findIndex(x => x.word_id==word.word_id); 
				if (index === -1) $scope.hints.push(word);

				for (i = 0; i < target_len; i++) { 
					$scope.targets.push("");
					$scope.target_chunks.push(Object.create($scope.target_chunks[i]));
					$scope.target_chunks[(syn_id+1)*target_len+i]["name1"]=word.eus;
					// $scope.target_chunks[i]["name1"]=name1.eus;
				}
			}
		};

		target_len=$scope.targets.length;





		// var deters=dets.concat(indets,ordins);
		// $scope.auxiliaries = auxiliaries;
		// $scope.deters = deters;
		// $scope.names = names;
		var cases=[
		    {"name": "nor", "sufs": ["","k"], "pref_fr":""},
		    {"name": "nork", "sufs": ["k","k"], "pref_fr":""},
		    {"name": "nori", "sufs": ["i","i"], "pref_fr":"à "},
		    {"name": "noren", "sufs": ["en","n"], "pref_fr":"de "},
		    {"name": "norekin", "sufs": ["ekin","kin"], "pref_fr":"avec "},
		    {"name": "norentzat", "sufs": ["entzat","ntzat"], "pref_fr":"pour "},
		    {"name": "nondik", "sufs": ["tatik","tatik"], "pref_fr":"depuis "},
		    {"name": "nora", "sufs": ["tara","tara"], "pref_fr":"vers "},
		    {"name": "nongo", "sufs": ["tako","tako"], "pref_fr":"de "},
		    {"name": "zertaz", "sufs": ["taz","taz"], "pref_fr":"par "},
		    {"name": "noiz", "sufs": ["tan","tan"], "pref_fr":"pendant "},
		    {"name": "non", "sufs": ["tan","tan"], "pref_fr":"dans "},
	    	];




		var iRandom_case = Math.floor((Math.random() * (cases.length)));
		var iRandom_Num = Math.floor((Math.random() * 2)); //0: sg, 1:plur
		var iRandom_Dist = Math.floor((Math.random() * 3)); //0: here, 1:there, 2: there-away

		var adj_denom="ce";
		if (fem1){
			adj_denom="cette";
		};

		var demons=[
		    ["hau","hori","hura"],
		    ["hon","horr","har"],
		    ["haue","horie","haie"],
	    	];

    	var sufs_fr=["ci","là","là-bas"
	    	];

		var added_e="";


		if (iRandom_Num == 1) {
			adj_denom="ces";

			for (i = 0; i < target_len; i++) { 

				$scope.target_chunks[i]["demons1"]=demons[2][iRandom_Dist]+cases[iRandom_case]["sufs"][1];
			}

			if ((fem1)&&("plur_fr_f" in name1)) {
				$scope.name1 = name1.plur_fr_f;
			} else {
				if ("plur_fr" in name1) {$scope.name1 = name1.plur_fr;} else{$scope.name1 +="s";}
			};
		} else{
			for (i = 0; i < target_len; i++) { 
				if ( (iRandom_Dist<2) && (!(cases[iRandom_case]["sufs"][0].charAt(0).match(vowelRegex))) ) added_e = "e";
				if (iRandom_case == 0) $scope.target_chunks[i]["demons1"]=demons[0][iRandom_Dist]+cases[iRandom_case]["sufs"][0];
				if (iRandom_case > 0) $scope.target_chunks[i]["demons1"]=demons[1][iRandom_Dist]+added_e+cases[iRandom_case]["sufs"][0];
			}
		};

		target_len=$scope.targets.length;

		var iRandom_adj1 = Math.floor((Math.random() * (1+$scope.adjs.length)));
		iRandom_adj1 *= Math.floor(Math.random() * 2); //1 adj1 out of 2 non pronom sentences 
		if ((iRandom_adj1 == 0)||((iRandom_adj1>0)&&(adjs[iRandom_adj1-1].fr_post))) {
			
			$scope.adj1 = "";
			if ( (!(fem1)) && (iRandom_Num==0) && ($scope.name1.match(vowelRegex) || name1.fr_h_mute)) {
				adj_denom="cet";
			};

		};
		if (iRandom_adj1>0) {
			if (iRandom_Num==1) {
				// if (name1.fr_f) {
				if (fem1) {
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
				// if (name1.fr_f) {
				if (fem1) {
					if ("fr_f" in adjs[iRandom_adj1-1]) {
						$scope.adj1 = adjs[iRandom_adj1-1].fr_f;
					} else {$scope.adj1 = adjs[iRandom_adj1-1].fr+"e";}
				} else {
					if ((($scope.name1.match(vowelRegex))||(name1.fr_h_mute)) && ("fr_before_vowel" in adjs[iRandom_adj1-1])) {
						$scope.adj1 = adjs[iRandom_adj1-1].fr_before_vowel;
					} else {
						$scope.adj1 = adjs[iRandom_adj1-1].fr;};
					};
			};
			if (!(adjs[iRandom_adj1-1].fr_post)){
				if ((($scope.adj1.match(vowelRegex))||(adjs[iRandom_adj1-1].fr_h_mute))&& (iRandom_Num==0))  {
					adj_denom="cet";
				};
			};
			$scope.adj1+=" ";
			$scope.hints.push(adjs[iRandom_adj1-1]);

			for (i = 0; i < target_len; i++) { 
				$scope.target_chunks[i]["adj1"]=adjs[iRandom_adj1-1].eus;
			};

			if ("syns_eus" in adjs[iRandom_adj1-1]){
				var syn_id=0;
				var num_syns = adjs[iRandom_adj1-1].syns_eus.length;
				for (syn_id; syn_id < num_syns ; syn_id ++) {
					// find the syn
					var word;
					for (word of adjs) {
						if (("word_id" in word) && (word.word_id==adjs[iRandom_adj1-1].syns_eus[syn_id])) {
							// console.log(word.eus);
							break;
						}
					};

					var index = $scope.hints.findIndex(x => x.word_id==word.word_id); 
					if (index === -1) $scope.hints.push(word);

					for (i = 0; i < target_len; i++) { 
						$scope.targets.push("");
						$scope.target_chunks.push(Object.create($scope.target_chunks[i]));
						$scope.target_chunks[(syn_id+1)*target_len+i]["adj1"]=word.eus;
						// $scope.target_chunks[i]["name1"]=name1.eus;
					}
				}
			};


		};

		target_len=$scope.targets.length;




		var denom_part_fr=sufs_fr[iRandom_Dist];

		if (cases[iRandom_case]["name"]=="noiz") {
			if (iRandom_Num==1) {
				if (fem1) {
					denom_part_fr="lointaines";
				} else {
					denom_part_fr="lointains";
				}
			} else {
				// if (name1.fr_f) {
				if (fem1) {
					denom_part_fr="lointaine";
				} else {
					denom_part_fr="lointain";
				}
			};
		};

		
		///////// PREPARE THE FRENCH SENTENCE TO TRANSLATE		

		$scope.fr_phrase = cases[iRandom_case]["pref_fr"];
		$scope.fr_phrase += adj_denom;
		$scope.fr_phrase += " ";
		if (($scope.adj1.length>0) && (!(adjs[iRandom_adj1-1].fr_post))) {
			$scope.fr_phrase += $scope.adj1;
		};
		$scope.fr_phrase += " ";

		$scope.fr_phrase += $scope.name1;
		
		$scope.fr_phrase += " ";

		if (($scope.adj1.length>0) && (adjs[iRandom_adj1-1].fr_post)) {
			$scope.fr_phrase += $scope.adj1;
		};

		// $scope.fr_phrase += sufs_fr[iRandom_Dist];
		$scope.fr_phrase += denom_part_fr;

		$scope.fr_phrase += " - (cas "+cases[iRandom_case]["name"]+")";


		$scope.fr_phrase=$scope.fr_phrase.trim();



		///////// CHANGE SUFFIXES OF GN1 IF NORK
		for (i = 0; i < target_len; i++) { 
			$scope.target="";
			
			///////// GATHER THE BASQUE

			$scope.target+=$scope.target_chunks[i]["name1"];

			if ($scope.target_chunks[i]["adj1"].length > 0){
				$scope.target+=" ";
				$scope.target+=$scope.target_chunks[i]["adj1"];
			};

			$scope.target+=" ";
			$scope.target+=$scope.target_chunks[i]["demons1"];


			$scope.client_input = "";

			$scope.num_hints=$scope.hints.length;

			$scope.targets[i]=$scope.target;
		};

		$scope.reduceHints();
		$scope.num_hints=$scope.hints.length;

	};

	$scope.reduceHints = function(){
		var reducedHints=[];
		reducedHints.push($scope.hints[0].fr.trim() + ': ' + $scope.hints[0].eus);
		if ($scope.hints.length>1) {
			var j=1;
			var i=1;
			for (i ; i < $scope.hints.length; i++) { 
				if ($scope.hints[i].fr==$scope.hints[i-1].fr){
					reducedHints[j-1]+=", ";
					reducedHints[j-1]+=$scope.hints[i].eus;
				} else {
					reducedHints.push($scope.hints[i].fr.trim() + ': ' + $scope.hints[i].eus);
					j++;
				};
			};
		};
		$scope.hints=reducedHints;

	};

	$scope.newHint = function(){
		if ($scope.num_hints>0) {
			$scope.num_hints-=1
			$scope.shownHints.push($scope.hints.pop());
		}
	};

	$scope.correction = function(){
		$scope.message = $scope.targets[0];		
	};

	$scope.solutions = function(){
		$scope.shown_solutions = true;		
	};	

	$scope.show_hhh_tab = function(){
		$scope.shown_hhh_tab = true;

	};

	
});


app.filter('capitalize', function() {
    return function(input) {
      return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1) : input;
      // return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});

