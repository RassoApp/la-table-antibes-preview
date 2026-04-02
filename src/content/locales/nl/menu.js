export const menuPage = {
  "eyebrow": "Menu",
  "title": "De kaart van La Table",
  "text": "Een duidelijkere lezing van de kaart, zodat keuken, pizza’s, bar, wijnen, softs, koffie en desserts meteen helder zijn.",
  "note": "Gelokaliseerde menucontrole.",
  "filters": {
    "buttonLabel": "Voedingsvoorkeuren",
    "emptyLabel": "Geen enkel gerecht past bij deze voorkeuren.",
    "clearLabel": "Reset",
    "filterableTabs": [
      "cuisine",
      "pizzas"
    ],
    "options": [
      {
        "id": "vegetarian",
        "label": "Vegetarisch"
      },
      {
        "id": "vegan",
        "label": "Vegan"
      },
      {
        "id": "no-pork",
        "label": "Zonder varkensvlees"
      },
      {
        "id": "no-fish",
        "label": "Zonder vis"
      },
      {
        "id": "no-seafood",
        "label": "Zonder zeevruchten"
      }
    ],
    "optionLabels": {
      "vegetarian": "Vegetarisch",
      "vegan": "Vegan",
      "no-pork": "Zonder varkensvlees",
      "no-fish": "Zonder vis",
      "no-seafood": "Zonder zeevruchten"
    }
  },
  "tabs": [
    {
      "id": "cuisine",
      "label": "Keuken",
      "sections": [
        {
          "id": "sharing",
          "title": "Om te delen",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Auberginekaviaar uit de houtoven",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Gemarineerde paprika’s, pizzabrood",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Panisses, aiolisaus",
              "price": "9 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Parmaham",
              "price": "11 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Socca van chef « Yann »",
              "price": "7 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "starters",
          "title": "Voorgerechten",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Burrata, oude tomatenrassen",
              "price": "19 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Caesar met krokante kip",
              "price": "18 €"
            },
            {
              "name": "Artisjoksalade",
              "price": "17 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Ceviche van seriola",
              "price": "18 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Aangebakken tonijn in niçoise-stijl",
              "price": "20 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Quinoa met de garnituren van de dag",
              "price": "19 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "mains",
          "title": "Hoofdgerechten",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Gemarineerde spareribs van varken",
              "price": "23 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Tagliata van rund",
              "price": "25 €"
            },
            {
              "name": "Rundertartaar op Italiaanse wijze",
              "price": "19 €"
            },
            {
              "name": "Gourmetburger met cheddarcrème",
              "price": "19 €"
            },
            {
              "name": "Gegaarde runderwang",
              "price": "23 €"
            },
            {
              "name": "Gebraden kipfilet met eekhoorntjessaus",
              "price": "25 €"
            },
            {
              "name": "Linguini met pesto",
              "price": "20 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Kalfsescalope alla milanese",
              "price": "26 €"
            },
            {
              "name": "Rigatoni all’arrabbiata met stracciatella",
              "price": "23 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Linguini alle vongole",
              "price": "25 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Rigatoni met truffelcrème",
              "price": "32 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Mosselen marinière",
              "price": "18 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Gegrilde sardines met seizoens-vierge",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Wilde gamba’s met knoflook gebakken",
              "price": "28 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Hele goudbrasem uit de oven",
              "price": "32 €",
              "filters": [
                "fish"
              ]
            }
          ]
        },
        {
          "id": "extras",
          "title": "Bijgerechten",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Verse friet",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Romige polenta",
              "price": "5 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Niçoise mesclun",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Zonnegroenten",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "kids",
          "title": "Kindermenu",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Kindermenu",
              "description": "Siroop met water, tenders met friet of pasta met tomatensaus, bolletje ijs",
              "price": "12 €"
            }
          ]
        }
      ]
    },
    {
      "id": "pizzas",
      "label": "Pizza's",
      "sections": [
        {
          "id": "wood-fired-pizzas",
          "title": "Pizza's uit de houtoven",
          "layout": "split-items",
          "items": [
            {
              "name": "Margherita",
              "description": "Tomatensaus, mozzarella, basilicum",
              "price": "14 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Reine",
              "description": "Tomatensaus, mozzarella, gekookte ham, champignons",
              "price": "17 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "4 kazen",
              "description": "Tomatensaus, mozzarella, reblochon, roquefort, geitenkaas",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Cannibale",
              "description": "Tomatensaus, mozzarella, gekonfijte ui, gehakt, ei",
              "price": "18 €"
            },
            {
              "name": "Napolitaine",
              "description": "Tomatensaus, mozzarella, ansjovis, kappertjes",
              "price": "16 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "4 seizoenen",
              "description": "Tomatensaus, mozzarella, champignons, aubergine, kerstomaatjes, artisjokken",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Provençaalse",
              "description": "Tomatensaus, mozzarella, champignons, aubergine, gekonfijte ui, paprika",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Spaanse",
              "description": "Tomatensaus, mozzarella, spianata, paprika",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Méditerranée",
              "description": "Tomatensaus, mozzarella, gekonfijte ui, kappertjes, tonijn",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Parma",
              "description": "Tomatensaus, mozzarella, kerstomaatjes, rauwe ham, burrata",
              "price": "22 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Noorse",
              "description": "Witte basis, mozzarella, gemarineerde zalm, kerstomaatjes",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Geitenkaas-honing",
              "description": "Witte basis, mozzarella, geitenkaas, walnoten, honing",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Calzone",
              "description": "Tomatensaus, mozzarella, champignons, gekookte ham, ei",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Truffala",
              "description": "Truffelcrème, mozzarella, rauwe ham, burrata",
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
      "label": "Bar",
      "sections": [
        {
          "id": "spritz",
          "title": "Spritz",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Aperol Spritz",
              "description": "Aperol 5 cl, prosecco 10 cl, bruiswater, sinaasappel",
              "price": "10 €"
            },
            {
              "name": "Hugo Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, bruiswater, citroen, munt",
              "price": "12 €"
            },
            {
              "name": "Limoncello Spritz",
              "description": "Limoncello 5 cl, prosecco 10 cl, bruiswater, citroen",
              "price": "10 €"
            },
            {
              "name": "Amaretto Spritz",
              "description": "Amaretto 5 cl, prosecco 10 cl, bruiswater, sinaasappel",
              "price": "11 €"
            },
            {
              "name": "St-Germain Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, bruiswater, citroen",
              "price": "12 €"
            },
            {
              "name": "Martini Spritz",
              "description": "Witte Martini 5 cl, prosecco 10 cl, bruiswater, citroen",
              "price": "10 €"
            },
            {
              "name": "Campari Spritz",
              "description": "Campari 5 cl, prosecco 10 cl, bruiswater, sinaasappel",
              "price": "12 €"
            },
            {
              "name": "Spritz met rood fruit",
              "description": "Likeur van rood fruit 5 cl, prosecco 10 cl, bruiswater",
              "price": "12 €"
            },
            {
              "name": "Rosa Spritz",
              "description": "Sarti 5 cl, prosecco 10 cl, bruiswater, sinaasappel",
              "price": "11 €"
            },
            {
              "name": "Artisjok-spritz",
              "description": "Cynar 5 cl, prosecco 10 cl, bruiswater",
              "price": "12 €"
            }
          ]
        },
        {
          "id": "cocktails",
          "title": "Cocktails",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Negroni",
              "description": "Gin 3 cl, Campari 3 cl, rode vermout 3 cl",
              "price": "12 €"
            },
            {
              "name": "Sex on the Beach",
              "description": "Vodka 5 cl, sinaasappelsap, cranberrysap, perziklikeur",
              "price": "12 €"
            },
            {
              "name": "Mojito",
              "description": "Rum 5 cl, angostura, bruine suiker, limoen, munt, bruiswater",
              "price": "12 €"
            },
            {
              "name": "Aardbei-mojito of passievrucht-mojito",
              "description": "Rum 5 cl, angostura, bruine suiker, limoen, munt, bruiswater, aardbei- of passievruchtpuree",
              "price": "13 €"
            },
            {
              "name": "Paloma",
              "description": "Tequila 5 cl, limoensap, pompelmoessap, tonic",
              "price": "13 €"
            },
            {
              "name": "Cosmopolitan",
              "description": "Vodka 5 cl, triple sec, cranberrysap, limoen",
              "price": "13 €"
            },
            {
              "name": "Mule",
              "description": "Moscow, London, Mexican, Kentucky of Caribbean 5 cl",
              "price": "13 €"
            },
            {
              "name": "Sour",
              "description": "Amaretto, vodka, gin, rum of whisky 5 cl",
              "price": "13 €"
            },
            {
              "name": "Pornstar",
              "description": "Vodka 5 cl, citroen, vanille, passievruchtsap en prosecco 5 cl",
              "price": "14 €"
            },
            {
              "name": "Pina Colada",
              "description": "Rum 5 cl, kokosmelk, ananassap",
              "price": "14 €"
            },
            {
              "name": "Passievrucht- of aardbei-daiquiri",
              "description": "Rum 5 cl, rietsuiker, limoen, passievrucht- of aardbeipuree",
              "price": "14 €"
            },
            {
              "name": "Grand Margarita",
              "description": "Grand Marnier 2 cl, tequila 3 cl, limoen, agavesiroop",
              "price": "15 €"
            },
            {
              "name": "Espresso Martini",
              "description": "Vodka 5 cl, koffielikeur 2 cl, espresso, vanillesiroop",
              "price": "15 €"
            }
          ]
        },
        {
          "id": "aperitifs",
          "title": "Aperitieven",
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
              "name": "Glas Champagne (14 cl)",
              "price": "10 €"
            },
            {
              "name": "Champagne met ijs (16 cl)",
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
          "title": "Sterke drank",
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
              "name": "Chivas 12 jaar",
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
              "label": "Digestieven (4 cl)"
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
              "name": "Bailey's",
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
              "label": "Mixers"
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
      "label": "Wijnen",
      "sections": [
        {
          "id": "french-wines",
          "title": "Wijnen uit Frankrijk",
          "desktopColumn": 0,
          "items": [
            {
              "kind": "section",
              "label": "Witte wijnen"
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
              "label": "Roséwijnen"
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
              "label": "Rode wijnen"
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
          "title": "Wijnen van de wereld",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Rood — Italië"
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
              "label": "Rood — Spanje"
            },
            {
              "name": "Riscal 1860 | Castilla y Leon AOC",
              "price": "75 cl 32 €"
            },
            {
              "kind": "section",
              "label": "Rood — Argentinië"
            },
            {
              "name": "Clos de los Siete | Valle de Uco – Mendoza",
              "price": "75 cl 39 €"
            },
            {
              "kind": "section",
              "label": "Rood — Verenigde Staten"
            },
            {
              "name": "Buena Vista La Petite Syrah | Vin de Californie",
              "price": "75 cl 38 €"
            },
            {
              "kind": "section",
              "label": "Rood — Chili"
            },
            {
              "name": "Mapu | Valle del Maule",
              "price": "75 cl 30 €"
            },
            {
              "kind": "section",
              "label": "Wit — Italië"
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
              "label": "Wit — Nieuw-Zeeland"
            },
            {
              "name": "Fusional Sauvignon Blanc | Marlborough",
              "price": "75 cl 35 €"
            }
          ]
        },
        {
          "id": "premium-cellar",
          "title": "Premiumkelder",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Witte wijnen"
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
              "label": "Rode wijnen"
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
          "title": "Champagne & bubbels",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Prosecco | Sensi",
              "price": "Verre 6 € • 75 cl 35 €"
            },
            {
              "kind": "section",
              "label": "Champagne"
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
      "label": "Softs",
      "sections": [
        {
          "id": "cold-drinks",
          "title": "Frisse dranken",
          "items": [
            {
              "name": "Vittel en San Pellegrino 50 cl",
              "price": "4 €"
            },
            {
              "name": "Vittel en San Pellegrino 100 cl",
              "price": "7 €"
            },
            {
              "name": "Siroop met water",
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
              "name": "Vruchtensappen (ACE, sinaasappel, tomaat, appel, ananas – 25 cl)",
              "price": "5 €"
            },
            {
              "name": "IJsthee perzik of framboos",
              "price": "6 €"
            },
            {
              "name": "Versgeperste sappen (sinaasappel, citroen – 25 cl)",
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
      "label": "Koffie",
      "sections": [
        {
          "id": "iced-coffee",
          "title": "Ijskoffies",
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
              "name": "Frappékoffie",
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
          "title": "Warme dranken",
          "layout": "split-items",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Espresso",
              "price": "2 €"
            },
            {
              "name": "Decaf",
              "price": "2 €"
            },
            {
              "name": "Espresso macchiato",
              "price": "2,50 €"
            },
            {
              "name": "Americano",
              "price": "2,50 €"
            },
            {
              "name": "Cappuccino",
              "price": "3,80 €"
            },
            {
              "name": "Koffie verkeerd",
              "price": "3,50 €"
            },
            {
              "name": "Dubbele espresso",
              "price": "4 €"
            },
            {
              "name": "Weense koffie",
              "price": "4,50 €"
            },
            {
              "name": "Thee, infusie",
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
              "name": "Warme chocolademelk",
              "price": "4 €"
            },
            {
              "name": "Thee, infusie",
              "price": "4 €"
            },
            {
              "name": "Weense chocolademelk",
              "price": "5 €"
            },
            {
              "name": "Vanille latte",
              "price": "5 €"
            },
            {
              "name": "Karamel latte",
              "price": "5 €"
            },
            {
              "name": "Hazelnoot latte",
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
          "title": "Extra’s",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Plantaardige melk",
              "description": "Haver",
              "price": "+0,90 €"
            },
            {
              "name": "Siroop",
              "description": "Vanille, karamel of hazelnoot",
              "price": "+0,50 €"
            },
            {
              "name": "Slagroom",
              "price": "+0,50 €"
            }
          ]
        }
      ]
    },
    {
      "id": "desserts",
      "label": "Desserts",
      "sections": [
        {
          "id": "dessert-menu",
          "title": "Desserts",
          "items": [
            {
              "name": "Kaasplank",
              "price": "9 €"
            },
            {
              "name": "Chocolademousse",
              "price": "8 €"
            },
            {
              "name": "Tiramisu van de dag",
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
              "name": "Gebak van de dag",
              "price": "11 €"
            },
            {
              "name": "Taart met seizoensfruit",
              "price": "12 €"
            }
          ]
        },
        {
          "id": "ice-cream",
          "title": "IJs",
          "items": [
            {
              "kind": "section",
              "label": "Ambachtelijk ijs"
            },
            {
              "name": "Smaken",
              "description": "Koffie, chocolade, vanille, munt, kokos, citroen, aardbei, mango, passievrucht, framboos, karamel, fior di latte, ananas, pistache, bananerella, basilicum"
            },
            {
              "name": "1 bol",
              "price": "3 €"
            },
            {
              "name": "2 bollen",
              "price": "5,50 €"
            },
            {
              "name": "3 bollen",
              "price": "5,50 €"
            },
            {
              "kind": "section",
              "label": "IJscoupes"
            },
            {
              "name": "Dame Blanche",
              "description": "Vanille-ijs, chocoladesaus, slagroom",
              "price": "9,50 €"
            },
            {
              "name": "Koffie- of chocoladeliégeois",
              "description": "Vanille-ijs, koffie- of chocolade-ijs, koffie of warme chocolademelk, slagroom",
              "price": "10 €"
            },
            {
              "name": "Exotische coupe",
              "description": "Kokos-, mango- en passievruchtijs, slagroom",
              "price": "10,50 €"
            },
            {
              "name": "Rodevruchtencoupe",
              "description": "Aardbei- en frambozenijs, rodevruchtencoulis, slagroom",
              "price": "11 €"
            },
            {
              "name": "Colonel coupe",
              "description": "Citroenijs, vodka, slagroom",
              "price": "11 €"
            },
            {
              "name": "After Eight coupe",
              "description": "Chocolade-ijs, munt, Get 27, chocolade, slagroom",
              "price": "11 €"
            },
            {
              "name": "Milkshake",
              "description": "IJs + melk (33 cl): framboos, ananas, aardbei, banaan, chocolade, vanille, mango, passievrucht, kokos, citroen",
              "price": "7 €"
            }
          ]
        }
      ]
    }
  ],
  "winePriceColumnLabels": {
    "glass": "Glas",
    "50cl": "50 cl",
    "75cl": "75 cl"
  }
};
