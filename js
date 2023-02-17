var map = AmCharts.makeChart("chartdiv", {
  "type": "map",
  "theme": "light",
  "dataProvider": {
    "map": "worldHigh",
    "zoomLevel": 1.0,
    "zoomLongitude": 0,
    "zoomLatitude": 20,
    "areas": [{
      "id": "CN",
      "title": "People's Republic of China",
      "customData": "中国大陆",
      "color": "#00B300"
    }, {
      "id": "AE",
      "title": "United Arab Emirates",
      "customData": "阿联酋",
      "color": "#00B300"
    }, {
      "id": "BB",
      "title": "Barbados",
      "customData": "巴巴多斯",
      "color": "#00B300"
    }, {
      "id": "BS",
      "title": "Bahamas",
      "customData": "巴哈马",
      "color": "#00B300"
    }, {
      "id": "BA",
      "title": "Bosnia and Herzegovina",
      "customData": "波黑",
      "color": "#00B300"
    }, {
      "id": "EC",
      "title": "Ecuador",
      "customData": "厄瓜多尔",
      "color": "#00B300"
    }, {
      "id": "FJ",
      "title": "Fiji",
      "customData": "斐济",
      "color": "#00B300"
    }, {
      "id": "GD",
      "title": "Grenada",
      "customData": "格林纳达",
      "color": "#00B300"
    }, {
      "id": "MU",
      "title": "Mauritius",
      "customData": "毛里求斯",
      "color": "#00B300"
    }, {
      "id": "SM",
      "title": "San Marino",
      "customData": "圣马力诺共和国",
      "color": "#00B300"
    }, {
      "id": "SC",
      "title": "Seychelles",
      "customData": "塞舌尔",
      "color": "#00B300"
    }, {
      "id": "RS",
      "title": "Serbia",
      "customData": "塞尔维亚",
      "color": "#00B300"
    }, {
      "id": "TO",
      "title": "Tonga",
      "customData": "汤加",
      "color": "#00B300"
    }, {
      "id": "BY",
      "title": "Belarus",
      "customData": "白俄罗斯",
      "color": "#00B300"
    }, {
      "id": "QA",
      "title": "Qatar",
      "customData": "卡塔尔",
      "color": "#00B300"
    }, {
      "id": "AM",
      "title": "Armenia",
      "customData": "亚美尼亚",
      "color": "#00B300"
    }, {
      "id": "UZ",
      "title": "Uzbekistan",
      "customData": "乌兹别克斯坦",
      "color": "#00B300"
    }, {
      "id": "OM",
      "title": "Oman",
      "customData": "阿曼",
      "color": "#00B300"
    }, {
      "id": "AL",
      "title": "Albania",
      "customData": "阿尔巴尼亚",
      "color": "#00B300"
    }, {
      "id": "MA",
      "title": "Morocco",
      "customData": "摩洛哥",
      "color": "#00B300"
    }, {
      "id": "RE",
      "title": "Reunion",
      "customData": "法属留尼汪",
      "color": "#00B300"
    }, {
      "id": "TN",
      "title": "Tunisia",
      "customData": "突尼斯",
      "color": "#00B300"
    }, {
      "id": "AG",
      "title": "Antigua and Barbuda",
      "customData": "安提瓜和巴布达",
      "color": "#00B300"
    }, {
      "id": "HT",
      "title": "Haiti",
      "customData": "海地",
      "color": "#00B300"
    }, {
      "id": "GS",
      "title": "South Georgia and the South Sandwich Islands",
      "customData": "南乔治亚和南桑威奇群岛",
      "color": "#00B300"
    }, {
      "id": "KN",
      "title": "Saint Kitts and Nevis",
      "customData": "圣基茨和尼维斯",
      "color": "#00B300"
    }, {
      "id": "TC",
      "title": "Turks and Caicos Islands",
      "customData": "特克斯和凯科斯群岛",
      "color": "#00B300"
    }, {
      "id": "JM",
      "title": "Jamaica",
      "customData": "牙买加",
      "color": "#00B300"
    }, {
      "id": "DM",
      "title": "Dominica",
      "customData": "多米尼克",
      "color": "#00B300"
    }, {
      "id": "MP",
      "title": "Northern Mariana Islands",
      "customData": "美属北马里亚纳群岛",
      "color": "#00B300"
    }, {
      "id": "WS",
      "title": "Samoa",
      "customData": "萨摩亚",
      "color": "#00B300"
    }, {
      "id": "PF",
      "title": "French Polynesia",
      "customData": "法属波利尼西亚",
      "color": "#00B300"
    }, {
      "id": "LC",
      "title": "Saint Lucia",
      "customData": "圣卢西亚",
      "color": "#00B300"
    }, {
      "id": "CK",
      "title": "Cook Islands",
      "customData": "库克群岛",
      "color": "#00B300"
    }, {
      "id": "NU",
      "title": "Niue",
      "customData": "纽埃",
      "color": "#00B300"
    }, {
      "id": "SR",
      "title": "Suriname",
      "customData": "苏里南",
      "color": "#00B300"
    }, {
      "id": "MV",
      "title": "Maldives",
      "customData": "马尔代夫",
      "color": "#00B300"
    }, {
      "id": "AZ",
      "title": "Azerbaijan",
      "customData": "阿塞拜疆",
      "color": "#0000B3"
    }, {
      "id": "BH",
      "title": "Bahrain",
      "customData": "巴林",
      "color": "#0000B3"
    }, {
      "id": "TL",
      "title": "Timor-Leste",
      "customData": "东帝汶",
      "color": "#0000B3"
    }, {
      "id": "LA",
      "title": "Laos",
      "customData": "老挝",
      "color": "#0000B3"
    }, {
      "id": "LB",
      "title": "Lebanon",
      "customData": "黎巴嫩",
      "color": "#0000B3"
    }, {
      "id": "MM",
      "title": "Burma",
      "customData": "缅甸",
      "color": "#0000B3"
    }, {
      "id": "NP",
      "title": "Nepal",
      "customData": "尼泊尔",
      "color": "#0000B3"
    }, {
      "id": "LK",
      "title": "Sri Lanka",
      "customData": "斯里兰卡",
      "color": "#0000B3"
    }, {
      "id": "TH",
      "title": "Thailand",
      "customData": "泰国",
      "color": "#0000B3"
    }, {
      "id": "TM",
      "title": "Turkmenistan",
      "customData": "土库曼斯坦",
      "color": "#0000B3"
    }, {
      "id": "BN",
      "title": "Brunei",
      "customData": "文莱",
      "color": "#0000B3"
    }, {
      "id": "IR",
      "title": "Iran",
      "customData": "伊朗",
      "color": "#0000B3"
    }, {
      "id": "JO",
      "title": "Jordan",
      "customData": "约旦",
      "color": "#0000B3"
    }, {
      "id": "KH",
      "title": "Cambodia",
      "customData": "柬埔寨",
      "color": "#0000B3"
    }, {
      "id": "BD",
      "title": "Bangladesh",
      "customData": "孟加拉国",
      "color": "#0000B3"
    }, {
      "id": "MY",
      "title": "Malaysia",
      "customData": "马来西亚",
      "color": "#0000B3"
    }, {
      "id": "EG",
      "title": "Egypt",
      "customData": "埃及",
      "color": "#0000B3"
    }, {
      "id": "TG",
      "title": "Togo",
      "customData": "多哥",
      "color": "#0000B3"
    }, {
      "id": "CV",
      "title": "Cape Verde",
      "customData": "佛得角",
      "color": "#0000B3"
    }, {
      "id": "GA",
      "title": "Gabon",
      "customData": "加蓬",
      "color": "#0000B3"
    }, {
      "id": "KM",
      "title": "Comoros",
      "customData": "科摩罗",
      "color": "#0000B3"
    }, {
      "id": "CI",
      "title": "Côte d'Ivoire",
      "customData": "科特迪瓦",
      "color": "#0000B3"
    }, {
      "id": "RW",
      "title": "Rwanda",
      "customData": "卢旺达",
      "color": "#0000B3"
    }, {
      "id": "MG",
      "title": "Madagascar",
      "customData": "马达加斯加",
      "color": "#0000B3"
    }, {
      "id": "MW",
      "title": "Malawi",
      "customData": "马拉维",
      "color": "#0000B3"
    }, {
      "id": "MR",
      "title": "Mauritania",
      "customData": "毛里塔尼亚",
      "color": "#0000B3"
    }, {
      "id": "ST",
      "title": "Sao Tome and Principe",
      "customData": "圣多美和普林西比",
      "color": "#0000B3"
    }, {
      "id": "TZ",
      "title": "Tanzania",
      "customData": "坦桑尼亚",
      "color": "#0000B3"
    }, {
      "id": "UG",
      "title": "Uganda",
      "customData": "乌干达",
      "color": "#0000B3"
    }, {
      "id": "BJ",
      "title": "Benin",
      "customData": "贝宁",
      "color": "#0000B3"
    }, {
      "id": "ZW",
      "title": "Zimbabwe",
      "customData": "津巴布韦",
      "color": "#0000B3"
    }, {
      "id": "GY",
      "title": "Guyana",
      "customData": "圭亚那",
      "color": "#0000B3"
    }, {
      "id": "SH",
      "title": "Saint Helena",
      "customData": "圣赫勒拿",
      "color": "#0000B3"
    }, {
      "id": "PW",
      "title": "Palau",
      "customData": "帕劳",
      "color": "#0000B3"
    }, {
      "id": "TV",
      "title": "Tuvalu",
      "customData": "图瓦卢",
      "color": "#0000B3"
    }, {
      "id": "VU",
      "title": "Vanuatu",
      "customData": "瓦努阿图",
      "color": "#0000B3"
    }, {
      "id": "PG",
      "title": "Papua New Guinea",
      "customData": "巴布亚新几内亚",
      "color": "#0000B3"
    }, {
      "id": "SA",
      "title": "Saudi Arabia",
      "customData": "沙特阿拉伯",
      "color": "#0000B3"
    }, {
      "id": "KE",
      "title": "Kenya",
      "customData": "肯尼亚",
      "color": "#0000B3"
    }, {
      "id": "GW",
      "title": "Guinea-Bissau",
      "customData": "几内亚比绍",
      "color": "#0000B3"
    }, {
      "id": "SL",
      "title": "Sierra Leone",
      "customData": "塞拉利昂",
      "color": "#0000B3"
    }, {
      "id": "ET",
      "title": "Ethiopia",
      "customData": "埃塞俄比亚",
      "color": "#0000B3"
    }, {
      "id": "DJ",
      "title": "Djibouti",
      "customData": "吉布提",
      "color": "#0000B3"
    }, {
      "id": "MZ",
      "title": "Mozambique",
      "customData": "莫桑比克",
      "color": "#0000B3"
    }, {
      "id": "SO",
      "title": "Somalia",
      "customData": "索马里",
      "color": "#0000B3"
    }, {
      "id": "BO",
      "title": "Bolivia",
      "customData": "玻利维亚",
      "color": "#0000B3"
    }, {
      "id": "ID",
      "title": "Indonesia",
      "customData": "印度尼西亚",
      "color": "#0000B3"
    }, {
      "id": "KG",
      "title": "Kyrgyzstan",
      "customData": "吉尔吉斯斯坦",
      "color": "#00BFFF"
    }, {
      "id": "SA",
      "title": "Saudi Arabia",
      "customData": "沙特阿拉伯",
      "color": "#00BFFF"
    }, {
      "id": "TJ",
      "title": "Tajikistan",
      "customData": "塔吉克斯坦",
      "color": "#00BFFF"
    }, {
      "id": "KH",
      "title": "Cambodia",
      "customData": "柬埔寨",
      "color": "#00BFFF"
    }, {
      "id": "LA",
      "title": "Laos",
      "customData": "老挝",
      "color": "#00BFFF"
    }, {
      "id": "LK",
      "title": "Sri Lanka",
      "customData": "斯里兰卡",
      "color": "#00BFFF"
    }, {
      "id": "AZ",
      "title": "Azerbaijan",
      "customData": "阿塞拜疆",
      "color": "#00BFFF"
    }, {
      "id": "GE",
      "title": "Georgia",
      "customData": "格鲁吉亚",
      "color": "#00BFFF"
    }, {
      "id": "MY",
      "title": "Malaysia",
      "customData": "马来西亚",
      "color": "#00BFFF"
    }, {
      "id": "MM",
      "title": "Burma",
      "customData": "缅甸",
      "color": "#00BFFF"
    }, {
      "id": "PK",
      "title": "Pakistan",
      "customData": "巴基斯坦",
      "color": "#00BFFF"
    }, {
      "id": "BH",
      "title": "Bahrain",
      "customData": "巴林",
      "color": "#00BFFF"
    }, {
      "id": "MD",
      "title": "Moldova",
      "customData": "摩尔多瓦",
      "color": "#00BFFF"
    }, {
      "id": "TR",
      "title": "Turkey",
      "customData": "土耳其",
      "color": "#00BFFF"
    }, {
      "id": "UA",
      "title": "Ukraine",
      "customData": "乌克兰",
      "color": "#00BFFF"
    }, {
      "id": "SH",
      "title": "Saint Helena",
      "customData": "圣赫勒拿",
      "color": "#00BFFF"
    }, {
      "id": "KE",
      "title": "Kenya",
      "customData": "肯尼亚",
      "color": "#00BFFF"
    }, {
      "id": "MG",
      "title": "Madagascar",
      "customData": "马达加斯加",
      "color": "#00BFFF"
    }, {
      "id": "TZ",
      "title": "Tanzania",
      "customData": "坦桑尼亚",
      "color": "#00BFFF"
    }, {
      "id": "GW",
      "title": "Guinea-Bissau",
      "customData": "几内亚比绍",
      "color": "#00BFFF"
    }, {
      "id": "ZM",
      "title": "Zambia",
      "customData": "赞比亚",
      "color": "#00BFFF"
    }, {
      "id": "ET",
      "title": "Ethiopia",
      "customData": "埃塞俄比亚",
      "color": "#00BFFF"
    }, {
      "id": "GA",
      "title": "Gabon",
      "customData": "加蓬",
      "color": "#00BFFF"
    }, {
      "id": "UG",
      "title": "Uganda",
      "customData": "乌干达",
      "color": "#00BFFF"
    }, {
      "id": "BJ",
      "title": "Benin",
      "customData": "贝宁",
      "color": "#00BFFF"
    }, {
      "id": "GN",
      "title": "Guinea",
      "customData": "几内亚",
      "color": "#00BFFF"
    }, {
      "id": "DJ",
      "title": "Djibouti",
      "customData": "吉布提",
      "color": "#00BFFF"
    }, {
      "id": "LS",
      "title": "Lesotho",
      "customData": "莱索托",
      "color": "#00BFFF"
    }, {
      "id": "RW",
      "title": "Rwanda",
      "customData": "卢旺达",
      "color": "#00BFFF"
    }, {
      "id": "ZW",
      "title": "Zimbabwe",
      "customData": "津巴布韦",
      "color": "#00BFFF"
    }, {
      "id": "AO",
      "title": "Angola",
      "customData": "安哥拉",
      "color": "#00BFFF"
    }, {
      "id": "ST",
      "title": "Sao Tome and Principe",
      "customData": "圣多美和普林西比",
      "color": "#00BFFF"
    }, {
      "id": "MS",
      "title": "Montserrat",
      "customData": "蒙特塞拉特",
      "color": "#00BFFF"
    }, {
      "id": "CO",
      "title": "Colombia",
      "customData": "哥伦比亚",
      "color": "#00BFFF"
    }, {
      "id": "PG",
      "title": "Papua New Guinea",
      "customData": "巴布亚新几内亚",
      "color": "#00BFFF"
    }, {
      "id": "US",
      "title": "United States of America",
      "customData": "美国",
      "color": "#CCCC00"
    }, {
      "id": "GU",
      "title": "Guam",
      "customData": "关岛",
      "color": "#CCCC00"
    }, {
      "id": "PR",
      "title": "Puerto Rico",
      "customData": "波多黎各",
      "color": "#CCCC00"
    }, {
      "id": "VI",
      "title": "US Virgin Islands",
      "customData": "美属维尔京群岛",
      "color": "#CCCC00"
    }, {
      "id": "MX",
      "title": "Mexico",
      "customData": "墨西哥",
      "color": "#CCCC00"
    }, {
      "id": "BM",
      "title": "Bermuda",
      "customData": "百慕大",
      "color": "#CCCC00"
    }, {
      "id": "AW",
      "title": "Aruba",
      "customData": "阿鲁巴",
      "color": "#CCCC00"
    }, {
      "id": "CW",
      "title": "Curaçao",
      "customData": "库拉索",
      "color": "#CCCC00"
    }, {
      "id": "BQ",
      "title": "Bonaire, Sint Eustatius and Saba (Caribbean Netherlands)",
      "customData": "BES 群岛（加勒比荷兰）",
      "color": "#CCCC00"
    }, {
      "id": "SX",
      "title": "Sint Maarten",
      "customData": "荷属圣马丁",
      "color": "#CCCC00"
    }, {
      "id": "DO",
      "title": "Dominican Republic",
      "customData": "多米尼加共和国",
      "color": "#CCCC00"
    }, {
      "id": "KY",
      "title": "Cayman Islands",
      "customData": "开曼群岛",
      "color": "#CCCC00"
    }, {
      "id": "CR",
      "title": "Costa Rica",
      "customData": "哥斯达黎加",
      "color": "#CCCC00"
    }, {
      "id": "PA",
      "title": "Panama",
      "customData": "巴拿马",
      "color": "#CCCC00"
    }, {
      "id": "BZ",
      "title": "Belize",
      "customData": "伯利兹",
      "color": "#CCCC00"
    }, {
      "id": "HN",
      "title": "Honduras",
      "customData": "洪都拉斯",
      "color": "#CCCC00"
    }, {
      "id": "CO",
      "title": "Colombia",
      "customData": "哥伦比亚",
      "color": "#CCCC00"
    }, {
      "id": "CL",
      "title": "Chile",
      "customData": "智利",
      "color": "#CCCC00"
    }, {
      "id": "PE",
      "title": "Peru",
      "customData": "秘鲁",
      "color": "#CCCC00"
    }, {
      "id": "UY",
      "title": "Uruguay",
      "customData": "乌拉圭",
      "color": "#CCCC00"
    }, {
      "id": "GE",
      "title": "Georgia",
      "customData": "格鲁吉亚",
      "color": "#CCCC00"
    }, {
      "id": "ME",
      "title": "Montenegro",
      "customData": "黑山",
      "color": "#CCCC00"
    }, {
      "id": "MK",
      "title": "North Macedonia",
      "customData": "北马其顿",
      "color": "#CCCC00"
    }, {
      "id": "PH",
      "title": "Philippines",
      "customData": "菲律宾",
      "color": "#CCCC00"
    }, {
      "id": "VG",
      "title": "British Virgin Islands",
      "customData": "英属维尔京群岛",
      "color": "#CCCC00"
    }, ]
  },

  "areasSettings": {
    "rollOverOutlineColor": "#FFFFFF",
    "rollOverColor": "#000000",
    "alpha": 0.8,
    "unlistedAreasAlpha": 0.1,
    "balloonText": "[[customData]]" + " [[title]]"
  },


  "legend": {
    "width": "100%",
    "marginRight": 27,
    "marginLeft": 27,
    "equalWidths": false,
    "backgroundAlpha": 0.5,
    "backgroundColor": "#FFFFFF",
    "borderColor": "#ffffff",
    "borderAlpha": 1,
    "top": 445,
    "left": 0,
    "horizontalGap": 10,
    "data": [{
      "title": "免签",
      "color": "#00B300"
    }, {
      "title": "落地签",
      "color": "#0000B3"
    }, {
      "title": "电子签",
      "color": "#00BFFF"
    }, {
      "title": "持有美签可以免签",
      "color": "#CCCC00"
    }]
  },
  "export": {
    "enabled": true
  }

});


