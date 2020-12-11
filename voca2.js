var names=[
    {'fr': "'19 octobre 2020'", "plur_fr": "'19 octobre 2020'", 'eus': '2020ko urriaren 19', 'word_id': 0},
    {'fr': 'partie', "fr_f": true, 'eus': 'atal', 'word_id': 203, 'syns_fr': [102]},
    {'fr': 'chapitre', 'eus': 'kapitulu', 'word_id': 204},
    {'fr': 'flûte', "fr_f": true, 'eus': 'txistu', 'word_id': 205},
    {'fr': 'alphabet', 'eus': 'alfabeto', 'word_id': 206},
    {'fr': 'lettre', "fr_f": true, 'eus': 'letra', 'word_id': 207},
    {'fr': 'mot', 'eus': 'hitz', 'word_id': 208},
    {'fr': 'nom', 'eus': 'izen', 'word_id': 209},
    {'fr': 'exemple', 'eus': 'adibide', 'word_id': 177},
    {'fr': "T mouillé", 'eus': 'T soinu', 'word_id': 178},
    {'fr': 'son', 'eus': 'soinu', 'word_id': 179},
    {'fr': 'présentation', "fr_f": true, 'eus': 'aurkezpen', 'word_id': 180},
    {'fr': 'vie', "fr_f": true, 'eus': 'bizi', 'word_id': 181},
    {'fr': 'Bretagne', "fr_f": true, 'eus': 'Bretainia', 'word_id': 182},
    {'fr': 'pardon', 'eus': 'barkatu', 'word_id': 36},
    {'fr': 'regret', 'eus': 'damu', 'word_id': 37},
    {'fr': "'merci'", "plur_fr": "'mercis'", 'eus': 'eskerrik asko', 'word_id': 40},
    {'fr': 'bien', 'eus': 'ongi', 'word_id': 48},
    {'fr': 'mal', "plur_fr": "maux", 'eus': 'gaizki', 'word_id': 49},
    {'fr': 'chien', "fr_f_suf": "ne", 'eus': 'txakur', 'word_id': 50, 'syns_fr': [51]},
    {'fr': 'flic', 'eus': 'txakur', 'word_id': 51, 'syns_fr': [50]},
    {'fr': 'chanson', "fr_f": true, 'eus': 'kantore', 'word_id': 55},
    {'fr': 'champignon', 'eus': 'onddo', 'word_id': 56},
    {'fr': 'vocabulaire', 'eus': 'hiztegi', 'word_id': 57, 'syns_fr': [244]},
    {'fr': 'jour', 'eus': 'egun', 'word_id': 59},
    {'fr': 'mois', "plur_fr": "mois", 'eus': 'hilabete', 'word_id': 60},
    {'fr': 'saison', "fr_f": true, 'eus': 'urtaro', 'word_id': 61},
    {'fr': 'milieu', "plur_fr": "milieux", 'eus': 'arte', 'word_id': 63},
    {'fr': 'moitié', "fr_f": true, 'eus': 'erdi', 'word_id': 64},
    {'fr': 'surlendemain', 'eus': 'etzidamu', 'word_id': 72},
    {'fr': 'météo', "fr_f": true, 'eus': 'eguraldi', 'word_id': 73},
    {'fr': 'période', "fr_f": true, 'eus': 'aldi', 'word_id': 74, 'syns_fr': [75, 76]},
    {'fr': 'fois', "plur_fr": "fois", "fr_f": true, 'eus': 'aldi', 'word_id': 75, 'syns_fr': [74, 76]},
    {'fr': 'tour', 'eus': 'aldi', 'word_id': 76, 'syns_fr': [74, 75]},//TODO: mismatch fr towers = fr tours
    {'fr': 'bûche', "fr_f": true, 'eus': 'egur', 'word_id': 77},
    {'fr': 'vent', 'eus': 'haize', 'word_id': 78},
    {'fr': 'neige', "fr_f": true, 'eus': 'elur', 'word_id': 79},
    {'fr': 'pluie', "fr_f": true, 'eus': 'euri', 'word_id': 80},
    {'fr': 'soleil', 'eus': 'eguski', 'word_id': 87, 'syns_eus': [124]},
    {'fr': 'dieu du soleil', "plur_fr": "dieux du soleil", "pers_name": true, 'eus': 'Eki', 'word_id': 123},
    {'fr': 'soleil', 'eus': 'eki', 'word_id': 124, 'syns_eus': [87]},
    {'fr': 'nuage', 'eus': 'hodei', 'word_id': 88},
    {'fr': 'éclaircie', "fr_f": true, 'eus': 'ostarte', 'word_id': 89},
    {'fr': 'tâche', "fr_f": true, 'eus': 'ari', 'word_id': 90, 'syns_fr': [91, 92]},
    {'fr': 'occupation', "fr_f": true, 'eus': 'ari', 'word_id': 91, 'syns_fr': [90, 92]},
    {'fr': 'travail', "plur_fr": "travaux", 'eus': 'ari', 'word_id': 92, 'syns_fr': [90, 91]},
    {'fr': 'brouillard bas', "plur_fr": "brouillards bas", 'eus': 'behe-laino', 'word_id': 93},
    {'fr': 'ciel dégagé', "plur_fr": "cieux dégagés", 'eus': 'oskarbi', 'word_id': 95},
    {'fr': 'pont', 'eus': 'zubi', 'word_id': 96},
    {'fr': 'arc-en-ciel', "plur_fr": "arcs-en-ciel", 'eus': 'erromako zubi', 'word_id': 97, 'syns_eus': [99]},
    {'fr': 'corne', "fr_f": true, 'eus': 'adar', 'word_id': 98},
    {'fr': 'arc-en-ciel', "plur_fr": "arcs-en-ciel", 'eus': 'ortzadar', 'word_id': 99, 'syns_eus': [97]},
    {'fr': 'lumière', "fr_f": true, 'eus': 'argi', 'word_id': 100},
    {'fr': 'lune', "fr_f": true, 'eus': 'ilargi', 'word_id': 101},
    {'fr': 'phase', "fr_f": true, 'eus': 'atal', 'word_id': 102, 'syns_fr': [203]},
    {'fr': 'pleine lune', "plur_fr": "pleines lunes", "fr_f": true, 'eus': 'ilbete', 'word_id': 103},
    {'fr': 'lune descendante', "plur_fr": "lunes descendantes", "fr_f": true, 'eus': 'ilbehera', 'word_id': 104},
    {'fr': 'nouvelle lune', "plur_fr": "nouvelles lunes", "fr_f": true, 'eus': 'ilberri', 'word_id': 105},
    {'fr': 'lune montante', "plur_fr": "lunes montantes", "fr_f": true, 'eus': 'ilgora', 'word_id': 106},
    {'fr': 'averse', "fr_f": true, 'eus': 'zaparrada', 'word_id': 107},
    {'fr': 'bruine', "fr_f": true, 'eus': 'zirimiri', 'word_id': 108, 'syns_fr': [109]},
    {'fr': 'pluie fine', "plur_fr": "pluies fines", "fr_f": true, 'eus': 'zirimiri', 'word_id': 109, 'syns_fr': [108]},
    {'fr': 'grêle', "fr_f": true, 'eus': 'kazkabar', 'word_id': 110},
    {'fr': 'bourrasque', "fr_f": true, 'eus': 'bisuts', 'word_id': 111},
    {'fr': 'crachin', 'eus': 'lanbro', 'word_id': 112},
    {'fr': 'brume', "fr_f": true, 'eus': 'langar', 'word_id': 113},
    // {'fr': 'brume et crachin', 'eus': 'langar-laino', 'word_id': 114},
    {'fr': 'feu', "plur_fr": "feux", 'eus': 'su', 'word_id': 117},
    {'fr': 'dieu du ciel', "plur_fr": "dieux des cieux", "pers_name": true, 'eus': 'Ortzi', 'word_id': 120},
    {'fr': 'ciel', "plur_fr": "cieux", 'eus': 'ortzi', 'word_id': 121, 'syns_fr': [122]},
    {'fr': 'tonnerre', 'eus': 'ortzi', 'word_id': 122, 'syns_fr': [121]},
    {'fr': 'récolte', "fr_f": true, 'eus': 'uzta', 'word_id': 125},
    {'fr': 'fougère', "fr_f": true, 'eus': 'iratze', 'word_id': 127},
    {'fr': 'loup', "fr_f_form": "louve", 'eus': 'otso', 'word_id': 128},
    {'fr': 'chou', "plur_fr": "choux", 'eus': 'aza', 'word_id': 129},
    {'fr': 'applaudissement', 'eus': 'txalo', 'word_id': 130, 'syns_fr': [131]},
    {'fr': 'bravo', 'eus': 'txalo', 'word_id': 131, 'syns_fr': [130]},
    {'fr': 'jour de fête', "plur_fr": "jours fériés", 'eus': 'jaiegun', 'word_id': 132, 'syns_fr': [133]},
    {'fr': 'jour férié', "plur_fr": "jours fériés", 'eus': 'jaiegun', 'word_id': 133, 'syns_fr': [132]},
    {'fr': 'doute', 'eus': 'zalantza', 'word_id': 134},
    {'fr': 'étudiant', "fr_f_suf": "e", 'eus': 'ikasle', 'word_id': 136},
    {'fr': 'professeur', "fr_f_form": "professoresse", 'eus': 'irakasle', 'word_id': 137},
    {'fr': 'exercice', 'eus': 'ariketa', 'word_id': 138},
    {'fr': 'question', "fr_f": true, 'eus': 'galdera', 'word_id': 139},
    {'fr': 'réponse', "fr_f": true, 'eus': 'erantzun', 'word_id': 140, 'syns_eus': [184]},
    {'fr': 'verbe', 'eus': 'aditz', 'word_id': 141},
    {'fr': 'vérité', "fr_f": true, 'eus': 'egia', 'word_id': 142},
    {'fr': 'mensonge', 'eus': 'gezur', 'word_id': 145},
    {'fr': 'négation', "fr_f": true, 'eus': 'ezezko', 'word_id': 149},
    {'fr': 'garçon', 'eus': 'mutil', 'word_id': 151},
    {'fr': 'fille', "fr_f": true, 'eus': 'neska', 'word_id': 152},
    {'fr': 'pluriel', 'eus': 'plural', 'word_id': 148},
    {'fr': "'au revoir'", "plur_fr": "'au revoir'", 'eus': 'agur', 'word_id': 22},
    {'fr': 'après-midi', "fr_f_suf": "", "plur_fr": "après-midi", 'eus': 'arratsalde', 'word_id': 27},
    {'fr': "'s'il te plaît'", "plur_fr": "'s'il te plaît'", 'eus': 'mesedez', 'word_id': 41, 'syns_fr': [43], 'syns_eus': [42]},
    {'fr': "'s'il te plaît'", "plur_fr": "'s'il te plaît'", 'eus': 'otoi', 'word_id': 42, 'syns_fr': [44], 'syns_eus': [41]},
    {'fr': "'s'il vous plaît'", "plur_fr": "'s'il vous plaît'", 'eus': 'mesedez', 'word_id': 43, 'syns_fr': [41], 'syns_eus': [44]},
    {'fr': "'s'il vous plaît'", "plur_fr": "'s'il vous plaît'", 'eus': 'otoi', 'word_id': 44, 'syns_fr': [42], 'syns_eus': [43]},
    {'fr': 'lendemain', 'eus': 'bihar', 'word_id': 69},
    {'fr': 'froid', 'eus': 'hotz', 'word_id': 81},
    {'fr': 'chaleur', "fr_f": true, 'eus': 'bero', 'word_id': 82},
    {'fr': 'premier', "fr_f_form": "première", 'eus': 'lehen', 'word_id': 62},
    {'fr': 'dernier', "fr_f_form": "dernière", 'eus': 'azken', 'word_id': 65},
    {"fr": "lundi", "eus": "astelehen"},
    {"fr": "mardi", "eus": "astearte"},
    {"fr": "mercredi", "eus": "asteasken"},
    {"fr": "jeudi", "eus": "ostegun"},
    {"fr": "vendredi", "eus": "ostiral"},
    {"fr": "samedi", "eus": "larunbat"},
    {"fr": "dimanche", "eus": "igande"},
    {"fr": "aube", "fr_f": true, "eus": "egunsenti"},
    {"fr": "matin", "eus": "goiz"},
    {"fr": "midi", "eus": "eguerdi"},
    {"fr": "soir", "eus": "iluntze"},
    {"fr": "crépuscule", "eus": "ilunabar"},
    {"fr": "nuit", "fr_f": true, "eus": "gau"},
    {"fr": "automne", "eus": "udazken"},
    {"fr": "hiver", "fr_h_mute":true, "eus": "negu"},
    {"fr": "printemps", "plur_fr": "printemps", "eus": "udaberri"},
    {"fr": "été", "eus": "uda"},
    {"fr": "janvier", "eus": "urtarril"},
    {"fr": "février", "eus": "otsail"},
    {"fr": "mars", "plur_fr": "mars", "eus": "martxo"},
    {"fr": "avril", "eus": "apiril"},
    {"fr": "mai", "plur_fr": "mois de mai", "eus": "maiatz"},
    {"fr": "juin", "eus": "ekain"},
    {"fr": "juillet", "eus": "uztail"},
    {"fr": "août", "eus": "abuztu", 'word_id': 200, 'syns_eus': [201]},
    {"fr": "août", "eus": "agorril", 'word_id': 201, 'syns_eus': [200]},
    {"fr": "septembre", "eus": "irail"},
    {"fr": "octobre", "eus": "urri", 'word_id': 202},
    {"fr": "novembre", "eus": "azaro"},
    {"fr": "décembre", "eus": "abendu"},
    {"fr": "étranger", "fr_f_form": "étrangère", "eus": "kanpotar", 'word_id': 170, 'syns_eus': [171]},
    {"fr": "étranger", "fr_f_form": "étrangère", "eus": "arrotz", 'word_id': 171, 'syns_fr': [173], 'syns_eus': [170]},
    {"fr": "hôte", "fr_f_suf": "", "fr_h_mute":true, "eus": "arrotz", 'word_id': 173, 'syns_fr': [171]},
    {"fr": "Guillaume", "pers_name": true, "plur_fr": "Guillaume", "eus": "Guillaume"},
    {"fr": "poisson", "eus": "arrain"},
    {"fr": "Sonia", "plur_fr": "Sonia", "pers_name": true, "fr_f": true, "eus": "Sonia"},
    {"fr": "semaine", "fr_f": true, "eus": "aste", 'word_id': 58},
    {'fr': 'réponse', "fr_f": true, 'eus': 'arrapostu', 'word_id': 184, 'syns_eus': [140]},
    {'fr': 'second', "fr_f_suf": "e", 'eus': 'bigarren', 'word_id': 185},
    // {'fr': 'rose', 'eus': 'arrosa', 'word_id': 211, 'syns_fr': [214]},
    {'fr': 'rose', "fr_f": true, 'eus': 'arrosa', 'word_id': 214, 'syns_fr': [211]},
    // {'fr': 'vert', 'eus': 'berde', 'word_id': 215},
    // {'fr': 'noir', 'eus': 'beltz', 'word_id': 216},
    // {'fr': 'rouge', 'eus': 'gorri', 'word_id': 217},
    {'fr': 'communiste', "fr_f_suf": "", 'eus': 'komunista', 'word_id': 189},
    {'fr': 'Afrique', "fr_f": true, 'eus': 'Afrika', 'word_id': 190},
    {'fr': 'Chine', "fr_f": true, 'eus': 'Txina', 'word_id': 191},
    {'fr': 'Italie', "fr_f": true, 'eus': 'Italia', 'word_id': 192},
    {'fr': 'Grèce', "fr_f": true, 'eus': 'Grezia', 'word_id': 193},
    {'fr': 'Portugal', 'eus': 'Portugal', 'word_id': 194},
    {'fr': 'Belgique', "fr_f": true, 'eus': 'Belgika', 'word_id': 195},
    {'fr': 'pizza', "fr_f": true, 'eus': 'pizza', 'word_id': 196},
    {'fr': 'tour (f)', "plur_fr": "tours (f)", "fr_f": true, 'eus': 'dorre', 'word_id': 197},
    {'fr': 'Fado', 'eus': 'Fado', 'word_id': 198},
    {'fr': 'parc', 'eus': 'parke', 'word_id': 199},
    {'fr': 'liqueur de prunelles', "plur_fr": "liqueurs de prunelles", "fr_f": true, 'eus': 'patxaran', 'word_id': 210},
    {'fr': 'chanteur', "fr_f_form": "chanteuse", 'eus': 'kantari', 'word_id': 218, 'syns_eus': [219]},
    {'fr': 'chanteur', "fr_f_form": "chanteuse", 'eus': 'abeslari', 'word_id': 219, 'syns_eus': [218]},
    {'fr': 'leçon', "fr_f": true, 'eus': 'ikasgai', 'word_id': 220},
    {'fr': 'langue basque', "plur_fr": 'langues basques', "fr_f": true, 'eus': 'Euskara', 'word_id': 221},
    {'fr': 'basque', "fr_f_suf": "", 'eus': 'euskaldun', 'word_id': 222},
    {'fr': 'langage', 'eus': 'hizkuntza', 'word_id': 223},
    {'fr': 'voiture', "fr_f": true, 'eus': 'auto', 'word_id': 224},
    {'fr': 'ordinateur', 'eus': 'ordenagailu', 'word_id': 225},
    {'fr': 'maison', "fr_f": true, 'eus': 'etxe', 'word_id': 226},
    {'fr': 'bonbon', 'eus': 'goxoki', 'word_id': 227, 'syns_eus': [228]},
    {'fr': 'bonbon', 'eus': 'gozoki', 'word_id': 228, 'syns_eus': [227]},
    {'fr': 'ami', "fr_f_suf": "e", 'eus': 'lagun', 'word_id': 229},
    {'fr': 'sœur d’une femme', "fr_f": true, "plur_fr": 'sœurs d’une femme', 'eus': 'ahizpa', 'word_id': 230},
    {'fr': 'sœur d’un homme', "fr_f": true, "plur_fr": 'sœurs d’un homme', 'eus': 'arreba', 'word_id': 231},
    {'fr': 'livre', 'eus': 'liburu', 'word_id': 232},
    {'fr': 'vacance', "fr_f": true, 'eus': 'opor', 'word_id': 233, 'syns_eus': [234]},
    {'fr': 'vacance', "fr_f": true, 'eus': 'bakantza', 'word_id': 234, 'syns_eus': [233]},
    {'fr': 'appartement', 'eus': 'apartamentu', 'word_id': 235, 'syns_eus': [236]},
    {'fr': 'appartement', 'eus': 'apartamendu', 'word_id': 236, 'syns_eus': [235]},
    {'fr': 'bras', "plur_fr": "bras", 'eus': 'beso', 'word_id': 237},
    {'fr': 'fille (filiation)', "plur_fr": 'filles (filiation)', "fr_f": true, 'eus': 'alaba', 'word_id': 238},
    {'fr': 'chat', "fr_f_suf": "te",  'eus': 'katu', 'word_id': 239},
    {'fr': 'dictionnaire', 'eus': 'hiztegi', 'word_id': 244, 'syns_fr': [57]},
    {'fr': 'pêcheur', "fr_f_form": "pêcheuse", 'eus': 'arrantzale', 'word_id': 245},
    {'fr': 'téléphone', 'eus': 'telefono', 'word_id': 246},
    {'fr': 'ciseau', "plur_fr": 'ciseaux', 'eus': 'guraize', 'word_id': 247},
    {'fr': 'France', "fr_f": true, 'eus': 'Frantzia', 'word_id': 248},
    {'fr': 'cuisinier', "fr_f_form": "cuisinière", 'eus': 'sukaldari', 'word_id': 249},
    {'fr': 'tramway', 'eus': 'tranbia', 'word_id': 252},
    {'fr': 'conducteur', "fr_f_form": "conductrice", 'eus': 'gidari', 'word_id': 253},
    {'fr': 'grève', "fr_f": true, 'eus': 'greba', 'word_id': 254},
    {'fr': 'montre', "fr_f": true, 'eus': 'erloju', 'word_id': 255, 'syns_fr': [256]},
    {'fr': 'horloge', "fr_f": true, "fr_h_mute":true, 'eus': 'erloju', 'word_id': 256, 'syns_fr': [256]},
    {'fr': 'film', 'eus': 'film', 'word_id': 257},
    {'fr': 'enfant', 'eus': 'ume', 'word_id': 258},
    {'fr': 'euro', 'eus': 'euro', 'word_id': 259},
    {'fr': 'béret', 'eus': 'txapel', 'word_id': 260},
    {'fr': 'année', "fr_f": true, 'eus': 'urte', 'word_id': 261},
];

var adjs=[
    {'fr': 'négatif', 'fr_post': true, "fr_f": "négative", 'eus': 'ezezko', 'word_id': 150},
    {'fr': 'facile', 'fr_post': true, "fr_f": "facile", 'eus': 'erraz', 'word_id': 147},
    {'fr': 'difficile', 'fr_post': true, "fr_f": "difficile", 'eus': 'zail', 'word_id': 146},
    {'fr': 'vrai', 'eus': 'egia', 'word_id': 143},
    {'fr': 'faux', "plur_fr": "faux", "fr_f": "fausse", 'eus': 'gezur', 'word_id': 144},
    {'fr': 'vivant', 'fr_post': true, 'eus': 'bizi', 'word_id': 183},
    {'fr': 'premier', "fr_f": "première", 'eus': 'lehen', 'word_id': 162},
    {'fr': 'dernier', "fr_f": "dernière", 'eus': 'azken', 'word_id': 165},
    {'fr': 'bon', "fr_f": "bonne", 'eus': 'on', 'word_id': 84},
    {'fr': 'mauvais', "plur_fr": "mauvais", 'eus': 'txar', 'word_id': 85, 'syns_fr': [86]},
    {'fr': 'moche', 'fr_post': true, "fr_f": "moche", 'eus': 'txar', 'word_id': 86, 'syns_fr': [85]},
    {'fr': 'bas', "plur_fr": "bas", "fr_f": "basse", 'eus': 'behe', 'word_id': 94},
    {'fr': 'mouillé', 'fr_post': true, 'eus': 'busti', 'word_id': 115, 'syns_fr': [116]},
    {'fr': 'humide', 'fr_post': true, "fr_f": "humide", "fr_h_mute":true, 'eus': 'busti', 'word_id': 116, 'syns_fr': [115]},
    {'fr': 'peu abondant', 'fr_post': true, 'eus': 'urri', 'word_id': 126},
    {'fr': 'froid', 'fr_post': true, 'eus': 'hotz', 'word_id': 81},
    {'fr': 'chaud', 'fr_post': true, 'eus': 'bero', 'word_id': 82},
    {"fr": "beau", "fr_before_vowel": "bel", "plur_fr": "beaux", "fr_f": "belle", "eus": "polit"},
    {"fr": "petit","eus": "txiki"},
    {"fr": "grand", "eus": "haundi"},
    {'fr': 'habituel', 'fr_post': true, "fr_f": "habituelle", "fr_h_mute":true, 'eus': 'ohiko', 'word_id': 166},
    {'fr': 'obligatoire', 'fr_post': true, "fr_f": "obligatoire", 'eus': 'beharrezko', 'word_id': 167},
    {'fr': 'lent', 'fr_post': true, 'eus': 'motel', 'word_id': 168},
    {"fr": "étranger", "fr_f": "étrangère", 'fr_post': true, "eus": "kanpotar", 'word_id': 174, 'syns_eus': [175]},
    {"fr": "étranger", "fr_f": "étrangère", 'fr_post': true, "eus": "arrotz", 'word_id': 175, 'syns_fr': [176], 'syns_eus': [174]},
    {"fr": "bizarre", "fr_f": "bizarre", 'fr_post': true, "eus": "arrotz", 'word_id': 176, 'syns_fr': [175]},    
    {'fr': 'second', 'eus': 'bigarren', 'word_id': 212},
    {'fr': 'rose', "fr_f": "rose", 'fr_post': true, 'eus': 'arrosa', 'word_id': 213},
    {'fr': 'vert', 'fr_post': true, 'eus': 'berde', 'word_id': 186},
    {'fr': 'noir', 'fr_post': true, 'eus': 'beltz', 'word_id': 187},
    {'fr': 'rouge', "fr_f": "rouge", 'fr_post': true, 'eus': 'gorri', 'word_id': 188},
    {'fr': 'jaune', "fr_f": "jaune", 'fr_post': true, 'eus': 'hori', 'word_id': 250},
    {'fr': 'bleu', 'fr_post': true, 'eus': 'urdin', 'word_id': 251},
    {'fr': 'couvert de brouillard', "fr_f": "couverte de brouillard", "plur_fr": "couverts de brouillard", 
     "fr_f_plur": "couvertes de brouillard", 'fr_post': true, 'eus': 'lainotuta', 'word_id': 240},
    {'fr': 'propre', "fr_f": "propre", 'fr_post': true, 'eus': 'garbi', 'word_id': 241},
    {'fr': 'chéri', "fr_f": "chérie", 'fr_post': true, 'eus': 'maite', 'word_id': 242, 'syns_eus': [243]},
    {'fr': 'chéri', "fr_f": "chérie", 'fr_post': true, 'eus': 'maitia', 'word_id': 243, 'syns_eus': [242]},
    {'fr': 'excellent', 'eus': 'bikain', 'word_id': 262},
];

// {'fr': "d'accord", 'eus': 'ados', 'word_id': 135},
//noun  "plur_fr": , "fr_f": true, "pers_name": true, "fr_h_mute":true,
//adj   , "plur_fr": "mauvais", "fr_f_plur" "fr_f": "rouge", 'fr_post': true, "fr_before_vowel": "bel", "fr_h_mute":true,


