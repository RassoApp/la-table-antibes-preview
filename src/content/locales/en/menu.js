export const menuPage = {
  "eyebrow": "Menu",
  "title": "La Table menu",
  "text": "A clearer reading of the menu, designed to separate the cuisine, pizzas, bar, wines, soft drinks, coffee, and desserts at a glance.",
  "note": "Localized menu review pass.",
  "filters": {
    "buttonLabel": "Dietary preferences",
    "emptyLabel": "No dishes match these preferences.",
    "clearLabel": "Reset",
    "filterableTabs": [
      "cuisine",
      "pizzas"
    ],
    "options": [
      {
        "id": "vegetarian",
        "label": "Vegetarian"
      },
      {
        "id": "vegan",
        "label": "Vegan"
      },
      {
        "id": "no-pork",
        "label": "No pork"
      },
      {
        "id": "no-fish",
        "label": "No fish"
      },
      {
        "id": "no-seafood",
        "label": "No seafood"
      }
    ],
    "optionLabels": {
      "vegetarian": "Vegetarian",
      "vegan": "Vegan",
      "no-pork": "No pork",
      "no-fish": "No fish",
      "no-seafood": "No seafood"
    }
  },
  "tabs": [
    {
      "id": "cuisine",
      "label": "Cuisine",
      "sections": [
        {
          "id": "sharing",
          "title": "To share",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Marinated peppers",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Panisses, aioli sauce",
              "price": "9 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Wood-fired eggplant caviar",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Parma ham",
              "price": "11 €",
              "filters": [
                "pork"
              ]
            }
          ]
        },
        {
          "id": "starters",
          "title": "Starters",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Artichoke salad",
              "price": "17 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Burrata, heritage tomatoes",
              "price": "19 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Quinoa with the day’s condiments",
              "price": "19 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Crispy chicken Caesar",
              "price": "18 €"
            },
            {
              "name": "Amberjack ceviche",
              "price": "18 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Seared tuna, Niçoise-style salad",
              "price": "20 €",
              "filters": [
                "fish"
              ]
            }
          ]
        },
        {
          "id": "mains",
          "title": "Main dishes",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Mussels marinière",
              "price": "18 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Roasted sardines, seasonal dressing",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Wild prawns pan-fried with garlic",
              "price": "28 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Whole sea bream roasted in the oven",
              "price": "32 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Italian-style beef tartare",
              "price": "19 €"
            },
            {
              "name": "Gourmet cheddar cream burger",
              "price": "19 €"
            },
            {
              "name": "Slow-braised beef cheek",
              "price": "23 €"
            },
            {
              "name": "Marinated pork ribs",
              "price": "23 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Beef tagliata",
              "price": "25 €"
            },
            {
              "name": "Roasted chicken supreme, cep sauce",
              "price": "25 €"
            },
            {
              "name": "Veal Milanese escalope",
              "price": "26 €"
            },
            {
              "name": "Linguine with pesto",
              "price": "20 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Rigatoni with arrabbiata sauce and stracciatella",
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
              "name": "Rigatoni with truffle cream",
              "price": "32 €",
              "filters": [
                "vegetarian"
              ]
            }
          ]
        },
        {
          "id": "extras",
          "title": "Sides",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Fresh fries",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Creamy polenta",
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
              "name": "Sun vegetables",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "kids",
          "title": "Kids' menu",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Kids' menu",
              "description": "Water syrup, chicken tenders with fries or pasta in tomato sauce, scoop of ice cream",
              "price": "12 €"
            }
          ]
        }
      ]
    },
    {
      "id": "pizzas",
      "label": "Pizzas",
      "sections": [
        {
          "id": "wood-fired-pizzas",
          "title": "Wood-fired pizzas",
          "layout": "split-items",
          "items": [
            {
              "name": "Margherita",
              "description": "Tomato sauce, mozzarella, basil",
              "price": "14 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Queen",
              "description": "Tomato sauce, mozzarella, cooked ham, mushrooms",
              "price": "17 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Four cheeses",
              "description": "Tomato sauce, mozzarella, reblochon, roquefort, goat cheese",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Cannibale",
              "description": "Tomato sauce, mozzarella, confit onions, minced meat, egg",
              "price": "18 €"
            },
            {
              "name": "Neapolitan",
              "description": "Tomato sauce, mozzarella, anchovies, capers",
              "price": "16 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Four seasons",
              "description": "Tomato sauce, mozzarella, mushrooms, eggplant, cherry tomatoes, artichokes",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Provençal",
              "description": "Tomato sauce, mozzarella, mushrooms, eggplant, confit onions, peppers",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Spanish",
              "description": "Tomato sauce, mozzarella, spianata, peppers",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Mediterranean",
              "description": "Tomato sauce, mozzarella, confit onions, capers, tuna",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Parma",
              "description": "Tomato sauce, mozzarella, cherry tomatoes, cured ham, burrata",
              "price": "22 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Norwegian",
              "description": "White base, mozzarella, marinated salmon, cherry tomatoes",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Goat cheese & honey",
              "description": "White base, mozzarella, goat cheese, walnuts, honey",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Calzone",
              "description": "Tomato sauce, mozzarella, mushrooms, cooked ham, egg",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Truffala",
              "description": "Truffle cream, mozzarella, cured ham, burrata",
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
              "description": "Aperol 5 cl, prosecco 10 cl, sparkling water, orange",
              "price": "10 €"
            },
            {
              "name": "Hugo Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, sparkling water, lemon, mint",
              "price": "12 €"
            },
            {
              "name": "Limoncello Spritz",
              "description": "Limoncello 5 cl, prosecco 10 cl, sparkling water, lemon",
              "price": "10 €"
            },
            {
              "name": "Amaretto Spritz",
              "description": "Amaretto 5 cl, prosecco 10 cl, sparkling water, orange",
              "price": "11 €"
            },
            {
              "name": "St-Germain Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, sparkling water, lemon",
              "price": "12 €"
            },
            {
              "name": "Martini Spritz",
              "description": "White Martini 5 cl, prosecco 10 cl, sparkling water, lemon",
              "price": "10 €"
            },
            {
              "name": "Campari Spritz",
              "description": "Campari 5 cl, prosecco 10 cl, sparkling water, orange",
              "price": "12 €"
            },
            {
              "name": "Red berry Spritz",
              "description": "Red berry liqueur 5 cl, prosecco 10 cl, sparkling water",
              "price": "12 €"
            },
            {
              "name": "Rosa Spritz",
              "description": "Sarti 5 cl, prosecco 10 cl, sparkling water, orange",
              "price": "11 €"
            },
            {
              "name": "Artichoke Spritz",
              "description": "Cynar 5 cl, prosecco 10 cl, sparkling water",
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
              "description": "Gin 3 cl, Campari 3 cl, red vermouth 3 cl",
              "price": "12 €"
            },
            {
              "name": "Sex on the Beach",
              "description": "Vodka 5 cl, orange juice, cranberry juice, peach liqueur",
              "price": "12 €"
            },
            {
              "name": "Mojito",
              "description": "Rum 5 cl, angostura, brown sugar, lime, mint, sparkling water",
              "price": "12 €"
            },
            {
              "name": "Strawberry Mojito or Passion Mojito",
              "description": "Rum 5 cl, angostura, brown sugar, lime, mint, sparkling water, strawberry or passion fruit purée",
              "price": "13 €"
            },
            {
              "name": "Paloma",
              "description": "Tequila 5 cl, lime juice, grapefruit juice, tonic",
              "price": "13 €"
            },
            {
              "name": "Cosmopolitan",
              "description": "Vodka 5 cl, triple sec, cranberry juice, lime",
              "price": "13 €"
            },
            {
              "name": "Mule",
              "description": "Moscow, London, Mexican, Kentucky, or Caribbean 5 cl",
              "price": "13 €"
            },
            {
              "name": "Sour",
              "description": "Amaretto, vodka, gin, rum, or whisky 5 cl",
              "price": "13 €"
            },
            {
              "name": "Pornstar",
              "description": "Vodka 5 cl, lemon, vanilla, passion fruit juice, and prosecco 5 cl",
              "price": "14 €"
            },
            {
              "name": "Pina Colada",
              "description": "Rum 5 cl, coconut milk, pineapple juice",
              "price": "14 €"
            },
            {
              "name": "Passion or Strawberry Daiquiri",
              "description": "Rum 5 cl, cane sugar, lime, passion fruit or strawberry purée",
              "price": "14 €"
            },
            {
              "name": "Grand Margarita",
              "description": "Grand Marnier 2 cl, tequila 3 cl, lime, agave syrup",
              "price": "15 €"
            },
            {
              "name": "Espresso Martini",
              "description": "Vodka 5 cl, coffee liqueur 2 cl, espresso, vanilla syrup",
              "price": "15 €"
            }
          ]
        },
        {
          "id": "draught-beers",
          "title": "Draft beers",
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
          "title": "Bottled beers (33 cl)",
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
          "title": "Aperitifs",
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
              "name": "Glass of Champagne (14 cl)",
              "price": "10 €"
            },
            {
              "name": "Champagne on ice (16 cl)",
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
          "title": "Spirits",
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
              "name": "Chivas 12 years",
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
              "name": "White Bacardi",
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
      "label": "Wines",
      "sections": [
        {
          "id": "french-wines",
          "title": "French wines",
          "desktopColumn": 0,
          "items": [
            {
              "kind": "section",
              "label": "White wines"
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
              "label": "Rosé wines"
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
              "label": "Red wines"
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
          "title": "World wines",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Reds — Italy"
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
              "label": "Reds — Spain"
            },
            {
              "name": "Riscal 1860 | Castilla y Leon AOC",
              "price": "75 cl 32 €"
            },
            {
              "kind": "section",
              "label": "Reds — Argentina"
            },
            {
              "name": "Clos de los Siete | Valle de Uco – Mendoza",
              "price": "75 cl 39 €"
            },
            {
              "kind": "section",
              "label": "Reds — United States"
            },
            {
              "name": "Buena Vista La Petite Syrah | Vin de Californie",
              "price": "75 cl 38 €"
            },
            {
              "kind": "section",
              "label": "Reds — Chile"
            },
            {
              "name": "Mapu | Valle del Maule",
              "price": "75 cl 30 €"
            },
            {
              "kind": "section",
              "label": "Whites — Italy"
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
              "label": "Whites — New Zealand"
            },
            {
              "name": "Fusional Sauvignon Blanc | Marlborough",
              "price": "75 cl 35 €"
            }
          ]
        },
        {
          "id": "premium-cellar",
          "title": "Premium cellar",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "White wines"
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
              "label": "Red wines"
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
          "title": "Champagnes & sparkling",
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
          "title": "Cold drinks",
          "items": [
            {
              "name": "Vittel and San Pellegrino 50 cl",
              "price": "4 €"
            },
            {
              "name": "Vittel and San Pellegrino 100 cl",
              "price": "7 €"
            },
            {
              "name": "Syrup with water",
              "price": "3 €"
            },
            {
              "name": "Coke, Coke Zero, Schweppes Tonic & Citrus, Fuze Tea, Sprite, Perrier, Orangina (33 cl)",
              "price": "5 €"
            },
            {
              "name": "Red Bull (25 cl)",
              "price": "6 €"
            },
            {
              "name": "Fruit juice (ACE, orange, tomato, apple, pineapple – 25 cl)",
              "price": "5 €"
            },
            {
              "name": "Peach or raspberry iced tea",
              "price": "6 €"
            },
            {
              "name": "Freshly squeezed juice (orange, lemon – 25 cl)",
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
              "name": "Virgin Sex on the Beach",
              "price": "9 €"
            }
          ]
        }
      ]
    },
    {
      "id": "coffee",
      "label": "Coffee",
      "sections": [
        {
          "id": "iced-coffee",
          "title": "Iced coffees",
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
              "name": "Iced coffee",
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
          "title": "Hot drinks",
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
              "name": "Coffee with cream",
              "price": "3,50 €"
            },
            {
              "name": "Double espresso",
              "price": "4 €"
            },
            {
              "name": "Viennese coffee",
              "price": "4,50 €"
            },
            {
              "name": "Tea, herbal tea",
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
              "name": "Hot chocolate",
              "price": "4 €"
            },
            {
              "name": "Tea, herbal tea",
              "price": "4 €"
            },
            {
              "name": "Viennese chocolate",
              "price": "5 €"
            },
            {
              "name": "Vanilla latte",
              "price": "5 €"
            },
            {
              "name": "Caramel latte",
              "price": "5 €"
            },
            {
              "name": "Hazelnut latte",
              "price": "5 €"
            },
            {
              "name": "Chai latte",
              "price": "5 €"
            },
            {
              "name": "Matcha latte",
              "price": "5,50 €"
            }
          ]
        },
        {
          "id": "hot-drink-addons",
          "title": "Add-ons",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Plant milk",
              "description": "Oat",
              "price": "+0,90 €"
            },
            {
              "name": "Syrup",
              "description": "Vanilla, caramel, or hazelnut",
              "price": "+0,50 €"
            },
            {
              "name": "Whipped cream",
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
              "name": "Cheese plate",
              "price": "9 €"
            },
            {
              "name": "Chocolate mousse",
              "price": "8 €"
            },
            {
              "name": "Tiramisu of the day",
              "price": "8 €"
            },
            {
              "kind": "section",
              "label": "Desserts by Palais de la Friandise"
            },
            {
              "name": "Today's desserts",
              "price": "11 €"
            }
          ]
        },
        {
          "id": "ice-cream",
          "title": "Ice cream",
          "items": [
            {
              "kind": "section",
              "label": "Artisanal ice creams"
            },
            {
              "name": "Flavours",
              "description": "Coffee, chocolate, vanilla, mint, coconut, lemon, strawberry, mango, passion fruit, raspberry, caramel, fior di latte, pineapple, pistachio, bananerella, basil"
            },
            {
              "name": "1 scoop",
              "price": "3 €"
            },
            {
              "name": "2 scoops",
              "price": "5,50 €"
            },
            {
              "name": "3 scoops",
              "price": "8,50 €"
            },
            {
              "kind": "section",
              "label": "Ice cream sundaes"
            },
            {
              "name": "Dame Blanche",
              "description": "Vanilla ice cream, chocolate sauce, whipped cream",
              "price": "9,50 €"
            },
            {
              "name": "Coffee or Chocolate Liégeois",
              "description": "Vanilla ice cream, coffee or chocolate ice cream, coffee or hot chocolate, whipped cream",
              "price": "10 €"
            },
            {
              "name": "Exotic sundae",
              "description": "Coconut, mango, and passion fruit ice cream, whipped cream",
              "price": "10,50 €"
            },
            {
              "name": "Red berry sundae",
              "description": "Strawberry and raspberry ice cream, red berry coulis, whipped cream",
              "price": "11 €"
            },
            {
              "name": "Colonel sundae",
              "description": "Lemon ice cream, vodka, whipped cream",
              "price": "11 €"
            },
            {
              "name": "After Eight sundae",
              "description": "Chocolate ice cream, mint, Get 27, chocolate, whipped cream",
              "price": "11 €"
            },
            {
              "name": "Milkshake",
              "description": "Ice cream + milk (33 cl): raspberry, pineapple, strawberry, banana, chocolate, vanilla, mango, passion fruit, coconut, lemon",
              "price": "7 €"
            }
          ]
        }
      ]
    }
  ],
  "winePriceColumnLabels": {
    "glass": "Glass",
    "50cl": "50 cl",
    "75cl": "75 cl"
  }
};
