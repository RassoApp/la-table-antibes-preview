export const supportedLanguages = ['fr', 'en'];

export const navItems = [
  { slug: '', key: 'home' },
  { slug: 'menu', key: 'menu' },
  { slug: 'gallery', key: 'gallery' },
  { slug: 'about', key: 'about' },
  { slug: 'contact', key: 'contact' },
];

const commonContact = {
  phoneHref: 'tel:+33000000000',
  whatsappHref: 'https://wa.me/33000000000',
  emailHref: 'mailto:bonjour@latable-antibes.fr',
  directionsHref: 'https://maps.google.com/?q=Vieil+Antibes',
  instagramHref: '#',
  facebookHref: '#',
};

export const siteContent = {
  fr: {
    localeName: 'Français',
    shortCode: 'FR',
    alternateLanguages: {
      fr: 'Français',
      en: 'English',
    },
    brand: {
      name: "La Table D'Antibes",
      district: 'Vieil Antibes',
      microTag: 'Grande terrasse • Four à bois • Du déjeuner au soir',
    },
    navLabels: {
      home: 'Accueil',
      menu: 'Menu',
      gallery: 'Galerie',
      about: 'À propos',
      contact: 'Contact',
    },
    uiLabels: {
      languageSwitcher: 'Sélecteur de langue',
      toggleMenu: 'Ouvrir le menu',
      toggleReserveMenu: 'Ouvrir les options de réservation',
      reserveMenuLabel: 'Options de réservation',
      toggleSocialMenu: 'Ouvrir les liens sociaux',
      socialMenuLabel: 'Liens sociaux',
      reserveMenuPhone: 'Téléphone',
      reserveMenuWhatsapp: 'WhatsApp',
      aboutDetailsEyebrow: 'Détails',
      aboutDetailsTitle: 'Repères de matières et d’espace à prolonger ensuite dans le contenu réel.',
    },
    actions: {
      contact: 'Contacter',
      reserve: 'Réserver',
      menu: 'Voir le menu',
      directions: 'Itinéraire',
      social: 'Social',
      call: 'Appeler',
      whatsapp: 'WhatsApp',
      email: 'Email',
      gallery: 'Découvrir la galerie',
      about: 'Découvrir le lieu',
      legal: 'Mentions légales',
      jumpToCategory: 'Aller à la catégorie',
    },
    hero: {
      eyebrow: 'Bistrot solaire au cœur du Vieil Antibes',
      title: 'Une adresse de terrasse, de matières vraies et de cuisine généreuse.',
      text:
        "Prototype de présentation pour un grand restaurant vivant, pensé pour le midi, le soir et les verres qui s'étirent en terrasse.",
      primaryLabel: 'Contacter le restaurant',
      secondaryLabel: 'Voir le menu',
      imageLabel: 'Terrasse héros',
    },
    infoStrip: [
      { label: 'Adresse', value: 'Adresse finale à confirmer' },
      { label: 'Horaires', value: 'Service midi & soir' },
      { label: 'Téléphone', value: '+33 0 00 00 00 00' },
      { label: 'Ambiance', value: 'Terrasse, bar, four à bois' },
    ],
    home: {
      intro: {
        eyebrow: 'L’esprit du lieu',
        title: 'Un restaurant pensé pour convaincre vite, puis donner envie de rester.',
        text:
          "La structure met tout de suite en avant la terrasse, la cuisine classique française, les pizzas au feu de bois et les informations pratiques attendues par un visiteur mobile.",
      },
      terrace: {
        eyebrow: 'Signature terrasse',
        title: 'Montrer dès les premières secondes pourquoi la terrasse compte.',
        text:
          "Cette zone est prévue pour accueillir l’image la plus forte du lieu. Elle doit vendre la lumière, le volume et le confort, sans surcharger le reste de la page.",
        imageLabel: 'Grande terrasse',
      },
      cuisine: {
        eyebrow: 'Cuisine & four',
        title: 'Cuisine bistrot, plats réconfortants et pizzas au feu de bois.',
        text:
          "Le texte final viendra préciser l’offre, mais la hiérarchie est déjà prête pour présenter les grands classiques, les salades, les plats mijotés et le four visible.",
        ctaLabel: 'Explorer le menu',
        imageLabel: 'Four visible',
      },
      gallery: {
        eyebrow: 'Ambiance',
        title: 'Faire ressentir le lieu avant même la première visite.',
        text:
          "Les futurs visuels prendront place ici pour montrer la salle, le bar, les matières et le rythme du restaurant. En attendant, les blocs servent de repères clairs.",
        ctaLabel: 'Voir la galerie',
        images: ['Salle large', 'Bar laiton', 'Table dressée'],
      },
      story: {
        eyebrow: 'Le ton',
        title: 'Authentique dans les matières, net dans l’exécution, accueillant au quotidien.',
        text:
          "Cette zone servira à raconter le restaurant sans se perdre dans un long récit. L’objectif est d’ancrer une personnalité crédible et immédiatement lisible.",
        ctaLabel: 'Lire la page',
        stats: [
          { value: 'Grande', label: 'terrasse à mettre en avant' },
          { value: 'Midi > soir', label: 'usage pensé toute la journée' },
          { value: 'Four à bois', label: 'élément visible du lieu' },
        ],
      },
      access: {
        eyebrow: 'Contact & accès',
        title: 'Tout ce qu’il faut pour passer à l’action sans chercher.',
        text:
          "Les coordonnées, les horaires, l’itinéraire et les accès rapides sont regroupés ici pour maximiser la conversion sur mobile comme sur desktop.",
        imageLabel: 'Plan accès',
      },
    },
    menuPage: {
      eyebrow: 'Le menu',
      title: 'Une page lisible, mobile et faite pour être mise à jour proprement.',
      text:
        "Le menu final remplacera ces contenus indicatifs. La structure, elle, est déjà pensée pour des catégories claires, des prix visibles et une lecture simple sur téléphone.",
      note:
        "Les intitulés ci-dessous sont des exemples de structure. Ils serviront de base au client pour fournir les plats finaux.",
      tagLabels: {
        vegetarian: 'Végétarien',
        vegan: 'Vegan',
        fish: 'Poisson',
        pork: 'Porc',
        spicy: 'Piquant',
      },
      categories: [
        {
          id: 'starters',
          title: 'Entrées',
          items: [
            { name: 'Assiette du jour', description: 'Entrée de saison à préciser', price: '00 €' },
            { name: 'Légumes grillés', description: 'Version finale à définir', price: '00 €', tags: ['vegan'] },
            { name: 'Petite burrata', description: 'Accroche fraîche et estivale', price: '00 €', tags: ['vegetarian'] },
          ],
        },
        {
          id: 'salads',
          title: 'Salades',
          items: [
            { name: 'Salade maison', description: 'Grande salade déjeuner à préciser', price: '00 €', tags: ['vegetarian'] },
            { name: 'Poulet croustillant', description: 'Recette et garnitures à confirmer', price: '00 €' },
            { name: 'Version niçoise', description: 'Interprétation finale à valider', price: '00 €', tags: ['fish'] },
          ],
        },
        {
          id: 'mains',
          title: 'Plats',
          items: [
            { name: 'Entrecôte signature', description: 'Pièce, sauce et accompagnement à préciser', price: '00 €' },
            { name: 'Plat mijoté', description: 'Recette de maison à renseigner', price: '00 €', tags: ['pork'] },
            { name: 'Poisson du moment', description: 'Arrivage et cuisson à définir', price: '00 €', tags: ['fish'] },
          ],
        },
        {
          id: 'pizzas',
          title: 'Pizzas au feu de bois',
          items: [
            { name: 'Margherita four', description: 'Base bois à préciser', price: '00 €', tags: ['vegetarian'] },
            { name: 'Pizza signature', description: 'Recette maison à renseigner', price: '00 €', tags: ['pork', 'spicy'] },
            { name: 'Pizza blanche', description: 'Version finale à confirmer', price: '00 €', tags: ['pork'] },
          ],
        },
        {
          id: 'desserts',
          title: 'Desserts',
          items: [
            { name: 'Dessert du jour', description: 'Finaliser selon la carte réelle', price: '00 €' },
            { name: 'Grand classique', description: 'Version bistrot à préciser', price: '00 €' },
            { name: 'Coupe glacée', description: 'Option fraîche pour l’été', price: '00 €' },
          ],
        },
        {
          id: 'drinks',
          title: 'Boissons',
          items: [
            { name: 'Cocktail maison', description: 'Signature terrasse à définir', price: '00 €' },
            { name: 'Verre de vin', description: 'Sélection à confirmer', price: '00 €' },
            { name: 'Boisson fraîche', description: 'Offre finale à compléter', price: '00 €' },
          ],
        },
      ],
    },
    galleryPage: {
      eyebrow: 'La galerie',
      title: 'Préparer les futurs visuels sans avoir à refaire le site.',
      text:
        "Cette page a été pensée pour recevoir ensuite les vraies photos du lieu. Les blocs déjà placés servent à caler les cadrages, les tailles et la narration visuelle.",
      sections: [
        {
          title: 'Terrasse',
          text: 'Montrer l’ampleur, la lumière, les tables et la sensation de place.',
          images: ['Terrasse angle', 'Terrasse repas', 'Terrasse détail'],
        },
        {
          title: 'Salle & bar',
          text: 'Installer le ton intérieur avec bois, pierres, miroirs, laiton et profondeur.',
          images: ['Salle large', 'Grand bar', 'Miroir laiton'],
        },
        {
          title: 'Cuisine & table',
          text: 'Faire exister l’assiette, le four à bois et les détails de service.',
          images: ['Four bois', 'Pizza sortie', 'Assiette close'],
        },
      ],
    },
    aboutPage: {
      eyebrow: 'À propos',
      title: 'Une page pour poser la personnalité du lieu sans en faire trop.',
      text:
        "Le futur contenu final expliquera l’intention, l’accueil et la promesse du restaurant. La structure garde un ton posé, premium et lisible pour des visiteurs pressés.",
      sections: [
        {
          title: 'Le cadre',
          text:
            "Vieil Antibes, terrasse large, matières authentiques, salle généreuse, bar de bistrot et four visible. L’idée est de rendre cette ambiance tangible dès le premier scroll.",
          imageLabel: 'Ambiance lieu',
        },
        {
          title: 'La promesse',
          text:
            "Une cuisine française accessible, des classiques bien exécutés, des pizzas au feu de bois et un lieu pensé autant pour un déjeuner simple que pour un dîner plus installé.",
          imageLabel: 'Cuisine maison',
        },
        {
          title: 'Le rythme',
          text:
            "Le site prépare la place pour exprimer la journée complète du restaurant: déjeuner, apéritif, dîner, ombre en été et dynamique de grande terrasse.",
          imageLabel: 'Bar vivant',
        },
      ],
      highlights: [
        'Grande terrasse touristique',
        'Bar bistrot bois & laiton',
        'Four à bois visible',
        'Matières nobles et rénovées',
      ],
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'Toutes les informations pratiques dans une page simple et efficace.',
      text:
        "Cette page est conçue pour répondre vite aux besoins concrets: joindre le restaurant, venir sur place, vérifier les horaires et comprendre les accès.",
      cards: [
        { title: 'Téléphone', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
        { title: 'WhatsApp', value: 'Message direct', href: commonContact.whatsappHref },
        { title: 'Email', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
      ],
      addressTitle: 'Adresse',
      addressValue: 'Vieil Antibes, adresse finale à confirmer',
      hoursTitle: 'Horaires',
      hours: [
        { day: 'Lundi', hours: '12:00 - 14:30 / 19:00 - 22:30' },
        { day: 'Mardi', hours: '12:00 - 14:30 / 19:00 - 22:30' },
        { day: 'Mercredi', hours: '12:00 - 14:30 / 19:00 - 22:30' },
        { day: 'Jeudi', hours: '12:00 - 14:30 / 19:00 - 22:30' },
        { day: 'Vendredi', hours: '12:00 - 14:30 / 19:00 - 23:00' },
        { day: 'Samedi', hours: '12:00 - 15:00 / 19:00 - 23:00' },
        { day: 'Dimanche', hours: 'À confirmer' },
      ],
      accessTitle: 'Accès',
      accessText:
        "Prévoir ici les détails pratiques utiles: terrasse visible, point de repère, parking le plus proche, et lien d’itinéraire pour les visiteurs de passage.",
      mapLabel: 'Carte zone',
    },
    legalPage: {
      eyebrow: 'Mentions légales',
      title: 'Une page prête à recevoir les informations administratives finales.',
      text:
        "Le contenu affiché ici est volontairement indicatif. Les informations légales, l’hébergement, la société et la politique de confidentialité seront complétés avant mise en ligne.",
      sections: [
        {
          title: 'Éditeur du site',
          body: 'Nom de la société, adresse, SIRET, représentant légal, coordonnées.',
        },
        {
          title: 'Hébergement',
          body: "Nom de l’hébergeur, adresse, moyens de contact et environnement technique choisi.",
        },
        {
          title: 'Données personnelles',
          body: "Le site de lancement est prévu sans bannière cookies ni stack analytics lourde, mais les mentions finales resteront à renseigner proprement.",
        },
      ],
    },
    footer: {
      summary:
        "Prototype bilingue prêt à être remplacé ensuite par les textes, visuels et informations définitives du restaurant.",
      copyright: "Prototype local • La Table D'Antibes",
    },
    quickActions: [
      { label: 'Appeler', href: commonContact.phoneHref },
      { label: 'WhatsApp', href: commonContact.whatsappHref },
      { label: 'Itinéraire', href: commonContact.directionsHref },
      { label: 'Menu', slug: 'menu' },
    ],
    contactLinks: commonContact,
  },
  en: {
    localeName: 'English',
    shortCode: 'EN',
    alternateLanguages: {
      fr: 'Français',
      en: 'English',
    },
    brand: {
      name: "La Table D'Antibes",
      district: 'Vieil Antibes',
      microTag: 'Large terrace • Wood oven • Lunch to late evening',
    },
    navLabels: {
      home: 'Home',
      menu: 'Menu',
      gallery: 'Gallery',
      about: 'About',
      contact: 'Contact',
    },
    uiLabels: {
      languageSwitcher: 'Language switcher',
      toggleMenu: 'Toggle menu',
      toggleReserveMenu: 'Open booking options',
      reserveMenuLabel: 'Booking options',
      toggleSocialMenu: 'Open social links',
      socialMenuLabel: 'Social links',
      reserveMenuPhone: 'Phone',
      reserveMenuWhatsapp: 'WhatsApp',
      aboutDetailsEyebrow: 'Details',
      aboutDetailsTitle: 'Spatial and material cues to carry through the future real content.',
    },
    actions: {
      contact: 'Contact',
      reserve: 'Reserve',
      menu: 'View menu',
      directions: 'Directions',
      social: 'Social',
      call: 'Call',
      whatsapp: 'WhatsApp',
      email: 'Email',
      gallery: 'Explore gallery',
      about: 'Discover the place',
      legal: 'Legal notice',
      jumpToCategory: 'Jump to category',
    },
    hero: {
      eyebrow: 'Sunlit bistro in the heart of Vieil Antibes',
      title: 'A terrace-led address shaped by honest materials and generous cooking.',
      text:
        'This prototype presents a lively large-format restaurant concept designed for lunch, dinner, and long drinks out on the terrace.',
      primaryLabel: 'Contact the restaurant',
      secondaryLabel: 'View the menu',
      imageLabel: 'Terrace Hero',
    },
    infoStrip: [
      { label: 'Address', value: 'Final address to confirm' },
      { label: 'Hours', value: 'Lunch & dinner service' },
      { label: 'Phone', value: '+33 0 00 00 00 00' },
      { label: 'Mood', value: 'Terrace, bar, wood oven' },
    ],
    home: {
      intro: {
        eyebrow: 'The approach',
        title: 'A restaurant site built to convert quickly, then deepen desire.',
        text:
          'The structure brings the terrace, classic French cooking, wood-fired pizzas, and practical information forward immediately for mobile-first visitors.',
      },
      terrace: {
        eyebrow: 'Terrace first',
        title: 'Use the strongest image early so the terrace sells itself fast.',
        text:
          'This block is reserved for the most persuasive future shot of the venue. It should communicate scale, comfort, light, and summer energy without forcing extra redesign later.',
        imageLabel: 'Sunlit Terrace',
      },
      cuisine: {
        eyebrow: 'Cooking & oven',
        title: 'Bistro cooking, comfort classics, and wood-fired pizzas.',
        text:
          'The final copy will clarify the offer, but the hierarchy is already in place to present signature mains, salads, slow dishes, and the visible oven.',
        ctaLabel: 'Explore the menu',
        imageLabel: 'Wood Oven',
      },
      gallery: {
        eyebrow: 'Atmosphere',
        title: 'Let the visitor feel the place before they ever arrive.',
        text:
          'These future image slots are designed to show the dining room, the bar, the materials, and the rhythm of service. For now, the placeholders define the exact visual role of each block.',
        ctaLabel: 'View the gallery',
        images: ['Dining Room', 'Brass Bar', 'Set Table'],
      },
      story: {
        eyebrow: 'The tone',
        title: 'Authentic in materials, sharp in execution, welcoming every day.',
        text:
          'This area will later hold the restaurant story without turning into a heavy wall of text. The goal is clear personality, not over-explaining.',
        ctaLabel: 'Read the page',
        stats: [
          { value: 'Large', label: 'terrace to highlight' },
          { value: 'Lunch > late', label: 'all-day visit pattern' },
          { value: 'Wood-fired', label: 'visible anchor feature' },
        ],
      },
      access: {
        eyebrow: 'Contact & access',
        title: 'Everything needed to act now, without making people search.',
        text:
          'Contact details, opening hours, route links, and quick actions are grouped here to keep conversion friction low on both mobile and desktop.',
        imageLabel: 'Access Map',
      },
    },
    menuPage: {
      eyebrow: 'The menu',
      title: 'A menu page designed for mobile reading and clean future updates.',
      text:
        'The final dishes will replace these indicative entries. The structure is already prepared for clear categories, visible pricing, and comfortable phone browsing.',
      note:
        'The dish names below are placeholders that demonstrate how the final restaurant menu can be organized.',
      tagLabels: {
        vegetarian: 'Vegetarian',
        vegan: 'Vegan',
        fish: 'Fish',
        pork: 'Pork',
        spicy: 'Spicy',
      },
      categories: [
        {
          id: 'starters',
          title: 'Starters',
          items: [
            { name: 'Daily starter', description: 'Seasonal opener to define', price: '00 €' },
            { name: 'Grilled vegetables', description: 'Final version to confirm', price: '00 €', tags: ['vegan'] },
            { name: 'Small burrata', description: 'Fresh terrace-friendly option', price: '00 €', tags: ['vegetarian'] },
          ],
        },
        {
          id: 'salads',
          title: 'Salads',
          items: [
            { name: 'House salad', description: 'Large lunch salad to refine', price: '00 €', tags: ['vegetarian'] },
            { name: 'Crispy chicken', description: 'Recipe and garnish to confirm', price: '00 €' },
            { name: 'Nicoise style', description: 'Final interpretation to validate', price: '00 €', tags: ['fish'] },
          ],
        },
        {
          id: 'mains',
          title: 'Main plates',
          items: [
            { name: 'Signature entrecote', description: 'Cut, sauce, and side to define', price: '00 €' },
            { name: 'Slow-cooked dish', description: 'House recipe to be provided', price: '00 €', tags: ['pork'] },
            { name: 'Fish of the day', description: 'Daily catch and garnish later', price: '00 €', tags: ['fish'] },
          ],
        },
        {
          id: 'pizzas',
          title: 'Wood-fired pizzas',
          items: [
            { name: 'Oven margherita', description: 'Wood-fired base to refine', price: '00 €', tags: ['vegetarian'] },
            { name: 'Signature pizza', description: 'House recipe to be defined', price: '00 €', tags: ['pork', 'spicy'] },
            { name: 'White pizza', description: 'Final version to confirm', price: '00 €', tags: ['pork'] },
          ],
        },
        {
          id: 'desserts',
          title: 'Desserts',
          items: [
            { name: 'Dessert of the day', description: 'Adapt to the real menu later', price: '00 €' },
            { name: 'Bistro classic', description: 'Final style to specify', price: '00 €' },
            { name: 'Ice cream coupe', description: 'Fresh summer option', price: '00 €' },
          ],
        },
        {
          id: 'drinks',
          title: 'Drinks',
          items: [
            { name: 'House cocktail', description: 'Terrace signature to define', price: '00 €' },
            { name: 'Glass of wine', description: 'Selection to confirm', price: '00 €' },
            { name: 'Cold refreshment', description: 'Final range to complete', price: '00 €' },
          ],
        },
      ],
    },
    galleryPage: {
      eyebrow: 'The gallery',
      title: 'Build around future photography without rebuilding the website.',
      text:
        'This page is designed to receive the real photos later on. The placeholder blocks already lock the framing, sizing, and storytelling rhythm.',
      sections: [
        {
          title: 'Terrace',
          text: 'Show scale, sunlight, table spacing, and the outdoor appeal of the place.',
          images: ['Terrace Angle', 'Terrace Lunch', 'Terrace Detail'],
        },
        {
          title: 'Dining room & bar',
          text: 'Set the indoor tone with wood, stone, mirrors, brass, and depth.',
          images: ['Main Room', 'Large Bar', 'Mirror Detail'],
        },
        {
          title: 'Kitchen & table',
          text: 'Bring the food, the wood oven, and service details into the story.',
          images: ['Wood Oven', 'Pizza Exit', 'Plate Close'],
        },
      ],
    },
    aboutPage: {
      eyebrow: 'About',
      title: 'A page to establish personality and trust without over-talking.',
      text:
        'The final content will explain the idea, hospitality, and restaurant promise. The structure stays calm, premium, and clear for visitors with limited attention.',
      sections: [
        {
          title: 'The setting',
          text:
            'Vieil Antibes, a large terrace, authentic materials, a generous interior, a proper bistro bar, and a visible oven. This page is meant to make that atmosphere tangible.',
          imageLabel: 'Venue Mood',
        },
        {
          title: 'The promise',
          text:
            'Accessible French cooking, well-executed classics, wood-fired pizzas, and a venue that works equally well for a quick lunch or a longer dinner.',
          imageLabel: 'House Cooking',
        },
        {
          title: 'The rhythm',
          text:
            'The site leaves room to express the full daily rhythm of the restaurant: lunch, aperitif, dinner, summer shade, and a terrace with genuine energy.',
          imageLabel: 'Lively Bar',
        },
      ],
      highlights: [
        'Large tourist terrace',
        'Wood & brass bistro bar',
        'Visible wood oven',
        'Renovated authentic materials',
      ],
    },
    contactPage: {
      eyebrow: 'Contact',
      title: 'All practical information in one page that stays simple and efficient.',
      text:
        'This page is designed to answer concrete visitor needs quickly: contact the restaurant, plan the route, check opening hours, and understand access.',
      cards: [
        { title: 'Phone', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
        { title: 'WhatsApp', value: 'Direct message', href: commonContact.whatsappHref },
        { title: 'Email', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
      ],
      addressTitle: 'Address',
      addressValue: 'Vieil Antibes, final address to confirm',
      hoursTitle: 'Opening hours',
      hours: [
        { day: 'Monday', hours: '12:00 - 14:30 / 19:00 - 22:30' },
        { day: 'Tuesday', hours: '12:00 - 14:30 / 19:00 - 22:30' },
        { day: 'Wednesday', hours: '12:00 - 14:30 / 19:00 - 22:30' },
        { day: 'Thursday', hours: '12:00 - 14:30 / 19:00 - 22:30' },
        { day: 'Friday', hours: '12:00 - 14:30 / 19:00 - 23:00' },
        { day: 'Saturday', hours: '12:00 - 15:00 / 19:00 - 23:00' },
        { day: 'Sunday', hours: 'To confirm' },
      ],
      accessTitle: 'Access',
      accessText:
        'Use this area for the practical details that matter on arrival: visible terrace, landmark instructions, nearest parking, and a direct route link for passing visitors.',
      mapLabel: 'Area Map',
    },
    legalPage: {
      eyebrow: 'Legal notice',
      title: 'A ready-made page for the final administrative and legal information.',
      text:
        'The content displayed here is deliberately indicative. The company details, hosting, privacy wording, and legal mentions will be completed before launch.',
      sections: [
        {
          title: 'Site publisher',
          body: 'Company name, address, registration details, legal representative, and contact information.',
        },
        {
          title: 'Hosting',
          body: 'Hosting provider name, address, contact details, and chosen technical environment.',
        },
        {
          title: 'Personal data',
          body: 'The launch site is planned without a cookie banner or heavy analytics stack, but final privacy wording still needs to be completed properly.',
        },
      ],
    },
    footer: {
      summary:
        'Bilingual local prototype ready to be replaced later with the restaurant’s final copy, visuals, and business information.',
      copyright: "Local prototype • La Table D'Antibes",
    },
    quickActions: [
      { label: 'Call', href: commonContact.phoneHref },
      { label: 'WhatsApp', href: commonContact.whatsappHref },
      { label: 'Directions', href: commonContact.directionsHref },
      { label: 'Menu', slug: 'menu' },
    ],
    contactLinks: commonContact,
  },
};
