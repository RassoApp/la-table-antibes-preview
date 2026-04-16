export const menuPage = {
  "eyebrow": "Menú",
  "title": "La carta de La Table",
  "text": "Una lectura más clara de la carta, pensada para distinguir enseguida la cocina, las pizzas, el bar, los vinos, los refrescos, los cafés y los postres.",
  "note": "Revisión localizada del menú.",
  "filters": {
    "buttonLabel": "Preferencias alimentarias",
    "emptyLabel": "Ningún plato coincide con estas preferencias.",
    "clearLabel": "Restablecer",
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
        "label": "Sin cerdo"
      },
      {
        "id": "no-fish",
        "label": "Sin pescado"
      },
      {
        "id": "no-seafood",
        "label": "Sin marisco"
      }
    ],
    "optionLabels": {
      "vegetarian": "Vegetariano",
      "vegan": "Vegano",
      "no-pork": "Sin cerdo",
      "no-fish": "Sin pescado",
      "no-seafood": "Sin marisco"
    }
  },
  "tabs": [
    {
      "id": "cuisine",
      "label": "Cocina",
      "sections": [
        {
          "id": "sharing",
          "title": "Para compartir",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Pimientos marinados",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Panisses, salsa alioli",
              "price": "9 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Caviar de berenjena al fuego de leña",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Jamón de Parma",
              "price": "11 €",
              "filters": [
                "pork"
              ]
            }
          ]
        },
        {
          "id": "starters",
          "title": "Entrantes",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Ensalada de alcachofa",
              "price": "17 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Burrata, tomates antiguos",
              "price": "19 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Quinoa con sus condimentos del día",
              "price": "19 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "César de pollo empanado",
              "price": "18 €"
            },
            {
              "name": "Ceviche de serviola",
              "price": "18 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Atún marcado, versión ensalada niçoise",
              "price": "20 €",
              "filters": [
                "fish"
              ]
            }
          ]
        },
        {
          "id": "mains",
          "title": "Platos",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Mejillones a la marinera",
              "price": "18 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Sardinas asadas con salsa vierge de temporada",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Gambas salvajes salteadas al ajo",
              "price": "28 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "Dorada real entera asada al horno",
              "price": "32 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Tartar de ternera a la italiana",
              "price": "19 €"
            },
            {
              "name": "Hamburguesa gourmet con crema de cheddar",
              "price": "19 €"
            },
            {
              "name": "Carrillera de ternera confitada",
              "price": "23 €"
            },
            {
              "name": "Costillas de cerdo marinadas",
              "price": "23 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Tagliata de ternera",
              "price": "25 €"
            },
            {
              "name": "Suprema de ave asada, salsa de ceps",
              "price": "25 €"
            },
            {
              "name": "Escalope milanesa de ternera",
              "price": "26 €"
            },
            {
              "name": "Linguini al pesto",
              "price": "20 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Rigatoni all’arrabbiata con stracciatella",
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
              "name": "Rigatoni con crema de trufa",
              "price": "32 €",
              "filters": [
                "vegetarian"
              ]
            }
          ]
        },
        {
          "id": "extras",
          "title": "Guarniciones",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Patatas fritas frescas",
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
              "name": "Mesclun niçois",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "Verduras del sol",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "kids",
          "title": "Menú infantil",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Menú infantil",
              "description": "Sirope con agua, tenders con patatas o pasta con salsa de tomate, bola de helado",
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
          "title": "Pizzas al fuego de leña",
          "layout": "split-items",
          "items": [
            {
              "name": "Margarita",
              "description": "Salsa de tomate, mozzarella, albahaca",
              "price": "14 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Reina",
              "description": "Salsa de tomate, mozzarella, jamón cocido, champiñones",
              "price": "17 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "4 quesos",
              "description": "Salsa de tomate, mozzarella, reblochon, roquefort, queso de cabra",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Cannibale",
              "description": "Salsa de tomate, mozzarella, cebolla confitada, carne picada, huevo",
              "price": "18 €"
            },
            {
              "name": "Napolitana",
              "description": "Salsa de tomate, mozzarella, anchoas, alcaparras",
              "price": "16 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "4 estaciones",
              "description": "Salsa de tomate, mozzarella, champiñones, berenjena, tomates cherry, alcachofas",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Provenzal",
              "description": "Salsa de tomate, mozzarella, champiñones, berenjena, cebolla confitada, pimientos",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Española",
              "description": "Salsa de tomate, mozzarella, spianata, pimientos",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Mediterránea",
              "description": "Salsa de tomate, mozzarella, cebolla confitada, alcaparras, atún",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Parma",
              "description": "Salsa de tomate, mozzarella, tomates cherry, jamón curado, burrata",
              "price": "22 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Noruega",
              "description": "Base blanca, mozzarella, salmón marinado, tomates cherry",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Cabra y miel",
              "description": "Base blanca, mozzarella, queso de cabra, nueces, miel",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Calzone",
              "description": "Salsa de tomate, mozzarella, champiñones, jamón cocido, huevo",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Truffala",
              "description": "Crema de trufa, mozzarella, jamón curado, burrata",
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
              "description": "Aperol 5 cl, prosecco 10 cl, agua con gas, naranja",
              "price": "10 €"
            },
            {
              "name": "Hugo Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, agua con gas, limón, menta",
              "price": "12 €"
            },
            {
              "name": "Limoncello Spritz",
              "description": "Limoncello 5 cl, prosecco 10 cl, agua con gas, limón",
              "price": "10 €"
            },
            {
              "name": "Amaretto Spritz",
              "description": "Amaretto 5 cl, prosecco 10 cl, agua con gas, naranja",
              "price": "11 €"
            },
            {
              "name": "St-Germain Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, agua con gas, limón",
              "price": "12 €"
            },
            {
              "name": "Martini Spritz",
              "description": "Martini blanco 5 cl, prosecco 10 cl, agua con gas, limón",
              "price": "10 €"
            },
            {
              "name": "Campari Spritz",
              "description": "Campari 5 cl, prosecco 10 cl, agua con gas, naranja",
              "price": "12 €"
            },
            {
              "name": "Spritz de frutos rojos",
              "description": "Licor de frutos rojos 5 cl, prosecco 10 cl, agua con gas",
              "price": "12 €"
            },
            {
              "name": "Rosa Spritz",
              "description": "Sarti 5 cl, prosecco 10 cl, agua con gas, naranja",
              "price": "11 €"
            },
            {
              "name": "Spritz de alcachofa",
              "description": "Cynar 5 cl, prosecco 10 cl, agua con gas",
              "price": "12 €"
            }
          ]
        },
        {
          "id": "cocktails",
          "title": "Cócteles",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Negroni",
              "description": "Gin 3 cl, Campari 3 cl, vermut rojo 3 cl",
              "price": "12 €"
            },
            {
              "name": "Sex on the Beach",
              "description": "Vodka 5 cl, zumo de naranja, zumo de arándanos, licor de melocotón",
              "price": "12 €"
            },
            {
              "name": "Mojito",
              "description": "Ron 5 cl, angostura, azúcar moreno, lima, menta, agua con gas",
              "price": "12 €"
            },
            {
              "name": "Mojito de fresa o de pasión",
              "description": "Ron 5 cl, angostura, azúcar moreno, lima, menta, agua con gas, puré de fresa o de pasión",
              "price": "13 €"
            },
            {
              "name": "Paloma",
              "description": "Tequila 5 cl, zumo de lima, zumo de pomelo, tónica",
              "price": "13 €"
            },
            {
              "name": "Cosmopolitan",
              "description": "Vodka 5 cl, triple sec, zumo de arándanos, lima",
              "price": "13 €"
            },
            {
              "name": "Mule",
              "description": "Moscow, London, Mexican, Kentucky o Caribbean 5 cl",
              "price": "13 €"
            },
            {
              "name": "Sour",
              "description": "Amaretto, vodka, gin, ron o whisky 5 cl",
              "price": "13 €"
            },
            {
              "name": "Pornstar",
              "description": "Vodka 5 cl, limón, vainilla, zumo de pasión y prosecco 5 cl",
              "price": "14 €"
            },
            {
              "name": "Pina Colada",
              "description": "Ron 5 cl, leche de coco, zumo de piña",
              "price": "14 €"
            },
            {
              "name": "Daiquiri de pasión o de fresa",
              "description": "Ron 5 cl, azúcar de caña, lima, puré de pasión o de fresa",
              "price": "14 €"
            },
            {
              "name": "Grand Margarita",
              "description": "Grand Marnier 2 cl, tequila 3 cl, lima, sirope de agave",
              "price": "15 €"
            },
            {
              "name": "Espresso Martini",
              "description": "Vodka 5 cl, licor de café 2 cl, espresso, sirope de vainilla",
              "price": "15 €"
            }
          ]
        },
        {
          "id": "draught-beers",
          "title": "Cervezas de barril",
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
          "title": "Cervezas en botella (33 cl)",
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
          "title": "Aperitivos",
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
              "name": "Copa de Champagne (14 cl)",
              "price": "10 €"
            },
            {
              "name": "Champagne con hielo (16 cl)",
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
          "title": "Alcoholes",
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
              "name": "Chivas 12 años",
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
              "label": "Ron (4 cl)"
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
              "label": "Digestivos (4 cl)"
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
              "label": "Mezcladores"
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
      "label": "Vinos",
      "sections": [
        {
          "id": "french-wines",
          "title": "Vinos de Francia",
          "desktopColumn": 0,
          "items": [
            {
              "kind": "section",
              "label": "Vinos blancos"
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
              "label": "Vinos rosados"
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
              "label": "Vinos tintos"
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
          "title": "Vinos del mundo",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Tintos — Italia"
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
              "label": "Tintos — España"
            },
            {
              "name": "Riscal 1860 | Castilla y Leon AOC",
              "price": "75 cl 32 €"
            },
            {
              "kind": "section",
              "label": "Tintos — Argentina"
            },
            {
              "name": "Clos de los Siete | Valle de Uco – Mendoza",
              "price": "75 cl 39 €"
            },
            {
              "kind": "section",
              "label": "Tintos — Estados Unidos"
            },
            {
              "name": "Buena Vista La Petite Syrah | Vin de Californie",
              "price": "75 cl 38 €"
            },
            {
              "kind": "section",
              "label": "Tintos — Chile"
            },
            {
              "name": "Mapu | Valle del Maule",
              "price": "75 cl 30 €"
            },
            {
              "kind": "section",
              "label": "Blancos — Italia"
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
              "label": "Blancos — Nueva Zelanda"
            },
            {
              "name": "Fusional Sauvignon Blanc | Marlborough",
              "price": "75 cl 35 €"
            }
          ]
        },
        {
          "id": "premium-cellar",
          "title": "Bodega premium",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "Vinos blancos"
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
              "label": "Vinos tintos"
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
          "title": "Champagnes y burbujas",
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
          "title": "Bebidas frías",
          "items": [
            {
              "name": "Vittel y San Pellegrino 50 cl",
              "price": "4 €"
            },
            {
              "name": "Vittel y San Pellegrino 100 cl",
              "price": "7 €"
            },
            {
              "name": "Sirope con agua",
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
              "name": "Zumos de fruta (ACE, naranja, tomate, manzana, piña – 25 cl)",
              "price": "5 €"
            },
            {
              "name": "Té helado de melocotón o frambuesa",
              "price": "6 €"
            },
            {
              "name": "Zumos exprimidos (naranja, limón – 25 cl)",
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
      "label": "Cafés",
      "sections": [
        {
          "id": "iced-coffee",
          "title": "Cafés fríos",
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
              "name": "Café frappé",
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
          "title": "Bebidas calientes",
          "layout": "split-items",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Café espresso",
              "price": "2 €"
            },
            {
              "name": "Descafeinado",
              "price": "2 €"
            },
            {
              "name": "Café cortado",
              "price": "2,50 €"
            },
            {
              "name": "Café americano",
              "price": "2,50 €"
            },
            {
              "name": "Capuchino",
              "price": "3,80 €"
            },
            {
              "name": "Café con crema",
              "price": "3,50 €"
            },
            {
              "name": "Café doble",
              "price": "4 €"
            },
            {
              "name": "Café vienés",
              "price": "4,50 €"
            },
            {
              "name": "Té, infusión",
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
              "name": "Chocolate caliente",
              "price": "4 €"
            },
            {
              "name": "Chocolate vienés",
              "price": "5 €"
            },
            {
              "name": "Latte vainilla",
              "price": "5 €"
            },
            {
              "name": "Latte caramelo",
              "price": "5 €"
            },
            {
              "name": "Latte avellana",
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
          "title": "Suplementos",
          "desktopColumn": 1,
          "items": [
            {
              "name": "Leche vegetal",
              "description": "Avena",
              "price": "+0,90 €"
            },
            {
              "name": "Sirope",
              "description": "Vainilla, caramelo o avellana",
              "price": "+0,50 €"
            },
            {
              "name": "Nata montada",
              "price": "+0,50 €"
            }
          ]
        }
      ]
    },
    {
      "id": "desserts",
      "label": "Postres",
      "sections": [
        {
          "id": "dessert-menu",
          "title": "Postres",
          "items": [
            {
              "name": "Tabla de quesos",
              "price": "9 €"
            },
            {
              "name": "Mousse de chocolate",
              "price": "8 €"
            },
            {
              "name": "Tiramisú del día",
              "price": "8 €"
            },
            {
              "kind": "section",
              "label": "Postres de Palais de la Friandise"
            },
            {
              "name": "Postres del día",
              "price": "11 €"
            }
          ]
        },
        {
          "id": "ice-cream",
          "title": "Helados",
          "items": [
            {
              "kind": "section",
              "label": "Helados artesanales"
            },
            {
              "name": "Sabores",
              "description": "Café, chocolate, vainilla, menta, coco, limón, fresa, mango, pasión, frambuesa, caramelo, flor de leche, piña, pistacho"
            },
            {
              "name": "1 bola",
              "price": "3 €"
            },
            {
              "name": "2 bolas",
              "price": "5,50 €"
            },
            {
              "name": "3 bolas",
              "price": "8,50 €"
            },
            {
              "kind": "section",
              "label": "Copas heladas"
            },
            {
              "name": "Dame Blanche",
              "description": "Helado de vainilla, salsa de chocolate, nata montada",
              "price": "9,50 €"
            },
            {
              "name": "Café o chocolate liégeois",
              "description": "Helado de vainilla, helado de café o chocolate, café o chocolate caliente, nata montada",
              "price": "10 €"
            },
            {
              "name": "Copa exótica",
              "description": "Helado de coco, mango y pasión, nata montada",
              "price": "10,50 €"
            },
            {
              "name": "Copa de frutos rojos",
              "description": "Helado de fresa y frambuesa, coulis de frutos rojos, nata montada",
              "price": "11 €"
            },
            {
              "name": "Copa Colonel",
              "description": "Helado de limón, vodka, nata montada",
              "price": "11 €"
            },
            {
              "name": "Copa After Eight",
              "description": "Helado de chocolate, menta, Get 27, chocolate, nata montada",
              "price": "11 €"
            },
            {
              "name": "Milk shake",
              "description": "Helado + leche (33 cl): frambuesa, piña, fresa, plátano, chocolate, vainilla, mango, pasión, coco, limón",
              "price": "7 €"
            }
          ]
        }
      ]
    }
  ],
  "winePriceColumnLabels": {
    "glass": "Copa",
    "50cl": "50 cl",
    "75cl": "75 cl"
  }
};
