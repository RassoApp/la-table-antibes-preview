export const menuPage = {
  "eyebrow": "Speisekarte",
  "title": "Die Karte von La Table",
  "text": "Eine klarere Lesart der Karte, damit Küche, Pizzen, Bar, Weine, Softdrinks, Kaffee und Desserts sofort verständlich sind.",
  "note": "Lokalisierte Menüprüfung.",
  "filters": {
    "buttonLabel": "Ernährungsvorlieben",
    "emptyLabel": "Kein Gericht entspricht diesen Auswahlkriterien.",
    "clearLabel": "Zurücksetzen",
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
        "label": "Ohne Schweinefleisch"
      },
      {
        "id": "no-fish",
        "label": "Ohne Fisch"
      },
      {
        "id": "no-seafood",
        "label": "Ohne Meeresfrüchte"
      }
    ],
    "optionLabels": {
      "vegetarian": "Vegetarisch",
      "vegan": "Vegan",
      "no-pork": "Ohne Schweinefleisch",
      "no-fish": "Ohne Fisch",
      "no-seafood": "Ohne Meeresfrüchte"
    }
  },
  "tabs": [
    {
      "id": "cuisine",
      "label": "Küche",
      "sections": [
        {
          "id": "sharing",
          "title": "Zum Teilen",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Marinierte Paprika",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Panisses, Aioli",
              "price": "9 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Auberginenkaviar aus dem Holzofen",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Parmaschinken",
              "price": "11 €",
              "filters": [
                "pork"
              ]
            }
          ]
        },
        {
          "id": "starters",
          "title": "Vorspeisen",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Artischockensalat",
              "price": "17 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Burrata mit alten Tomatensorten",
              "price": "19 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Quinoa mit den Condiments des Tages",
              "price": "19 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Caesar mit knusprigem Hähnchen",
              "price": "18 €"
            },
            {
              "name": "Ceviche von der Bernsteinmakrele",
              "price": "18 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Kurz angebratener Thunfisch nach Niçoise-Art",
              "price": "20 €",
              "filters": [
                "fish"
              ]
            }
          ]
        },
        {
          "id": "mains",
          "title": "Hauptgerichte",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Miesmuscheln marinière",
              "price": "18 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Geröstete Sardinen mit saisonaler Vierge-Sauce",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Wildgarnelen mit Knoblauch gebraten",
              "price": "28 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Ganze Dorade aus dem Ofen",
              "price": "32 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Rindertatar auf italienische Art",
              "price": "19 €"
            },
            {
              "name": "Gourmet-Burger mit Cheddarcreme",
              "price": "19 €"
            },
            {
              "name": "Geschmorte Rinderbacke",
              "price": "23 €"
            },
            {
              "name": "Marinierte Schweinerippchen",
              "price": "23 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Tagliata vom Rind",
              "price": "25 €"
            },
            {
              "name": "Gebratene Hähnchenbrust, Steinpilzsauce",
              "price": "25 €"
            },
            {
              "name": "Kalbsschnitzel alla milanese",
              "price": "26 €"
            },
            {
              "name": "Linguini mit Pesto",
              "price": "20 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Rigatoni all’arrabbiata mit Stracciatella",
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
              "name": "Rigatoni mit Trüffelcreme",
              "price": "32 €",
              "filters": [
                "vegetarian"
              ]
            }
          ]
        },
        {
          "id": "extras",
          "title": "Beilagen",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Frische Pommes",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Cremige Polenta",
              "price": "5 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Niçoiser Mesclun",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Sonnengemüse",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "kids",
          "title": "Kindermenü",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Kindermenü",
              "description": "Sirup mit Wasser, Tenders mit Pommes oder Pasta mit Tomatensauce, eine Kugel Eis",
              "price": "12 €"
            }
          ]
        }
      ]
    },
    {
      "id": "pizzas",
      "label": "Pizzen",
      "sections": [
        {
          "id": "wood-fired-pizzas",
          "title": "Pizzen aus dem Holzofen",
          "layout": "split-items",
          "items": [
            {
              "name": "Margherita",
              "description": "Tomatensauce, Mozzarella, Basilikum",
              "price": "14 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Regina",
              "description": "Tomatensauce, Mozzarella, Kochschinken, Pilze",
              "price": "17 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "4 Käse",
              "description": "Tomatensauce, Mozzarella, Reblochon, Roquefort, Ziegenkäse",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Cannibale",
              "description": "Tomatensauce, Mozzarella, konfierte Zwiebeln, Hackfleisch, Ei",
              "price": "18 €"
            },
            {
              "name": "Neapolitanisch",
              "description": "Tomatensauce, Mozzarella, Sardellen, Kapern",
              "price": "16 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "4 Jahreszeiten",
              "description": "Tomatensauce, Mozzarella, Pilze, Auberginen, Kirschtomaten, Artischocken",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Provenzalisch",
              "description": "Tomatensauce, Mozzarella, Pilze, Auberginen, konfierte Zwiebeln, Paprika",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Spanisch",
              "description": "Tomatensauce, Mozzarella, Spianata, Paprika",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Mittelmeer",
              "description": "Tomatensauce, Mozzarella, konfierte Zwiebeln, Kapern, Thunfisch",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Parma",
              "description": "Tomatensauce, Mozzarella, Kirschtomaten, Rohschinken, Burrata",
              "price": "22 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Norwegisch",
              "description": "Weiße Basis, Mozzarella, marinierter Lachs, Kirschtomaten",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Ziegenkäse-Honig",
              "description": "Weiße Basis, Mozzarella, Ziegenkäse, Walnüsse, Honig",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Calzone",
              "description": "Tomatensauce, Mozzarella, Pilze, Kochschinken, Ei",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Truffala",
              "description": "Trüffelcreme, Mozzarella, Rohschinken, Burrata",
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
              "description": "Aperol 5 cl, Prosecco 10 cl, Sprudelwasser, Orange",
              "price": "10 €"
            },
            {
              "name": "Hugo Spritz",
              "description": "St-Germain 5 cl, Prosecco 10 cl, Sprudelwasser, Zitrone, Minze",
              "price": "12 €"
            },
            {
              "name": "Limoncello Spritz",
              "description": "Limoncello 5 cl, Prosecco 10 cl, Sprudelwasser, Zitrone",
              "price": "10 €"
            },
            {
              "name": "Amaretto Spritz",
              "description": "Amaretto 5 cl, Prosecco 10 cl, Sprudelwasser, Orange",
              "price": "11 €"
            },
            {
              "name": "St-Germain Spritz",
              "description": "St-Germain 5 cl, Prosecco 10 cl, Sprudelwasser, Zitrone",
              "price": "12 €"
            },
            {
              "name": "Martini Spritz",
              "description": "Martini Bianco 5 cl, Prosecco 10 cl, Sprudelwasser, Zitrone",
              "price": "10 €"
            },
            {
              "name": "Campari Spritz",
              "description": "Campari 5 cl, Prosecco 10 cl, Sprudelwasser, Orange",
              "price": "12 €"
            },
            {
              "name": "Spritz mit roten Früchten",
              "description": "Likör aus roten Früchten 5 cl, Prosecco 10 cl, Sprudelwasser",
              "price": "12 €"
            },
            {
              "name": "Rosa Spritz",
              "description": "Sarti 5 cl, Prosecco 10 cl, Sprudelwasser, Orange",
              "price": "11 €"
            },
            {
              "name": "Artischocken-Spritz",
              "description": "Cynar 5 cl, Prosecco 10 cl, Sprudelwasser",
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
              "description": "Gin 3 cl, Campari 3 cl, roter Wermut 3 cl",
              "price": "12 €"
            },
            {
              "name": "Sex on the Beach",
              "description": "Wodka 5 cl, Orangensaft, Cranberrysaft, Pfirsichlikör",
              "price": "12 €"
            },
            {
              "name": "Mojito",
              "description": "Rum 5 cl, Angostura, brauner Zucker, Limette, Minze, Sprudelwasser",
              "price": "12 €"
            },
            {
              "name": "Erdbeer-Mojito oder Passionsfrucht-Mojito",
              "description": "Rum 5 cl, Angostura, brauner Zucker, Limette, Minze, Sprudelwasser, Erdbeer- oder Passionsfruchtpüree",
              "price": "13 €"
            },
            {
              "name": "Paloma",
              "description": "Tequila 5 cl, Limettensaft, Grapefruitsaft, Tonic",
              "price": "13 €"
            },
            {
              "name": "Cosmopolitan",
              "description": "Wodka 5 cl, Triple Sec, Cranberrysaft, Limette",
              "price": "13 €"
            },
            {
              "name": "Mule",
              "description": "Moscow, London, Mexican, Kentucky oder Caribbean 5 cl",
              "price": "13 €"
            },
            {
              "name": "Sour",
              "description": "Amaretto, Wodka, Gin, Rum oder Whisky 5 cl",
              "price": "13 €"
            },
            {
              "name": "Pornstar",
              "description": "Wodka 5 cl, Zitrone, Vanille, Passionsfruchtsaft und Prosecco 5 cl",
              "price": "14 €"
            },
            {
              "name": "Pina Colada",
              "description": "Rum 5 cl, Kokosmilch, Ananassaft",
              "price": "14 €"
            },
            {
              "name": "Daiquiri Passionsfrucht oder Erdbeere",
              "description": "Rum 5 cl, Rohrzucker, Limette, Passionsfrucht- oder Erdbeerpüree",
              "price": "14 €"
            },
            {
              "name": "Grand Margarita",
              "description": "Grand Marnier 2 cl, Tequila 3 cl, Limette, Agavensirup",
              "price": "15 €"
            },
            {
              "name": "Espresso Martini",
              "description": "Wodka 5 cl, Kaffeelikör 2 cl, Espresso, Vanillesirup",
              "price": "15 €"
            }
          ]
        },
        {
          "id": "draught-beers",
          "title": "Biere vom Fass",
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
          "title": "Flaschenbiere (33 cl)",
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
              "name": "Glas Champagne (14 cl)",
              "price": "10 €"
            },
            {
              "name": "Champagne auf Eis (16 cl)",
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
          "title": "Spirituosen",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Whisky & Bourbon (4 cl)"
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
              "name": "Chivas 12 Jahre",
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
              "label": "Wodka (4 cl)"
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
              "label": "Mixer"
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
      "label": "Weine",
      "sections": [
        {
          "id": "french-wines",
          "title": "Weine aus Frankreich",
          "desktopColumn": 0,
          "items": [
            {
              "kind": "section",
              "label": "Weißweine"
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
              "label": "Roséweine"
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
              "label": "Rotweine"
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
          "title": "Weine aus aller Welt",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Rotweine — Italien"
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
              "label": "Rotweine — Spanien"
            },
            {
              "name": "Riscal 1860 | Castilla y Leon AOC",
              "price": "75 cl 32 €"
            },
            {
              "kind": "section",
              "label": "Rotweine — Argentinien"
            },
            {
              "name": "Clos de los Siete | Valle de Uco – Mendoza",
              "price": "75 cl 39 €"
            },
            {
              "kind": "section",
              "label": "Rotweine — USA"
            },
            {
              "name": "Buena Vista La Petite Syrah | Vin de Californie",
              "price": "75 cl 38 €"
            },
            {
              "kind": "section",
              "label": "Rotweine — Chile"
            },
            {
              "name": "Mapu | Valle del Maule",
              "price": "75 cl 30 €"
            },
            {
              "kind": "section",
              "label": "Weißweine — Italien"
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
              "label": "Weißweine — Neuseeland"
            },
            {
              "name": "Fusional Sauvignon Blanc | Marlborough",
              "price": "75 cl 35 €"
            }
          ]
        },
        {
          "id": "premium-cellar",
          "title": "Premium-Keller",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Weißweine"
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
              "label": "Rotweine"
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
          "title": "Champagner & Schaumweine",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Prosecco | Sensi",
              "price": "Verre 6 € • 75 cl 35 €"
            },
            {
              "kind": "section",
              "label": "Champagner"
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
          "title": "Kalte Getränke",
          "items": [
            {
              "name": "Vittel und San Pellegrino 50 cl",
              "price": "4 €"
            },
            {
              "name": "Vittel und San Pellegrino 100 cl",
              "price": "7 €"
            },
            {
              "name": "Sirup mit Wasser",
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
              "name": "Fruchtsäfte (ACE, Orange, Tomate, Apfel, Ananas – 25 cl)",
              "price": "5 €"
            },
            {
              "name": "Pfirsich- oder Himbeer-Eistee",
              "price": "6 €"
            },
            {
              "name": "Frisch gepresste Säfte (Orange, Zitrone – 25 cl)",
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
      "label": "Kaffee",
      "sections": [
        {
          "id": "iced-coffee",
          "title": "Eiskaffee",
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
              "name": "Frappé-Kaffee",
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
          "title": "Heißgetränke",
          "layout": "split-items",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Espresso",
              "price": "2 €"
            },
            {
              "name": "Entkoffeiniert",
              "price": "2 €"
            },
            {
              "name": "Espresso Macchiato",
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
              "name": "Kaffee mit Sahne",
              "price": "3,50 €"
            },
            {
              "name": "Doppelter Espresso",
              "price": "4 €"
            },
            {
              "name": "Wiener Kaffee",
              "price": "4,50 €"
            },
            {
              "name": "Tee, Kräutertee",
              "price": "4 €"
            },
            {
              "name": "Latte Macchiato",
              "price": "5 €"
            },
            {
              "name": "Irish Coffee",
              "price": "12 €"
            },
            {
              "name": "Heiße Schokolade",
              "price": "4 €"
            },
            {
              "name": "Tee, Kräutertee",
              "price": "4 €"
            },
            {
              "name": "Wiener Schokolade",
              "price": "5 €"
            },
            {
              "name": "Vanille-Latte",
              "price": "5 €"
            },
            {
              "name": "Karamell-Latte",
              "price": "5 €"
            },
            {
              "name": "Haselnuss-Latte",
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
          "title": "Extras",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Pflanzliche Milch",
              "description": "Hafer",
              "price": "+0,90 €"
            },
            {
              "name": "Sirup",
              "description": "Vanille, Karamell oder Haselnuss",
              "price": "+0,50 €"
            },
            {
              "name": "Schlagsahne",
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
              "name": "Käseteller",
              "price": "9 €"
            },
            {
              "name": "Schokoladenmousse",
              "price": "8 €"
            },
            {
              "name": "Tiramisu des Tages",
              "price": "8 €"
            },
            {
              "kind": "section",
              "label": "Desserts von Palais de la Friandise"
            },
            {
              "name": "Desserts des Tages",
              "price": "11 €"
            }
          ]
        },
        {
          "id": "ice-cream",
          "title": "Eis",
          "items": [
            {
              "kind": "section",
              "label": "Hausgemachtes Eis"
            },
            {
              "name": "Sorten",
              "description": "Kaffee, Schokolade, Vanille, Minze, Kokosnuss, Zitrone, Erdbeere, Mango, Passionsfrucht, Himbeere, Karamell, Fior di Latte, Ananas, Pistazie"
            },
            {
              "name": "1 Kugel",
              "price": "3 €"
            },
            {
              "name": "2 Kugeln",
              "price": "5,50 €"
            },
            {
              "name": "3 Kugeln",
              "price": "8,50 €"
            },
            {
              "kind": "section",
              "label": "Eisbecher"
            },
            {
              "name": "Dame Blanche",
              "description": "Vanilleeis, Schokoladensauce, Schlagsahne",
              "price": "9,50 €"
            },
            {
              "name": "Kaffee- oder Schokoladen-Liégeois",
              "description": "Vanilleeis, Kaffee- oder Schokoladeneis, Kaffee oder heiße Schokolade, Schlagsahne",
              "price": "10 €"
            },
            {
              "name": "Exotischer Eisbecher",
              "description": "Kokos-, Mango- und Passionsfruchteis, Schlagsahne",
              "price": "10,50 €"
            },
            {
              "name": "Becher mit roten Früchten",
              "description": "Erdbeer- und Himbeereis, rote-Früchte-Coulis, Schlagsahne",
              "price": "11 €"
            },
            {
              "name": "Colonel-Becher",
              "description": "Zitroneneis, Wodka, Schlagsahne",
              "price": "11 €"
            },
            {
              "name": "After-Eight-Becher",
              "description": "Schokoladeneis, Minze, Get 27, Schokolade, Schlagsahne",
              "price": "11 €"
            },
            {
              "name": "Milkshake",
              "description": "Eis + Milch (33 cl): Himbeere, Ananas, Erdbeere, Banane, Schokolade, Vanille, Mango, Passionsfrucht, Kokosnuss, Zitrone",
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
