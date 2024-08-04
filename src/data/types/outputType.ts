export interface OutputType {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  children: Child4[];
  groups: Group[];
  packageName: string;
  readme: Summary[];
  symbolIdMap: SymbolIdMap;
  files: Files;
}

interface Files {
  entries: Entries;
  reflections: Reflections;
}

interface Reflections {
  "1": number;
}

interface Entries {
  "1": string;
}

interface SymbolIdMap {
  "0": Target;
  "1": Target;
  "2": Target;
  "3": Target;
  "4": Target;
  "5": Target;
  "6": Target;
  "7": Target;
  "8": Target;
  "9": Target;
  "10": Target;
  "11": Target;
  "12": Target;
  "13": Target;
  "14": Target;
  "15": Target;
  "16": Target;
  "17": Target;
  "18": Target;
  "19": Target;
  "20": Target;
  "21": Target;
  "22": Target;
  "23": Target;
  "24": Target;
  "25": Target;
  "26": Target;
  "27": Target;
  "28": Target;
  "29": Target;
  "30": Target;
  "31": Target;
  "32": Target;
  "33": Target;
  "34": Target;
  "35": Target;
  "36": Target;
  "37": Target;
  "38": Target;
  "39": Target;
  "40": Target;
  "41": Target;
  "42": Target;
  "43": Target;
  "44": Target;
  "45": Target;
  "46": Target;
  "47": Target;
  "48": Target;
  "49": Target;
  "50": Target;
  "51": Target;
  "52": Target;
  "53": Target;
  "54": Target;
  "55": Target;
  "56": Target;
  "57": Target;
  "58": Target;
  "59": Target;
  "60": Target;
  "61": Target;
  "62": Target;
  "63": Target;
  "64": Target;
  "65": Target;
  "66": Target;
  "67": Target;
  "68": Target;
  "69": Target;
  "70": Target;
  "71": Target;
  "72": Target;
  "73": Target;
  "74": Target;
  "75": Target;
  "76": Target;
  "77": Target;
  "78": Target;
  "79": Target;
  "80": Target;
  "81": Target;
  "82": Target;
  "83": Target;
  "84": Target;
  "85": Target;
  "86": Target;
  "87": Target;
  "88": Target;
  "89": Target;
  "90": Target;
  "91": Target;
  "92": Target;
  "93": Target;
  "94": Target;
  "95": Target;
  "96": Target;
  "97": Target;
  "98": Target;
  "99": Target;
  "100": Target;
  "101": Target;
  "102": Target;
  "103": Target;
  "104": Target;
  "105": Target;
  "106": Target;
  "107": Target;
  "108": Target;
  "109": Target;
  "110": Target;
  "111": Target;
  "112": Target;
  "113": Target;
  "114": Target;
  "115": Target;
  "116": Target;
  "117": Target;
  "118": Target;
  "119": Target;
  "120": Target;
  "121": Target;
  "122": Target;
  "123": Target;
  "124": Target;
  "125": Target;
  "126": Target;
  "127": Target;
  "128": Target;
  "129": Target;
  "130": Target;
  "131": Target;
  "132": Target;
  "133": Target;
  "134": Target;
  "135": Target;
  "136": Target;
  "137": Target;
  "138": Target;
  "139": Target;
  "140": Target;
  "141": Target;
  "142": Target;
  "143": Target;
  "144": Target;
  "145": Target;
  "146": Target;
  "147": Target;
  "148": Target;
  "149": Target;
  "150": Target;
  "151": Target;
  "152": Target;
  "153": Target;
  "154": Target;
  "155": Target;
  "156": Target;
  "157": Target;
  "158": Target;
  "159": Target;
  "160": Target;
  "161": Target;
  "162": Target;
  "163": Target;
  "164": Target;
  "165": Target;
  "166": Target;
  "167": Target;
  "168": Target;
  "169": Target;
  "170": Target;
  "171": Target;
  "172": Target;
  "173": Target;
  "174": Target;
  "175": Target;
  "176": Target;
  "177": Target;
  "178": Target;
  "179": Target;
  "180": Target;
  "181": Target;
  "182": Target;
  "183": Target;
  "184": Target;
  "185": Target;
  "186": Target;
  "187": Target;
  "188": Target;
  "189": Target;
  "190": Target;
  "191": Target;
  "192": Target;
  "193": Target;
  "194": Target;
  "195": Target;
  "196": Target;
  "197": Target;
  "198": Target;
  "199": Target;
  "200": Target;
  "201": Target;
  "202": Target;
  "203": Target;
  "204": Target;
  "205": Target;
  "206": Target;
  "207": Target;
  "208": Target;
  "209": Target;
  "210": Target;
  "211": Target;
  "212": Target;
  "213": Target;
  "214": Target;
  "215": Target;
  "216": Target;
  "217": Target;
  "218": Target;
  "219": Target;
  "220": Target;
  "221": Target;
  "222": Target;
  "223": Target;
  "224": Target;
  "225": Target;
  "226": Target;
  "227": Target;
  "228": Target;
  "229": Target;
  "230": Target;
  "231": Target;
  "232": Target;
  "233": Target;
  "234": Target;
  "235": Target;
  "236": Target;
  "237": Target;
  "238": Target;
  "239": Target;
  "240": Target;
  "241": Target;
  "242": Target;
  "243": Target;
  "244": Target;
  "245": Target;
  "246": Target;
  "247": Target;
  "248": Target;
  "249": Target;
  "250": Target;
  "251": Target;
  "252": Target;
  "253": Target;
  "254": Target;
  "255": Target;
  "256": Target;
  "257": Target;
  "258": Target;
  "259": Target;
  "260": Target;
  "261": Target;
  "262": Target;
  "263": Target;
  "264": Target;
  "265": Target;
  "266": Target;
  "267": Target;
  "268": Target;
  "269": Target;
  "270": Target;
  "271": Target;
  "272": Target;
  "273": Target;
  "274": Target;
  "275": Target;
  "276": Target;
  "277": Target;
  "278": Target;
  "279": Target;
  "280": Target;
  "281": Target;
  "282": Target;
  "283": Target;
  "284": Target;
  "285": Target;
  "286": Target;
  "287": Target;
  "288": Target;
  "289": Target;
  "290": Target;
  "291": Target;
  "292": Target;
  "293": Target;
  "294": Target;
  "295": Target;
  "296": Target;
  "297": Target;
  "298": Target;
  "299": Target;
  "300": Target;
  "301": Target;
  "302": Target;
  "303": Target;
  "304": Target;
  "305": Target;
  "306": Target;
  "307": Target;
  "308": Target;
  "309": Target;
  "310": Target;
  "311": Target;
  "312": Target;
  "313": Target;
  "314": Target;
  "315": Target;
  "316": Target;
  "317": Target;
  "318": Target;
  "319": Target;
  "320": Target;
  "321": Target;
  "322": Target;
  "323": Target;
  "324": Target;
  "325": Target;
  "326": Target;
  "328": Target;
  "329": Target;
  "330": Target;
  "331": Target;
  "332": Target;
  "333": Target;
  "334": Target;
  "336": Target;
  "337": Target;
  "338": Target;
  "339": Target;
  "340": Target;
  "341": Target;
  "342": Target;
  "343": Target;
  "344": Target;
  "346": Target;
  "347": Target;
  "348": Target;
  "349": Target;
  "350": Target;
  "351": Target;
  "352": Target;
  "354": Target;
  "355": Target;
  "356": Target;
  "357": Target;
  "358": Target;
  "359": Target;
  "360": Target;
  "361": Target;
  "362": Target;
  "363": Target;
  "364": Target;
  "365": Target;
  "366": Target;
  "367": Target;
  "368": Target;
  "369": Target;
  "370": Target;
  "371": Target;
  "372": Target;
  "373": Target;
  "374": Target;
  "375": Target;
  "376": Target;
  "377": Target;
  "378": Target;
  "379": Target;
  "380": Target;
  "381": Target;
  "382": Target;
  "383": Target;
  "384": Target;
  "385": Target;
  "386": Target;
  "387": Target;
  "388": Target;
  "389": Target;
  "390": Target;
  "391": Target;
  "392": Target;
  "393": Target;
  "394": Target;
  "395": Target;
  "396": Target;
  "397": Target;
  "398": Target;
  "399": Target;
  "400": Target;
  "401": Target;
  "402": Target;
  "403": Target;
  "404": Target;
  "405": Target;
  "406": Target;
  "407": Target;
  "408": Target;
  "409": Target;
  "410": Target;
  "411": Target;
  "412": Target;
  "413": Target;
  "414": Target;
  "415": Target;
  "416": Target;
  "417": Target;
  "418": Target;
  "419": Target;
  "420": Target;
  "421": Target;
  "422": Target;
  "423": Target;
  "424": Target;
  "425": Target;
  "426": Target;
  "427": Target;
  "428": Target;
  "429": Target;
  "430": Target;
  "431": Target;
  "432": Target;
  "433": Target;
  "434": Target;
  "435": Target;
  "436": Target;
  "437": Target;
  "438": Target;
  "439": Target;
  "440": Target;
  "441": Target;
  "442": Target;
  "443": Target;
  "444": Target;
  "445": Target;
  "446": Target;
  "447": Target;
  "448": Target;
  "449": Target;
  "450": Target;
  "451": Target;
  "452": Target;
  "453": Target;
  "454": Target;
  "455": Target;
  "456": Target;
  "457": Target;
  "458": Target;
  "459": Target;
  "460": Target;
  "461": Target;
  "462": Target;
  "463": Target;
  "464": Target;
  "465": Target;
  "466": Target;
  "467": Target;
  "468": Target;
  "469": Target;
  "470": Target;
  "471": Target;
  "472": Target;
  "473": Target;
  "474": Target;
  "475": Target;
  "476": Target;
  "477": Target;
  "478": Target;
  "479": Target;
  "480": Target;
  "481": Target;
  "482": Target;
  "483": Target;
  "484": Target;
  "485": Target;
  "486": Target;
  "487": Target;
  "488": Target;
  "489": Target;
  "490": Target;
  "491": Target;
  "492": Target;
  "493": Target;
  "494": Target;
  "495": Target;
  "496": Target;
  "497": Target;
  "498": Target;
  "499": Target;
  "500": Target;
  "501": Target;
  "502": Target;
  "503": Target;
  "505": Target;
  "506": Target;
  "507": Target;
  "508": Target;
  "509": Target;
  "510": Target;
  "511": Target;
  "512": Target;
  "513": Target;
  "514": Target;
  "515": Target;
  "516": Target;
  "517": Target;
  "518": Target;
  "519": Target;
  "520": Target;
  "521": Target;
  "522": Target;
  "523": Target;
  "524": Target;
  "525": Target;
  "526": Target;
  "527": Target;
  "528": Target;
  "529": Target;
  "530": Target;
  "531": Target;
  "532": Target;
  "533": Target;
  "534": Target;
  "535": Target;
  "536": Target;
  "537": Target;
  "538": Target;
  "539": Target;
  "540": Target;
  "541": Target;
  "542": Target;
  "543": Target;
  "544": Target;
  "545": Target;
  "546": Target;
  "547": Target;
  "548": Target;
  "549": Target;
  "550": Target;
  "551": Target;
  "552": Target;
  "553": Target;
  "554": Target;
  "555": Target;
  "556": Target;
  "557": Target;
  "558": Target;
  "559": Target;
  "560": Target;
  "561": Target;
  "562": Target;
  "563": Target;
  "564": Target;
  "565": Target;
  "566": Target;
  "567": Target;
  "568": Target;
  "569": Target;
  "570": Target;
  "571": Target;
  "572": Target;
  "573": Target;
  "574": Target;
  "575": Target;
  "576": Target;
  "577": Target;
  "578": Target;
  "579": Target;
  "580": Target;
  "581": Target;
  "582": Target;
  "583": Target;
  "584": Target;
  "585": Target;
  "586": Target;
  "587": Target;
  "588": Target;
  "589": Target;
  "590": Target;
  "591": Target;
  "592": Target;
  "593": Target;
  "594": Target;
  "595": Target;
  "596": Target;
  "597": Target;
  "598": Target;
  "599": Target;
  "600": Target;
  "601": Target;
  "602": Target;
  "603": Target;
  "604": Target;
  "605": Target;
  "606": Target;
  "607": Target;
  "608": Target;
  "609": Target;
  "610": Target;
  "611": Target;
  "612": Target;
  "613": Target;
  "614": Target;
  "615": Target;
  "616": Target;
  "617": Target;
  "618": Target;
  "619": Target;
  "620": Target;
  "621": Target;
  "622": Target;
  "623": Target;
  "624": Target;
  "625": Target;
  "626": Target;
  "627": Target;
  "628": Target;
  "629": Target;
  "630": Target;
  "631": Target;
  "632": Target;
  "633": Target;
  "634": Target;
  "635": Target;
  "636": Target;
  "637": Target;
  "638": Target;
  "639": Target;
  "640": Target;
  "641": Target;
  "642": Target;
  "643": Target;
  "644": Target;
  "645": Target;
  "646": Target;
  "647": Target;
  "648": Target;
  "649": Target;
  "650": Target;
  "651": Target;
  "652": Target;
  "653": Target;
  "654": Target;
  "655": Target;
  "656": Target;
  "657": Target;
  "658": Target;
  "659": Target;
  "660": Target;
  "661": Target;
  "662": Target;
  "663": Target;
  "664": Target;
  "665": Target;
  "666": Target;
  "667": Target;
  "668": Target;
  "669": Target;
  "670": Target;
  "671": Target;
  "672": Target;
  "673": Target;
  "674": Target;
  "675": Target;
  "676": Target;
  "677": Target;
  "678": Target;
  "679": Target;
  "680": Target;
  "681": Target;
  "682": Target;
  "683": Target;
  "684": Target;
  "685": Target;
  "686": Target;
  "687": Target;
  "688": Target;
  "689": Target;
  "690": Target;
  "691": Target;
  "692": Target;
  "693": Target;
  "694": Target;
  "695": Target;
  "696": Target;
  "697": Target;
  "698": Target;
  "699": Target;
  "700": Target;
  "701": Target;
  "702": Target;
  "703": Target;
  "704": Target;
  "705": Target;
  "706": Target;
  "707": Target;
  "708": Target;
  "709": Target;
  "710": Target;
  "711": Target;
  "712": Target;
  "713": Target;
  "714": Target;
  "715": Target;
  "716": Target;
  "717": Target;
  "718": Target;
  "719": Target;
  "720": Target;
  "721": Target;
  "722": Target;
  "723": Target;
  "724": Target;
  "725": Target;
  "726": Target;
  "727": Target;
  "728": Target;
  "729": Target;
  "730": Target;
  "731": Target;
  "732": Target;
  "733": Target;
  "734": Target;
  "735": Target;
  "736": Target;
  "737": Target;
  "738": Target;
  "739": Target;
  "740": Target;
  "741": Target;
  "742": Target;
  "743": Target;
  "744": Target;
  "745": Target;
  "746": Target;
  "747": Target;
  "748": Target;
  "749": Target;
  "750": Target;
  "751": Target;
  "752": Target;
  "753": Target;
  "754": Target;
  "755": Target;
  "756": Target;
  "757": Target;
  "758": Target;
  "759": Target;
  "760": Target;
  "761": Target;
  "762": Target;
  "763": Target;
  "764": Target;
  "765": Target;
  "766": Target;
  "767": Target;
  "768": Target;
  "769": Target;
  "770": Target;
  "771": Target;
  "772": Target;
  "773": Target;
  "774": Target;
  "775": Target;
  "776": Target;
  "777": Target;
  "778": Target;
  "779": Target;
  "780": Target;
  "781": Target;
  "782": Target;
  "783": Target;
  "784": Target;
  "785": Target;
  "786": Target;
  "787": Target;
  "788": Target;
  "789": Target;
  "790": Target;
  "791": Target;
  "792": Target;
  "793": Target;
  "794": Target;
  "795": Target;
  "796": Target;
  "797": Target;
  "798": Target;
  "799": Target;
  "800": Target;
  "801": Target;
  "802": Target;
  "803": Target;
  "804": Target;
  "805": Target;
  "806": Target;
  "807": Target;
  "808": Target;
  "809": Target;
  "810": Target;
  "811": Target;
  "812": Target;
  "813": Target;
  "814": Target;
  "815": Target;
  "816": Target;
  "817": Target;
  "818": Target;
  "819": Target;
  "820": Target;
  "821": Target;
  "822": Target;
  "823": Target;
  "824": Target;
  "825": Target;
  "826": Target;
  "827": Target;
  "828": Target;
  "829": Target;
  "830": Target;
  "831": Target;
  "832": Target;
  "833": Target;
  "834": Target;
  "835": Target;
  "836": Target;
  "837": Target;
  "838": Target;
  "839": Target;
  "840": Target;
  "841": Target;
  "842": Target;
  "843": Target;
  "844": Target;
  "845": Target;
  "846": Target;
  "847": Target;
  "848": Target;
  "849": Target;
  "850": Target;
  "851": Target;
  "852": Target;
  "853": Target;
  "854": Target;
  "855": Target;
  "856": Target;
  "857": Target;
  "858": Target;
  "859": Target;
  "860": Target;
  "861": Target;
  "862": Target;
  "863": Target;
  "864": Target;
  "865": Target;
  "866": Target;
  "867": Target;
  "868": Target;
  "869": Target;
  "870": Target;
  "871": Target;
  "872": Target;
  "873": Target;
  "874": Target;
  "875": Target;
  "876": Target;
  "877": Target;
  "878": Target;
  "879": Target;
  "880": Target;
  "881": Target;
  "882": Target;
  "883": Target;
  "884": Target;
  "885": Target;
  "886": Target;
  "887": Target;
  "888": Target;
  "889": Target;
  "890": Target;
  "891": Target;
  "892": Target;
  "893": Target;
  "894": Target;
  "895": Target;
  "896": Target;
  "897": Target;
  "898": Target;
  "899": Target;
  "900": Target;
  "901": Target;
  "902": Target;
  "903": Target;
  "904": Target;
  "905": Target;
  "906": Target;
  "907": Target;
  "908": Target;
  "909": Target;
  "910": Target;
  "911": Target;
  "912": Target;
  "913": Target;
  "914": Target;
  "915": Target;
  "916": Target;
  "917": Target;
  "918": Target;
  "919": Target;
  "920": Target;
  "921": Target;
  "922": Target;
  "923": Target;
  "924": Target;
  "925": Target;
  "926": Target;
  "927": Target;
  "928": Target;
  "929": Target;
  "930": Target;
  "931": Target;
  "932": Target;
  "933": Target;
  "934": Target;
  "935": Target;
  "936": Target;
  "937": Target;
  "938": Target;
  "939": Target;
  "940": Target;
  "941": Target;
  "942": Target;
  "943": Target;
  "944": Target;
  "945": Target;
  "946": Target;
  "947": Target;
  "948": Target;
  "949": Target;
  "950": Target;
  "951": Target;
  "952": Target;
  "953": Target;
  "954": Target;
  "955": Target;
  "956": Target;
  "957": Target;
  "958": Target;
  "959": Target;
  "960": Target;
  "961": Target;
  "962": Target;
  "963": Target;
  "964": Target;
  "965": Target;
  "966": Target;
  "967": Target;
  "968": Target;
  "969": Target;
  "970": Target;
  "971": Target;
  "972": Target;
  "973": Target;
  "974": Target;
  "975": Target;
  "976": Target;
  "977": Target;
  "978": Target;
  "979": Target;
  "980": Target;
  "981": Target;
  "982": Target;
  "983": Target;
  "984": Target;
  "985": Target;
  "986": Target;
  "987": Target;
  "988": Target;
  "989": Target;
  "990": Target;
  "991": Target;
  "992": Target;
  "993": Target;
  "994": Target;
  "995": Target;
  "996": Target;
  "997": Target;
  "998": Target;
  "999": Target;
  "1000": Target;
  "1001": Target;
  "1002": Target;
  "1003": Target;
  "1004": Target;
  "1005": Target;
  "1006": Target;
  "1007": Target;
  "1008": Target;
  "1009": Target;
  "1010": Target;
  "1011": Target;
  "1012": Target;
  "1013": Target;
  "1014": Target;
  "1015": Target;
  "1016": Target;
  "1017": Target;
  "1018": Target;
  "1019": Target;
  "1020": Target;
  "1021": Target;
  "1022": Target;
  "1023": Target;
  "1024": Target;
  "1025": Target;
  "1026": Target;
  "1027": Target;
  "1028": Target;
  "1029": Target;
  "1030": Target;
  "1031": Target;
  "1032": Target;
  "1033": Target;
  "1034": Target;
  "1035": Target;
  "1036": Target;
  "1037": Target;
  "1038": Target;
  "1039": Target;
  "1040": Target;
  "1041": Target;
  "1042": Target;
  "1043": Target;
  "1044": Target;
  "1045": Target;
  "1046": Target;
  "1047": Target;
  "1048": Target;
  "1049": Target;
  "1050": Target;
  "1051": Target;
  "1052": Target;
  "1053": Target;
  "1054": Target;
  "1055": Target;
  "1056": Target;
  "1057": Target;
  "1058": Target;
  "1059": Target;
  "1060": Target;
  "1061": Target;
  "1062": Target;
  "1063": Target;
  "1064": Target;
  "1065": Target;
  "1066": Target;
  "1067": Target;
  "1068": Target;
  "1069": Target;
  "1070": Target;
  "1071": Target;
  "1073": Target;
  "1074": Target;
  "1075": Target;
  "1076": Target;
  "1077": Target;
  "1078": Target;
  "1079": Target;
  "1080": Target;
  "1081": Target;
  "1082": Target;
  "1083": Target;
  "1084": Target;
  "1085": Target;
  "1086": Target;
  "1087": Target;
  "1088": Target;
  "1089": Target;
  "1090": Target;
  "1091": Target;
  "1092": Target;
  "1093": Target;
  "1094": Target;
  "1095": Target;
  "1096": Target;
  "1097": Target;
  "1098": Target;
  "1099": Target;
  "1100": Target;
  "1101": Target;
  "1102": Target;
  "1103": Target;
  "1104": Target;
  "1105": Target;
  "1106": Target;
  "1107": Target;
  "1108": Target;
  "1109": Target;
  "1110": Target;
  "1111": Target;
  "1112": Target;
  "1113": Target;
  "1114": Target;
  "1115": Target;
  "1116": Target;
  "1117": Target;
  "1118": Target;
  "1119": Target;
  "1120": Target;
  "1121": Target;
  "1122": Target;
  "1123": Target;
  "1124": Target;
  "1125": Target;
  "1126": Target;
  "1127": Target;
  "1128": Target;
  "1129": Target;
  "1130": Target;
  "1131": Target;
  "1132": Target;
  "1133": Target;
  "1134": Target;
  "1135": Target;
  "1136": Target;
  "1137": Target;
  "1138": Target;
  "1139": Target;
  "1140": Target;
  "1141": Target;
  "1142": Target;
  "1143": Target;
  "1144": Target;
  "1146": Target;
  "1147": Target;
  "1148": Target;
  "1149": Target;
  "1150": Target;
  "1151": Target;
  "1152": Target;
  "1153": Target;
  "1154": Target;
  "1155": Target;
  "1156": Target;
}

interface Child4 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags2;
  sources: Source[];
  signatures?: Signature3[];
  comment?: Comment2;
  typeParameters?: TypeParameter2[];
  type?: Type18;
  defaultValue?: string;
}

interface Type18 {
  type: string;
  checkType?: CheckType2;
  extendsType?: ExtendsType3;
  trueType?: TrueType7;
  falseType?: FalseType15;
  indexType?: ExtendsType14;
  objectType?: CheckType;
  declaration?: Declaration7;
  target?: Target | number;
  typeArguments?: TypeArgument27[];
  name?: string;
  package?: string;
  types?: Type17[];
  head?: string;
  tail?: (ExtendsType17 | string)[][];
  value?: number;
}

interface Type17 {
  type: string;
  head?: string;
  tail?: (
    | Tail2
    | Tail2
    | Tail33
    | ExtendsType17
    | ExtendsType17
    | ExtendsType17
    | Type4
    | Tail82
    | Tail92
    | Tail6
    | Tail6
    | Tail6
    | Tail6
    | string
    | string
    | string
    | string
    | string
    | string
    | string
  )[][][];
  target?: number;
  name?: string;
  package?: string;
  value?: number;
  typeArguments?: Type2[];
}

interface Tail92 {
  type: string;
  types: ExtendsType17[];
}

interface Tail82 {
  type: string;
  types: CheckType[];
}

interface Tail33 {
  type: string;
  checkType: Type2;
  extendsType: ExtendsType17;
  trueType: TypeArgument16;
  falseType: FalseType16;
}

interface FalseType16 {
  type: string;
  checkType: Type2;
  extendsType: ExtendsType17;
  trueType: TypeArgument16;
  falseType: Type4;
}

interface TypeArgument27 {
  type: string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  typeArguments?: TypeArgument26[];
  types?: ExtendsType17[];
  value?: number;
}

interface TypeArgument26 {
  type: string;
  target?: number;
  typeArguments?: Type2[];
  name?: string;
  package?: string;
  value?: string;
  refersToTypeParameter?: boolean;
  head?: string;
  tail?: (Tail13 | string)[][];
}

interface Tail13 {
  type: string;
  target: number;
  typeArguments: TypeArgument17[];
  name: string;
  package: string;
}

interface Declaration7 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  sources: Source[];
  signatures: Signature5[];
}

interface Signature5 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  typeParameters: TypeParameter3[];
  parameters: Parameter5[];
  type: Type4;
}

interface Parameter5 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags3;
  type: Type16;
}

interface Type16 {
  type: string;
  types?: Type15[];
  target?: number;
  name?: string;
  package?: string;
}

interface Type15 {
  type: string;
  target?: Target;
  name?: string;
  package?: string;
  head?: string;
  tail?: (TypeArgument16 | Type4 | Type2 | string)[][][];
  declaration?: Declaration4;
}

interface TypeParameter3 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  type: ExtendsType17;
}

interface FalseType15 {
  type: string;
  value?: boolean | string;
  checkType?: CheckType7;
  extendsType?: ExtendsType7;
  trueType?: TrueType8;
  falseType?: FalseType14;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  head?: string;
  tail?: (
    | Tail2
    | TypeArgument16
    | Type2
    | Type2
    | Type2
    | string
    | string
    | string
  )[][][];
  types?: Type14[];
  typeArguments?: TypeArgument25[];
}

interface TypeArgument25 {
  type: string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  elements?: Element8[];
  head?: string;
  tail?: (Type2 | string)[][];
}

interface Element8 {
  type: string;
  elementType?: Type2;
  indexType?: IndexType;
  objectType?: Type2;
}

interface Type14 {
  type: string;
  head: string;
  tail: (
    | Tail2
    | Tail2
    | Tail32
    | Tail6
    | Tail6
    | string
    | string
    | string
  )[][][];
}

interface Tail32 {
  type: string;
  checkType: Type2;
  extendsType: ExtendsType17;
  trueType: Tail2;
  falseType: Tail6;
}

interface ExtendsType17 {
  type: string;
  target: number;
  name: string;
  package: string;
}

interface FalseType14 {
  type: string;
  target?: number;
  typeArguments?: TypeArgument22[];
  name?: string;
  package?: string;
  checkType?: CheckType8;
  extendsType?: ExtendsType8;
  trueType?: TrueType11;
  falseType?: FalseType13;
  value?: boolean | string;
  types?: Tail2[];
  refersToTypeParameter?: boolean;
}

interface FalseType13 {
  type: string;
  target?: number;
  typeArguments?: TypeArgument24[];
  name?: string;
  package?: string;
  checkType?: CheckType8;
  extendsType?: ExtendsType11;
  trueType?: TrueType12;
  falseType?: FalseType12;
}

interface FalseType12 {
  type: string;
  checkType?: Type2;
  extendsType?: ExtendsType13;
  trueType?: TrueType13;
  falseType?: FalseType11;
  target?: Target;
  typeArguments?: Type2[];
  name?: string;
  package?: string;
}

interface FalseType11 {
  type: string;
  checkType: Type2;
  extendsType: ExtendsType14;
  trueType: TrueType15;
  falseType: FalseType10;
}

interface FalseType10 {
  type: string;
  checkType?: Type2;
  extendsType?: ExtendsType16;
  trueType?: TrueType13;
  falseType?: FalseType9;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
}

interface FalseType9 {
  type: string;
  checkType?: Type2;
  extendsType?: IndexType;
  trueType?: IndexType;
  falseType?: FalseType8;
  value?: boolean;
}

interface FalseType8 {
  type: string;
  checkType: Type2;
  extendsType: IndexType;
  trueType: IndexType;
  falseType: FalseType7;
}

interface FalseType7 {
  type: string;
  checkType: Type2;
  extendsType: IndexType;
  trueType: IndexType;
  falseType: FalseType6;
}

interface FalseType6 {
  type: string;
  checkType: Type4;
  extendsType: Type4;
  trueType: Type4;
  falseType: Type4;
}

interface ExtendsType16 {
  type: string;
  value?: string;
  declaration?: Declaration6;
}

interface Declaration6 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  sources: Source[];
  signatures: Signature4[];
}

interface Signature4 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  parameters: Parameter4[];
  type: Type4;
}

interface Parameter4 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags4;
  type: ElementType3;
}

interface Flags4 {
  isRest: boolean;
}

interface TrueType15 {
  type: string;
  value?: string;
  checkType?: Type2;
  extendsType?: ElementType3;
  trueType?: TrueType14;
  falseType?: ExtendsType2;
}

interface TrueType14 {
  type: string;
  checkType: Type2;
  extendsType: ExtendsType15;
  trueType: ExtendsType2;
  falseType: ExtendsType2;
}

interface ExtendsType15 {
  type: string;
}

interface ExtendsType14 {
  type: string;
  value?: string;
  name?: string;
}

interface TrueType13 {
  type: string;
  value: boolean | string;
}

interface ExtendsType13 {
  type: string;
  value: null | string;
}

interface TrueType12 {
  type: string;
  value?: boolean | string;
  checkType?: CheckType11;
  extendsType?: ExtendsType12;
  trueType?: IndexType2;
  falseType?: Type4;
}

interface ExtendsType12 {
  type: string;
  head: string;
  tail: (Tail | string)[][];
}

interface CheckType11 {
  type: string;
  head: string;
  tail: (Tail3 | Tail12 | string)[][][];
}

interface ExtendsType11 {
  type: string;
  value?: string;
  head?: string;
  tail?: (Tail | string)[][];
  elements?: Element7[];
  name?: string;
}

interface TypeArgument24 {
  type: string;
  target?: number;
  typeArguments?: TypeArgument23[];
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  value?: number;
}

interface TypeArgument23 {
  type: string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  value?: number;
  typeArguments?: TypeArgument5[];
}

interface TrueType11 {
  type: string;
  checkType?: CheckType9;
  extendsType?: ExtendsType9;
  trueType?: TrueType9;
  falseType?: FalseType5;
  value?: number | string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  typeArguments?: IndexType2[];
}

interface FalseType5 {
  type: string;
  checkType: CheckType10;
  extendsType: ExtendsType10;
  trueType: TrueType10;
  falseType: ExtendsType;
}

interface TrueType10 {
  type: string;
  value?: boolean;
  target?: Target;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
}

interface ExtendsType10 {
  type: string;
  value?: number;
  head?: string;
  tail?: (Tail | string)[][];
}

interface CheckType10 {
  type: string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  head?: string;
  tail?: (Tail12 | string)[][];
}

interface Tail12 {
  type: string;
  target: Target;
  typeArguments: CheckType5[];
  name: string;
  package: string;
}

interface TrueType9 {
  type: string;
  value?: boolean;
  target?: Target;
  typeArguments?: IndexType2[];
  name?: string;
  package?: string;
}

interface ExtendsType9 {
  type: string;
  value?: boolean;
  head?: string;
  tail?: (Tail | string)[][];
}

interface CheckType9 {
  type: string;
  target?: number;
  typeArguments?: Type2[];
  name?: string;
  package?: string;
  head?: string;
  tail?: (Type2 | string)[][];
}

interface ExtendsType8 {
  type: string;
  value?: boolean | number | string;
  head?: string;
  tail?: (Tail | string)[][];
  elements?: Element7[];
  name?: string;
}

interface Element7 {
  type: string;
  elementType: ElementType4;
}

interface ElementType4 {
  type: string;
  target?: number;
  typeArguments?: Type2[];
  name: string;
  package?: string;
}

interface CheckType8 {
  type: string;
  target?: number;
  typeArguments?: Type2[];
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  head?: string;
  tail?: (Type2 | string)[][];
}

interface TypeArgument22 {
  type: string;
  elements?: Element6[];
  target?: number;
  typeArguments?: Type2[];
  name?: string;
  package?: string;
}

interface Element6 {
  type: string;
  elementType: TypeArgument16;
}

interface TrueType8 {
  type: string;
  target?: number;
  typeArguments?: TypeArgument21[];
  name?: string;
  package?: string;
  value?: boolean | number | string;
  types?: Tail2[];
  checkType?: Type2;
  extendsType?: IndexType;
  trueType?: ExtendsType2;
  falseType?: ExtendsType2;
}

interface TypeArgument21 {
  type: string;
  target?: Target | Target | number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  elements?: Element5[];
  head?: string;
  tail?: (Tail11 | IndexType2 | Type2 | string)[][][][];
}

interface Tail11 {
  type: string;
  target: number;
  typeArguments: Tail3[];
  name: string;
  package: string;
}

interface Element5 {
  type: string;
  elementType: Tail9;
}

interface ExtendsType7 {
  type: string;
  head?: string;
  tail?: (Tail | Type4 | string)[][][];
  value?: boolean | number | string;
  target?: number;
  name?: string;
  package?: string;
}

interface CheckType7 {
  type: string;
  head?: string;
  tail?: (Type2 | string)[][];
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  typeArguments?: TypeArgument5[];
}

interface TrueType7 {
  type: string;
  checkType?: CheckType3;
  extendsType?: ExtendsType4;
  trueType?: TrueType4;
  falseType?: FalseType4;
  target?: Target | number;
  typeArguments?: TypeArgument20[];
  name?: string;
  package?: string;
  value?: boolean | number | string;
  head?: string;
  tail?: (
    | Tail10
    | IndexType2
    | Tail3
    | Type2
    | TypeArgument17
    | string
  )[][][][];
  refersToTypeParameter?: boolean;
  types?: Type13[];
}

interface Type13 {
  type: string;
  head?: string;
  tail?: (Tail2 | Tail6 | Tail6 | string | string)[][][];
  value?: number;
  target?: Target | number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  typeArguments?: IndexType2[];
}

interface Tail10 {
  type: string;
  target: Target;
  typeArguments: IndexType2[];
  name: string;
  package: string;
}

interface TypeArgument20 {
  type: string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  elements?: Element4[];
  typeArguments?: TypeArgument19[];
}

interface TypeArgument19 {
  type: string;
  target: number;
  typeArguments?: TypeArgument18[];
  name: string;
  package: string;
  refersToTypeParameter?: boolean;
}

interface TypeArgument18 {
  type: string;
  target: Target;
  typeArguments: TypeArgument17[];
  name: string;
  package: string;
}

interface TypeArgument17 {
  type: string;
  target: number;
  typeArguments: TypeArgument16[];
  name: string;
  package: string;
}

interface TypeArgument16 {
  type: string;
  target: number;
  typeArguments: Type2[];
  name: string;
  package: string;
}

interface Element4 {
  type: string;
  target?: Target;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  elementType?: Type2;
}

interface FalseType4 {
  type: string;
  value?: boolean | string;
  target?: number;
  typeArguments?: TypeArgument14[];
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  checkType?: CheckType6;
  extendsType?: ExtendsType6;
  trueType?: TrueType6;
  falseType?: FalseType3;
  head?: string;
  tail?: (Tail3 | string)[][];
}

interface FalseType3 {
  type: string;
  checkType?: CheckType5;
  extendsType?: IndexType;
  trueType?: TrueType5;
  falseType?: TrueType5;
  name?: string;
}

interface TrueType6 {
  type: string;
  checkType?: CheckType5;
  extendsType?: IndexType;
  trueType?: TrueType5;
  falseType?: TrueType5;
  target?: Target;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
}

interface TrueType5 {
  type: string;
  head?: string;
  tail?: (Tail4 | string)[][];
  target?: number;
  typeArguments?: TypeArgument15[];
  name?: string;
  package?: string;
}

interface TypeArgument15 {
  type: string;
  target?: Target | number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  elements?: Element3[];
}

interface Element3 {
  type: string;
  elementType: Type2;
}

interface ExtendsType6 {
  type: string;
  value?: boolean | string;
  head?: string;
  tail?: (Tail | string)[][];
}

interface CheckType6 {
  type: string;
  target?: Target | number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  head?: string;
  tail?: (Tail9 | string)[][];
}

interface Tail9 {
  type: string;
  target: number;
  typeArguments: CheckType5[];
  name: string;
  package: string;
}

interface TypeArgument14 {
  type: string;
  target?: Target | number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  head?: string;
  tail?: (IndexType2 | Type2 | string)[][][];
  typeArguments?: TypeArgument5[];
}

interface TrueType4 {
  type: string;
  value?: boolean | string;
  checkType?: CheckType4;
  extendsType?: ExtendsType5;
  trueType?: TrueType3;
  falseType?: FalseType2;
  target?: Target | number;
  typeArguments?: TypeArgument13[];
  name?: string;
  package?: string;
  head?: string;
  tail?: (Tail8 | Tail3 | string)[][][];
  refersToTypeParameter?: boolean;
}

interface Tail8 {
  type: string;
  types: Type12[];
}

interface Type12 {
  type: string;
  target?: Target;
  name: string;
  package?: string;
  refersToTypeParameter?: boolean;
}

interface TypeArgument13 {
  type: string;
  target?: Target;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  value?: string;
  head?: string;
  tail?: (Type2 | Tail22 | string)[][][];
}

interface Tail22 {
  type: string;
  target: number;
  typeArguments: TypeArgument12[];
  name: string;
  package: string;
}

interface TypeArgument12 {
  type: string;
  head: string;
  tail: (Tail7 | string)[][];
}

interface Tail7 {
  type: string;
  target: number;
  typeArguments: TypeArgument11[];
  name: string;
  package: string;
}

interface TypeArgument11 {
  type: string;
  head: string;
  tail: (IndexType2 | Type2 | string)[][][];
}

interface FalseType2 {
  type: string;
  name?: string;
  target?: number;
  typeArguments?: TypeArgument10[];
  package?: string;
  checkType?: CheckType5;
  extendsType?: IndexType;
  trueType?: TrueType2;
  falseType?: TrueType2;
}

interface TypeArgument10 {
  type: string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  head?: string;
  tail?: (IndexType2 | Type2 | Type2 | string | string)[][][];
  typeArguments?: TypeArgument5[];
  value?: number;
}

interface TrueType3 {
  type: string;
  target?: Target | number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  checkType?: CheckType5;
  extendsType?: IndexType;
  trueType?: TrueType2;
  falseType?: TrueType2;
  typeArguments?: TypeArgument7[];
  head?: string;
  tail?: (Tail5 | string)[][];
}

interface Tail5 {
  type: string;
  target: number;
  typeArguments: TypeArgument9[];
  name: string;
  package: string;
}

interface TypeArgument9 {
  type: string;
  target?: number;
  typeArguments?: IndexType2[];
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  value?: boolean;
}

interface TrueType2 {
  type: string;
  target?: number;
  typeArguments?: TypeArgument7[];
  name?: string;
  package?: string;
  head?: string;
  tail?: (Tail4 | string)[][];
}

interface Tail4 {
  type: string;
  target: number;
  typeArguments: TypeArgument8[];
  name: string;
  package: string;
}

interface TypeArgument8 {
  type: string;
  target?: Target;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  value?: string;
}

interface TypeArgument7 {
  type: string;
  target?: Target;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  head?: string;
  tail?: (Type2 | string)[][];
}

interface CheckType5 {
  type: string;
  target: Target | number;
  name: string;
  package: string;
  refersToTypeParameter: boolean;
}

interface ExtendsType5 {
  type: string;
  head?: string;
  tail?: (Tail | string)[][];
  value?: number | string;
}

interface CheckType4 {
  type: string;
  head?: string;
  tail?: (Tail3 | string)[][];
  target?: Target | number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
}

interface Tail3 {
  type: string;
  target: number;
  typeArguments: IndexType2[];
  name: string;
  package: string;
}

interface ExtendsType4 {
  type: string;
  value?: boolean | number | string;
  head?: string;
  tail?: (Tail | Type4 | string)[][][];
  elements?: Element2[];
  name?: string;
}

interface Element2 {
  type: string;
  name?: string;
  elementType?: ElementType3;
}

interface ElementType3 {
  type: string;
  elementType: Type4;
}

interface CheckType3 {
  type: string;
  target?: Target | number;
  typeArguments?: TypeArgument6[];
  name?: string;
  package?: string;
  head?: string;
  tail?: (Type2 | string)[][];
  refersToTypeParameter?: boolean;
}

interface TypeArgument6 {
  type: string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  head?: string;
  tail?: (IndexType2 | Type2 | string)[][][];
}

interface ExtendsType3 {
  type: string;
  value?: boolean | number | string;
  head?: string;
  tail?: (
    | Tail
    | Tail2
    | Tail2
    | Type4
    | Type4
    | Tail6
    | string
    | string
    | string
  )[][][];
  elements?: Element[];
  target?: number;
  typeArguments?: Type2[];
  name?: string;
  package?: string;
  types?: TypeArgument5[];
  refersToTypeParameter?: boolean;
  declaration?: Declaration4;
}

interface Element {
  type: string;
  name?: string;
  elementType?: ElementType2;
  head?: string;
  tail?: (Type4 | string)[][];
}

interface ElementType2 {
  type: string;
  name?: string;
  elementType?: Type4;
}

interface Tail6 {
  type: string;
  types: Tail2[];
}

interface Tail2 {
  type: string;
  value: number;
}

interface Tail {
  type: string;
  name: string;
  constraint: Type4;
}

interface CheckType2 {
  type: string;
  target?: number;
  typeArguments?: TypeArgument5[];
  name?: string;
  package?: string;
  head?: string;
  tail?: (Type2 | string)[][];
  refersToTypeParameter?: boolean;
  elements?: Type2[];
  indexType?: IndexType;
  objectType?: Type2;
  value?: number;
}

interface TypeArgument5 {
  type: string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  value?: number;
}

interface TypeParameter2 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  type?: Type4;
  default?: Default;
}

interface Default {
  type: string;
  value?: boolean | string;
  target?: number;
  typeArguments?: Type2[];
  name?: string;
  package?: string;
  elements?: IndexType[];
}

interface Comment2 {
  summary: Summary[];
  blockTags?: BlockTag2[];
}

interface BlockTag2 {
  tag: string;
  name?: string;
  content: Summary[];
}

interface Signature3 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  sources: Source[];
  parameters?: Parameter2[];
  type: Type10;
  typeParameters?: TypeParameter[];
  comment?: Comment;
}

interface Comment {
  summary: Summary[];
  blockTags: BlockTag[];
}

interface BlockTag {
  tag: string;
  content: Summary[];
}

interface Summary {
  kind: string;
  text: string;
}

interface TypeParameter {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  type?: Type11;
  default?: ExtendsType2;
}

interface Type11 {
  type: string;
  elementType?: Type4;
  types?: Type4[];
}

interface Type10 {
  type: string;
  name?: string;
  target?: Target | number;
  package?: string;
  qualifiedName?: string;
  refersToTypeParameter?: boolean;
  typeArguments?: TypeArgument[];
  declaration?: Declaration3;
  elementType?: ElementType;
  checkType?: CheckType;
  extendsType?: ExtendsType;
  trueType?: TrueType;
  falseType?: FalseType;
  asserts?: boolean;
  targetType?: TargetType;
  elements?: Type4[];
  types?: Type9[];
}

interface Type9 {
  type: string;
  declaration: Declaration5;
}

interface Declaration5 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  children: Child3[];
  groups: Group[];
  sources: Source[];
}

interface Child3 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags3;
  sources: Source[];
  type: Type4;
  defaultValue: string;
}

interface Flags3 {
  isOptional?: boolean;
}

interface TargetType {
  type: string;
  elementType?: Type2;
  checkType?: Type2;
  extendsType?: ExtendsType2;
  trueType?: ParameterType;
  falseType?: Type4;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
}

interface ExtendsType2 {
  type: string;
  value: boolean;
}

interface FalseType {
  type: string;
  elementType?: Type4;
  target?: number;
  typeArguments?: Type2[];
  name?: string;
  package?: string;
}

interface TrueType {
  type: string;
  name?: string;
  types?: Type8[];
}

interface Type8 {
  type: string;
  name?: string;
  indexType?: Type4;
  objectType?: Type2;
}

interface ExtendsType {
  type: string;
  value?: boolean;
  name?: string;
}

interface CheckType {
  type: string;
  target: number;
  name: string;
  package: string;
  refersToTypeParameter?: boolean;
  typeArguments?: Type2[];
}

interface ElementType {
  type: string;
  target?: Target | number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  declaration?: Declaration4;
  elementType?: Type2;
}

interface Declaration4 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  children: Child2[];
  groups: Group[];
  sources: Source[];
}

interface Declaration3 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  sources: Source[];
  signatures?: Signature2[];
  children?: Child2[];
  groups?: Group[];
}

interface Child2 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  sources: Source[];
  type: Type4;
}

interface Signature2 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  sources: Source[];
  parameters: Parameter3[];
  type: Type7;
}

interface Type7 {
  type: string;
  target?: Target;
  typeArguments?: TypeArgument4[];
  name?: string;
  package?: string;
  declaration?: Declaration2;
}

interface Declaration2 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  children: Child[];
  groups: Group[];
  sources: Source[];
}

interface Group {
  title: string;
  children: number[];
}

interface Child {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  sources: Source[];
  type: Type6;
}

interface Type6 {
  type: string;
  name?: string;
  parameter?: string;
  parameterType?: ParameterType;
  templateType?: TemplateType;
}

interface TypeArgument4 {
  type: string;
  name?: string;
  elementType?: Type2;
}

interface Parameter3 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  type: Type5;
}

interface Type5 {
  type: string;
  elementType?: Type2;
  name?: string;
  parameter?: string;
  parameterType?: ParameterType;
  templateType?: TemplateType;
}

interface TemplateType {
  type: string;
  target: Target;
  typeArguments: TypeArgument3[];
  name: string;
  package: string;
}

interface TypeArgument3 {
  type: string;
  indexType: IndexType;
  objectType: ObjectType2;
}

interface ObjectType2 {
  type: string;
  target: Target;
  typeArguments: TypeArgument2[];
  name: string;
  package: string;
}

interface TypeArgument2 {
  type: string;
  indexType: IndexType2;
  objectType: Type2;
}

interface IndexType2 {
  type: string;
  target: Target;
  name: string;
  package: string;
  refersToTypeParameter: boolean;
}

interface IndexType {
  type: string;
  value: string;
}

interface ParameterType {
  type: string;
  types: Type4[];
}

interface Type4 {
  type: string;
  name: string;
}

interface TypeArgument {
  type: string;
  target?: number;
  name?: string;
  package?: string;
  refersToTypeParameter?: boolean;
  indexType?: Type2;
  objectType?: ObjectType;
  elementType?: Type2;
}

interface ObjectType {
  type: string;
  target: Target;
  name: string;
  package: string;
}

interface Target {
  sourceFileName: string;
  qualifiedName: string;
}

interface Parameter2 {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  type: Type3;
}

interface Type3 {
  type: string;
  declaration: Declaration;
}

interface Declaration {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  sources: Source[];
  signatures: Signature[];
}

interface Signature {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  sources: Source[];
  parameters: Parameter[];
  type: Type2;
}

interface Type2 {
  type: string;
  target: number;
  name: string;
  package: string;
  refersToTypeParameter: boolean;
}

interface Parameter {
  id: number;
  name: string;
  variant: string;
  kind: number;
  flags: Flags;
  type: Type;
}

interface Type {
  type: string;
  target: number;
  name: string;
  package: string;
  qualifiedName: string;
  refersToTypeParameter: boolean;
}

interface Source {
  fileName: string;
  line: number;
  character: number;
  url: string;
}

interface Flags2 {
  isConst?: boolean;
}

// biome-ignore lint/complexity/noBannedTypes: <explanation>
type Flags = {};
