export const menuPage = {
  "eyebrow": "Меню",
  "title": "Меню La Table",
  "text": "Более понятная версия карты, чтобы сразу разделить кухню, пиццу, бар, вина, безалкогольные напитки, кофе и десерты.",
  "note": "Локализованная версия меню.",
  "filters": {
    "buttonLabel": "Пищевые предпочтения",
    "emptyLabel": "По этим фильтрам ничего не найдено.",
    "clearLabel": "Сбросить",
    "filterableTabs": [
      "cuisine",
      "pizzas"
    ],
    "options": [
      {
        "id": "vegetarian",
        "label": "Вегетарианское"
      },
      {
        "id": "vegan",
        "label": "Веганское"
      },
      {
        "id": "no-pork",
        "label": "Без свинины"
      },
      {
        "id": "no-fish",
        "label": "Без рыбы"
      },
      {
        "id": "no-seafood",
        "label": "Без морепродуктов"
      }
    ],
    "optionLabels": {
      "vegetarian": "Вегетарианское",
      "vegan": "Веганское",
      "no-pork": "Без свинины",
      "no-fish": "Без рыбы",
      "no-seafood": "Без морепродуктов"
    }
  },
  "tabs": [
    {
      "id": "cuisine",
      "label": "Кухня",
      "sections": [
        {
          "id": "sharing",
          "title": "На компанию",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Баклажанная икра из дровяной печи",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Маринованные перцы, хлеб из теста для пиццы",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Паниссы с айоли",
              "price": "9 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Пармская ветчина",
              "price": "11 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Сокка от шефа «Янна»",
              "price": "7 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "starters",
          "title": "Закуски",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Буррата и старинные томаты",
              "price": "19 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Цезарь с хрустящей курицей",
              "price": "18 €"
            },
            {
              "name": "Салат с артишоками",
              "price": "17 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Севиче из сериолы",
              "price": "18 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Обжаренный тунец в стиле салата «Нисуаз»",
              "price": "20 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Киноа с приправами дня",
              "price": "19 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "mains",
          "title": "Основные блюда",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Маринованные свиные рёбрышки",
              "price": "23 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Тальята из говядины",
              "price": "25 €"
            },
            {
              "name": "Тартар из говядины по-итальянски",
              "price": "19 €"
            },
            {
              "name": "Гурме-бургер с кремом из чеддера",
              "price": "19 €"
            },
            {
              "name": "Томлёная говяжья щека",
              "price": "23 €"
            },
            {
              "name": "Запечённое куриное филе, соус с белыми грибами",
              "price": "25 €"
            },
            {
              "name": "Лингвини с песто",
              "price": "20 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Телятина по-милански",
              "price": "26 €"
            },
            {
              "name": "Ригатони all’arrabbiata со страчателлой",
              "price": "23 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Лингвини alle vongole",
              "price": "25 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Ригатони с трюфельным кремом",
              "price": "32 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Мидии мариньер",
              "price": "18 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Сардины на гриле с сезонным соусом vierge",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Дикие креветки, обжаренные с чесноком",
              "price": "28 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Целая дорадо, запечённая в духовке",
              "price": "32 €",
              "filters": [
                "fish"
              ]
            }
          ]
        },
        {
          "id": "extras",
          "title": "Гарниры",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Свежий картофель фри",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Сливочная полента",
              "price": "5 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Нисуазский месклан",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Овощи солнца",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "kids",
          "title": "Детское меню",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Детское меню",
              "description": "Сироп с водой, куриные тендеры с картофелем фри или паста в томатном соусе, шарик мороженого",
              "price": "12 €"
            }
          ]
        }
      ]
    },
    {
      "id": "pizzas",
      "label": "Пицца",
      "sections": [
        {
          "id": "wood-fired-pizzas",
          "title": "Пицца из дровяной печи",
          "layout": "split-items",
          "items": [
            {
              "name": "Маргарита",
              "description": "Томатный соус, моцарелла, базилик",
              "price": "14 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Королева",
              "description": "Томатный соус, моцарелла, варёная ветчина, грибы",
              "price": "17 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "4 сыра",
              "description": "Томатный соус, моцарелла, реблошон, рокфор, козий сыр",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Cannibale",
              "description": "Томатный соус, моцарелла, томлёный лук, фарш, яйцо",
              "price": "18 €"
            },
            {
              "name": "Наполитана",
              "description": "Томатный соус, моцарелла, анчоусы, каперсы",
              "price": "16 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "4 сезона",
              "description": "Томатный соус, моцарелла, грибы, баклажаны, черри, артишоки",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Провансаль",
              "description": "Томатный соус, моцарелла, грибы, баклажаны, томлёный лук, перец",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Испанская",
              "description": "Томатный соус, моцарелла, спьяната, перец",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Средиземноморская",
              "description": "Томатный соус, моцарелла, томлёный лук, каперсы, тунец",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Parma",
              "description": "Томатный соус, моцарелла, томаты черри, сыровяленая ветчина, буррата",
              "price": "22 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Норвежская",
              "description": "Белая основа, моцарелла, маринованный лосось, томаты черри",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Козий сыр и мёд",
              "description": "Белая основа, моцарелла, козий сыр, грецкие орехи, мёд",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Calzone",
              "description": "Томатный соус, моцарелла, грибы, варёная ветчина, яйцо",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Truffala",
              "description": "Трюфельный крем, моцарелла, сыровяленая ветчина, буррата",
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
      "label": "Бар",
      "sections": [
        {
          "id": "spritz",
          "title": "Спритц",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Aperol Spritz",
              "description": "Aperol 5 cl, prosecco 10 cl, газированная вода, апельсин",
              "price": "10 €"
            },
            {
              "name": "Hugo Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, газированная вода, лимон, мята",
              "price": "12 €"
            },
            {
              "name": "Limoncello Spritz",
              "description": "Limoncello 5 cl, prosecco 10 cl, газированная вода, лимон",
              "price": "10 €"
            },
            {
              "name": "Amaretto Spritz",
              "description": "Amaretto 5 cl, prosecco 10 cl, газированная вода, апельсин",
              "price": "11 €"
            },
            {
              "name": "St-Germain Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, газированная вода, лимон",
              "price": "12 €"
            },
            {
              "name": "Martini Spritz",
              "description": "Martini Bianco 5 cl, prosecco 10 cl, газированная вода, лимон",
              "price": "10 €"
            },
            {
              "name": "Campari Spritz",
              "description": "Campari 5 cl, prosecco 10 cl, газированная вода, апельсин",
              "price": "12 €"
            },
            {
              "name": "Спритц с красными ягодами",
              "description": "Ликёр из красных ягод 5 cl, prosecco 10 cl, газированная вода",
              "price": "12 €"
            },
            {
              "name": "Rosa Spritz",
              "description": "Sarti 5 cl, prosecco 10 cl, газированная вода, апельсин",
              "price": "11 €"
            },
            {
              "name": "Артишоковый спритц",
              "description": "Cynar 5 cl, prosecco 10 cl, газированная вода",
              "price": "12 €"
            }
          ]
        },
        {
          "id": "cocktails",
          "title": "Коктейли",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Negroni",
              "description": "Gin 3 cl, Campari 3 cl, красный вермут 3 cl",
              "price": "12 €"
            },
            {
              "name": "Sex on the Beach",
              "description": "Vodka 5 cl, апельсиновый сок, клюквенный сок, персиковый ликёр",
              "price": "12 €"
            },
            {
              "name": "Mojito",
              "description": "Rum 5 cl, angostura, коричневый сахар, лайм, мята, газированная вода",
              "price": "12 €"
            },
            {
              "name": "Клубничный Mojito или маракуйя Mojito",
              "description": "Rum 5 cl, angostura, коричневый сахар, лайм, мята, газированная вода, пюре из клубники или маракуйи",
              "price": "13 €"
            },
            {
              "name": "Paloma",
              "description": "Tequila 5 cl, сок лайма, грейпфрутовый сок, tonic",
              "price": "13 €"
            },
            {
              "name": "Cosmopolitan",
              "description": "Vodka 5 cl, triple sec, клюквенный сок, лайм",
              "price": "13 €"
            },
            {
              "name": "Mule",
              "description": "Moscow, London, Mexican, Kentucky или Caribbean 5 cl",
              "price": "13 €"
            },
            {
              "name": "Sour",
              "description": "Amaretto, vodka, gin, rum или whisky 5 cl",
              "price": "13 €"
            },
            {
              "name": "Pornstar",
              "description": "Vodka 5 cl, лимон, ваниль, сок маракуйи и prosecco 5 cl",
              "price": "14 €"
            },
            {
              "name": "Pina Colada",
              "description": "Rum 5 cl, кокосовое молоко, ананасовый сок",
              "price": "14 €"
            },
            {
              "name": "Daiquiri маракуйя или клубника",
              "description": "Rum 5 cl, тростниковый сахар, лайм, пюре из маракуйи или клубники",
              "price": "14 €"
            },
            {
              "name": "Grand Margarita",
              "description": "Grand Marnier 2 cl, tequila 3 cl, лайм, сироп агавы",
              "price": "15 €"
            },
            {
              "name": "Espresso Martini",
              "description": "Vodka 5 cl, кофейный ликёр 2 cl, espresso, ванильный сироп",
              "price": "15 €"
            }
          ]
        },
        {
          "id": "aperitifs",
          "title": "Аперитивы",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Martini, Campari, Porto (4 cl)",
              "price": "5 €"
            },
            {
              "name": "Prosecco (14 cl)",
              "price": "6 €"
            },
            {
              "name": "Pastis, Ricard (4 cl)",
              "price": "5 €"
            },
            {
              "name": "Бокал шампанского (14 cl)",
              "price": "10 €"
            },
            {
              "name": "Шампанское со льдом (16 cl)",
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
          "title": "Алкоголь",
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
              "name": "Chivas 12 лет",
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
              "label": "Дижестивы (4 cl)"
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
              "label": "Сопровождение"
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
      "label": "Вина",
      "sections": [
        {
          "id": "french-wines",
          "title": "Вина Франции",
          "desktopColumn": 0,
          "items": [
            {
              "kind": "section",
              "label": "Белые вина"
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
              "label": "Розовые вина"
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
              "label": "Красные вина"
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
          "title": "Вина мира",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Красные — Италия"
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
              "label": "Красные — Испания"
            },
            {
              "name": "Riscal 1860 | Castilla y Leon AOC",
              "price": "75 cl 32 €"
            },
            {
              "kind": "section",
              "label": "Красные — Аргентина"
            },
            {
              "name": "Clos de los Siete | Valle de Uco – Mendoza",
              "price": "75 cl 39 €"
            },
            {
              "kind": "section",
              "label": "Красные — США"
            },
            {
              "name": "Buena Vista La Petite Syrah | Vin de Californie",
              "price": "75 cl 38 €"
            },
            {
              "kind": "section",
              "label": "Красные — Чили"
            },
            {
              "name": "Mapu | Valle del Maule",
              "price": "75 cl 30 €"
            },
            {
              "kind": "section",
              "label": "Белые — Италия"
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
              "label": "Белые — Новая Зеландия"
            },
            {
              "name": "Fusional Sauvignon Blanc | Marlborough",
              "price": "75 cl 35 €"
            }
          ]
        },
        {
          "id": "premium-cellar",
          "title": "Премиальная винная карта",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Белые вина"
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
              "name": "Château Simone | AOC",
              "price": "75 cl 99 €"
            },
            {
              "name": "Chassagne-Montrachet AOP | Guy Amiot et Fils",
              "price": "75 cl 110 €"
            },
            {
              "name": "Meursault AOC | Albert Grivault",
              "price": "75 cl 135 €"
            },
            {
              "kind": "section",
              "label": "Красные вина"
            },
            {
              "name": "Château Carbonnieux",
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
              "name": "Côte-Rôtie AOP | Domaine du Monteillet « Fortis »",
              "price": "75 cl 140 €"
            },
            {
              "name": "Nuits-Saint-Georges AOC | Domaine Faiveley « Montroziers »",
              "price": "75 cl 145 €"
            },
            {
              "name": "Vosne-Romanée AOC | Domaine Faiveley",
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
          "title": "Шампанское и игристое",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Prosecco | Sensi",
              "price": "Verre 6 € • 75 cl 35 €"
            },
            {
              "kind": "section",
              "label": "Шампанское"
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
      "label": "Безалк.",
      "sections": [
        {
          "id": "cold-drinks",
          "title": "Прохладительные напитки",
          "items": [
            {
              "name": "Vittel и San Pellegrino 50 cl",
              "price": "4 €"
            },
            {
              "name": "Vittel и San Pellegrino 100 cl",
              "price": "7 €"
            },
            {
              "name": "Сироп с водой",
              "price": "3 €"
            },
            {
              "name": "Coca, Coca Zero, Schweppes Tonic & Agrumes, Fuze Tea, Sprite, Perrier, Orangina (33 cl)",
              "price": "5 €"
            },
            {
              "name": "Red Bull (25 cl)",
              "price": "6 €"
            },
            {
              "name": "Соки (ACE, апельсин, томат, яблоко, ананас – 25 cl)",
              "price": "5 €"
            },
            {
              "name": "Холодный чай персик или малина",
              "price": "6 €"
            },
            {
              "name": "Свежевыжатые соки (апельсин, лимон – 25 cl)",
              "price": "6 €"
            }
          ]
        },
        {
          "id": "mocktails",
          "title": "Mocktails",
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
      "label": "Кофе",
      "sections": [
        {
          "id": "iced-coffee",
          "title": "Холодный кофе",
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
              "name": "Фраппе",
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
          "title": "Горячие напитки",
          "layout": "split-items",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Эспрессо",
              "price": "2 €"
            },
            {
              "name": "Декаф",
              "price": "2 €"
            },
            {
              "name": "Эспрессо макиато",
              "price": "2,50 €"
            },
            {
              "name": "Американо",
              "price": "2,50 €"
            },
            {
              "name": "Капучино",
              "price": "3,80 €"
            },
            {
              "name": "Кофе со сливками",
              "price": "3,50 €"
            },
            {
              "name": "Двойной эспрессо",
              "price": "4 €"
            },
            {
              "name": "Венский кофе",
              "price": "4,50 €"
            },
            {
              "name": "Чай, травяной настой",
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
              "name": "Горячий шоколад",
              "price": "4 €"
            },
            {
              "name": "Чай, травяной настой",
              "price": "4 €"
            },
            {
              "name": "Венский шоколад",
              "price": "5 €"
            },
            {
              "name": "Ванильный латте",
              "price": "5 €"
            },
            {
              "name": "Карамельный латте",
              "price": "5 €"
            },
            {
              "name": "Латте с фундуком",
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
          "title": "Добавки",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Растительное молоко",
              "description": "Овсяное",
              "price": "+0,90 €"
            },
            {
              "name": "Сироп",
              "description": "Ваниль, карамель или фундук",
              "price": "+0,50 €"
            },
            {
              "name": "Взбитые сливки",
              "price": "+0,50 €"
            }
          ]
        }
      ]
    },
    {
      "id": "desserts",
      "label": "Десерты",
      "sections": [
        {
          "id": "dessert-menu",
          "title": "Десерты",
          "items": [
            {
              "name": "Сырная тарелка",
              "price": "9 €"
            },
            {
              "name": "Шоколадный мусс",
              "price": "8 €"
            },
            {
              "name": "Тирамису дня",
              "price": "8 €"
            },
            {
              "name": "Paris-Antibes",
              "price": "11 €"
            },
            {
              "name": "Tropézienne",
              "price": "11 €"
            },
            {
              "name": "Пирожное дня",
              "price": "11 €"
            },
            {
              "name": "Тарт с сезонными фруктами",
              "price": "12 €"
            }
          ]
        },
        {
          "id": "ice-cream",
          "title": "Мороженое",
          "items": [
            {
              "kind": "section",
              "label": "Ремесленное мороженое"
            },
            {
              "name": "Вкусы",
              "description": "Кофе, шоколад, ваниль, мята, кокос, лимон, клубника, манго, маракуйя, малина, карамель, фьор ди латте, ананас, фисташка, бананерелла, базилик"
            },
            {
              "name": "1 шарик",
              "price": "3 €"
            },
            {
              "name": "2 шарика",
              "price": "5,50 €"
            },
            {
              "name": "3 шарика",
              "price": "5,50 €"
            },
            {
              "kind": "section",
              "label": "Мороженые десерты"
            },
            {
              "name": "Dame Blanche",
              "description": "Ванильное мороженое, шоколадный соус, взбитые сливки",
              "price": "9,50 €"
            },
            {
              "name": "Кофейный или шоколадный Liégeois",
              "description": "Ванильное мороженое, кофейное или шоколадное мороженое, кофе или горячий шоколад, взбитые сливки",
              "price": "10 €"
            },
            {
              "name": "Экзотический десерт",
              "description": "Кокосовое, манговое и маракуйевое мороженое, взбитые сливки",
              "price": "10,50 €"
            },
            {
              "name": "Десерт с красными ягодами",
              "description": "Клубничное и малиновое мороженое, соус из красных ягод, взбитые сливки",
              "price": "11 €"
            },
            {
              "name": "Coupe Colonel",
              "description": "Лимонное мороженое, vodka, взбитые сливки",
              "price": "11 €"
            },
            {
              "name": "After Eight",
              "description": "Шоколадное мороженое, мята, Get 27, шоколад, взбитые сливки",
              "price": "11 €"
            },
            {
              "name": "Milk shake",
              "description": "Мороженое + молоко (33 cl): малина, ананас, клубника, банан, шоколад, ваниль, манго, маракуйя, кокос, лимон",
              "price": "7 €"
            }
          ]
        }
      ]
    }
  ],
  "winePriceColumnLabels": {
    "glass": "Бокал",
    "50cl": "50 cl",
    "75cl": "75 cl"
  }
};
