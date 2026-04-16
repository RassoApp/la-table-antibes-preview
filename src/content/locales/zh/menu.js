export const menuPage = {
  "eyebrow": "菜单",
  "title": "La Table 菜单",
  "text": "更清晰的菜单阅读方式，让客人一眼分辨主菜、披萨、酒吧、葡萄酒、软饮、咖啡和甜点。",
  "note": "菜单本地化版本。",
  "filters": {
    "buttonLabel": "饮食偏好",
    "emptyLabel": "没有符合这些条件的菜品。",
    "clearLabel": "重置",
    "filterableTabs": [
      "cuisine",
      "pizzas"
    ],
    "options": [
      {
        "id": "vegetarian",
        "label": "素食"
      },
      {
        "id": "vegan",
        "label": "纯素"
      },
      {
        "id": "no-pork",
        "label": "不含猪肉"
      },
      {
        "id": "no-fish",
        "label": "不含鱼"
      },
      {
        "id": "no-seafood",
        "label": "不含海鲜"
      }
    ],
    "optionLabels": {
      "vegetarian": "素食",
      "vegan": "纯素",
      "no-pork": "不含猪肉",
      "no-fish": "不含鱼",
      "no-seafood": "不含海鲜"
    }
  },
  "tabs": [
    {
      "id": "cuisine",
      "label": "菜品",
      "sections": [
        {
          "id": "sharing",
          "title": "分享",
          "desktopColumn": 0,
          "items": [
            {
              "name": "腌甜椒",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "鹰嘴豆炸条配蒜泥蛋黄酱",
              "price": "9 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "柴火烤茄泥",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "帕尔玛火腿",
              "price": "11 €",
              "filters": [
                "pork"
              ]
            }
          ]
        },
        {
          "id": "starters",
          "title": "前菜",
          "desktopColumn": 0,
          "items": [
            {
              "name": "洋蓟沙拉",
              "price": "17 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "布拉塔奶酪配老品种番茄",
              "price": "19 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "藜麦配当日佐料",
              "price": "19 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "酥脆鸡肉凯撒",
              "price": "18 €"
            },
            {
              "name": "鰤鱼酸橘汁腌鱼",
              "price": "18 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "轻煎金枪鱼，尼斯沙拉风味",
              "price": "20 €",
              "filters": [
                "fish"
              ]
            }
          ]
        },
        {
          "id": "mains",
          "title": "主菜",
          "desktopColumn": 1,
          "items": [
            {
              "name": "白酒煮青口",
              "price": "18 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "炉烤沙丁鱼配时令 vierge 酱",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "蒜香煎野生大虾",
              "price": "28 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "整只烤皇家海鲷",
              "price": "32 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "意式牛肉塔塔",
              "price": "19 €"
            },
            {
              "name": "切达奶油汉堡",
              "price": "19 €"
            },
            {
              "name": "慢炖牛脸颊",
              "price": "23 €"
            },
            {
              "name": "腌猪肋排",
              "price": "23 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "牛肉塔利亚塔",
              "price": "25 €"
            },
            {
              "name": "烤鸡胸配牛肝菌酱",
              "price": "25 €"
            },
            {
              "name": "米兰风味小牛肉排",
              "price": "26 €"
            },
            {
              "name": "青酱扁面",
              "price": "20 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "辣味通心粉配丝绸奶酪",
              "price": "23 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "蛤蜊扁面",
              "price": "25 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "松露奶油通心粉",
              "price": "32 €",
              "filters": [
                "vegetarian"
              ]
            }
          ]
        },
        {
          "id": "extras",
          "title": "配菜",
          "desktopColumn": 0,
          "items": [
            {
              "name": "现炸薯条",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "奶油波伦塔",
              "price": "5 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "尼斯混合生菜",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "阳光蔬菜",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "kids",
          "title": "儿童菜单",
          "desktopColumn": 1,
          "items": [
            {
              "name": "儿童菜单",
              "description": "糖浆兑水、鸡柳配薯条或番茄酱意面，再加一球冰淇淋",
              "price": "12 €"
            }
          ]
        }
      ]
    },
    {
      "id": "pizzas",
      "label": "披萨",
      "sections": [
        {
          "id": "wood-fired-pizzas",
          "title": "柴火披萨",
          "layout": "split-items",
          "items": [
            {
              "name": "玛格丽塔",
              "description": "番茄酱、马苏里拉、罗勒",
              "price": "14 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "女王披萨",
              "description": "番茄酱、马苏里拉、熟火腿、蘑菇",
              "price": "17 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "四种奶酪",
              "description": "番茄酱、马苏里拉、reblochon、蓝纹奶酪、山羊奶酪",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Cannibale",
              "description": "番茄酱、马苏里拉、焦糖洋葱、肉末、鸡蛋",
              "price": "18 €"
            },
            {
              "name": "那不勒斯",
              "description": "番茄酱、马苏里拉、凤尾鱼、刺山柑",
              "price": "16 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "四季披萨",
              "description": "番茄酱、马苏里拉、蘑菇、茄子、樱桃番茄、洋蓟",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "普罗旺斯",
              "description": "番茄酱、马苏里拉、蘑菇、茄子、焦糖洋葱、甜椒",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "西班牙",
              "description": "番茄酱、马苏里拉、spianata 辣香肠、甜椒",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "地中海",
              "description": "番茄酱、马苏里拉、焦糖洋葱、刺山柑、金枪鱼",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Parma",
              "description": "番茄酱、马苏里拉、樱桃番茄、风干火腿、布拉塔奶酪",
              "price": "22 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "挪威",
              "description": "白底、马苏里拉、腌三文鱼、樱桃番茄",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "山羊奶酪蜂蜜",
              "description": "白底、马苏里拉、山羊奶酪、核桃、蜂蜜",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Calzone",
              "description": "番茄酱、马苏里拉、蘑菇、熟火腿、鸡蛋",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Truffala",
              "description": "松露奶油、马苏里拉、风干火腿、布拉塔奶酪",
              "price": "25 €",
              "filters": [
                "pork"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "bar",
      "label": "酒吧",
      "sections": [
        {
          "id": "spritz",
          "title": "Spritz",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Aperol Spritz",
              "description": "Aperol 5 cl，prosecco 10 cl，气泡水，橙子",
              "price": "10 €"
            },
            {
              "name": "Hugo Spritz",
              "description": "St-Germain 5 cl，prosecco 10 cl，气泡水，柠檬，薄荷",
              "price": "12 €"
            },
            {
              "name": "Limoncello Spritz",
              "description": "Limoncello 5 cl，prosecco 10 cl，气泡水，柠檬",
              "price": "10 €"
            },
            {
              "name": "Amaretto Spritz",
              "description": "Amaretto 5 cl，prosecco 10 cl，气泡水，橙子",
              "price": "11 €"
            },
            {
              "name": "St-Germain Spritz",
              "description": "St-Germain 5 cl，prosecco 10 cl，气泡水，柠檬",
              "price": "12 €"
            },
            {
              "name": "Martini Spritz",
              "description": "Martini Bianco 5 cl，prosecco 10 cl，气泡水，柠檬",
              "price": "10 €"
            },
            {
              "name": "Campari Spritz",
              "description": "Campari 5 cl，prosecco 10 cl，气泡水，橙子",
              "price": "12 €"
            },
            {
              "name": "红果 Spritz",
              "description": "红果利口酒 5 cl，prosecco 10 cl，气泡水",
              "price": "12 €"
            },
            {
              "name": "Rosa Spritz",
              "description": "Sarti 5 cl，prosecco 10 cl，气泡水，橙子",
              "price": "11 €"
            },
            {
              "name": "洋蓟 Spritz",
              "description": "Cynar 5 cl，prosecco 10 cl，气泡水",
              "price": "12 €"
            }
          ]
        },
        {
          "id": "cocktails",
          "title": "鸡尾酒",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Negroni",
              "description": "Gin 3 cl，Campari 3 cl，红味美思 3 cl",
              "price": "12 €"
            },
            {
              "name": "Sex on the Beach",
              "description": "Vodka 5 cl，橙汁，蔓越莓汁，桃子利口酒",
              "price": "12 €"
            },
            {
              "name": "Mojito",
              "description": "Rum 5 cl，angostura，红糖，青柠，薄荷，气泡水",
              "price": "12 €"
            },
            {
              "name": "草莓 Mojito 或百香果 Mojito",
              "description": "Rum 5 cl，angostura，红糖，青柠，薄荷，气泡水，草莓或百香果果泥",
              "price": "13 €"
            },
            {
              "name": "Paloma",
              "description": "Tequila 5 cl，青柠汁，葡萄柚汁，tonic",
              "price": "13 €"
            },
            {
              "name": "Cosmopolitan",
              "description": "Vodka 5 cl，triple sec，蔓越莓汁，青柠",
              "price": "13 €"
            },
            {
              "name": "Mule",
              "description": "Moscow、London、Mexican、Kentucky 或 Caribbean 5 cl",
              "price": "13 €"
            },
            {
              "name": "Sour",
              "description": "Amaretto、vodka、gin、rum 或 whisky 5 cl",
              "price": "13 €"
            },
            {
              "name": "Pornstar",
              "description": "Vodka 5 cl，柠檬，香草，百香果汁和 prosecco 5 cl",
              "price": "14 €"
            },
            {
              "name": "Pina Colada",
              "description": "Rum 5 cl，椰奶，菠萝汁",
              "price": "14 €"
            },
            {
              "name": "百香果或草莓 Daiquiri",
              "description": "Rum 5 cl，蔗糖，青柠，百香果或草莓果泥",
              "price": "14 €"
            },
            {
              "name": "Grand Margarita",
              "description": "Grand Marnier 2 cl，tequila 3 cl，青柠，龙舌兰糖浆",
              "price": "15 €"
            },
            {
              "name": "Espresso Martini",
              "description": "Vodka 5 cl，咖啡利口酒 2 cl，espresso，香草糖浆",
              "price": "15 €"
            }
          ]
        },
        {
          "id": "draught-beers",
          "title": "生啤",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Pietra Bionda",
              "description": "25 cl / 50 cl",
              "price": "4,5 € / 8 €"
            },
            {
              "name": "Fada IPA",
              "description": "25 cl / 50 cl",
              "price": "5 € / 9,5 €"
            }
          ]
        },
        {
          "id": "bottled-beers",
          "title": "瓶装啤酒（33cl）",
          "desktopColumn": 1,
          "items": [
            {
              "name": "1664 Blanche",
              "price": "7 €"
            },
            {
              "name": "Corona",
              "price": "7 €"
            },
            {
              "name": "Corona 0",
              "price": "7 €"
            },
            {
              "name": "Chill Lemon",
              "price": "7 €"
            },
            {
              "name": "Chouffe",
              "price": "8 €"
            }
          ]
        },
        {
          "id": "aperitifs",
          "title": "开胃酒",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Martini、Campari、Porto (4 cl)",
              "price": "5 €"
            },
            {
              "name": "Prosecco (14 cl)",
              "price": "6 €"
            },
            {
              "name": "Pastis、Ricard (4 cl)",
              "price": "5 €"
            },
            {
              "name": "香槟杯装 (14 cl)",
              "price": "10 €"
            },
            {
              "name": "加冰香槟 (16 cl)",
              "price": "12 €"
            },
            {
              "name": "Kir (14 cl)",
              "price": "6 €"
            },
            {
              "name": "Kir Royal (14 cl)",
              "price": "12 €"
            }
          ]
        },
        {
          "id": "spirits",
          "title": "烈酒",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Whisky & bourbon (4 cl)"
            },
            {
              "name": "William Lawson’s",
              "price": "8 €"
            },
            {
              "name": "Jack Daniel’s, Honey, Fire",
              "price": "10 €"
            },
            {
              "name": "Chivas 12 年",
              "price": "13 €"
            },
            {
              "name": "Angels Envy",
              "price": "15 €"
            },
            {
              "name": "Nikka From The Barrel",
              "price": "22 €"
            },
            {
              "kind": "section",
              "label": "Vodka (4 cl)"
            },
            {
              "name": "Eristoff",
              "price": "8 €"
            },
            {
              "name": "Grey Goose",
              "price": "14 €"
            },
            {
              "kind": "section",
              "label": "Tequila (4 cl)"
            },
            {
              "name": "Acayucan",
              "price": "8 €"
            },
            {
              "name": "Patron Silver",
              "price": "15 €"
            },
            {
              "kind": "section",
              "label": "Gin (4 cl)"
            },
            {
              "name": "Bombay Original",
              "price": "8 €"
            },
            {
              "name": "Bombay Sapphire",
              "price": "12 €"
            },
            {
              "name": "Star of Bombay",
              "price": "15 €"
            },
            {
              "kind": "section",
              "label": "Rum (4 cl)"
            },
            {
              "name": "Bacardi Blanc",
              "price": "8 €"
            },
            {
              "name": "Captain Morgan",
              "price": "9 €"
            },
            {
              "name": "Diplomatico",
              "price": "13 €"
            },
            {
              "name": "Bacardi Blanco",
              "price": "16 €"
            },
            {
              "kind": "section",
              "label": "Digestifs (4 cl)"
            },
            {
              "name": "Get 27",
              "price": "8 €"
            },
            {
              "name": "Get 31",
              "price": "9 €"
            },
            {
              "name": "Limoncello",
              "price": "8 €"
            },
            {
              "name": "Amaretto",
              "price": "8 €"
            },
            {
              "name": "Sambuca",
              "price": "8 €"
            },
            {
              "name": "Grappa",
              "price": "9 €"
            },
            {
              "name": "Bailey’s",
              "price": "9 €"
            },
            {
              "name": "Saint-Germain",
              "price": "10 €"
            },
            {
              "name": "Armagnac Laubade",
              "price": "12 €"
            },
            {
              "name": "Baileys",
              "price": "12 €"
            },
            {
              "name": "Hennessy XO",
              "price": "28 €"
            },
            {
              "name": "Chartreuse Verte",
              "price": "15 €"
            },
            {
              "kind": "section",
              "label": "搭配饮料"
            },
            {
              "name": "Soft",
              "price": "+1 €"
            },
            {
              "name": "Red Bull",
              "price": "+2,50 €"
            }
          ]
        }
      ]
    },
    {
      "id": "wines",
      "label": "葡萄酒",
      "sections": [
        {
          "id": "french-wines",
          "title": "法国葡萄酒",
          "desktopColumn": 0,
          "items": [
            {
              "kind": "section",
              "label": "白葡萄酒"
            },
            {
              "name": "Côté Terre, Chardonnay | IGP Languedoc",
              "price": "Verre 6 €"
            },
            {
              "name": "Château Paradis | AOP Coteaux d’Aix",
              "price": "50 cl 19 € • 75 cl 28 €"
            },
            {
              "name": "Chardonnay Les Plans Nobles Ropiteau | Vin de France",
              "price": "75 cl 29 €"
            },
            {
              "name": "Domaine Tariquet « Premières Grives » | IGP Côtes de Gascogne",
              "price": "Verre 7 € • 75 cl 30 €"
            },
            {
              "name": "Domaine Les Héritières | AOP Chablis",
              "price": "Verre 9 € • 75 cl 38 €"
            },
            {
              "name": "Domaine de Maltaverne | AOP Pouilly-Fumé",
              "price": "75 cl 44 €"
            },
            {
              "name": "Minuty Prestige | AOP Côtes de Provence",
              "price": "75 cl 45 €"
            },
            {
              "name": "Domaine St Romble Paul Vattan | AOP Sancerre",
              "price": "75 cl 49 €"
            },
            {
              "kind": "section",
              "label": "桃红葡萄酒"
            },
            {
              "name": "Côté Mer | IGP Méditerranée",
              "price": "Verre 5 €"
            },
            {
              "name": "Château Paradis Cuvée Essentiel | AOP Coteaux d’Aix",
              "price": "50 cl 19 € • 75 cl 28 €"
            },
            {
              "name": "Tasquier | AOP Côtes de Provence",
              "price": "75 cl 32 €"
            },
            {
              "name": "Château Maïme « Heritage » | AOP Côtes de Provence",
              "price": "75 cl 36 €"
            },
            {
              "name": "Minuty Prestige | AOP Côtes de Provence",
              "price": "Verre 9 € • 75 cl 45 €"
            },
            {
              "name": "Miraval | AOP Côtes de Provence",
              "price": "75 cl 55 €"
            },
            {
              "kind": "section",
              "label": "红葡萄酒"
            },
            {
              "name": "Cellier des Chartreux | AOP Côtes du Rhône",
              "price": "Verre 6 €"
            },
            {
              "name": "Château Paradis Cuvée Essentiel | AOP Coteaux d’Aix-en-Provence",
              "price": "50 cl 19 € • 75 cl 28 €"
            },
            {
              "name": "Pinot Noir Les Plans Nobles Ropiteau | Vin de France",
              "price": "Verre 8 € • 75 cl 30 €"
            },
            {
              "name": "Cuvée Perrin | AOP Côtes du Rhône",
              "price": "75 cl 35 €"
            },
            {
              "name": "Les Domaniales | AOP Crozes-Hermitage",
              "price": "75 cl 45 €"
            },
            {
              "name": "La Colombière | AOP Saint-Émilion",
              "price": "75 cl 47 €"
            },
            {
              "name": "Le Seuil de Mazeyres | AOP Pomerol",
              "price": "75 cl 65 €"
            },
            {
              "name": "Jean Claude Boisset | Hautes Côtes de Nuits AOP",
              "price": "75 cl 72 €"
            },
            {
              "name": "Famille Perrin Méridion | AOP Châteauneuf-du-Pape",
              "price": "75 cl 76 €"
            }
          ]
        },
        {
          "id": "world-wines",
          "title": "世界葡萄酒",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "红葡萄酒 — 意大利"
            },
            {
              "name": "Lambrusco Amabile | I.G.T. Lella",
              "price": "75 cl 28 €"
            },
            {
              "name": "Nero D’Avola Lumà | DOP Sicilia",
              "price": "75 cl 35 €"
            },
            {
              "kind": "section",
              "label": "红葡萄酒 — 西班牙"
            },
            {
              "name": "Riscal 1860 | Castilla y Leon AOC",
              "price": "75 cl 32 €"
            },
            {
              "kind": "section",
              "label": "红葡萄酒 — 阿根廷"
            },
            {
              "name": "Clos de los Siete | Valle de Uco – Mendoza",
              "price": "75 cl 39 €"
            },
            {
              "kind": "section",
              "label": "红葡萄酒 — 美国"
            },
            {
              "name": "Buena Vista La Petite Syrah | Vin de Californie",
              "price": "75 cl 38 €"
            },
            {
              "kind": "section",
              "label": "红葡萄酒 — 智利"
            },
            {
              "name": "Mapu | Valle del Maule",
              "price": "75 cl 30 €"
            },
            {
              "kind": "section",
              "label": "白葡萄酒 — 意大利"
            },
            {
              "name": "Santa Margherita, Pinot Grigio | Valdadige DOC",
              "price": "75 cl 33 €"
            },
            {
              "name": "Etna Bianco DOC | Azienda Tornatore",
              "price": "75 cl 45 €"
            },
            {
              "kind": "section",
              "label": "白葡萄酒 — 新西兰"
            },
            {
              "name": "Fusional Sauvignon Blanc | Marlborough",
              "price": "75 cl 35 €"
            }
          ]
        },
        {
          "id": "premium-cellar",
          "title": "精选酒窖",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "白葡萄酒"
            },
            {
              "name": "Louis Cheze « Pagus Luminis » | Condrieu AOP",
              "price": "75 cl 85 €"
            },
            {
              "name": "Comte Lafond « Grande Cuvée » | Sancerre AOC",
              "price": "75 cl 89 €"
            },
            {
              "name": "Pernand-Vergelesses | AOC, Jadot",
              "price": "75 cl 94 €"
            },
            {
              "name": "Château Simone | AOC Palette",
              "price": "75 cl 99 €"
            },
            {
              "name": "Guy Amiot et Fils | Chassagne-Montrachet AOP",
              "price": "75 cl 110 €"
            },
            {
              "name": "Albert Grivault | Meursault AOC",
              "price": "75 cl 135 €"
            },
            {
              "kind": "section",
              "label": "红葡萄酒"
            },
            {
              "name": "Château Carbonnieux | Pessac Léognan AOC",
              "price": "75 cl 85 €"
            },
            {
              "name": "Château de Pez | Saint-Estèphe AOC",
              "price": "75 cl 94 €"
            },
            {
              "name": "Château Prieuré-Lichine | Margaux AOC",
              "price": "75 cl 110 €"
            },
            {
              "name": "Domaine du Monteillet « Fortis » | Côte-Rôtie AOP",
              "price": "75 cl 140 €"
            },
            {
              "name": "Domaine Faiveley « Montroziers » | Nuits-Saint-Georges AOC",
              "price": "75 cl 145 €"
            },
            {
              "name": "Domaine Faiveley | Vosne-Romanée AOC",
              "price": "75 cl 155 €"
            },
            {
              "name": "Château de Beaucastel | Châteauneuf-du-Pape AOC",
              "price": "75 cl 165 €"
            }
          ]
        },
        {
          "id": "champagnes",
          "title": "香槟与起泡酒",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Prosecco | Sensi",
              "price": "Verre 6 € • 75 cl 35 €"
            },
            {
              "kind": "section",
              "label": "香槟"
            },
            {
              "name": "Henri Loriot",
              "price": "Verre 12 € • 75 cl 70 €"
            },
            {
              "name": "Billecart-Salmon Brut Réserve",
              "price": "75 cl 90 €"
            },
            {
              "name": "Billecart-Salmon Brut Rosé",
              "price": "75 cl 120 €"
            },
            {
              "name": "Ruinart Brut",
              "price": "75 cl 110 €"
            },
            {
              "name": "Ruinart Blanc de Blancs",
              "price": "75 cl 150 €"
            },
            {
              "name": "Dom Pérignon Brut Vintage",
              "price": "75 cl 300 €"
            }
          ]
        }
      ]
    },
    {
      "id": "softs",
      "label": "软饮",
      "sections": [
        {
          "id": "cold-drinks",
          "title": "冷饮",
          "items": [
            {
              "name": "Vittel 和 San Pellegrino 50 cl",
              "price": "4 €"
            },
            {
              "name": "Vittel 和 San Pellegrino 100 cl",
              "price": "7 €"
            },
            {
              "name": "糖浆兑水",
              "price": "3 €"
            },
            {
              "name": "Coca、Coca Zero、Schweppes Tonic & Agrumes、Fuze Tea、Sprite、Perrier、Orangina (33 cl)",
              "price": "5 €"
            },
            {
              "name": "Red Bull (25 cl)",
              "price": "6 €"
            },
            {
              "name": "果汁（ACE、橙子、番茄、苹果、菠萝 – 25 cl）",
              "price": "5 €"
            },
            {
              "name": "桃子或覆盆子冰茶",
              "price": "6 €"
            },
            {
              "name": "鲜榨果汁（橙子、柠檬 – 25 cl）",
              "price": "6 €"
            }
          ]
        },
        {
          "id": "mocktails",
          "title": "无酒精鸡尾酒",
          "items": [
            {
              "name": "Virgin Spritz",
              "price": "9 €"
            },
            {
              "name": "Virgin Mojito",
              "price": "9 €"
            },
            {
              "name": "Virgin Colada",
              "price": "9 €"
            },
            {
              "name": "Virgin Paloma",
              "price": "9 €"
            },
            {
              "name": "Virgin Pornstar",
              "price": "9 €"
            },
            {
              "name": "Virgin Exotique",
              "price": "9 €"
            },
            {
              "name": "Virgin Sex On The Beach",
              "price": "9 €"
            }
          ]
        }
      ]
    },
    {
      "id": "coffee",
      "label": "咖啡",
      "sections": [
        {
          "id": "iced-coffee",
          "title": "冰咖啡",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Iced Latte",
              "price": "4,50 €"
            },
            {
              "name": "Iced Caramel Latte",
              "price": "5 €"
            },
            {
              "name": "法式冰咖啡",
              "price": "5 €"
            },
            {
              "name": "Iced Matcha Latte",
              "price": "5,50 €"
            }
          ]
        },
        {
          "id": "hot-drinks",
          "title": "热饮",
          "layout": "split-items",
          "desktopColumn": 0,
          "items": [
            {
              "name": "浓缩咖啡",
              "price": "2 €"
            },
            {
              "name": "无咖啡因",
              "price": "2 €"
            },
            {
              "name": "玛奇朵",
              "price": "2,50 €"
            },
            {
              "name": "美式咖啡",
              "price": "2,50 €"
            },
            {
              "name": "卡布奇诺",
              "price": "3,80 €"
            },
            {
              "name": "奶油咖啡",
              "price": "3,50 €"
            },
            {
              "name": "双份浓缩",
              "price": "4 €"
            },
            {
              "name": "维也纳咖啡",
              "price": "4,50 €"
            },
            {
              "name": "茶／花草茶",
              "price": "4 €"
            },
            {
              "name": "Latte macchiato",
              "price": "5 €"
            },
            {
              "name": "Irish coffee",
              "price": "12 €"
            },
            {
              "name": "热巧克力",
              "price": "4 €"
            },
            {
              "name": "维也纳巧克力",
              "price": "5 €"
            },
            {
              "name": "香草拿铁",
              "price": "5 €"
            },
            {
              "name": "焦糖拿铁",
              "price": "5 €"
            },
            {
              "name": "榛子拿铁",
              "price": "5 €"
            },
            {
              "name": "Chai Latte",
              "price": "5 €"
            },
            {
              "name": "Matcha Latte",
              "price": "5,50 €"
            }
          ]
        },
        {
          "id": "hot-drink-addons",
          "title": "加配",
          "desktopColumn": 1,
          "items": [
            {
              "name": "植物奶",
              "description": "燕麦",
              "price": "+0,90 €"
            },
            {
              "name": "糖浆",
              "description": "香草、焦糖或榛子",
              "price": "+0,50 €"
            },
            {
              "name": "奶油",
              "price": "+0,50 €"
            }
          ]
        }
      ]
    },
    {
      "id": "desserts",
      "label": "甜点",
      "sections": [
        {
          "id": "dessert-menu",
          "title": "甜点",
          "items": [
            {
              "name": "奶酪拼盘",
              "price": "9 €"
            },
            {
              "name": "巧克力慕斯",
              "price": "8 €"
            },
            {
              "name": "当日提拉米苏",
              "price": "8 €"
            },
            {
              "kind": "section",
              "label": "Palais de la Friandise 甜点"
            },
            {
              "name": "当日甜点",
              "price": "11 €"
            }
          ]
        },
        {
          "id": "ice-cream",
          "title": "冰淇淋",
          "items": [
            {
              "kind": "section",
              "label": "手工冰淇淋"
            },
            {
              "name": "口味",
              "description": "咖啡、巧克力、香草、薄荷、椰子、柠檬、草莓、芒果、百香果、覆盆子、焦糖、佛罗伦萨牛奶、菠萝、开心果"
            },
            {
              "name": "1 球",
              "price": "3 €"
            },
            {
              "name": "2 球",
              "price": "5,50 €"
            },
            {
              "name": "3 球",
              "price": "8,50 €"
            },
            {
              "kind": "section",
              "label": "冰淇淋圣代"
            },
            {
              "name": "Dame Blanche",
              "description": "香草冰淇淋、巧克力酱、奶油",
              "price": "9,50 €"
            },
            {
              "name": "咖啡或巧克力 Liégeois",
              "description": "香草冰淇淋、咖啡或巧克力冰淇淋、咖啡或热巧克力、奶油",
              "price": "10 €"
            },
            {
              "name": "热带圣代",
              "description": "椰子、芒果和百香果冰淇淋、奶油",
              "price": "10,50 €"
            },
            {
              "name": "红果圣代",
              "description": "草莓和覆盆子冰淇淋、红果酱、奶油",
              "price": "11 €"
            },
            {
              "name": "Colonel 圣代",
              "description": "柠檬冰淇淋、vodka、奶油",
              "price": "11 €"
            },
            {
              "name": "After Eight 圣代",
              "description": "巧克力冰淇淋、薄荷、Get 27、巧克力、奶油",
              "price": "11 €"
            },
            {
              "name": "Milk shake",
              "description": "冰淇淋 + 牛奶 (33 cl)：覆盆子、菠萝、草莓、香蕉、巧克力、香草、芒果、百香果、椰子、柠檬",
              "price": "7 €"
            }
          ]
        }
      ]
    }
  ],
  "winePriceColumnLabels": {
    "glass": "杯",
    "50cl": "50 cl",
    "75cl": "75 cl"
  }
};
