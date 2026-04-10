export const menuPage = {
  "eyebrow": "메뉴",
  "title": "La Table 메뉴",
  "text": "요리, 피자, 바, 와인, 소프트 드링크, 커피, 디저트를 한눈에 구분하기 쉽게 정리한 메뉴입니다.",
  "note": "메뉴 현지화 버전입니다.",
  "filters": {
    "buttonLabel": "식사 선호",
    "emptyLabel": "조건에 맞는 메뉴가 없습니다.",
    "clearLabel": "초기화",
    "filterableTabs": [
      "cuisine",
      "pizzas"
    ],
    "options": [
      {
        "id": "vegetarian",
        "label": "베지테리언"
      },
      {
        "id": "vegan",
        "label": "비건"
      },
      {
        "id": "no-pork",
        "label": "돼지고기 제외"
      },
      {
        "id": "no-fish",
        "label": "생선 제외"
      },
      {
        "id": "no-seafood",
        "label": "해산물 제외"
      }
    ],
    "optionLabels": {
      "vegetarian": "베지테리언",
      "vegan": "비건",
      "no-pork": "돼지고기 제외",
      "no-fish": "생선 제외",
      "no-seafood": "해산물 제외"
    }
  },
  "tabs": [
    {
      "id": "cuisine",
      "label": "요리",
      "sections": [
        {
          "id": "sharing",
          "title": "함께 나누기",
          "desktopColumn": 0,
          "items": [
            {
              "name": "마리네이드 파프리카",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "파니스와 아이올리",
              "price": "9 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "장작불에 구운 가지 캐비아",
              "price": "8 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "파르마 햄",
              "price": "11 €",
              "filters": [
                "pork"
              ]
            }
          ]
        },
        {
          "id": "starters",
          "title": "전채",
          "desktopColumn": 0,
          "items": [
            {
              "name": "아티초크 샐러드",
              "price": "17 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "부라타와 헤리티지 토마토",
              "price": "19 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "오늘의 컨디먼트와 퀴노아",
              "price": "19 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "바삭한 치킨 시저",
              "price": "18 €"
            },
            {
              "name": "방어 세비체",
              "price": "18 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "가볍게 구운 참치 니수아즈 스타일",
              "price": "20 €",
              "filters": [
                "fish"
              ]
            }
          ]
        },
        {
          "id": "mains",
          "title": "메인",
          "desktopColumn": 1,
          "items": [
            {
              "name": "홍합 마리니에르",
              "price": "18 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "로스트 정어리와 제철 비에르주 소스",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "마늘에 구운 자연산 새우",
              "price": "28 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "오븐에 구운 통 도미",
              "price": "32 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "이탈리안 스타일 비프 타르타르",
              "price": "19 €"
            },
            {
              "name": "체더 크림 고메 버거",
              "price": "19 €"
            },
            {
              "name": "천천히 익힌 소볼살",
              "price": "23 €"
            },
            {
              "name": "마리네이드 돼지갈비",
              "price": "23 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "비프 탈리아타",
              "price": "25 €"
            },
            {
              "name": "로스트 치킨 수프림과 포르치니 소스",
              "price": "25 €"
            },
            {
              "name": "밀라노식 송아지 커틀릿",
              "price": "26 €"
            },
            {
              "name": "페스토 링귀니",
              "price": "20 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "아라비아타와 스트라차텔라 리가토니",
              "price": "23 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "봉골레 링귀니",
              "price": "25 €",
              "filters": [
                "seafood"
              ]
            },
            {
              "name": "트러플 크림 리가토니",
              "price": "32 €",
              "filters": [
                "vegetarian"
              ]
            }
          ]
        },
        {
          "id": "extras",
          "title": "사이드",
          "desktopColumn": 0,
          "items": [
            {
              "name": "생감자 프라이",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "크리미 폴렌타",
              "price": "5 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "니수아즈 메스클런",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            },
            {
              "name": "선채소",
              "price": "5 €",
              "filters": [
                "vegan"
              ]
            }
          ]
        },
        {
          "id": "kids",
          "title": "어린이 메뉴",
          "desktopColumn": 1,
          "items": [
            {
              "name": "어린이 메뉴",
              "description": "시럽 물, 치킨 텐더와 감자튀김 또는 토마토소스 파스타, 아이스크림 한 스쿱",
              "price": "12 €"
            }
          ]
        }
      ]
    },
    {
      "id": "pizzas",
      "label": "피자",
      "sections": [
        {
          "id": "wood-fired-pizzas",
          "title": "장작 화덕 피자",
          "layout": "split-items",
          "items": [
            {
              "name": "마르게리타",
              "description": "토마토소스, 모차렐라, 바질",
              "price": "14 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "레인",
              "description": "토마토소스, 모차렐라, 익힌 햄, 버섯",
              "price": "17 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "4가지 치즈",
              "description": "토마토소스, 모차렐라, 르블로숑, 로크포르, 염소치즈",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Cannibale",
              "description": "토마토소스, 모차렐라, 콩피 양파, 다진 고기, 달걀",
              "price": "18 €"
            },
            {
              "name": "나폴리타나",
              "description": "토마토소스, 모차렐라, 앤초비, 케이퍼",
              "price": "16 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "4계절",
              "description": "토마토소스, 모차렐라, 버섯, 가지, 방울토마토, 아티초크",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "프로방살",
              "description": "토마토소스, 모차렐라, 버섯, 가지, 콩피 양파, 피망",
              "price": "18 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "에스파뇰",
              "description": "토마토소스, 모차렐라, 스피아나타, 피망",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "지중해",
              "description": "토마토소스, 모차렐라, 콩피 양파, 케이퍼, 참치",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "Parma",
              "description": "토마토소스, 모차렐라, 방울토마토, 생햄, 부라타",
              "price": "22 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "노르웨이",
              "description": "화이트 베이스, 모차렐라, 마리네이드 연어, 방울토마토",
              "price": "19 €",
              "filters": [
                "fish"
              ]
            },
            {
              "name": "염소치즈와 꿀",
              "description": "화이트 베이스, 모차렐라, 염소치즈, 호두, 꿀",
              "price": "17 €",
              "filters": [
                "vegetarian"
              ]
            },
            {
              "name": "Calzone",
              "description": "토마토소스, 모차렐라, 버섯, 익힌 햄, 달걀",
              "price": "18 €",
              "filters": [
                "pork"
              ]
            },
            {
              "name": "Truffala",
              "description": "트러플 크림, 모차렐라, 생햄, 부라타",
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
      "label": "바",
      "sections": [
        {
          "id": "spritz",
          "title": "Spritz",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Aperol Spritz",
              "description": "Aperol 5 cl, prosecco 10 cl, 탄산수, 오렌지",
              "price": "10 €"
            },
            {
              "name": "Hugo Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, 탄산수, 레몬, 민트",
              "price": "12 €"
            },
            {
              "name": "Limoncello Spritz",
              "description": "Limoncello 5 cl, prosecco 10 cl, 탄산수, 레몬",
              "price": "10 €"
            },
            {
              "name": "Amaretto Spritz",
              "description": "Amaretto 5 cl, prosecco 10 cl, 탄산수, 오렌지",
              "price": "11 €"
            },
            {
              "name": "St-Germain Spritz",
              "description": "St-Germain 5 cl, prosecco 10 cl, 탄산수, 레몬",
              "price": "12 €"
            },
            {
              "name": "Martini Spritz",
              "description": "Martini Bianco 5 cl, prosecco 10 cl, 탄산수, 레몬",
              "price": "10 €"
            },
            {
              "name": "Campari Spritz",
              "description": "Campari 5 cl, prosecco 10 cl, 탄산수, 오렌지",
              "price": "12 €"
            },
            {
              "name": "레드베리 Spritz",
              "description": "레드베리 리큐어 5 cl, prosecco 10 cl, 탄산수",
              "price": "12 €"
            },
            {
              "name": "Rosa Spritz",
              "description": "Sarti 5 cl, prosecco 10 cl, 탄산수, 오렌지",
              "price": "11 €"
            },
            {
              "name": "아티초크 Spritz",
              "description": "Cynar 5 cl, prosecco 10 cl, 탄산수",
              "price": "12 €"
            }
          ]
        },
        {
          "id": "cocktails",
          "title": "칵테일",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Negroni",
              "description": "Gin 3 cl, Campari 3 cl, 레드 베르무트 3 cl",
              "price": "12 €"
            },
            {
              "name": "Sex on the Beach",
              "description": "Vodka 5 cl, 오렌지 주스, 크랜베리 주스, 피치 리큐어",
              "price": "12 €"
            },
            {
              "name": "Mojito",
              "description": "Rum 5 cl, angostura, 흑설탕, 라임, 민트, 탄산수",
              "price": "12 €"
            },
            {
              "name": "딸기 Mojito 또는 패션프루트 Mojito",
              "description": "Rum 5 cl, angostura, 흑설탕, 라임, 민트, 탄산수, 딸기 또는 패션프루트 퓌레",
              "price": "13 €"
            },
            {
              "name": "Paloma",
              "description": "Tequila 5 cl, 라임 주스, 자몽 주스, tonic",
              "price": "13 €"
            },
            {
              "name": "Cosmopolitan",
              "description": "Vodka 5 cl, triple sec, 크랜베리 주스, 라임",
              "price": "13 €"
            },
            {
              "name": "Mule",
              "description": "Moscow, London, Mexican, Kentucky 또는 Caribbean 5 cl",
              "price": "13 €"
            },
            {
              "name": "Sour",
              "description": "Amaretto, vodka, gin, rum 또는 whisky 5 cl",
              "price": "13 €"
            },
            {
              "name": "Pornstar",
              "description": "Vodka 5 cl, 레몬, 바닐라, 패션프루트 주스와 prosecco 5 cl",
              "price": "14 €"
            },
            {
              "name": "Pina Colada",
              "description": "Rum 5 cl, 코코넛 밀크, 파인애플 주스",
              "price": "14 €"
            },
            {
              "name": "패션프루트 또는 딸기 Daiquiri",
              "description": "Rum 5 cl, 사탕수수 설탕, 라임, 패션프루트 또는 딸기 퓌레",
              "price": "14 €"
            },
            {
              "name": "Grand Margarita",
              "description": "Grand Marnier 2 cl, tequila 3 cl, 라임, 아가베 시럽",
              "price": "15 €"
            },
            {
              "name": "Espresso Martini",
              "description": "Vodka 5 cl, 커피 리큐어 2 cl, espresso, 바닐라 시럽",
              "price": "15 €"
            }
          ]
        },
        {
          "id": "draught-beers",
          "title": "생맥주",
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
          "title": "병맥주 (33cl)",
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
          "title": "아페리티프",
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
              "name": "샴페인 글라스 (14 cl)",
              "price": "10 €"
            },
            {
              "name": "얼음 샴페인 (16 cl)",
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
          "title": "주류",
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
              "name": "Chivas 12년",
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
              "label": "믹서"
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
      "label": "와인",
      "sections": [
        {
          "id": "french-wines",
          "title": "프랑스 와인",
          "desktopColumn": 0,
          "items": [
            {
              "kind": "section",
              "label": "화이트 와인"
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
              "label": "로제 와인"
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
              "label": "레드 와인"
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
          "title": "세계의 와인",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "레드 — 이탈리아"
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
              "label": "레드 — 스페인"
            },
            {
              "name": "Riscal 1860 | Castilla y Leon AOC",
              "price": "75 cl 32 €"
            },
            {
              "kind": "section",
              "label": "레드 — 아르헨티나"
            },
            {
              "name": "Clos de los Siete | Valle de Uco – Mendoza",
              "price": "75 cl 39 €"
            },
            {
              "kind": "section",
              "label": "레드 — 미국"
            },
            {
              "name": "Buena Vista La Petite Syrah | Vin de Californie",
              "price": "75 cl 38 €"
            },
            {
              "kind": "section",
              "label": "레드 — 칠레"
            },
            {
              "name": "Mapu | Valle del Maule",
              "price": "75 cl 30 €"
            },
            {
              "kind": "section",
              "label": "화이트 — 이탈리아"
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
              "label": "화이트 — 뉴질랜드"
            },
            {
              "name": "Fusional Sauvignon Blanc | Marlborough",
              "price": "75 cl 35 €"
            }
          ]
        },
        {
          "id": "premium-cellar",
          "title": "프리미엄 셀러",
          "desktopColumn": 1,
          "items": [
            {
              "kind": "section",
              "label": "화이트 와인"
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
              "label": "레드 와인"
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
          "title": "샴페인 & 스파클링",
          "desktopColumn": 0,
          "items": [
            {
              "name": "Prosecco | Sensi",
              "price": "Verre 6 € • 75 cl 35 €"
            },
            {
              "kind": "section",
              "label": "샴페인"
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
      "label": "음료",
      "sections": [
        {
          "id": "cold-drinks",
          "title": "차가운 음료",
          "items": [
            {
              "name": "Vittel 및 San Pellegrino 50 cl",
              "price": "4 €"
            },
            {
              "name": "Vittel 및 San Pellegrino 100 cl",
              "price": "7 €"
            },
            {
              "name": "시럽 물",
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
              "name": "과일 주스(ACE, 오렌지, 토마토, 사과, 파인애플 – 25 cl)",
              "price": "5 €"
            },
            {
              "name": "복숭아 또는 라즈베리 아이스티",
              "price": "6 €"
            },
            {
              "name": "생과일 주스(오렌지, 레몬 – 25 cl)",
              "price": "6 €"
            }
          ]
        },
        {
          "id": "mocktails",
          "title": "목테일",
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
      "label": "커피",
      "sections": [
        {
          "id": "iced-coffee",
          "title": "아이스 커피",
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
              "name": "카페 프라페",
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
          "title": "따뜻한 음료",
          "layout": "split-items",
          "desktopColumn": 0,
          "items": [
            {
              "name": "에스프레소",
              "price": "2 €"
            },
            {
              "name": "디카페인",
              "price": "2 €"
            },
            {
              "name": "에스프레소 마키아토",
              "price": "2,50 €"
            },
            {
              "name": "아메리카노",
              "price": "2,50 €"
            },
            {
              "name": "카푸치노",
              "price": "3,80 €"
            },
            {
              "name": "크림 커피",
              "price": "3,50 €"
            },
            {
              "name": "더블 에스프레소",
              "price": "4 €"
            },
            {
              "name": "비엔나 커피",
              "price": "4,50 €"
            },
            {
              "name": "차·허브티",
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
              "name": "핫초코",
              "price": "4 €"
            },
            {
              "name": "차·허브티",
              "price": "4 €"
            },
            {
              "name": "비엔나 초콜릿",
              "price": "5 €"
            },
            {
              "name": "바닐라 라테",
              "price": "5 €"
            },
            {
              "name": "카라멜 라테",
              "price": "5 €"
            },
            {
              "name": "헤이즐넛 라테",
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
          "title": "추가",
          "desktopColumn": 1,
          "items": [
            {
              "name": "식물성 우유",
              "description": "오트",
              "price": "+0,90 €"
            },
            {
              "name": "시럽",
              "description": "바닐라, 카라멜 또는 헤이즐넛",
              "price": "+0,50 €"
            },
            {
              "name": "휘핑크림",
              "price": "+0,50 €"
            }
          ]
        }
      ]
    },
    {
      "id": "desserts",
      "label": "디저트",
      "sections": [
        {
          "id": "dessert-menu",
          "title": "디저트",
          "items": [
            {
              "name": "치즈 플레이트",
              "price": "9 €"
            },
            {
              "name": "초콜릿 무스",
              "price": "8 €"
            },
            {
              "name": "오늘의 티라미수",
              "price": "8 €"
            },
            {
              "kind": "section",
              "label": "Palais de la Friandise 디저트"
            },
            {
              "name": "오늘의 디저트",
              "price": "11 €"
            }
          ]
        },
        {
          "id": "ice-cream",
          "title": "아이스크림",
          "items": [
            {
              "kind": "section",
              "label": "수제 아이스크림"
            },
            {
              "name": "맛",
              "description": "커피, 초콜릿, 바닐라, 민트, 코코넛, 레몬, 딸기, 망고, 패션프루트, 라즈베리, 카라멜, 피오르 디 라테, 파인애플, 피스타치오, bananerella, 바질"
            },
            {
              "name": "1스쿱",
              "price": "3 €"
            },
            {
              "name": "2스쿱",
              "price": "5,50 €"
            },
            {
              "name": "3스쿱",
              "price": "8,50 €"
            },
            {
              "kind": "section",
              "label": "아이스크림 컵"
            },
            {
              "name": "Dame Blanche",
              "description": "바닐라 아이스크림, 초콜릿 소스, 휘핑크림",
              "price": "9,50 €"
            },
            {
              "name": "커피 또는 초콜릿 Liégeois",
              "description": "바닐라 아이스크림, 커피 또는 초콜릿 아이스크림, 커피 또는 핫초코, 휘핑크림",
              "price": "10 €"
            },
            {
              "name": "엑조틱 컵",
              "description": "코코넛, 망고, 패션프루트 아이스크림, 휘핑크림",
              "price": "10,50 €"
            },
            {
              "name": "레드베리 컵",
              "description": "딸기와 라즈베리 아이스크림, 레드베리 쿨리, 휘핑크림",
              "price": "11 €"
            },
            {
              "name": "Colonel 컵",
              "description": "레몬 아이스크림, vodka, 휘핑크림",
              "price": "11 €"
            },
            {
              "name": "After Eight 컵",
              "description": "초콜릿 아이스크림, 민트, Get 27, 초콜릿, 휘핑크림",
              "price": "11 €"
            },
            {
              "name": "Milk shake",
              "description": "아이스크림 + 우유 (33 cl): 라즈베리, 파인애플, 딸기, 바나나, 초콜릿, 바닐라, 망고, 패션프루트, 코코넛, 레몬",
              "price": "7 €"
            }
          ]
        }
      ]
    }
  ],
  "winePriceColumnLabels": {
    "glass": "잔",
    "50cl": "50 cl",
    "75cl": "75 cl"
  }
};
