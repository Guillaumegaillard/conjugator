var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope) {

    $scope.version_Zenbakiak = version_Zenbakiak;

    $scope.hints = [];
    $scope.shownHints = [];
    $scope.num_hints = 0;

    $scope.message = "";
        
    $scope.target_input="";
    $scope.fr_input="";
    $scope.fr_nombres=[""];

    $scope.check_french = function() {

        var sol_id=0;
        var num_sols = $scope.fr_nombres.length;
        for (sol_id; sol_id < num_sols ; sol_id ++) {

            var form_input=$scope.fr_input.toLowerCase().replace(" .","").replace(".","").replace(/-/g," ").replace(/  /g," ").split(" ");
            var form_target=$scope.fr_nombres[sol_id].toLowerCase().replace(".","").replace(/-/g," ").split(" ");

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

            // if ($scope.target_input == $scope.target)
            // if (form_input == form_target)
            if (is_same) return 1;
        };
        return 0;
    };
    
    $scope.check_spanish = function() {

        var sol_id=0;
        var num_sols = $scope.es_numeros.length;
        for (sol_id; sol_id < num_sols ; sol_id ++) {

            var form_input=$scope.es_input.toLowerCase().replace(" .","").replace(".","").replace(/-/g," ").replace(/  /g," ").split(" ");
            var form_target=$scope.es_numeros[sol_id].toLowerCase().replace(".","").replace(/-/g," ").split(" ");

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

            // if ($scope.target_input == $scope.target)
            // if (form_input == form_target)
            if (is_same) return 1;
        };
        return 0;
    };
    
    $scope.check_basque = function() {

        var sol_id=0;
        var num_sols = $scope.eus_zenbakiak.length;
        for (sol_id; sol_id < num_sols ; sol_id ++) {

            var form_input=$scope.eus_input.toLowerCase().replace(" .","").replace(".","").replace(/-/g," ").replace(/  /g," ").split(" ");
            var form_target=$scope.eus_zenbakiak[sol_id].toLowerCase().replace(".","").replace(/-/g," ").split(" ");

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

            // if ($scope.target_input == $scope.target)
            // if (form_input == form_target)
            if (is_same) return 1;
        };
        return 0;
    };    
    
    function isInt(value) {
        var x;
        return isNaN(value) ? !1 : (x = parseFloat(value), (0 | x) === x);
    }
    
    $scope.check_target = function() {
        // return($scope.target_input.isInteger()?1:0);
        return(isInt($scope.target_input)?1:0);
        
        
    };

    $scope.validate = function($event) {
        $scope.message = "";
        if ($event.which === 13) {
            if ($scope.check_target() == 1) {
                // $scope.message = " Correct !";
                $scope.newNb(parseInt($scope.target_input));
            }
            else {
                $scope.message = "Ceci n'est pas un nombre connu (max 2^31-1) !";
            }

        }
    };

    // $scope.validate = function($event) {
        // $scope.message = "";
        // if ($event.which === 13) {
            // if ($scope.check() == 1) {
                // $scope.message = " Correct !";
                // // $scope.newTest();
            // }
            // else {
                // $scope.message = " Incorrect !";
            // }

        // }
    // };

    $scope.newNb = function(from_input) {
        $scope.hints=[];
        $scope.num_hints = 0;
        $scope.shownHints=[];
        
        var iRandom_num;
        // if (from_input) {
        if (typeof from_input !== 'undefined') {
            // console.log(from_input)
            iRandom_num=from_input;
        } else {
            iRandom_num = Math.floor((Math.random() * (1000000)));
        }        
        $scope.target_input=iRandom_num.toString();
        /* $scope.nombre=(iRandom_num+1).toString(); */
        $scope.fr_nombres=prepare_french(iRandom_num);
        $scope.nombre='';
        $scope.fr_input='';
        $scope.es_numeros=prepare_spanish(iRandom_num);
        $scope.numero='';
        $scope.es_input='';
        $scope.eus_zenbakiak=prepare_basque(iRandom_num);
        $scope.zenbaki='';
        $scope.eus_input='';
        // for (var i = 0; i < $scope.fr_nombres.length; i++) {
            // $scope.nombre+=$scope.fr_nombres[i];
            // if (i!=$scope.fr_nombres.length - 1) $scope.nombre+=', ';
        // };
        $scope.reduceHints();
        $scope.num_hints=$scope.hints.length;
        
    };
    
    prepare_french = function(num) {
        // return((num+1).toString());
        var i;
        var found=false;
        var founds=[];
        var num_ordins = ordins.length;
        // console.log(num_ordins);
        // console.log(num,num+1);
        if (num==0) {
            // founds.push("zéro");
            founds.push(indets[14].fr);
            founds.push(indets[15].fr);
            $scope.hints.push(indets[14]);
            $scope.hints.push(indets[15]);
            found=true;
        };
        if (!(found)) {
            for (i = 0; i < num_ordins; i++) {
                // console.log(i);
                // console.log(ordins[i].intval);
                // console.log(parseInt(ordins[i].intval));
                // console.log(num);
                if (parseInt(ordins[i].intval)==num) {
                    found=true;
                    $scope.hints.push(ordins[i]);
                    if (ordins[i].fr.slice(-2)=="de") {
                        founds.push(ordins[i].fr.slice(0,-3));
                    } else {
                        founds.push(ordins[i].fr);
                    }
                };
            };
        };
        if (!(found)) {
            if (num<100){
                if (num==50){
                    founds.push("cinquante");
                    $scope.hints.push({'intval': 50, 'es': 'cincuenta', 'fr': 'cinquante', 'eus': 'berrogeita hamar', 'word_id': 30800, 'quant': 'ordin', 'num': 'plur'});
                    found=true;
                } else if (num<70){
                    tens=prepare_french(num-num%10)[0];                
                    if (num%10==1){
                        var andone=" et un"; 
                        founds.push(tens+andone);
                        found=true;
                    } else {
                        units=prepare_french(num%10);
                        for (i = 0; i < units.length; i++) {                        
                            founds.push(tens+'-'+units[i]);
                        }
                        found=true;
                    }
                } else if (num==71) {
                    founds.push('soixante et onze');
                    $scope.hints.push({'intval': 71, 'es': 'setenta y uno', 'fr': 'soixante et onze', 'eus': 'hirurogeita hamaika', 'word_id': 30800, 'quant': 'ordin', 'num': 'plur'});
                    $scope.hints.push({'intval': 71, 'es': 'setenta y uno', 'fr': 'soixante et onze', 'eus': 'hiruretan hogeita hamaika', 'word_id': 30800, 'quant': 'ordin', 'num': 'plur'});
                    found=true;
                } else if (num<80) {
                    units=prepare_french(num%20);
                    for (i = 0; i < units.length; i++) {                        
                        founds.push('soixante'+'-'+units[i]);
                    }
                    $scope.hints.push({'intval': 60, 'es': 'sesenta', 'fr': 'soixante', 'eus': 'hirurogei', 'word_id': 30800, 'quant': 'ordin', 'num': 'plur'});
                    $scope.hints.push({'intval': 60, 'es': 'sesenta', 'fr': 'soixante', 'eus': 'hiruretan hogei', 'word_id': 30800, 'quant': 'ordin', 'num': 'plur'});
                    found=true;
                    
                } else {
                    units=prepare_french(num%20);
                    for (i = 0; i < units.length; i++) {                        
                        founds.push('quatre-vingt'+'-'+units[i]);
                    }
                    found=true;
                    $scope.hints.push({'intval': 80, 'es': 'ochenta', 'fr': 'quatre-vingts', 'eus': 'laurogei', 'word_id': 315, 'syns_eus': [316], 'quant': 'ordin', 'num': 'plur'});
                    $scope.hints.push({'intval': 80, 'es': 'ochenta', 'fr': 'quatre-vingts', 'eus': 'lauretan hogei', 'word_id': 316, 'syns_eus': [315], 'quant': 'ordin', 'num': 'plur'});
                                        
                };
            } else if (num<1000) {
                cents=prepare_french(num-num%100)[0];
                // if (num%100)==0)
                if (num>199) cents=cents.slice(0,-1);
                remainder = prepare_french(num%100);
                for (i = 0; i < remainder.length; i++) {                        
                    founds.push(cents+' '+remainder[i]);
                }
                found=true; 
                
            } else if (num<1000000) {
                var milles;
                if (num<2000) {
                    milles=[''];
                } else {
                    milles = prepare_french(Math.floor(num/(1000)));
                };
                var lower;
                if (num%1000!=0) {
                    lower = prepare_french(num%1000); 
                } else {
                    lower = [''];
                }
                var j;
                if (num<2000) {
                    for (j = 0; j < lower.length; j++) {                        
                        founds.push('mille '+lower[j]);
                    };
                } else {
                    for (i = 0; i < milles.length; i++) {                        
                        for (j = 0; j < lower.length; j++) {                        
                            if (milles[i].slice(-5)=="cents") {
                                founds.push(milles[i].slice(0,-1)+' mille '+lower[j]);
                            } else {
                                founds.push(milles[i]+' mille '+lower[j]);
                            }
                        };
                    };
                };
                $scope.hints.push({'intval': 1000, 'es': 'mil', 'fr': 'mille', 'eus': 'mila', 'word_id': 333, 'quant': 'ordin', 'num': 'plur'});
                found=true; 
            } else if (num<1000000000) {
                var milliones;
                if (num<2000000) {
                    milliones=[''];
                } else {
                    milliones = prepare_french(Math.floor(num/(1000000)));
                };
                var lower;
                if (num%1000000!=0) {
                    lower = prepare_french(num%1000000); 
                } else {
                    lower = [''];
                }
                var j;
                if (num<2000000) {
                    for (j = 0; j < lower.length; j++) {                        
                        founds.push('un million '+lower[j]);
                    };
                } else {
                    for (i = 0; i < milliones.length; i++) {                        
                        for (j = 0; j < lower.length; j++) {                        
                            if (milliones[i].slice(-5)=="cents") {
                                founds.push(milliones[i].slice(0,-1)+' millions '+lower[j]);
                            } else {
                                founds.push(milliones[i]+' millions '+lower[j]);
                            }
                        };
                    };
                };
                $scope.hints.push({'intval': 1000000, 'es': 'un millón', 'fr': 'un million de', 'eus': 'milioi bat', 'word_id': 337, 'quant': 'ordin', 'num': 'plur'});
                found=true; 
            } else {
                var billiones;
                if (num<2000000000) {
                    billiones=[''];
                } else {
                    billiones = prepare_french(Math.floor(num/(1000000000)));
                };
                var lower;
                if (num%1000000000!=0) {
                    lower = prepare_french(num%1000000000); 
                } else {
                    lower = [''];
                }
                var j;
                if (num<2000000000) {
                    for (j = 0; j < lower.length; j++) {                        
                        founds.push('un milliard '+lower[j]);
                    };
                } else {
                    for (i = 0; i < billiones.length; i++) {                        
                        for (j = 0; j < lower.length; j++) {                        
                            if (billiones[i].slice(-5)=="cents") {
                                founds.push(billiones[i].slice(0,-1)+' milliards '+lower[j]);
                            } else {
                                founds.push(billiones[i]+' milliards '+lower[j]);
                            }
                        };
                    };
                };
                $scope.hints.push({'intval': 1000000000, 'es': 'un billón', 'fr': 'un milliard de', 'eus': 'mila milioi', 'word_id': 339, 'syns_eus': [340], 'quant': 'ordin', 'num': 'plur'});
                $scope.hints.push({'intval': 1000000000, 'es': 'mil millones', 'fr': 'un milliard de', 'eus': 'miliar bat', 'word_id': 340, 'syns_eus': [339], 'quant': 'ordin', 'num': 'plur'});
                found=true;                     
            };
        };
        if (!(found)) {
            return([(num).toString()]);
        } else {
            // for (i = 0; i < founds.length; i++) {
                // res+=founds[i];
                // res+=' ';
            // };
            // return(res);
            return([...new Set(founds)]);
        };
    };
    
    
    prepare_spanish = function(num) {
        var i;
        var found=false;
        var founds=[];
        var num_ordins = ordins.length;
        if (num==0) {
            founds.push(indets[14].es);
            founds.push(indets[15].es);
            found=true;
        };
        if (!(found)) {
            for (i = 0; i < num_ordins; i++) {
                if (parseInt(ordins[i].intval)==num) {
                    found=true;
                    founds.push(ordins[i].es);
                };
            };
        };
        if (!(found)) {
            if (num<100){
                if (num==50){
                    founds.push("cincuenta");
                    found=true;
                } else if (num<30){
                    tens="veinti";                
                    units=prepare_spanish(num%10);
                    for (i = 0; i < units.length; i++) {                        
                        founds.push(tens+units[i]);
                    }
                    found=true;
                    
                } else {
                    tens=prepare_spanish(num-num%10)[0];                
                    units=prepare_spanish(num%10);
                    for (i = 0; i < units.length; i++) {                        
                        founds.push(tens+' y '+units[i]);
                    }
                    found=true;
                };
            } else if (num<1000) {
                cents=prepare_spanish(num-num%100)[0];
                if (num<199) cents="ciento";
                remainder = prepare_spanish(num%100);
                for (i = 0; i < remainder.length; i++) {                        
                    founds.push(cents+' '+remainder[i]);
                }
                found=true; 
                
            } else if (num<1000000) {
                var milles;
                milles = prepare_spanish(Math.floor(num/(1000)));
                
                var lower;
                if (num%1000!=0) {
                    lower = prepare_spanish(num%1000); 
                } else {
                    lower = [''];
                }
                var j;
                
                for (i = 0; i < milles.length; i++) { 
                    if (milles[i].slice(-3)=="uno") milles[i]=milles[i].slice(0,-1);
                    for (j = 0; j < lower.length; j++) {                        
                        founds.push(milles[i]+' mil '+lower[j]);
                    };
                };

                found=true; 
            } else if (num<1000000000) {
                var milliones;
                milliones = prepare_spanish(Math.floor(num/(1000000)));
                
                var lower;
                if (num%1000000!=0) {
                    lower = prepare_spanish(num%1000000); 
                } else {
                    lower = [''];
                }
                var j;
                for (i = 0; i < milliones.length; i++) {
                    if (milliones[i].slice(-3)=="uno") milliones[i]=milliones[i].slice(0,-1);
                    var milliones_str=" millones ";
                    if (milliones[i]=="un") milliones_str=" millón ";
                    for (j = 0; j < lower.length; j++) {                        
                        founds.push(milliones[i]+milliones_str+lower[j]);
                    };
                };
                found=true; 
            } else {
                var billiones;
                billiones = prepare_spanish(Math.floor(num/(1000000000)));
                
                var lower;
                if (num%1000000000!=0) {
                    lower = prepare_spanish(num%1000000000); 
                } else {
                    lower = [''];
                }
                var j;
                for (i = 0; i < billiones.length; i++) {  
                    if (billiones[i].slice(-3)=="uno") billiones[i]=billiones[i].slice(0,-1);
                    var billiones_str=" billones ";
                    if (billiones[i]=="un") billiones_str=" billón ";
                    for (j = 0; j < lower.length; j++) {                        
                        founds.push(billiones[i]+billiones_str+lower[j]);
                    };
                };
                found=true;                     
            };
        };
        if (!(found)) {
            return([(num).toString()]);
        } else {
            return([...new Set(founds)]);
        };
    };

    prepare_basque = function(num) {
        var i;
        var found=false;
        var founds=[];
        var num_ordins = ordins.length;
        if (num==0) {
            founds.push(indets[14].eus);
            founds.push(indets[15].eus);
            found=true;
        };
        if (!(found)) {
            for (i = 0; i < num_ordins; i++) {
                if (parseInt(ordins[i].intval)==num) {
                    found=true;
                    founds.push(ordins[i].eus);
                };
            };
        };
        if (!(found)) {
            if (num<100){
                tens=prepare_basque(num-num%20);                
                units=prepare_basque(num%20);
                for (i = 0; i < tens.length; i++) {                        
                    for (var j = 0; j < units.length; j++) {                        
                        founds.push(tens[i]+"ta "+units[j]);
                    }
                    found=true;
                };
            } else if (num<1000) {
                cents=prepare_basque(num-num%100);
                remainder = prepare_basque(num%100);
                for (i = 0; i < remainder.length; i++) {
                    for (var j = 0; j < cents.length; j++) {
                        founds.push(cents[j]+' eta '+remainder[i]);
                    }
                }
                found=true; 
                
            } else if (num<1000000) {
                var milles;
                milles = prepare_basque(Math.floor(num/(1000)));
                
                var lower;
                if (num%1000!=0) {
                    lower = prepare_basque(num%1000); 
                } else {
                    lower = [''];
                }
                var j;
                
                for (i = 0; i < milles.length; i++) { 
                    var eta=" eta ";
                    if (num%1000>100) eta="";
                    if (milles[i]=="bat") {
                        for (j = 0; j < lower.length; j++) {                        
                            founds.push('mila '+eta+lower[j]);
                            // founds.push('mila bat eta '+lower[j]);
                        };
                    } else {
                        for (j = 0; j < lower.length; j++) {                        
                            founds.push(milles[i]+' mila '+eta+lower[j]);
                        };
                    }
                    
                };

                found=true; 
            } else if (num<1000000000) {
                var milliones;
                milliones = prepare_basque(Math.floor(num/(1000000)));
                
                var lower;
                if (num%1000000!=0) {
                    lower = prepare_basque(num%1000000); 
                } else {
                    lower = [''];
                }
                var j;
                for (i = 0; i < milliones.length; i++) {
                    if (milliones[i]=="bat") {
                        for (j = 0; j < lower.length; j++) {                        
                            founds.push('milioi bat eta '+lower[j]);
                            // founds.push('mila bat eta '+lower[j]);
                        };
                    } else {
                        for (j = 0; j < lower.length; j++) {                        
                            founds.push(milliones[i]+' milioi eta '+lower[j]);
                        };
                    
                    };
                };
                found=true; 
            } else {
                var billiones;
                billiones = prepare_basque(Math.floor(num/(1000000000)));
                
                var lower;
                if (num%1000000000!=0) {
                    lower = prepare_basque(num%1000000000); 
                } else {
                    lower = [''];
                }
                var j;
                for (i = 0; i < billiones.length; i++) {  
                    if (billiones[i]=="bat") {
                        for (j = 0; j < lower.length; j++) {                        
                            founds.push('miliar bat eta '+lower[j]);
                            // founds.push('mila bat eta '+lower[j]);
                        };
                    } else {
                        for (j = 0; j < lower.length; j++) {                        
                            founds.push(billiones[i]+' miliarak eta '+lower[j]);
                        };
                    
                    };
                };
                found=true;                     
            };
        };
        if (!(found)) {
            return([(num).toString()]);
        } else {
            return([...new Set(founds)]);
        };
    };

      // <button ng-click="newHint()">Aide Vocabulaire </button>
      // <button ng-click="correctionFR()">Correction Français</button>
      // <button ng-click="correctionES()">Correction Espagnol</button>
      // <button ng-click="correctionEUS()">Correction Euskara</button>
      // <button ng-click="solutions()">Toutes les solutions</button>

        // "fr_input"
        // validateFR
        // validateES
        // validateEUS
        // nombre
        // numero
        // zenbaki

    
    $scope.reduceHints = function(){
        var reducedHints=[];
        reducedHints.push($scope.hints[0].fr.trim() + '; ' + $scope.hints[0].es+ ' => ' + $scope.hints[0].eus);
        if ($scope.hints.length>1) {
            var j=1;
            var i=1;
            var k=0;
            var l=[0];
            var broken=false;
            for (i ; i < $scope.hints.length; i++) { 
                broken=false;
                for (k=0 ; k < i; k++) { 
                    if ($scope.hints[i].fr==$scope.hints[k].fr){
                        reducedHints[l[k]]+=", ";
                        reducedHints[l[k]]+=$scope.hints[i].eus;
                        l.push(l[k]);
                        broken=true;
                        break;
                    };
                };
                if (!(broken)){
                    reducedHints.push($scope.hints[i].fr.trim() + '; ' + $scope.hints[i].es+ ' => ' + $scope.hints[i].eus);
                    l.push(j);
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

    $scope.correctionFR = function(){
        // $scope.message = $scope.targets[0]; 
        $scope.nombre="";
        for (var i = 0; i < $scope.fr_nombres.length; i++) {
            $scope.nombre+=$scope.fr_nombres[i];
            if (i!=$scope.fr_nombres.length - 1) $scope.nombre+=', ';
        };        
    };

    $scope.correctionES = function(){
        // $scope.message = $scope.targets[0];  
        $scope.numero="";
        for (var i = 0; i < $scope.es_numeros.length; i++) {
            $scope.numero+=$scope.es_numeros[i];
            if (i!=$scope.es_numeros.length - 1) $scope.numero+=', ';
        };        
    };
    
    $scope.correctionEUS = function(){
        // $scope.message = $scope.targets[0];  
        $scope.zenbaki="";
        for (var i = 0; i < $scope.eus_zenbakiak.length; i++) {
            $scope.zenbaki+=$scope.eus_zenbakiak[i];
            if (i!=$scope.eus_zenbakiak.length - 1) $scope.zenbaki+=', ';
        };        
    };
    $scope.solutions = function(){
        $scope.correctionFR();      
        $scope.correctionES();      
        $scope.correctionEUS();      
    };  

    
});


app.filter('capitalize', function() {
    return function(input) {
      return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1) : input;
      // return (angular.isString(input) && input.length > 0) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : input;
    }
});

