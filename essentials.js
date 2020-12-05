var deters=[
    {
        "fr": "le ",
        "fr_f": "la ",
        "fr_before_vowel": "l'",
        "quant": "deter",
        "num": "sing",
    },
    {
        "fr": "les ",
        "quant": "deter",
        "num": "plur",
    },    
    {
        "fr": "quelques ",
        "quant": "indet",
        "num": "plur",
        "eus": "zenbait",
    },    
    {
        // "fr": "du (1 part. indén. de) ",
        "fr": "peu d'un ",
        "fr_f": "peu d'une ",
        // "fr_before_vowel": "peu de l'",
        // "fr": "peu de ",
        "quant": "indet",
        "num": "sing",
        "eus": "gutxi",
    },
    {
        // "fr": "du (1 part. indén. de) ",
        "fr": "un petit nombre de ",
        "fr_before_vowel": "un petit nombre d'",
        "quant": "indet",
        "num": "plur",
        "eus": "gutxi",
    }, 
    {
        // "fr": "du (1 part. indén. de) ",
        "fr": "une petite partie de ",
        "fr_before_vowel": "une petite partie d'",
        // "fr": "un peu de ",
        "quant": "indet",
        "num": "sing",
        "eus": "pixka bat",
    },          
    // {
    //     // "fr": "du (1 part. indén. de) ",
    //     "fr": "du ",
    //     "fr_f": "de la ",
    //     "fr_before_vowel": "de l'",
    //     "quant": "indet",
    //     "num": "sing",
    // },    
    {
        "fr": "trois ",
        "eus": "hiru",
        "quant": "ordin", 
        "num": "plur",
    },
    {
        "fr": "un ",
        "fr_f": "une ",
        "eus": "bat",
        "quant": "ordin",
        "num": "sing",
    }

];

var pronoms=[
    {"fr": "je", "eus": "ni", "fr_pers":0},
    {"fr": "tu", "eus": "zu", "fr_pers":1},
    {"fr": "elles", "plur": true, "fr_f": true, "eus": "beraiek", "fr_pers":5, 'word_id': 1, 'syns_fr': [7], 'syns_eus': [3]},
    {"fr": "elle", "fr_f": true, "eus": "bera", "fr_pers":2, 'word_id': 2, 'syns_fr': [6], 'syns_eus': [4]},
    {"fr": "elles", "plur": true, "fr_f": true, "eus": "haiek", "fr_pers":5, 'word_id': 3, 'syns_fr': [7], 'syns_eus': [1]},
    {"fr": "elle", "fr_f": true, "eus": "hura", "fr_pers":2, 'word_id': 4, 'syns_fr': [6], 'syns_eus': [2]},
    {"fr": "ils", "plur": true, "eus": "beraiek", "fr_pers":5, 'word_id': 5, 'syns_fr': [1], 'syns_eus': [3]},
    {"fr": "il", "eus": "bera", "fr_pers":2, 'word_id': 6, 'syns_fr': [2], 'syns_eus': [4]},
    {"fr": "ils", "plur": true, "eus": "haiek", "fr_pers":5, 'word_id': 7, 'syns_fr': [3], 'syns_eus': [5]},
    {"fr": "il", "eus": "hura", "fr_pers":2, 'word_id': 8, 'syns_fr': [2], 'syns_eus': [6]},
    {"fr": "nous", "eus": "gu", "fr_pers":3},
    {"fr": "vous", "eus": "zuek", "fr_pers":4},
    ];

var verbs=[
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

