// Pełna baza 227 kolorów ARK z tagami kolorystycznymi
const ARK_COLORS = [
  {
    "id": 1,
    "name": "Red",
    "hex": "#FF0000",
    "tags": [
      "czerwone"
    ]
  },
  {
    "id": 2,
    "name": "Blue",
    "hex": "#0000FF",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 3,
    "name": "Green",
    "hex": "#00FF00",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 4,
    "name": "Yellow",
    "hex": "#FFFF00",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 5,
    "name": "Cyan",
    "hex": "#00FFFF",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 6,
    "name": "Magenta",
    "hex": "#FF00FF",
    "tags": [
      "fioletowe",
      "rozowe"
    ]
  },
  {
    "id": 7,
    "name": "Light Green",
    "hex": "#C0FFBA",
    "tags": [
      "pastelowe",
      "zielone"
    ]
  },
  {
    "id": 8,
    "name": "Light Grey",
    "hex": "#C8CACA",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 9,
    "name": "Light Brown",
    "hex": "#786759",
    "tags": [
      "brazowe",
      "szare"
    ]
  },
  {
    "id": 10,
    "name": "Light Orange",
    "hex": "#FFB46C",
    "tags": [
      "pomaranczowe"
    ]
  },
  {
    "id": 11,
    "name": "Light Yellow",
    "hex": "#FFFA8A",
    "tags": [
      "pastelowe",
      "zolte"
    ]
  },
  {
    "id": 12,
    "name": "Light Red",
    "hex": "#FF756C",
    "tags": [
      "czerwone"
    ]
  },
  {
    "id": 13,
    "name": "Dark Grey",
    "hex": "#7B7B7B",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 14,
    "name": "Black",
    "hex": "#3B3B3B",
    "tags": [
      "ciemne",
      "czarne",
      "szare"
    ]
  },
  {
    "id": 15,
    "name": "Brown",
    "hex": "#593A2A",
    "tags": [
      "brazowe",
      "ciemne"
    ]
  },
  {
    "id": 16,
    "name": "Dark Green",
    "hex": "#224900",
    "tags": [
      "ciemne",
      "zielone"
    ]
  },
  {
    "id": 17,
    "name": "Dark Red",
    "hex": "#812118",
    "tags": [
      "ciemne",
      "czerwone"
    ]
  },
  {
    "id": 18,
    "name": "White",
    "hex": "#ffffff",
    "tags": [
      "biale"
    ]
  },
  {
    "id": 19,
    "name": "Dino Light Red",
    "hex": "#ffa8a8",
    "tags": [
      "czerwone",
      "pastelowe"
    ]
  },
  {
    "id": 20,
    "name": "Dino Dark Red",
    "hex": "#592b2b",
    "tags": [
      "ciemne",
      "czerwone"
    ]
  },
  {
    "id": 21,
    "name": "Dino Light Orange",
    "hex": "#ffb694",
    "tags": [
      "pastelowe",
      "pomaranczowe"
    ]
  },
  {
    "id": 22,
    "name": "Dino Dark Orange",
    "hex": "#88532f",
    "tags": [
      "brazowe",
      "pomaranczowe"
    ]
  },
  {
    "id": 23,
    "name": "Dino Light Yellow",
    "hex": "#cacaa0",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 24,
    "name": "Dino Dark Yellow",
    "hex": "#94946c",
    "tags": [
      "szare",
      "zolte"
    ]
  },
  {
    "id": 25,
    "name": "Dino Light Green",
    "hex": "#e0ffe0",
    "tags": [
      "pastelowe",
      "zielone"
    ]
  },
  {
    "id": 26,
    "name": "Dino Medium Green",
    "hex": "#799479",
    "tags": [
      "szare",
      "zielone"
    ]
  },
  {
    "id": 27,
    "name": "Dino Dark Green",
    "hex": "#224122",
    "tags": [
      "ciemne",
      "zielone"
    ]
  },
  {
    "id": 28,
    "name": "Dino Light Blue",
    "hex": "#d9e0ff",
    "tags": [
      "niebieskie",
      "pastelowe"
    ]
  },
  {
    "id": 29,
    "name": "Dino Dark Blue",
    "hex": "#394263",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 30,
    "name": "Dino Light Purple",
    "hex": "#e4d9ff",
    "tags": [
      "fioletowe",
      "pastelowe"
    ]
  },
  {
    "id": 31,
    "name": "Dino Dark Purple",
    "hex": "#403459",
    "tags": [
      "ciemne",
      "fioletowe"
    ]
  },
  {
    "id": 32,
    "name": "Dino Light Brown",
    "hex": "#ffe0ba",
    "tags": [
      "brazowe",
      "pastelowe",
      "pomaranczowe"
    ]
  },
  {
    "id": 33,
    "name": "Dino Medium Brown",
    "hex": "#948575",
    "tags": [
      "brazowe",
      "szare"
    ]
  },
  {
    "id": 34,
    "name": "Dino Dark Brown",
    "hex": "#594e41",
    "tags": [
      "brazowe",
      "ciemne",
      "szare"
    ]
  },
  {
    "id": 35,
    "name": "Dino Darker Grey",
    "hex": "#595959",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 36,
    "name": "Dino Albino",
    "hex": "#ffffff",
    "tags": [
      "biale"
    ]
  },
  {
    "id": 37,
    "name": "BigFoot0",
    "hex": "#b79683",
    "tags": [
      "brazowe"
    ]
  },
  {
    "id": 38,
    "name": "BigFoot4",
    "hex": "#eadad5",
    "tags": [
      "biale",
      "brazowe",
      "czerwone",
      "pastelowe"
    ]
  },
  {
    "id": 39,
    "name": "BigFoot5",
    "hex": "#d0a794",
    "tags": [
      "brazowe",
      "pomaranczowe"
    ]
  },
  {
    "id": 40,
    "name": "Wolf Fur",
    "hex": "#c3b39f",
    "tags": [
      "brazowe"
    ]
  },
  {
    "id": 41,
    "name": "DarkWolfFur",
    "hex": "#887666",
    "tags": [
      "brazowe",
      "szare"
    ]
  },
  {
    "id": 42,
    "name": "DragonBase0",
    "hex": "#a0664b",
    "tags": [
      "brazowe",
      "pomaranczowe"
    ]
  },
  {
    "id": 43,
    "name": "DragonBase1",
    "hex": "#cb7956",
    "tags": [
      "czerwone",
      "pomaranczowe"
    ]
  },
  {
    "id": 44,
    "name": "DragonFire",
    "hex": "#bc4f00",
    "tags": [
      "brazowe",
      "pomaranczowe"
    ]
  },
  {
    "id": 45,
    "name": "DragonGreen0",
    "hex": "#79846c",
    "tags": [
      "szare",
      "zielone"
    ]
  },
  {
    "id": 46,
    "name": "DragonGreen1",
    "hex": "#909c79",
    "tags": [
      "szare",
      "zielone"
    ]
  },
  {
    "id": 47,
    "name": "DragonGreen2",
    "hex": "#a5a48b",
    "tags": [
      "szare",
      "zielone"
    ]
  },
  {
    "id": 48,
    "name": "DragonGreen3",
    "hex": "#74939c",
    "tags": [
      "niebieskie",
      "szare",
      "zielone"
    ]
  },
  {
    "id": 49,
    "name": "WyvernPurple0",
    "hex": "#787496",
    "tags": [
      "fioletowe",
      "szare"
    ]
  },
  {
    "id": 50,
    "name": "WyvernPurple1",
    "hex": "#b0a2c0",
    "tags": [
      "fioletowe"
    ]
  },
  {
    "id": 51,
    "name": "WyvernBlue0",
    "hex": "#6281a7",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 52,
    "name": "WyvernBlue1",
    "hex": "#485c75",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 53,
    "name": "Dino Medium Blue",
    "hex": "#5fa4ea",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 54,
    "name": "Dino Deep Blue",
    "hex": "#4568d4",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 55,
    "name": "NearWhite",
    "hex": "#ededed",
    "tags": [
      "biale"
    ]
  },
  {
    "id": 56,
    "name": "NearBlack",
    "hex": "#515151",
    "tags": [
      "ciemne",
      "czarne",
      "szare"
    ]
  },
  {
    "id": 57,
    "name": "DarkTurquoise",
    "hex": "#184546",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 58,
    "name": "MediumTurquoise",
    "hex": "#007060",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 59,
    "name": "Turquoise",
    "hex": "#00c5ab",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 60,
    "name": "GreenSlate",
    "hex": "#40594c",
    "tags": [
      "szare",
      "zielone"
    ]
  },
  {
    "id": 61,
    "name": "Sage",
    "hex": "#3e4f40",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 62,
    "name": "DarkWarmGray",
    "hex": "#3b3938",
    "tags": [
      "brazowe",
      "ciemne",
      "szare"
    ]
  },
  {
    "id": 63,
    "name": "MediumWarmGray",
    "hex": "#585554",
    "tags": [
      "brazowe",
      "szare"
    ]
  },
  {
    "id": 64,
    "name": "LightWarmGray",
    "hex": "#9b9290",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 65,
    "name": "DarkCement",
    "hex": "#525b56",
    "tags": [
      "ciemne",
      "szare"
    ]
  },
  {
    "id": 66,
    "name": "LightCement",
    "hex": "#8aa196",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 67,
    "name": "LightPink",
    "hex": "#e8b0ff",
    "tags": [
      "fioletowe",
      "pastelowe",
      "rozowe"
    ]
  },
  {
    "id": 68,
    "name": "DeepPink",
    "hex": "#ff119a",
    "tags": [
      "rozowe"
    ]
  },
  {
    "id": 69,
    "name": "DarkViolet",
    "hex": "#730046",
    "tags": [
      "ciemne",
      "fioletowe"
    ]
  },
  {
    "id": 70,
    "name": "DarkMagenta",
    "hex": "#b70042",
    "tags": [
      "ciemne",
      "rozowe"
    ]
  },
  {
    "id": 71,
    "name": "BurntSienna",
    "hex": "#7e331e",
    "tags": [
      "brazowe",
      "czerwone"
    ]
  },
  {
    "id": 72,
    "name": "MediumAutumn",
    "hex": "#a93000",
    "tags": [
      "brazowe",
      "czerwone"
    ]
  },
  {
    "id": 73,
    "name": "Vermillion",
    "hex": "#ef3100",
    "tags": [
      "czerwone"
    ]
  },
  {
    "id": 74,
    "name": "Coral",
    "hex": "#ff5834",
    "tags": [
      "czerwone",
      "pomaranczowe"
    ]
  },
  {
    "id": 75,
    "name": "Orange",
    "hex": "#ff7f00",
    "tags": [
      "pomaranczowe"
    ]
  },
  {
    "id": 76,
    "name": "Peach",
    "hex": "#ffa73a",
    "tags": [
      "pomaranczowe"
    ]
  },
  {
    "id": 77,
    "name": "LightAutumn",
    "hex": "#ae7000",
    "tags": [
      "brazowe"
    ]
  },
  {
    "id": 78,
    "name": "Mustard",
    "hex": "#949427",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 79,
    "name": "ActualBlack",
    "hex": "#171717",
    "tags": [
      "ciemne",
      "czarne"
    ]
  },
  {
    "id": 80,
    "name": "MidnightBlue",
    "hex": "#191d36",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 81,
    "name": "DarkBlue",
    "hex": "#152b3a",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 82,
    "name": "BlackSands",
    "hex": "#302531",
    "tags": [
      "ciemne",
      "czarne",
      "szare",
      "zolte"
    ]
  },
  {
    "id": 83,
    "name": "LemonLime",
    "hex": "#a8ff44",
    "tags": [
      "zielone",
      "zolte"
    ]
  },
  {
    "id": 84,
    "name": "Mint",
    "hex": "#38e985",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 85,
    "name": "Jade",
    "hex": "#008840",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 86,
    "name": "PineGreen",
    "hex": "#0f552e",
    "tags": [
      "ciemne",
      "zielone"
    ]
  },
  {
    "id": 87,
    "name": "SpruceGreen",
    "hex": "#005b45",
    "tags": [
      "ciemne",
      "niebieskie",
      "zielone"
    ]
  },
  {
    "id": 88,
    "name": "LeafGreen",
    "hex": "#5b9725",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 89,
    "name": "DarkLavender",
    "hex": "#5e275f",
    "tags": [
      "ciemne",
      "fioletowe"
    ]
  },
  {
    "id": 90,
    "name": "MediumLavender",
    "hex": "#853587",
    "tags": [
      "fioletowe"
    ]
  },
  {
    "id": 91,
    "name": "Lavender",
    "hex": "#bd77be",
    "tags": [
      "fioletowe"
    ]
  },
  {
    "id": 92,
    "name": "DarkTeal",
    "hex": "#0e404a",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 93,
    "name": "MediumTeal",
    "hex": "#105563",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 94,
    "name": "Teal",
    "hex": "#14849c",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 95,
    "name": "PowderBlue",
    "hex": "#82a7ff",
    "tags": [
      "niebieskie",
      "pastelowe"
    ]
  },
  {
    "id": 96,
    "name": "Glacial",
    "hex": "#aceaff",
    "tags": [
      "niebieskie",
      "pastelowe"
    ]
  },
  {
    "id": 97,
    "name": "Cammo",
    "hex": "#505118",
    "tags": [
      "zielone",
      "zolte"
    ]
  },
  {
    "id": 98,
    "name": "DryMoss",
    "hex": "#766e3f",
    "tags": [
      "brazowe",
      "zielone",
      "zolte"
    ]
  },
  {
    "id": 99,
    "name": "Custard",
    "hex": "#c0bd5e",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 100,
    "name": "Cream",
    "hex": "#f4ffc0",
    "tags": [
      "biale",
      "pastelowe",
      "zielone"
    ]
  },
  {
    "id": 128,
    "name": "Burn Coloring",
    "hex": "#330000",
    "tags": [
      "ciemne",
      "czerwone"
    ]
  },
  {
    "id": 129,
    "name": "Scab Coloring",
    "hex": "#660000",
    "tags": [
      "ciemne",
      "czerwone"
    ]
  },
  {
    "id": 130,
    "name": "Gore Coloring",
    "hex": "#B30000",
    "tags": [
      "ciemne",
      "czerwone"
    ]
  },
  {
    "id": 131,
    "name": "Red Coloring",
    "hex": "#FF0000",
    "tags": [
      "czerwone"
    ]
  },
  {
    "id": 132,
    "name": "Tulip Coloring",
    "hex": "#FF7373",
    "tags": [
      "czerwone",
      "pastelowe"
    ]
  },
  {
    "id": 133,
    "name": "Salmon Coloring",
    "hex": "#FFBFBF",
    "tags": [
      "czerwone",
      "pastelowe"
    ]
  },
  {
    "id": 134,
    "name": "Incense Coloring",
    "hex": "#D98D8D",
    "tags": [
      "czerwone"
    ]
  },
  {
    "id": 135,
    "name": "Edocha Coloring",
    "hex": "#A65353",
    "tags": [
      "czerwone"
    ]
  },
  {
    "id": 136,
    "name": "Bronze Coloring",
    "hex": "#331900",
    "tags": [
      "brazowe",
      "ciemne"
    ]
  },
  {
    "id": 137,
    "name": "Terracotta Coloring",
    "hex": "#663300",
    "tags": [
      "brazowe",
      "ciemne"
    ]
  },
  {
    "id": 138,
    "name": "Windsor Coloring",
    "hex": "#B35900",
    "tags": [
      "brazowe",
      "pomaranczowe"
    ]
  },
  {
    "id": 139,
    "name": "Orange Coloring",
    "hex": "#FF7F00",
    "tags": [
      "pomaranczowe"
    ]
  },
  {
    "id": 140,
    "name": "Cantaloupe Coloring",
    "hex": "#FFB973",
    "tags": [
      "pastelowe",
      "pomaranczowe"
    ]
  },
  {
    "id": 141,
    "name": "Peach Coloring",
    "hex": "#FFDFBF",
    "tags": [
      "pastelowe",
      "pomaranczowe"
    ]
  },
  {
    "id": 142,
    "name": "Latte Coloring",
    "hex": "#D9B38D",
    "tags": [
      "pomaranczowe"
    ]
  },
  {
    "id": 143,
    "name": "Dirt Coloring",
    "hex": "#A67C53",
    "tags": [
      "brazowe"
    ]
  },
  {
    "id": 144,
    "name": "Drab Coloring",
    "hex": "#333300",
    "tags": [
      "brazowe",
      "ciemne"
    ]
  },
  {
    "id": 145,
    "name": "Olive Coloring",
    "hex": "#666600",
    "tags": [
      "zielone",
      "zolte"
    ]
  },
  {
    "id": 146,
    "name": "Citron Coloring",
    "hex": "#B2B300",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 147,
    "name": "Yellow Coloring",
    "hex": "#FFFF00",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 148,
    "name": "Canary Coloring",
    "hex": "#FFFF73",
    "tags": [
      "pastelowe",
      "zolte"
    ]
  },
  {
    "id": 149,
    "name": "Buttermilk Coloring",
    "hex": "#FFFFBF",
    "tags": [
      "pastelowe",
      "zolte"
    ]
  },
  {
    "id": 150,
    "name": "Khaki Coloring",
    "hex": "#D9D98D",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 151,
    "name": "Mold Coloring",
    "hex": "#A6A653",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 152,
    "name": "Swamp Coloring",
    "hex": "#193300",
    "tags": [
      "ciemne",
      "zielone"
    ]
  },
  {
    "id": 153,
    "name": "Avocado Coloring",
    "hex": "#336600",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 154,
    "name": "Orc Coloring",
    "hex": "#59B300",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 155,
    "name": "Chartreuse Coloring",
    "hex": "#80FF00",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 156,
    "name": "Menthol Coloring",
    "hex": "#B9FF73",
    "tags": [
      "pastelowe",
      "zielone"
    ]
  },
  {
    "id": 157,
    "name": "Nyanza Coloring",
    "hex": "#DFFFBF",
    "tags": [
      "pastelowe",
      "zielone"
    ]
  },
  {
    "id": 158,
    "name": "Putrescence Coloring",
    "hex": "#B3D98D",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 159,
    "name": "Filth Coloring",
    "hex": "#7CA653",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 160,
    "name": "Nori Coloring",
    "hex": "#003300",
    "tags": [
      "ciemne",
      "zielone"
    ]
  },
  {
    "id": 161,
    "name": "Hunter Coloring",
    "hex": "#006600",
    "tags": [
      "ciemne",
      "zielone"
    ]
  },
  {
    "id": 162,
    "name": "Emerald Coloring",
    "hex": "#00B300",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 163,
    "name": "Green Coloring",
    "hex": "#00FF00",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 164,
    "name": "Mint Coloring",
    "hex": "#73FF73",
    "tags": [
      "pastelowe",
      "zielone"
    ]
  },
  {
    "id": 165,
    "name": "Pistachio Coloring",
    "hex": "#BFFFBF",
    "tags": [
      "pastelowe",
      "zielone"
    ]
  },
  {
    "id": 166,
    "name": "Celadon Coloring",
    "hex": "#8DD98D",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 167,
    "name": "Chateau Coloring",
    "hex": "#53A653",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 168,
    "name": "Jungle Coloring",
    "hex": "#00331A",
    "tags": [
      "ciemne",
      "zielone"
    ]
  },
  {
    "id": 169,
    "name": "Forest Coloring",
    "hex": "#006633",
    "tags": [
      "ciemne",
      "zielone"
    ]
  },
  {
    "id": 170,
    "name": "Lagoon Coloring",
    "hex": "#00B359",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 171,
    "name": "Spring Coloring",
    "hex": "#00FF80",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 172,
    "name": "Aquamarine Coloring",
    "hex": "#73FFB9",
    "tags": [
      "niebieskie",
      "pastelowe",
      "zielone"
    ]
  },
  {
    "id": 173,
    "name": "Seafoam Coloring",
    "hex": "#BFFFE0",
    "tags": [
      "pastelowe",
      "zielone"
    ]
  },
  {
    "id": 174,
    "name": "Turquoise Coloring",
    "hex": "#8DD9B3",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 175,
    "name": "Shamrock Coloring",
    "hex": "#53A67C",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 176,
    "name": "Mariana Coloring",
    "hex": "#003333",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 177,
    "name": "Skobeloff Coloring",
    "hex": "#006666",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 178,
    "name": "Teal Coloring",
    "hex": "#00B3B3",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 179,
    "name": "Cyan Coloring",
    "hex": "#00FFFF",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 180,
    "name": "Electricity Coloring",
    "hex": "#73FFFF",
    "tags": [
      "niebieskie",
      "pastelowe"
    ]
  },
  {
    "id": 181,
    "name": "Celeste Coloring",
    "hex": "#BFFFFF",
    "tags": [
      "niebieskie",
      "pastelowe"
    ]
  },
  {
    "id": 182,
    "name": "Crystal Coloring",
    "hex": "#8DD9D9",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 183,
    "name": "Ocean Coloring",
    "hex": "#53A6A6",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 184,
    "name": "Cetecean Coloring",
    "hex": "#001A33",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 185,
    "name": "Prussian Coloring",
    "hex": "#003366",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 186,
    "name": "Sapphire Coloring",
    "hex": "#0059B3",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 187,
    "name": "Azure Coloring",
    "hex": "#007FFF",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 188,
    "name": "Babyblue Coloring",
    "hex": "#73B9FF",
    "tags": [
      "niebieskie",
      "pastelowe"
    ]
  },
  {
    "id": 189,
    "name": "Cornflower Coloring",
    "hex": "#BFDFFF",
    "tags": [
      "niebieskie",
      "pastelowe"
    ]
  },
  {
    "id": 190,
    "name": "Overcast Coloring",
    "hex": "#8CB2D9",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 191,
    "name": "Moonstone Coloring",
    "hex": "#537CA6",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 192,
    "name": "Midnight Coloring",
    "hex": "#000033",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 193,
    "name": "Navy Coloring",
    "hex": "#000066",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 194,
    "name": "Cobalt Coloring",
    "hex": "#0000B3",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 195,
    "name": "Blue Coloring",
    "hex": "#0000FF",
    "tags": [
      "ciemne",
      "niebieskie"
    ]
  },
  {
    "id": 196,
    "name": "Denim Coloring",
    "hex": "#7373FF",
    "tags": [
      "niebieskie",
      "pastelowe"
    ]
  },
  {
    "id": 197,
    "name": "Ice Coloring",
    "hex": "#BFBFFF",
    "tags": [
      "niebieskie",
      "pastelowe"
    ]
  },
  {
    "id": 198,
    "name": "Frost Coloring",
    "hex": "#8C8CD9",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 199,
    "name": "Deepfreeze Coloring",
    "hex": "#5353A6",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 200,
    "name": "Twilight Coloring",
    "hex": "#190033",
    "tags": [
      "ciemne",
      "fioletowe"
    ]
  },
  {
    "id": 201,
    "name": "Eminence Coloring",
    "hex": "#330066",
    "tags": [
      "ciemne",
      "fioletowe"
    ]
  },
  {
    "id": 202,
    "name": "Indigo Coloring",
    "hex": "#5900B3",
    "tags": [
      "ciemne",
      "fioletowe"
    ]
  },
  {
    "id": 203,
    "name": "Violet Coloring",
    "hex": "#8000FF",
    "tags": [
      "ciemne",
      "fioletowe"
    ]
  },
  {
    "id": 204,
    "name": "Lilac Coloring",
    "hex": "#B973FF",
    "tags": [
      "fioletowe",
      "pastelowe"
    ]
  },
  {
    "id": 205,
    "name": "Lavender Coloring",
    "hex": "#DFBFFF",
    "tags": [
      "fioletowe",
      "pastelowe"
    ]
  },
  {
    "id": 206,
    "name": "Mauve Coloring",
    "hex": "#B38DD9",
    "tags": [
      "fioletowe"
    ]
  },
  {
    "id": 207,
    "name": "Royalty Coloring",
    "hex": "#7C53A6",
    "tags": [
      "fioletowe"
    ]
  },
  {
    "id": 208,
    "name": "Eggplant Coloring",
    "hex": "#330033",
    "tags": [
      "ciemne",
      "fioletowe"
    ]
  },
  {
    "id": 209,
    "name": "Plum Coloring",
    "hex": "#660066",
    "tags": [
      "ciemne",
      "fioletowe"
    ]
  },
  {
    "id": 210,
    "name": "Purple Coloring",
    "hex": "#B200B3",
    "tags": [
      "fioletowe"
    ]
  },
  {
    "id": 211,
    "name": "Magenta Coloring",
    "hex": "#FF00FF",
    "tags": [
      "fioletowe",
      "rozowe"
    ]
  },
  {
    "id": 212,
    "name": "Pink Coloring",
    "hex": "#FF73FF",
    "tags": [
      "fioletowe",
      "pastelowe",
      "rozowe"
    ]
  },
  {
    "id": 213,
    "name": "Cottoncandy Coloring",
    "hex": "#FFBFFF",
    "tags": [
      "fioletowe",
      "pastelowe"
    ]
  },
  {
    "id": 214,
    "name": "Orchid Coloring",
    "hex": "#D98DD9",
    "tags": [
      "fioletowe"
    ]
  },
  {
    "id": 215,
    "name": "Bruise Coloring",
    "hex": "#A653A6",
    "tags": [
      "fioletowe"
    ]
  },
  {
    "id": 216,
    "name": "Raisin Coloring",
    "hex": "#330019",
    "tags": [
      "ciemne",
      "czerwone"
    ]
  },
  {
    "id": 217,
    "name": "Tyrian Coloring",
    "hex": "#660033",
    "tags": [
      "ciemne",
      "czerwone"
    ]
  },
  {
    "id": 218,
    "name": "Lust Coloring",
    "hex": "#B30059",
    "tags": [
      "ciemne",
      "rozowe"
    ]
  },
  {
    "id": 219,
    "name": "Fuschia Coloring",
    "hex": "#FF007F",
    "tags": [
      "rozowe"
    ]
  },
  {
    "id": 220,
    "name": "Flamingo Coloring",
    "hex": "#FF73B9",
    "tags": [
      "pastelowe",
      "rozowe"
    ]
  },
  {
    "id": 221,
    "name": "Valentine Coloring",
    "hex": "#FFBFDF",
    "tags": [
      "pastelowe",
      "rozowe"
    ]
  },
  {
    "id": 222,
    "name": "Kobi Coloring",
    "hex": "#D98DB3",
    "tags": [
      "rozowe"
    ]
  },
  {
    "id": 223,
    "name": "Rouge Coloring",
    "hex": "#A6537C",
    "tags": [
      "rozowe"
    ]
  },
  {
    "id": 224,
    "name": "Black Coloring",
    "hex": "#191919",
    "tags": [
      "ciemne",
      "czarne"
    ]
  },
  {
    "id": 225,
    "name": "Shadow Coloring",
    "hex": "#333333",
    "tags": [
      "ciemne",
      "czarne",
      "szare"
    ]
  },
  {
    "id": 226,
    "name": "Charcoal Coloring",
    "hex": "#4D4D4D",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 227,
    "name": "Gunmetal Coloring",
    "hex": "#666666",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 228,
    "name": "Slate Coloring",
    "hex": "#808080",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 229,
    "name": "Steel Coloring",
    "hex": "#999999",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 230,
    "name": "Grey Coloring",
    "hex": "#B3B3B3",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 231,
    "name": "Silver Coloring",
    "hex": "#CCCCCC",
    "tags": [
      "szare"
    ]
  },
  {
    "id": 232,
    "name": "Wisp Coloring",
    "hex": "#E6E6E6",
    "tags": [
      "biale"
    ]
  },
  {
    "id": 233,
    "name": "White Coloring",
    "hex": "#FFFFFF",
    "tags": [
      "biale"
    ]
  },
  {
    "id": 234,
    "name": "Mud Coloring",
    "hex": "#403522",
    "tags": [
      "brazowe",
      "ciemne"
    ]
  },
  {
    "id": 235,
    "name": "Bark Coloring",
    "hex": "#594724",
    "tags": [
      "brazowe"
    ]
  },
  {
    "id": 236,
    "name": "Brown Coloring",
    "hex": "#80642D",
    "tags": [
      "brazowe"
    ]
  },
  {
    "id": 237,
    "name": "Leather Coloring",
    "hex": "#99823D",
    "tags": [
      "brazowe",
      "pomaranczowe",
      "zolte"
    ]
  },
  {
    "id": 238,
    "name": "Camel Coloring",
    "hex": "#B39C59",
    "tags": [
      "brazowe",
      "pomaranczowe",
      "zolte"
    ]
  },
  {
    "id": 239,
    "name": "Tan Coloring",
    "hex": "#CCB266",
    "tags": [
      "pomaranczowe",
      "zolte"
    ]
  },
  {
    "id": 240,
    "name": "Sand Coloring",
    "hex": "#E6C973",
    "tags": [
      "pomaranczowe",
      "zolte"
    ]
  },
  {
    "id": 241,
    "name": "Parchment Coloring",
    "hex": "#FFEFBF",
    "tags": [
      "pastelowe",
      "pomaranczowe",
      "zolte"
    ]
  },
  {
    "id": 242,
    "name": "Cream Coloring",
    "hex": "#F5F5DC",
    "tags": [
      "biale",
      "pastelowe",
      "zolte"
    ]
  },
  {
    "id": 243,
    "name": "Brick Coloring",
    "hex": "#994326",
    "tags": [
      "brazowe",
      "czerwone"
    ]
  },
  {
    "id": 244,
    "name": "Tangerine Coloring",
    "hex": "#FFA424",
    "tags": [
      "pomaranczowe"
    ]
  },
  {
    "id": 245,
    "name": "Gold Coloring",
    "hex": "#FFC000",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 246,
    "name": "Mustard Coloring",
    "hex": "#F0F032",
    "tags": [
      "zolte"
    ]
  },
  {
    "id": 247,
    "name": "Craggy‑Dew Coloring",
    "hex": "#B3E912",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 248,
    "name": "Grass Coloring",
    "hex": "#227330",
    "tags": [
      "zielone"
    ]
  },
  {
    "id": 249,
    "name": "Stream Coloring",
    "hex": "#2AC6B6",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 250,
    "name": "Marine Coloring",
    "hex": "#007189",
    "tags": [
      "niebieskie"
    ]
  },
  {
    "id": 251,
    "name": "Haze Coloring",
    "hex": "#535872",
    "tags": [
      "niebieskie",
      "szare"
    ]
  },
  {
    "id": 252,
    "name": "Dusk Coloring",
    "hex": "#8F4EA5",
    "tags": [
      "fioletowe"
    ]
  },
  {
    "id": 253,
    "name": "Thistle Coloring",
    "hex": "#E6C3DD",
    "tags": [
      "fioletowe",
      "pastelowe",
      "rozowe"
    ]
  },
  {
    "id": 254,
    "name": "Bubblegum Coloring",
    "hex": "#FFBFCF",
    "tags": [
      "czerwone",
      "pastelowe",
      "rozowe"
    ]
  }
].sort((a, b) => a.id - b.id);
