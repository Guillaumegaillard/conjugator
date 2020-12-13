var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

	var deters=dets.concat(indets,ordins);
	$scope.auxiliaries = auxiliaries;
	$scope.deters = deters;
	$scope.names = names;
	$scope.adjs = adjs;
	$scope.pronoms = pronoms;
	$scope.shown_verb_tab = false;
	$scope.shown_solutions = false;

	$scope.deter1 = "";
	$scope.adj1="";
	$scope.name1="";
	
	$scope.deter2 = "";
	$scope.adj2="";
	$scope.name2="";

	$scope.auxiliary="";
	$scope.infinitif="";

	$scope.hints = [];
	$scope.shownHints = [];
	$scope.num_hints = 0;

	$scope.targets = [""];
	$scope.target = "";
	$scope.target_chunks = [{"name1":"", "ordin1":"", "adj1":"", "auxiliary":"", "name2":"", "adj2":"", "ordin2":""}];

	$scope.message = " Écrire la traduction. NB: l'ordre des mots n'est pas vérifié ici.";
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

		$scope.deter1 = "";
		$scope.adj1="";
		$scope.name1="";
		
		$scope.deter2 = "";
		$scope.adj2="";
		$scope.name2="";

		$scope.auxiliary="";
		$scope.infinitif="";

		$scope.hints=[];
		$scope.num_hints = 0;
		$scope.shownHints=[];
		$scope.shown_verb_tab = false;
		$scope.shown_solutions = false;

		$scope.message = " Écrire la traduction. NB: l'ordre des mots n'est pas vérifié ici.";
		$scope.fr_phrase = ""

		$scope.targets = [""];
		$scope.target = "";
		$scope.target_chunks = [{"name1":"", "suf_name1":"", "ordin1":"", "adj1":"", "auxiliary":"", "name2":"", "suf_name2":"", "adj2":"", "ordin2":""}];
		var target_len=$scope.targets.length;
		var i;

		var vowelRegex = '^[aieouAIEOUéèêÊÉÈËëÜü].*'; 


		//////// NAME GROUP 1
		var pronom_proba=50; //percent
		var femi_proba=50; //percent
		var name1;
		var iRandom_name1 = 0;
		var name1_is_proper_noun = false;

		var name1_is_pronom = (Math.floor((Math.random() * 100))<pronom_proba);
		var fem1 = (Math.floor((Math.random() * 100))<femi_proba);

		if (name1_is_pronom) {
			var iRandom_pron1 = Math.floor((Math.random() * ($scope.pronoms.length)));
			name1 = pronoms[iRandom_pron1];
		} else {
			iRandom_name1 = 1+(Math.floor((Math.random() * ($scope.names.length))));
			name1 = names[iRandom_name1-1];
		}

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
				if (name1_is_pronom) {
					for (word of $scope.pronoms) {
						if (("word_id" in word) && (word.word_id==name1.syns_eus[syn_id])) {
							// console.log(word.eus);
							break;
						}
					}
				} else {
					for (word of $scope.names){
						if (("word_id" in word) && (word.word_id==name1.syns_eus[syn_id])) {
							// console.log(word.eus);
							break;
						}
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


		if (!(name1_is_pronom)) {
			// var iRandom_deter1 = Math.floor((Math.random() * ($scope.deters.length)));
			var iRandom_deter1;
			// det, indet, ordin sg or ordin plur?
			var deter1_family = Math.floor((Math.random() * 4));
			var ordin_sgs = 1;
			switch (deter1_family){
				case 0:
					iRandom_deter1 = Math.floor((Math.random() * (dets.length)));
					break;
				case 1:
					iRandom_deter1 = dets.length + Math.floor((Math.random() * (indets.length)));
					break;
				case 2:
					iRandom_deter1 = dets.length + indets.length + Math.floor((Math.random() * ordin_sgs));
					break;
				case 3:
					iRandom_deter1 = dets.length + indets.length + ordin_sgs + Math.floor((Math.random() * (ordins.length-ordin_sgs)));
					break;
			};

			// if (name1.fr_f && "fr_f" in deters[iRandom_deter1]) {
			// 	$scope.deter1 = deters[iRandom_deter1].fr_f;
			// } else {
			// 	$scope.deter1 = deters[iRandom_deter1].fr;
			// }

			if (fem1){
				var fem_exists=false;
				if("fr_f" in deters[iRandom_deter1]) {
					$scope.deter1 = deters[iRandom_deter1].fr_f;
					fem_exists=true;
				}
				if("fr_f_suf" in deters[iRandom_deter1]) {
					$scope.deter1 = deters[iRandom_deter1].fr+deters[iRandom_deter1].fr_f_suf;
					fem_exists=true;
				};
				if (!(fem_exists)) $scope.deter1 = deters[iRandom_deter1].fr;
			} else {
				$scope.deter1 = deters[iRandom_deter1].fr;
			}






			if (deters[iRandom_deter1].num == "plur") {
				if (deters[iRandom_deter1].quant == "ordin") {
					if (Math.floor((Math.random() *2))>0) {
						$scope.deter1 = "les "+$scope.deter1;
						for (i = 0; i < target_len; i++) { 
							$scope.target_chunks[i]["suf_name1"]="ak";
						};
						// $scope.target_chunks["suf_name1"]="ak";
					};
				} else {
					for (i = 0; i < target_len; i++) { 
						if (deters[iRandom_deter1].quant == "deter") $scope.target_chunks[i]["suf_name1"]="ak";
						if (deters[iRandom_deter1].quant == "indet") $scope.target_chunks[i]["ordin1"]=deters[iRandom_deter1].eus;
					}
				};
				if ((fem1)&&("plur_fr_f" in name1)) {
					$scope.name1 = name1.plur_fr_f;
				} else {
					if ("plur_fr" in name1) {$scope.name1 = name1.plur_fr;} else{$scope.name1 +="s";}
				};
			} else{
				for (i = 0; i < target_len; i++) { 
					if (deters[iRandom_deter1].quant == "deter") $scope.target_chunks[i]["suf_name1"]="a";
					if (deters[iRandom_deter1].quant == "indet") $scope.target_chunks[i]["ordin1"]=deters[iRandom_deter1].eus;
				}
			};
			// if (deters[iRandom_deter1].quant == "ordin") {
			// 	$scope.hints.push(deters[iRandom_deter1]);
			// 	// TODO: deters may have syns_eus => ordin or fake ordin, e.g. gutxi, huts; Others?
			if ("eus" in deters[iRandom_deter1]) {
				$scope.hints.push(deters[iRandom_deter1]);

				for (i = 0; i < target_len; i++) { 
					$scope.target_chunks[i]["ordin1"]=deters[iRandom_deter1].eus;
				};

				if ("syns_eus" in deters[iRandom_deter1]){
					var syn_id=0;
					var num_syns = deters[iRandom_deter1].syns_eus.length;
					for (syn_id; syn_id < num_syns ; syn_id ++) {
						// find the syn
						var word;
						for (word of deters) {
							if (("word_id" in word) && (word.word_id==deters[iRandom_deter1].syns_eus[syn_id])) {
								// console.log(word.eus);
								break;
							}
						};

						var index = $scope.hints.findIndex(x => x.word_id==word.word_id); 
						if (index === -1) $scope.hints.push(word);

						for (i = 0; i < target_len; i++) { 
							$scope.targets.push("");
							$scope.target_chunks.push(Object.create($scope.target_chunks[i]));
							$scope.target_chunks[(syn_id+1)*target_len+i]["ordin1"]=word.eus;
							// $scope.target_chunks[i]["name1"]=name1.eus;
						}
					}
				};



			}
			// if (deters[iRandom_deter1].quant == "indet") $scope.hints.push(deters[iRandom_deter1]);

			target_len=$scope.targets.length;

			var iRandom_adj1 = Math.floor((Math.random() * (1+$scope.adjs.length)));
			iRandom_adj1 *= Math.floor(Math.random() * 2); //1 adj1 out of 2 non pronom sentences 
			if ((iRandom_adj1 == 0)||((iRandom_adj1>0)&&(adjs[iRandom_adj1-1].fr_post))) {
				
				$scope.adj1 = "";
				// if ((deters[iRandom_deter1].num == "sing") && (($scope.name1.match(vowelRegex))||name1.fr_h_mute) && ("fr_before_vowel" in deters[iRandom_deter1])) {
				if ((($scope.name1.match(vowelRegex))||name1.fr_h_mute) && ("fr_before_vowel" in deters[iRandom_deter1])) {
					$scope.deter1 = deters[iRandom_deter1].fr_before_vowel;
				};
				if ($scope.name1.charAt(0)==$scope.name1.charAt(0).toUpperCase()) {				
					name1_is_proper_noun = true;
					if (name1.pers_name) {
						if (deters[iRandom_deter1].num == "sing") {
							if (deters[iRandom_deter1].quant == "deter") $scope.deter1 = "";
							// if ($scope.target_chunks["suf_name1"]=="a") $scope.target_chunks["suf_name1"]="";
						};
					};

				};
			};
			if (iRandom_adj1>0) {
				if (deters[iRandom_deter1].num == "plur") {
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
					if ((($scope.adj1.match(vowelRegex))||(adjs[iRandom_adj1-1].fr_h_mute)) && ("fr_before_vowel" in deters[iRandom_deter1])) {
						$scope.deter1 = deters[iRandom_deter1].fr_before_vowel;
					};
				};
				$scope.adj1+=" ";
				$scope.hints.push(adjs[iRandom_adj1-1]);

				// $scope.target_chunks["adj1"]=adjs[iRandom_adj1-1].eus;
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


			}
		};

		target_len=$scope.targets.length;

		//////// auxiliary
		var iRandom_auxiliary = Math.floor((Math.random() * $scope.auxiliaries.length));
		var infinitif=$scope.auxiliaries[iRandom_auxiliary];
		$scope.infinitif=$scope.auxiliaries[iRandom_auxiliary];
		var pers;
		var pers_COD = 0;

		if (!(name1_is_pronom)) {
			if (deters[iRandom_deter1].num == "plur") {
				pers=5;
			} else {
				pers=2;				
			}
			
		} else {pers=name1.fr_pers;};

		// $scope.auxiliary = infinitif.fr;
		$scope.auxiliary = infinitif.fr_c[pers];

		var negative=false;
		if (Math.floor((Math.random() *2))>0) negative=true;

		if (negative) {
			$scope.name1 += " ";

			if (($scope.auxiliary.match(vowelRegex))||(infinitif.fr_h_mute)) {
				$scope.auxiliary="n'"+$scope.auxiliary+" pas"
			} else {
				$scope.auxiliary="ne "+$scope.auxiliary+" pas"
			}
		} else {
			if ((pers == 0) && (($scope.auxiliary.match(vowelRegex))||(infinitif.fr_h_mute))) {
				$scope.name1 = "j'";
			} else {
				$scope.name1 += " ";			
			}
		};




		// NAME GROUP 2
		var iRandom_name2 = Math.floor((Math.random() * (1+$scope.names.length)));
		var name2_is_adj;
		var name2_is_proper_noun = false;
		var name2;

		if (iRandom_name2 == 0 && infinitif.trans) iRandom_name2=Math.floor((Math.random() * ($scope.names.length)))+1;

		if (iRandom_name2 == 0) {
			name2_is_adj=true;
			var iRandom_adj2 = Math.floor((Math.random() * ($scope.adjs.length)));
			name2 = adjs[iRandom_adj2];
			if (iRandom_adj2!=iRandom_adj1-1) {
				if (!("word_id" in name2)){
					$scope.hints.push(name2);
				} else {
					var index = $scope.hints.findIndex(x => x.word_id==name2.word_id); 
					if (index === -1) $scope.hints.push(name2);
				}
			};


			if ((name1_is_pronom && name1.fr_pers>2) || (!(name1_is_pronom) && deters[iRandom_deter1].num == "plur")) {
				// if (name1.fr_f) {
				if (fem1) {
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
				for (i = 0; i < target_len; i++) { 
					$scope.target_chunks[i]["suf_name2"]="ak";
				};
			} else {
				// if (name1.fr_f) {
				if (fem1) {
					if ("fr_f" in name2) {
						$scope.name2 = name2.fr_f;
					} else {$scope.name2 = name2.fr+"e";}
				} else {$scope.name2 = name2.fr;};
				for (i = 0; i < target_len; i++) { 
					$scope.target_chunks[i]["suf_name2"]="a";
				};
			}
			// $scope.target_chunks["suf_name2"]=$scope.target_chunks["suf_name1"];

		} else {
			name2_is_adj=false;
			name2 = names[iRandom_name2-1];

			var fem2 = (Math.floor((Math.random() * 100))<femi_proba);

			// $scope.name2 = name2.fr;
			if (fem2){
				var fem_exists=false;
				if(name2.fr_f) {
					$scope.name2 = name2.fr;
					fem_exists=true;
				}
				if("fr_f_suf" in name2) {
					$scope.name2 = name2.fr+name2.fr_f_suf;
					fem_exists=true;
				}
				if("fr_f_form" in name2) {
					$scope.name2 = name2.fr_f_form;
					fem_exists=true;
				};
				if (!(fem_exists)) {
					fem2=false;
					$scope.name2 = name2.fr;
				}
			} else {
				if(name2.fr_f) fem2=true;
				$scope.name2 = name2.fr;
			}
			
			if (iRandom_name2!=iRandom_name1) {
				if (!("word_id" in name2)){
					$scope.hints.push(name2);
				} else {
					var index = $scope.hints.findIndex(x => x.word_id==name2.word_id); 
					if (index === -1) $scope.hints.push(name2);
				}
			};
			// if (iRandom_name2!=iRandom_name1) $scope.hints.push(name2);
		};

		for (i = 0; i < target_len; i++) {
			$scope.target_chunks[i]["name2"]=name2.eus;
		};
		if ("syns_eus" in name2){
			var syn_id=0;
			var num_syns = name2.syns_eus.length;
			for (syn_id; syn_id < num_syns ; syn_id ++) {
				// find the syn
				var word;
				if (name2_is_adj) {
					for (word of adjs) {
						if (("word_id" in word) && (word.word_id==name2.syns_eus[syn_id])) {
							// console.log(word.eus);
							break;
						}
					}
				} else {
					for (word of $scope.names){
						if (("word_id" in word) && (word.word_id==name2.syns_eus[syn_id])) {
							// console.log(word.eus);
							break;
						}
					}
				};

				var index = $scope.hints.findIndex(x => x.word_id==word.word_id); 
				if (index === -1) $scope.hints.push(word);

				for (i = 0; i < target_len; i++) { 
					$scope.targets.push("");
					$scope.target_chunks.push(Object.create($scope.target_chunks[i]));
					$scope.target_chunks[(syn_id+1)*target_len+i]["name2"]=word.eus;
					// $scope.target_chunks[i]["name1"]=name1.eus;
				}
			}
		};

		target_len=$scope.targets.length;




		if (!(name2_is_adj)) {
			// var iRandom_deter2 = Math.floor((Math.random() * ($scope.deters.length)));
			var iRandom_deter2;
			// det, indet, ordin sg or ordin plur?
			var deter2_family = Math.floor((Math.random() * 4));
			var ordin_sgs = 1;
			switch (deter2_family){
				case 0:
					iRandom_deter2 = Math.floor((Math.random() * (dets.length)));
					break;
				case 1:
					iRandom_deter2 = dets.length + Math.floor((Math.random() * (indets.length)));
					break;
				case 2:
					iRandom_deter2 = dets.length + indets.length + Math.floor((Math.random() * ordin_sgs));
					break;
				case 3:
					iRandom_deter2 = dets.length + indets.length + ordin_sgs + Math.floor((Math.random() * (ordins.length-ordin_sgs)));
					break;
			};

			// if (name2.fr_f && "fr_f" in deters[iRandom_deter2]) {
			// 	$scope.deter2 = deters[iRandom_deter2].fr_f;
			// } else {
			// 	$scope.deter2 = deters[iRandom_deter2].fr;
			// }
			if (fem2){
				var fem_exists=false;
				if("fr_f" in deters[iRandom_deter2]) {
					$scope.deter2 = deters[iRandom_deter2].fr_f;
					fem_exists=true;
				}
				if("fr_f_suf" in deters[iRandom_deter2]) {
					$scope.deter2 = deters[iRandom_deter2].fr+deters[iRandom_deter2].fr_f_suf;
					fem_exists=true;
				};
				if (!(fem_exists)) $scope.deter2 = deters[iRandom_deter2].fr;
			} else {
				$scope.deter2 = deters[iRandom_deter2].fr;
			}

			if (deters[iRandom_deter2].num == "plur") {
				if (deters[iRandom_deter2].quant == "ordin") {
					for (i = 0; i < target_len; i++) { 
						$scope.target_chunks[i]["ordin2"]=deters[iRandom_deter2].eus;
					};
					// if ( (name1_is_pronom) || ( (!(name1_is_pronom)) && (iRandom_deter1!=iRandom_deter2) )) {
					// 	if ("word_id" in deters[iRandom_deter2]) {
					// 		var index = $scope.hints.findIndex(x => x.word_id==deters[iRandom_deter2].word_id); 
					// 		if (index === -1) $scope.hints.push(deters[iRandom_deter2]);
					// 	} else {
					// 		$scope.hints.push(deters[iRandom_deter2]);
					// 	}
					// };

					if (Math.floor((Math.random() *2))>0) {
						$scope.deter2 = "les "+$scope.deter2;
						for (i = 0; i < target_len; i++) { 
							$scope.target_chunks[i]["suf_name2"]="ak";
						};
					}
				} else {
					for (i = 0; i < target_len; i++) { 
						if (deters[iRandom_deter2].quant == "deter") $scope.target_chunks[i]["suf_name2"]="ak";
						if (deters[iRandom_deter2].quant == "indet") $scope.target_chunks[i]["ordin2"]=deters[iRandom_deter2].eus;
					};
				};
				// if ("plur_fr" in name2) {$scope.name2 = name2.plur_fr;} else{$scope.name2 +="s";}
				if ((fem2)&&("plur_fr_f" in name2)) {
					$scope.name2 = name2.plur_fr_f;
				} else {
					if ("plur_fr" in name2) {$scope.name2 = name2.plur_fr;} else{$scope.name2 +="s";}
				};
			} else {
				for (i = 0; i < target_len; i++) { 
					if (deters[iRandom_deter2].quant == "deter") $scope.target_chunks[i]["suf_name2"]="a";
				};
				if (deters[iRandom_deter2].quant == "ordin") {
					// if ( (name1_is_pronom) || ( (!(name1_is_pronom)) && (iRandom_deter1!=iRandom_deter2) )) {
					// 	if ("word_id" in deters[iRandom_deter2]) {
					// 		var index = $scope.hints.findIndex(x => x.word_id==deters[iRandom_deter2].word_id); 
					// 		if (index === -1) $scope.hints.push(deters[iRandom_deter2]);
					// 	} else {
					// 		$scope.hints.push(deters[iRandom_deter2]);
					// 	}
					// };
					for (i = 0; i < target_len; i++) { 
						$scope.target_chunks[i]["ordin2"]=deters[iRandom_deter2].eus;
					};
				};
				for (i = 0; i < target_len; i++) { 
					if (deters[iRandom_deter2].quant == "indet") $scope.target_chunks[i]["ordin2"]=deters[iRandom_deter2].eus;
				};
			};
			// if (deters[iRandom_deter2].quant == "indet") {
			if ("eus" in deters[iRandom_deter2]) {
				// $scope.hints.push(deters[iRandom_deter2]);
				if ( (name1_is_pronom) || ( (!(name1_is_pronom)) && (iRandom_deter1!=iRandom_deter2) )) {
					if ("word_id" in deters[iRandom_deter2]) {
						var index = $scope.hints.findIndex(x => x.word_id==deters[iRandom_deter2].word_id); 
						if (index === -1) $scope.hints.push(deters[iRandom_deter2]);
					} else {
						$scope.hints.push(deters[iRandom_deter2]);
					};
				};
			// };

			// if (deters[iRandom_deter2].quant == "ordin") {
				// TODO: deters may have syns_eus => ordin or fake ordin, e.g. gutxi, huts; Others? gutxi not considered
				if ("syns_eus" in deters[iRandom_deter2]){
					var syn_id=0;
					var num_syns = deters[iRandom_deter2].syns_eus.length;
					for (syn_id; syn_id < num_syns ; syn_id ++) {
						// find the syn
						var word;
						for (word of deters) {
							if (("word_id" in word) && (word.word_id==deters[iRandom_deter2].syns_eus[syn_id])) {
								// console.log(word.eus);
								break;
							}
						};

						var index = $scope.hints.findIndex(x => x.word_id==word.word_id); 
						if (index === -1) $scope.hints.push(word);

						for (i = 0; i < target_len; i++) { 
							$scope.targets.push("");
							$scope.target_chunks.push(Object.create($scope.target_chunks[i]));
							$scope.target_chunks[(syn_id+1)*target_len+i]["ordin2"]=word.eus;
							// $scope.target_chunks[i]["name1"]=name1.eus;
						}
					}
				};
			};

			target_len=$scope.targets.length;

			var iRandom_adj2 = Math.floor((Math.random() * (1+$scope.adjs.length)));
			iRandom_adj2 *= Math.floor(Math.random() * 2);
			// if (iRandom_adj2 == 0) {
			if ((iRandom_adj2 == 0)||((iRandom_adj2>0)&&(adjs[iRandom_adj2-1].fr_post))) {
				$scope.adj2 = "";
				// if ((deters[iRandom_deter2].num == "sing") && (($scope.name2.match(vowelRegex))||(name2.fr_h_mute)) && ("fr_before_vowel" in deters[iRandom_deter2])) {
				if ((($scope.name2.match(vowelRegex))||(name2.fr_h_mute)) && ("fr_before_vowel" in deters[iRandom_deter2])) {
					$scope.deter2 = deters[iRandom_deter2].fr_before_vowel;
				};
				if ($scope.name2.charAt(0)==$scope.name2.charAt(0).toUpperCase()) {
					name2_is_proper_noun = true;
					if (name2.pers_name) {
						if (deters[iRandom_deter2].num == "sing") {
							if (deters[iRandom_deter2].quant == "deter") $scope.deter2 = "";
							// if ($scope.target_chunks["suf_name2"]=="a") $scope.target_chunks["suf_name1"]="";
						}
					}
				};
			};
			if (iRandom_adj2>0) {
				if (deters[iRandom_deter2].num == "plur") {
					// if (name2.fr_f) {
					if (fem2) {
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
					// if (name2.fr_f) {
					if (fem2) {
						if ("fr_f" in adjs[iRandom_adj2-1]) {
							$scope.adj2 = adjs[iRandom_adj2-1].fr_f;
						} else {$scope.adj2 = adjs[iRandom_adj2-1].fr+"e";}
					} else {
						if ((($scope.name2.match(vowelRegex))||(name2.fr_h_mute)) && ("fr_before_vowel" in adjs[iRandom_adj2-1])) {
							$scope.adj2 = adjs[iRandom_adj2-1].fr_before_vowel;
						} else {
							$scope.adj2 = adjs[iRandom_adj2-1].fr;
						};
					};
				};
				if (!(adjs[iRandom_adj2-1].fr_post)){
					if ((($scope.adj2.match(vowelRegex))||(adjs[iRandom_adj2-1].fr_h_mute)) && ("fr_before_vowel" in deters[iRandom_deter2])) {
						$scope.deter2 = deters[iRandom_deter2].fr_before_vowel;
					};
				};
				$scope.adj2+=" "
				// if (iRandom_adj2!=iRandom_adj1) $scope.hints.push(adjs[iRandom_adj2-1]);
				if (iRandom_adj2!=iRandom_adj1) {
					if ("word_id" in adjs[iRandom_adj2-1]) {
						var index = $scope.hints.findIndex(x => x.word_id==adjs[iRandom_adj2-1].word_id); 
						if (index === -1) $scope.hints.push(adjs[iRandom_adj2-1]);
					} else {
						$scope.hints.push(adjs[iRandom_adj2-1]);
					}
				};



				// $scope.target_chunks["adj2"]=adjs[iRandom_adj2-1].eus;
				for (i = 0; i < target_len; i++) { 
					$scope.target_chunks[i]["adj2"]=adjs[iRandom_adj2-1].eus;
				};

				if ("syns_eus" in adjs[iRandom_adj2-1]){
					var syn_id=0;
					var num_syns = adjs[iRandom_adj2-1].syns_eus.length;
					for (syn_id; syn_id < num_syns ; syn_id ++) {
						// find the syn
						var word;
						for (word of adjs) {
							if (("word_id" in word) && (word.word_id==adjs[iRandom_adj2-1].syns_eus[syn_id])) {
								// console.log(word.eus);
								break;
							}
						};

						var index = $scope.hints.findIndex(x => x.word_id==word.word_id); 
						if (index === -1) $scope.hints.push(word);

						for (i = 0; i < target_len; i++) { 
							$scope.targets.push("");
							$scope.target_chunks.push(Object.create($scope.target_chunks[i]));
							$scope.target_chunks[(syn_id+1)*target_len+i]["adj2"]=word.eus;
							// $scope.target_chunks[i]["name1"]=name1.eus;
						}
					}
				};

			}
		};

		target_len=$scope.targets.length;

		///////// PREPARE THE FRENCH SENTENCE TO TRANSLATE		

		$scope.fr_phrase = $scope.deter1;
		if (($scope.adj1.length>0) && (!(adjs[iRandom_adj1-1].fr_post))) {
			$scope.fr_phrase += $scope.adj1;
		};
		$scope.fr_phrase += $scope.name1;
		if (($scope.adj1.length>0) && (adjs[iRandom_adj1-1].fr_post)) {
			$scope.fr_phrase += $scope.adj1;
		};
		$scope.fr_phrase += $scope.auxiliary;
		$scope.fr_phrase += " ";
		$scope.fr_phrase += $scope.deter2;
		if (($scope.adj2.length>0) && (!(adjs[iRandom_adj2-1].fr_post))) {
			$scope.fr_phrase += $scope.adj2;
		};
		$scope.fr_phrase += $scope.name2;
		if (($scope.adj2.length>0) && (adjs[iRandom_adj2-1].fr_post)) {
			$scope.fr_phrase += " ";
			$scope.fr_phrase += $scope.adj2;
		};
		$scope.fr_phrase=$scope.fr_phrase.trim();



		///////// CHANGE SUFFIXES OF GN1 IF NORK
		for (i = 0; i < target_len; i++) { 
			$scope.target="";
			if (infinitif.trans) {
				if (deters[iRandom_deter2].num == "plur") pers_COD = 1;
				if ($scope.target_chunks[i]["suf_name1"]=="ak") $scope.target_chunks[i]["suf_name1"]="ek";
				if ($scope.target_chunks[i]["suf_name1"]=="a") $scope.target_chunks[i]["suf_name1"]="ak";
				if ($scope.target_chunks[i]["suf_name1"]=="") $scope.target_chunks[i]["suf_name1"]="k";
				if (name1_is_pronom) $scope.target_chunks[i]["suf_name1"]="k";			
			};
			$scope.target_chunks[i]["auxiliary"]=infinitif.eus_c[pers_COD][pers];

			// console.log("target chunks: " + $scope.target_chunks[i]["name1"]);
			// console.log("target chunks: " + $scope.target_chunks[i]["suf_name1"]);
			// console.log("target chunks: " + $scope.target_chunks[i]["ordin1"]);
			// console.log("target chunks: " + $scope.target_chunks[i]["adj1"]);
			// console.log("target chunks: " + $scope.target_chunks[i]["auxiliary"]);
			// console.log("target chunks: " + $scope.target_chunks[i]["name2"]);
			// console.log("target chunks: " + $scope.target_chunks[i]["suf_name2"]);
			// console.log("target chunks: " + $scope.target_chunks[i]["adj2"]);
			// console.log("target chunks: " + $scope.target_chunks[i]["ordin2"]);


			///////// GATHER THE BASQUE

			//GN1
			// ordin goes first
			// then name
			// except bat
			var bat1 = false;
			var bat2 = false;
			var lastchar;
			var last_is_vowel;


			var name1_is_last_and_proper_noun = name1_is_proper_noun;
			var name2_is_last_and_proper_noun = name2_is_proper_noun;

			

			if (($scope.target_chunks[i]["ordin1"]=="bat")||(($scope.target_chunks[i]["ordin1"].length>0)&&(deters[iRandom_deter1].quant == "indet"))) {
				bat1=true;
				$scope.target+=$scope.target_chunks[i]["name1"];
				name1_is_last_and_proper_noun=false;
			} else {
				if ($scope.target_chunks[i]["ordin1"].length > 0){
					$scope.target+=$scope.target_chunks[i]["ordin1"];
					$scope.target+=" ";
				};
				$scope.target+=$scope.target_chunks[i]["name1"];
			};
			
			// adj bears suffix unless bat
			if ($scope.target_chunks[i]["adj1"].length > 0){
				name1_is_last_and_proper_noun=false;
				$scope.target+=" ";
				$scope.target+=$scope.target_chunks[i]["adj1"];
			};

			if (bat1) {
				$scope.target+=" ";
				$scope.target+=$scope.target_chunks[i]["ordin1"];			
			};

			if ($scope.target_chunks[i]["suf_name1"].length > 0){

				// pronom +k (trans) except if already a k (zuek, beraiek) 
				if (name1_is_pronom) {
					if ($scope.target.slice(-4)=="hura") $scope.target=$scope.target.slice(0,-4)+"hark";
					if ($scope.target.slice(-1)!="k") $scope.target+=$scope.target_chunks[i]["suf_name1"];
				} else {
					if (!(name1_is_pronom)){
						lastchar=$scope.target.slice(-1);
						if (name1_is_last_and_proper_noun){
							if ($scope.target_chunks[i]["suf_name1"]=="a") $scope.target_chunks[i]["suf_name1"]="";
							// if ($scope.target_chunks[i]["suf_name1"]=="ak") $scope.target_chunks[i]["suf_name1"]="ak";
							if (infinitif.trans) {
								if ($scope.target_chunks[i]["suf_name1"]=="ak") $scope.target_chunks[i]["suf_name1"]="k";
							}
							if (($scope.target_chunks[i]["suf_name1"]=="ak")&&(lastchar=="a")) $scope.target_chunks[i]["suf_name1"]="k";
							if ($scope.target_chunks[i]["suf_name1"]=="ek") $scope.target_chunks[i]["suf_name1"]="k"; //TODO: check that (Guillaumeek?)
							// if ($scope.target_chunks[i]["suf_name1"]=="k") $scope.target_chunks[i]["suf_name1"]="k";

						};
						if ($scope.target_chunks[i]["suf_name1"].length > 0){
							last_is_vowel= (lastchar.match(vowelRegex));

							// +r if r
							if (lastchar=="r") $scope.target+="r";

							// +e if indet conson + ergative (k)
							if ($scope.target_chunks[i]["suf_name1"]=="k") {
								if ($scope.target.slice(-2)=="uk") $scope.target=$scope.target.slice(0,-1); //TODO: check that (batzuk-> batzuek) but (Yannick, Pok, Puk)?
								if (!(last_is_vowel)) $scope.target+="e";
								$scope.target+="k";
							// else -a if already a + suf
							} else {
								if ((lastchar=="a")&&(!(name1_is_last_and_proper_noun))) $scope.target=$scope.target.slice(0,-1);
								$scope.target+=$scope.target_chunks[i]["suf_name1"];
							}
						};
					};
				};
			};
			$scope.target+=" ";

			if (negative) {
				// auxiliary
				$scope.target+="ez ";
				$scope.target+=$scope.target_chunks[i]["auxiliary"];
				$scope.target+=" ";
			};

			//GN2 ###################################################################################
			// if ($scope.target_chunks[i]["ordin2"]=="bat"){
			if (($scope.target_chunks[i]["ordin2"]=="bat")||(($scope.target_chunks[i]["ordin2"].length>0)&&(deters[iRandom_deter2].quant == "indet"))) {
				bat2=true;
				$scope.target+=$scope.target_chunks[i]["name2"];
				name2_is_last_and_proper_noun=false;
			} else {
				if ($scope.target_chunks[i]["ordin2"].length > 0){
					$scope.target+=$scope.target_chunks[i]["ordin2"];
					$scope.target+=" ";
				};
				$scope.target+=$scope.target_chunks[i]["name2"];
			};
			
			if ($scope.target_chunks[i]["adj2"].length > 0){
				name2_is_last_and_proper_noun=false;
				$scope.target+=" ";
				$scope.target+=$scope.target_chunks[i]["adj2"];
			};
			if (bat2) {
				$scope.target+=" ";
				$scope.target+=$scope.target_chunks[i]["ordin2"];			
			};

			if ($scope.target_chunks[i]["suf_name2"].length > 0){
				lastchar=$scope.target.slice(-1);
				if (name2_is_last_and_proper_noun){
					if ($scope.target_chunks[i]["suf_name2"]=="a") $scope.target_chunks[i]["suf_name2"]="";
					if (($scope.target_chunks[i]["suf_name2"]=="ak")&&(lastchar=="a")) $scope.target_chunks[i]["suf_name2"]="k";
				};
				if ($scope.target_chunks[i]["suf_name2"].length > 0){
					if (lastchar=="r") $scope.target+="r";
					if ((!(name2_is_last_and_proper_noun))&&(lastchar=="a")) $scope.target=$scope.target.slice(0,-1);
					$scope.target+=$scope.target_chunks[i]["suf_name2"];
				};
			};

			if (!(negative)) {
				// auxiliary
				$scope.target+=" ";
				$scope.target+=$scope.target_chunks[i]["auxiliary"];
			};
			$scope.target+=".";

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

