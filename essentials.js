var dets=[
    {"fr": "le ","fr_f": "la ","fr_before_vowel": "l'","quant": "deter","num": "sing"},
    {"fr": "les ","quant": "deter","num": "plur"},
];

var indets=[
    {"fr": "quelques ","quant": "indet","num": "plur","eus": "zenbait"},    
    {"fr": "plusieurs ","quant": "indet","num": "plur","eus": "batzuk"},    
    {"fr": "peu d'un ","fr_f": "peu d'une ","quant": "indet","num": "sing","eus": "gutxi"},
    // "fr": "du (1 part. indén. de) ", "fr_before_vowel": "peu de l'", "fr": "peu de ", "fr": "un peu de ",
    // {   "fr": "du ","fr_f": "de la ","fr_before_vowel": "de l'","quant": "indet","num": "sing"},    
    {   "fr": "un petit nombre de ","fr_before_vowel": "un petit nombre d'","quant": "indet","num": "plur",
        "eus": "gutxi"},
    {   "fr": "une petite partie de ","fr_before_vowel": "une petite partie d'","quant": "indet","num": "sing",
        "eus": "pixka bat"},

    {   "fr": "de nombreux ","fr_f": "de nombreuses ","quant": "indet","num": "plur","eus": "asko", 
        'word_id': 9, 'syns_eus': [12,15]},
    {   "fr": "une grande partie de ","fr_before_vowel": "une grande partie d'","quant": "indet","num": "sing","eus": "asko", 
        'word_id': 10, 'syns_eus': [13,16]},
    {   "fr": "beaucoup d'un ","fr_f": "beaucoup d'une ","quant": "indet","num": "sing","eus": "asko", 
        'word_id': 11, 'syns_eus': [14,17]},

    {   "fr": "de nombreux ","fr_f": "de nombreuses ","quant": "indet","num": "plur","eus": "anitz", 
        'word_id': 12, 'syns_eus': [9,15]},
    {   "fr": "une grande partie de ","fr_before_vowel": "une grande partie d'","quant": "indet","num": "sing","eus": "anitz", 
        'word_id': 13, 'syns_eus': [10,16]},
    {   "fr": "beaucoup d'un ","fr_f": "beaucoup d'une ","quant": "indet","num": "sing","eus": "anitz", 
        'word_id': 14, 'syns_eus': [11,17]},

    {   "fr": "de nombreux ","fr_f": "de nombreuses ","quant": "indet","num": "plur","eus": "hanitx", 
        'word_id': 15, 'syns_eus': [9,12]},
    {   "fr": "une grande partie de ","fr_before_vowel": "une grande partie d'","quant": "indet","num": "sing","eus": "hanitx", 
        'word_id': 16, 'syns_eus': [10,13]},
    {   "fr": "beaucoup d'un ","fr_f": "beaucoup d'une ","quant": "indet","num": "sing","eus": "hanitx", 
        'word_id': 17, 'syns_eus': [11,14]},
    {'intval': 0, 'fr': 'zéro', 'eus': 'zero', 'es': 'cero', 'word_id': 278, 'syns_eus': [279], 'quant': 'ordin', 'num': 'sing'},
    {'fr': 'zéro', 'eus': 'huts', 'word_id': 279, 'syns_eus': [278], 'quant': 'ordin', 'num': 'sing'},
];
var ordins=[
    {'intval': 1, 'es': 'uno', "fr": "un", "fr_f": "une", "eus": "bat","quant": "ordin","num": "sing"},
    // {'fr': 'un', 'eus': 'bat', 'word_id': 280, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 2, 'es': 'dos', 'fr': "deux", 'eus': 'bi', 'word_id': 281, 'quant': 'ordin', 'num': 'plur'},
    // {"fr": "trois ","eus": "hiru","quant": "ordin","num": "plur"},
    {'intval': 3, 'es': 'tres', 'fr': 'trois', 'eus': 'hiru', 'word_id': 282, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 4, 'es': 'cuatro', 'fr': 'quatre', 'eus': 'lau', 'word_id': 283, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 5, 'es': 'cinco', 'fr': 'cinq', 'eus': 'bost', 'word_id': 284, 'syns_eus': [285], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 5, 'es': 'cinco', 'fr': 'cinq', 'eus': 'bortz', 'word_id': 285, 'syns_eus': [284], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 6, 'es': 'seis', 'fr': 'six', 'eus': 'sei', 'word_id': 286, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 7, 'es': 'siete', 'fr': 'sept', 'eus': 'zazpi', 'word_id': 287, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 8, 'es': 'ocho', 'fr': 'huit', 'eus': 'zortzi', 'word_id': 288, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 9, 'es': 'nueve', 'fr': 'neuf', 'eus': 'bederatzi', 'word_id': 289, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 10, 'es': 'diez', 'fr': 'dix', 'eus': 'hamar', 'word_id': 290, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 11, 'es': 'once', 'fr': 'onze', 'eus': 'hamaika', 'word_id': 291, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 12, 'es': 'doce', 'fr': 'douze', 'eus': 'hamabi', 'word_id': 292, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 13, 'es': 'trece', 'fr': 'treize', 'eus': 'hamahiru', 'word_id': 293, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 14, 'es': 'catorce', 'fr': 'quatorze', 'eus': 'hamalau', 'word_id': 294, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 15, 'es': 'quince', 'fr': 'quinze', 'eus': 'hamabost', 'word_id': 295, 'syns_eus': [341], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 15, 'es': 'quince', 'fr': 'quinze', 'eus': 'hamabortz', 'word_id': 341, 'syns_eus': [295], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 16, 'es': 'dieciséis', 'fr': 'seize', 'eus': 'hamasei', 'word_id': 296, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 17, 'es': 'diecisiete', 'fr': 'dix-sept', 'eus': 'hamazazpi', 'word_id': 297, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 18, 'es': 'dieciocho', 'fr': 'dix-huit', 'eus': 'hemezortzi', 'word_id': 298, 'syns_eus': [299], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 18, 'es': 'dieciocho', 'fr': 'dix-huit', 'eus': 'hamazortzi', 'word_id': 299, 'syns_eus': [298], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 19, 'es': 'diecinueve', 'fr': 'dix-neuf', 'eus': 'hemeretzi', 'word_id': 300, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 20, 'es': 'veinte', 'fr': 'vingt', 'eus': 'hogei', 'word_id': 301, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 21, 'es': 'veintiuno', 'fr': 'vingt et un', "fr_f": "vingt et une", 'eus': 'hogeita bat', 'word_id': 302, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 22, 'es': 'veintidós', 'fr': 'vingt-deux', 'eus': 'hogeita bi', 'word_id': 303, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 23, 'es': 'veintitrés', 'fr': 'vingt-trois', 'eus': 'hogeita hiru', 'word_id': 304, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 26, 'es': 'veintiséis', 'fr': 'vingt-six', 'eus': 'hogeita sei', 'word_id': 305, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 30, 'es': 'treinta', 'fr': 'trente', 'eus': 'hogeita hamar', 'word_id': 306, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 31, 'es': 'treinta y uno', 'fr': 'trente et un', "fr_f": "trente et une", 'eus': 'hogeita hamaika', 'word_id': 307, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 40, 'es': 'cuarenta', 'fr': 'quarante', 'eus': 'berrogei', 'word_id': 308, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 47, 'es': 'cuarenta y siete', 'fr': 'quarante-sept', 'eus': 'berrogeita zazpi', 'word_id': 309, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 54, 'es': 'cincuenta y cuatro', 'fr': 'cinquante-quatre', 'eus': 'berrogeita hamalau', 'word_id': 310, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 60, 'es': 'sesenta', 'fr': 'soixante', 'eus': 'hirurogei', 'word_id': 311, 'syns_eus': [312], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 60, 'es': 'sesenta', 'fr': 'soixante', 'eus': 'hiruretan hogei', 'word_id': 312, 'syns_eus': [311], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 70, 'es': 'setenta', 'fr': 'soixante-dix', 'eus': 'hirurogeita hamar', 'word_id': 313, 'syns_eus': [314], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 70, 'es': 'setenta', 'fr': 'soixante-dix', 'eus': 'hiruretan hogeita hamar', 'word_id': 314, 'syns_eus': [313], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 80, 'es': 'ochenta', 'fr': 'quatre-vingts', 'eus': 'laurogei', 'word_id': 315, 'syns_eus': [316], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 80, 'es': 'ochenta', 'fr': 'quatre-vingts', 'eus': 'lauretan hogei', 'word_id': 316, 'syns_eus': [315], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 90, 'es': 'noventa', 'fr': 'quatre-vingt-dix', 'eus': 'laurogeita hamar', 'word_id': 317, 'syns_eus': [318], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 90, 'es': 'noventa', 'fr': 'quatre-vingt-dix', 'eus': 'lauretan hogeita hamar', 'word_id': 318, 'syns_eus': [317], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 97, 'es': 'noventa y siete', 'fr': 'quatre-vingt-dix-sept', 'eus': 'laurogeita hamazazpi', 'word_id': 319, 'syns_eus': [320], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 97, 'es': 'noventa y siete', 'fr': 'quatre-vingt-dix-sept', 'eus': 'lauretan hogeita hamazazpi', 'word_id': 320, 'syns_eus': [319], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 100, 'es': 'cien', 'fr': 'cent', 'eus': 'ehun', 'word_id': 321, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 101, 'es': 'ciento uno', 'fr': 'cent un', "fr_f": "cent une", 'eus': 'ehun eta bat', 'word_id': 322, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 125, 'es': 'ciento veinticinco', 'fr': 'cent vingt-cinq', 'eus': 'ehun eta hogeita bost', 'syns_eus': [342], 'word_id': 323, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 125, 'es': 'ciento veinticinco', 'fr': 'cent vingt-cinq', 'eus': 'ehun eta hogeita bortz', 'syns_eus': [323], 'word_id': 342, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 200, 'es': 'doscientos', 'fr': 'deux cents', 'eus': 'berrehun', 'word_id': 324, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 300, 'es': 'trescientos', 'fr': 'trois cents', 'eus': 'hirurehun', 'word_id': 325, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 400, 'es': 'cuatrocientos', 'fr': 'quatre cents', 'eus': 'laurehun', 'word_id': 326, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 500, 'es': 'quinientos', 'fr': 'cinq cents', 'eus': 'bostehun', 'word_id': 327, 'syns_eus': [343], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 500, 'es': 'quinientos', 'fr': 'cinq cents', 'eus': 'bortzehun', 'word_id': 343, 'syns_eus': [327], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 600, 'es': 'seiscientos', 'fr': 'six cents', 'eus': 'seiehun', 'word_id': 328, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 700, 'es': 'setecientos', 'fr': 'sept cents', 'eus': 'zazpiehun', 'word_id': 329, 'syns_eus': [330], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 700, 'es': 'setecientos', 'fr': 'sept cents', 'eus': 'zazpirehun', 'word_id': 330, 'syns_eus': [329], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 800, 'es': 'ochocientos', 'fr': 'huit cents', 'eus': 'zortziehun', 'word_id': 331, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 900, 'es': 'novecientos', 'fr': 'neuf cents', 'eus': 'bederatziehun', 'word_id': 332, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 1000, 'es': 'mil', 'fr': 'mille', 'eus': 'mila', 'word_id': 333, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 1200, 'es': 'mil dos cientos', 'fr': 'mille deux cents', 'eus': 'mila eta berrehun', 'word_id': 334, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 1201, 'es': 'mil dos cientos uno', 'fr': 'mille deux cent un', "fr_f": "mille deux cent une", 'eus': 'mila berrehun eta bat', 'word_id': 335, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 1984, 'es': 'mil novecientos ochenta y cuatro', 'fr': 'mille neuf cent quatre-vingt quatre', 'eus': 'mila bederatziehun eta laurogeita lau', 'word_id': 336, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 1000000, 'es': 'un millón', 'fr': 'un million de', 'eus': 'milioi bat', 'word_id': 337, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 10000000, 'es': 'diez millones', 'fr': 'dix millions de', 'eus': 'hamar milioi', 'word_id': 338, 'quant': 'ordin', 'num': 'plur'},
    {'intval': 1000000000, 'es': 'un billón', 'fr': 'un milliard de', 'eus': 'mila milioi', 'word_id': 339, 'syns_eus': [340], 'quant': 'ordin', 'num': 'plur'},
    {'intval': 1000000000, 'es': 'mil millones', 'fr': 'un milliard de', 'eus': 'miliar bat', 'word_id': 340, 'syns_eus': [339], 'quant': 'ordin', 'num': 'plur'},
];

var pronoms=[
    {"fr": "je", "fr_f": true, "eus": "ni", "fr_pers":0},
    {"fr": "tu", "fr_f": true, "eus": "zu", "fr_pers":1},
    // {"fr": "il", "eus": "bera", "fr_pers":2, 'word_id': 6, 'syns_fr': [2], 'syns_eus': [4]},
    // {"fr": "il", "eus": "hura", "fr_pers":2, 'word_id': 8, 'syns_fr': [2], 'syns_eus': [6]},
    {"fr": "il", "fr_f_form": "elle", "eus": "hura", "fr_pers":2, 'word_id': 8, 'syns_eus': [6]},
    {"fr": "il", "fr_f_form": "elle", "eus": "bera", "fr_pers":2, 'word_id': 6, 'syns_eus': [8]},
    // {"fr": "elle", "fr_f": true, "eus": "hura", "fr_pers":2, 'word_id': 4, 'syns_fr': [6], 'syns_eus': [2]},
    // {"fr": "elle", "fr_f": true, "eus": "bera", "fr_pers":2, 'word_id': 2, 'syns_fr': [6], 'syns_eus': [4]},
    {"fr": "ils", "fr_f_form": "elles", "plur": true, "eus": "haiek", "fr_pers":5, 'word_id': 7, 'syns_eus': [5]},
    {"fr": "ils", "fr_f_form": "elles", "plur": true, "eus": "beraiek", "fr_pers":5, 'word_id': 5, 'syns_eus': [7]},
    // {"fr": "elles", "plur": true, "fr_f": true, "eus": "haiek", "fr_pers":5, 'word_id': 3, 'syns_fr': [7], 'syns_eus': [1]},
    // {"fr": "elles", "plur": true, "fr_f": true, "eus": "beraiek", "fr_pers":5, 'word_id': 1, 'syns_fr': [7], 'syns_eus': [3]},
    {"fr": "nous", "fr_f": true, "eus": "gu", "fr_pers":3},
    {"fr": "vous (pl.)", "fr_f": true, "eus": "zuek", "fr_pers":4},
    ];

var auxiliaries=[
    {
        "fr": "être",
        "eus": "izan",
        "fr_c":["suis","es","est","sommes","êtes","sont"],
        "eus_c":[["naiz","zara","da","gara","zarete","dira"]],
        "trans":false
    },
    {
        "fr": "avoir",
        "eus": "ukan",
        "fr_c":["ai","as","a","avons","avez","ont"],
        "eus_c":
            [
                ["dut","duzu","du","dugu","duzue","dute"],
                ["ditut","dituzu","ditu","ditugu","dituzue","dituzte"]
            ],
        "trans":true
    },

];


var version_Ukan_Izan = '1.26';
var version_Zenbakiak = '1.2';
var version_Hau_Hori_Hura = '1.0';

