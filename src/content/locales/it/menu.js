export const menuPage = {
  "eyebrow": "Menu",
  "title": "Il menu di La Table",
  "text": "Una lettura più chiara della carta, pensata per distinguere subito cucina, pizze, bar, vini, soft, caffè e dolci.",
  "note": "Passa di revisione localizzata del menu.",
  "filters": {
    "buttonLabel": "Preferenze alimentari",
    "emptyLabel": "Nessun piatto corrisponde a queste preferenze.",
    "clearLabel": "Reimposta",
    "filterableTabs": [
      "cuisine",
      "pizzas"
    ],
    "options": [
      {
        "id": "vegetarian",
        "label": "Vegetariano"
      },
      {
        "id": "vegan",
        "label": "Vegano"
      },
      {
        "id": "no-pork",
        "label": "Senza maiale"
      },
      {
        "id": "no-fish",
        "label": "Senza pesce"
      },
      {
        "id": "no-seafood",
        "label": "Senza frutti di mare"
      }
    ],
    "optionLabels": {
      "vegetarian": "Vegetariano",
      "vegan": "Vegano",
      "no-pork": "Senza maiale",
      "no-fish": "Senza pesce",
      "no-seafood": "Senza frutti di mare"
    }
  },
  "tabs": [
    {
      "id": "cuisine",
      "label": "Cucina",
      "sections": [
        {
          "id": "sharing",
          "title": "Da condividere",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Peperoni marinati",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Panisse, salsa aioli",
              "price": "9 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Caviale di melanzane al fuoco di legna",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Prosciutto di Parma",
              "price": "11 €",
              "filters": [
                "pork"
              ]
            }
          ]
        },
        {
          "id": "starters",
          "title": "Antipasti",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Carciofo in insalata",
              "price": "17 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Burrata, pomodori antichi",
              "price": "19 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Quinoa con i condimenti del giorno",
              "price": "19 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Caesar di pollo impanato",
              "price": "18 €"
            },
            {
              "name": "Ceviche di ricciola",
              "price": "18 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Tonno scottato, insalata in stile nizzardo",
              "price": "20 €",
              "filters": [
                "fish"
              ]
            }
          ]
        },
        {
          "id": "mains",
          "title": "Piatti",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Cozze alla marinara",
              "price": "18 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Sarde arrostite, salsa vierge di stagione",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Gamberoni selvatici saltati all’aglio",
              "price": "28 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Orata reale intera arrostita al forno",
              "price": "32 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Tartare di manzo all’italiana",
              "price": "19 €"
            },
            {
              "name": "Burger goloso con crema di cheddar",
              "price": "19 €"
            },
            {
              "name": "Guancia di manzo confit",
              "price": "23 €"
            },
            {
              "name": "Costine di maiale marinate",
              "price": "23 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Tagliata di manzo",
              "price": "25 €"
            },
            {
              "name": "Suprema di pollo arrosto, salsa ai porcini",
              "price": "25 €"
            },
            {
              "name": "Scaloppina di vitello alla milanese",
              "price": "26 €"
            },
            {
              "name": "Linguine al pesto",
              "price": "20 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Rigatoni all’arrabbiata e stracciatella",
              "price": "23 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Linguine alle vongole",
              "price": "25 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Rigatoni alla crema di tartufo",
              "price": "32 €",
              "filters": [
                "vegetarian"
              ]
            }
          ]
        },
        {
          "id": "extras",
          "title": "Contorni",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Patatine fresche",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Polenta cremosa",
              "price": "5 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Misticanza nizzarda",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Verdure del sole",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "kids",
          "title": "Menu bambini",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Menu bambini",
              "description": "Sciroppo con acqua, tenders con patatine o pasta al pomodoro, pallina di gelato",
              "price": "12 €"
            }
          ]
        }
      ]
    },
    {
      "id": "pizzas",
      "label": "Pizze",
      "sections": [
        {
          "id": "wood-fired-pizzas",
          "title": "Pizze al fuoco di legna",
          "layout": "split-items",
          "items": [
            {
              "name": "Margherita",
              "description": "Salsa di pomodoro, mozzarella, basilico",
              "price": "14 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Regina",
              "description": "Salsa di pomodoro, mozzarella, prosciutto cotto, funghi",
              "price": "17 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "4 formaggi",
              "description": "Salsa di pomodoro, mozzarella, reblochon, roquefort, caprino",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Cannibale",
              "description": "Salsa di pomodoro, mozzarella, cipolle confit, carne macinata, uovo",
              "price": "18 €"
            },
            {
              "name": "Napoletana",
              "description": "Salsa di pomodoro, mozzarella, acciughe, capperi",
              "price": "16 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "4 stagioni",
              "description": "Salsa di pomodoro, mozzarella, funghi, melanzane, pomodorini, carciofi",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Provenzale",
              "description": "Salsa di pomodoro, mozzarella, funghi, melanzane, cipolle confit, peperoni",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Spagnola",
              "description": "Salsa di pomodoro, mozzarella, spianata, peperoni",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Mediterranea",
              "description": "Salsa di pomodoro, mozzarella, cipolle confit, capperi, tonno",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Parma",
              "description": "Salsa di pomodoro, mozzarella, pomodorini, prosciutto crudo, burrata",
              "price": "22 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Norvegese",
              "description": "Base bianca, mozzarella, salmone marinato, pomodorini",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Capra e miele",
              "description": "Base bianca, mozzarella, formaggio di capra, noci, miele",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Calzone",
              "description": "Salsa di pomodoro, mozzarella, funghi, prosciutto cotto, uovo",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Truffala",
              "description": "Crema di tartufo, mozzarella, prosciutto crudo, burrata",
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
              "description": "Aperol 5 cl, prosecco 10 cl, acqua frizzante, arancia",
              "price": "10 €"
            },
            {
              "name": "Hugo Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, acqua frizzante, limone, menta",
              "price": "12 €"
            },
            {
              "name": "Limoncello Spritz",
              "description": "Limoncello 5 cl, prosecco 10 cl, acqua frizzante, limone",
              "price": "10 €"
            },
            {
              "name": "Amaretto Spritz",
              "description": "Amaretto 5 cl, prosecco 10 cl, acqua frizzante, arancia",
              "price": "11 €"
            },
            {
              "name": "St-Germain Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, acqua frizzante, limone",
              "price": "12 €"
            },
            {
              "name": "Martini Spritz",
              "description": "Martini bianco 5 cl, prosecco 10 cl, acqua frizzante, limone",
              "price": "10 €"
            },
            {
              "name": "Campari Spritz",
              "description": "Campari 5 cl, prosecco 10 cl, acqua frizzante, arancia",
              "price": "12 €"
            },
            {
              "name": "Spritz ai frutti rossi",
              "description": "Liquore ai frutti rossi 5 cl, prosecco 10 cl, acqua frizzante",
              "price": "12 €"
            },
            {
              "name": "Rosa Spritz",
              "description": "Sarti 5 cl, prosecco 10 cl, acqua frizzante, arancia",
              "price": "11 €"
            },
            {
              "name": "Spritz al carciofo",
              "description": "Cynar 5 cl, prosecco 10 cl, acqua frizzante",
              "price": "12 €"
            }
          ]
        },
        {
          "id": "cocktails",
          "title": "Cocktail",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Negroni",
              "description": "Gin 3 cl, Campari 3 cl, vermouth rosso 3 cl",
              "price": "12 €"
            },
            {
              "name": "Sex on the Beach",
              "description": "Vodka 5 cl, succo d’arancia, succo di mirtillo rosso, liquore alla pesca",
              "price": "12 €"
            },
            {
              "name": "Mojito",
              "description": "Rum 5 cl, angostura, zucchero di canna, lime, menta, acqua frizzante",
              "price": "12 €"
            },
            {
              "name": "Mojito fragola o Mojito passion fruit",
              "description": "Rum 5 cl, angostura, zucchero di canna, lime, menta, acqua frizzante, purea di fragola o passion fruit",
              "price": "13 €"
            },
            {
              "name": "Paloma",
              "description": "Tequila 5 cl, succo di lime, succo di pompelmo, tonic",
              "price": "13 €"
            },
            {
              "name": "Cosmopolitan",
              "description": "Vodka 5 cl, triple sec, succo di mirtillo rosso, lime",
              "price": "13 €"
            },
            {
              "name": "Mule",
              "description": "Moscow, London, Mexican, Kentucky o Caribbean 5 cl",
              "price": "13 €"
            },
            {
              "name": "Sour",
              "description": "Amaretto, vodka, gin, rum o whisky 5 cl",
              "price": "13 €"
            },
            {
              "name": "Pornstar",
              "description": "Vodka 5 cl, limone, vaniglia, succo di passion fruit e prosecco 5 cl",
              "price": "14 €"
            },
            {
              "name": "Pina Colada",
              "description": "Rum 5 cl, latte di cocco, succo d’ananas",
              "price": "14 €"
            },
            {
              "name": "Daiquiri passion fruit o fragola",
              "description": "Rum 5 cl, zucchero di canna, lime, purea di passion fruit o fragola",
              "price": "14 €"
            },
            {
              "name": "Grand Margarita",
              "description": "Grand Marnier 2 cl, tequila 3 cl, lime, sciroppo d’agave",
              "price": "15 €"
            },
            {
              "name": "Espresso Martini",
              "description": "Vodka 5 cl, liquore al caffè 2 cl, espresso, sciroppo di vaniglia",
              "price": "15 €"
            }
          ]
        },
        {
          "id": "draught-beers",
          "title": "Birre alla spina",
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
          "title": "Birre in bottiglia (33 cl)",
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
          "title": "Aperitivi",
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
              "name": "Calice di Champagne (14 cl)",
              "price": "10 €"
            },
            {
              "name": "Champagne con ghiaccio (16 cl)",
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
          "title": "Distillati",
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
              "name": "Chivas 12 anni",
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
              "name": "Bacardi Bianco",
              "price": "16 €"
            },
            {
              "kind": "section",
              "label": "Digestivi (4 cl)"
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
              "label": "Accompagnamenti"
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
      "label": "Vini",
      "sections": [
        {
          "id": "french-wines",
          "title": "Vini di Francia",
          "desktopColumn": 0,
          "items": [
            {
              "kind": "section",
              "label": "Vini bianchi"
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
              "label": "Vini rosati"
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
              "label": "Vini rossi"
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
          "title": "Vini del mondo",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Rossi — Italia"
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
              "label": "Rossi — Spagna"
            },
            {
              "name": "Riscal 1860 | Castilla y Leon AOC",
              "price": "75 cl 32 €"
            },
            {
              "kind": "section",
              "label": "Rossi — Argentina"
            },
            {
              "name": "Clos de los Siete | Valle de Uco – Mendoza",
              "price": "75 cl 39 €"
            },
            {
              "kind": "section",
              "label": "Rossi — Stati Uniti"
            },
            {
              "name": "Buena Vista La Petite Syrah | Vin de Californie",
              "price": "75 cl 38 €"
            },
            {
              "kind": "section",
              "label": "Rossi — Cile"
            },
            {
              "name": "Mapu | Valle del Maule",
              "price": "75 cl 30 €"
            },
            {
              "kind": "section",
              "label": "Bianchi — Italia"
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
              "label": "Bianchi — Nuova Zelanda"
            },
            {
              "name": "Fusional Sauvignon Blanc | Marlborough",
              "price": "75 cl 35 €"
            }
          ]
        },
        {
          "id": "premium-cellar",
          "title": "Cantina premium",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Vini bianchi"
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
              "label": "Vini rossi"
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
          "title": "Champagne & bollicine",
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
      "label": "Soft",
      "sections": [
        {
          "id": "cold-drinks",
          "title": "Bevande fresche",
          "items": [
            {
              "name": "Vittel e San Pellegrino 50 cl",
              "price": "4 €"
            },
            {
              "name": "Vittel e San Pellegrino 100 cl",
              "price": "7 €"
            },
            {
              "name": "Sciroppo con acqua",
              "price": "3 €"
            },
            {
              "name": "Coca, Coca Zero, Schweppes Tonic & Agrumi, Fuze Tea, Sprite, Perrier, Orangina (33 cl)",
              "price": "5 €"
            },
            {
              "name": "Red Bull (25 cl)",
              "price": "6 €"
            },
            {
              "name": "Succhi di frutta (ACE, arancia, pomodoro, mela, ananas – 25 cl)",
              "price": "5 €"
            },
            {
              "name": "Tè freddo pesca o lampone",
              "price": "6 €"
            },
            {
              "name": "Succhi spremuti (arancia, limone – 25 cl)",
              "price": "6 €"
            }
          ]
        },
        {
          "id": "mocktails",
          "title": "Mocktail",
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
      "label": "Caffè",
      "sections": [
        {
          "id": "iced-coffee",
          "title": "Caffè freddi",
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
              "name": "Caffè frappé",
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
          "title": "Bevande calde",
          "layout": "split-items",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Caffè espresso",
              "price": "2 €"
            },
            {
              "name": "Decaffeinato",
              "price": "2 €"
            },
            {
              "name": "Caffè macchiato",
              "price": "2,50 €"
            },
            {
              "name": "Caffè americano",
              "price": "2,50 €"
            },
            {
              "name": "Cappuccino",
              "price": "3,80 €"
            },
            {
              "name": "Caffè con crema",
              "price": "3,50 €"
            },
            {
              "name": "Caffè doppio",
              "price": "4 €"
            },
            {
              "name": "Caffè viennese",
              "price": "4,50 €"
            },
            {
              "name": "Tè, infuso",
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
              "name": "Cioccolata calda",
              "price": "4 €"
            },
            {
              "name": "Tè, infuso",
              "price": "4 €"
            },
            {
              "name": "Cioccolata viennese",
              "price": "5 €"
            },
            {
              "name": "Latte vaniglia",
              "price": "5 €"
            },
            {
              "name": "Latte caramello",
              "price": "5 €"
            },
            {
              "name": "Latte nocciola",
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
          "title": "Supplementi",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Latte vegetale",
              "description": "Avena",
              "price": "+0,90 €"
            },
            {
              "name": "Sciroppo",
              "description": "Vaniglia, caramello o nocciola",
              "price": "+0,50 €"
            },
            {
              "name": "Panna montata",
              "price": "+0,50 €"
            }
          ]
        }
      ]
    },
    {
      "id": "desserts",
      "label": "Dolci",
      "sections": [
        {
          "id": "dessert-menu",
          "title": "Dolci",
          "items": [
            {
              "name": "Piatto di formaggi",
              "price": "9 €"
            },
            {
              "name": "Mousse al cioccolato",
              "price": "8 €"
            },
            {
              "name": "Tiramisù del giorno",
              "price": "8 €"
            },
            {
              "kind": "section",
              "label": "Dolci del Palais de la Friandise"
            },
            {
              "name": "Dolci del giorno",
              "price": "11 €"
            }
          ]
        },
        {
          "id": "ice-cream",
          "title": "Gelati",
          "items": [
            {
              "kind": "section",
              "label": "Gelati artigianali"
            },
            {
              "name": "Gusti",
              "description": "Caffè, cioccolato, vaniglia, menta, cocco, limone, fragola, mango, passion fruit, lampone, caramello, fior di latte, ananas, pistacchio, bananerella, basilico"
            },
            {
              "name": "1 pallina",
              "price": "3 €"
            },
            {
              "name": "2 palline",
              "price": "5,50 €"
            },
            {
              "name": "3 palline",
              "price": "8,50 €"
            },
            {
              "kind": "section",
              "label": "Coppe gelato"
            },
            {
              "name": "Dame Blanche",
              "description": "Gelato alla vaniglia, salsa al cioccolato, panna montata",
              "price": "9,50 €"
            },
            {
              "name": "Caffè o cioccolato liégeois",
              "description": "Gelato alla vaniglia, gelato al caffè o al cioccolato, caffè o cioccolata calda, panna montata",
              "price": "10 €"
            },
            {
              "name": "Coppa esotica",
              "description": "Gelato al cocco, mango e passion fruit, panna montata",
              "price": "10,50 €"
            },
            {
              "name": "Coppa frutti rossi",
              "description": "Gelato alla fragola e al lampone, coulis ai frutti rossi, panna montata",
              "price": "11 €"
            },
            {
              "name": "Coppa Colonel",
              "description": "Gelato al limone, vodka, panna montata",
              "price": "11 €"
            },
            {
              "name": "Coppa After Eight",
              "description": "Gelato al cioccolato, menta, Get 27, cioccolato, panna montata",
              "price": "11 €"
            },
            {
              "name": "Milk shake",
              "description": "Gelato + latte (33 cl): lampone, ananas, fragola, banana, cioccolato, vaniglia, mango, passion fruit, cocco, limone",
              "price": "7 €"
            }
          ]
        }
      ]
    }
  ],
  "winePriceColumnLabels": {
    "glass": "Calice",
    "50cl": "50 cl",
    "75cl": "75 cl"
  }
};
