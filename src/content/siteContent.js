export const supportedLanguages = ['fr', 'en', 'it', 'de', 'nl', 'es', 'ru', 'uk', 'zh', 'ja'];

export const nativeLanguageLabels = {
  fr: 'Français',
  en: 'English',
  it: 'Italiano',
  de: 'Deutsch',
  nl: 'Nederlands',
  es: 'Español',
  ru: 'Русский',
  uk: 'Українська',
  zh: '中文',
  ja: '日本語',
};

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
      it: 'Italiano',
      de: 'Deutsch',
      nl: 'Nederlands',
      es: 'Español',
      ru: 'Русский',
      uk: 'Українська',
      zh: '中文',
    },
    brand: {
      name: 'La Table Antibes',
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
      copyright: 'Prototype local • La Table Antibes',
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
      it: 'Italiano',
      de: 'Deutsch',
      nl: 'Nederlands',
      es: 'Español',
      ru: 'Русский',
      uk: 'Українська',
      zh: '中文',
    },
    brand: {
      name: 'La Table Antibes',
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
      copyright: 'Local prototype • La Table Antibes',
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

siteContent.it = {
  localeName: 'Italiano',
  shortCode: 'IT',
  alternateLanguages: {
    fr: 'Français',
    en: 'English',
    it: 'Italiano',
    de: 'Deutsch',
    nl: 'Nederlands',
    es: 'Español',
    ru: 'Русский',
    uk: 'Українська',
    zh: '中文',
  },
  brand: {
    name: 'La Table Antibes',
    district: 'Vieil Antibes',
    microTag: 'Grande terrazza • Forno a legna • Dal pranzo alla sera',
  },
  navLabels: {
    home: 'Home',
    menu: 'Menu',
    gallery: 'Galleria',
    about: 'Chi siamo',
    contact: 'Contatti',
  },
  uiLabels: {
    languageSwitcher: 'Selettore della lingua',
    toggleMenu: 'Apri il menu',
    toggleReserveMenu: 'Apri le opzioni di prenotazione',
    reserveMenuLabel: 'Opzioni di prenotazione',
    toggleSocialMenu: 'Apri i profili social',
    socialMenuLabel: 'Profili social',
    reserveMenuPhone: 'Telefono',
    reserveMenuWhatsapp: 'WhatsApp',
    aboutDetailsEyebrow: 'Dettagli',
    aboutDetailsTitle: 'Riferimenti di materiali e spazi da sviluppare poi nel contenuto finale.',
  },
  actions: {
    contact: 'Contattare',
    reserve: 'Prenotare',
    menu: 'Vedi il menu',
    directions: 'Itinerario',
    social: 'Social',
    call: 'Chiamare',
    whatsapp: 'WhatsApp',
    email: 'Email',
    gallery: 'Scopri la galleria',
    about: 'Scopri il locale',
    legal: 'Note legali',
    jumpToCategory: 'Vai alla categoria',
  },
  hero: {
    eyebrow: 'Bistrot luminoso nel cuore del Vieil Antibes',
    title: 'Un indirizzo di terrazza, materiali autentici e cucina generosa.',
    text:
      'Prototipo di presentazione per un grande ristorante vivo, pensato per il pranzo, la sera e i bicchieri che si allungano in terrazza.',
    primaryLabel: 'Contatta il ristorante',
    secondaryLabel: 'Vedi il menu',
    imageLabel: 'Terrazza hero',
  },
  infoStrip: [
    { label: 'Indirizzo', value: 'Indirizzo finale da confermare' },
    { label: 'Orari', value: 'Servizio pranzo e cena' },
    { label: 'Telefono', value: '+33 0 00 00 00 00' },
    { label: 'Atmosfera', value: 'Terrazza, bar, forno a legna' },
  ],
  home: {
    intro: {
      eyebrow: 'Lo spirito del luogo',
      title: 'Un ristorante pensato per convincere subito e far venire voglia di restare.',
      text:
        'La struttura mette subito in risalto la terrazza, la cucina francese classica, le pizze al forno a legna e le informazioni pratiche attese da un visitatore mobile.',
    },
    terrace: {
      eyebrow: 'Firma terrazza',
      title: 'Mostrare fin dai primi secondi perché la terrazza conta davvero.',
      text:
        "Questa zona è pensata per accogliere l'immagine più forte del locale. Deve vendere luce, volume e comfort senza appesantire il resto della pagina.",
      imageLabel: 'Grande terrazza',
    },
    cuisine: {
      eyebrow: 'Cucina & forno',
      title: 'Cucina bistrot, piatti confortanti e pizze al forno a legna.',
      text:
        "Il testo finale preciserà l'offerta, ma la gerarchia è già pronta per presentare i grandi classici, le insalate, i piatti a lunga cottura e il forno visibile.",
      ctaLabel: 'Esplora il menu',
      imageLabel: 'Forno visibile',
    },
    gallery: {
      eyebrow: 'Atmosfera',
      title: 'Far percepire il luogo prima ancora della prima visita.',
      text:
        'I futuri visual prenderanno posto qui per mostrare la sala, il bar, i materiali e il ritmo del ristorante. Nel frattempo, i blocchi fanno da riferimenti chiari.',
      ctaLabel: 'Vedi la galleria',
      images: ['Sala ampia', 'Bar in ottone', 'Tavola apparecchiata'],
    },
    story: {
      eyebrow: 'Il tono',
      title: 'Autentico nei materiali, curato nell’esecuzione, accogliente ogni giorno.',
      text:
        'Questa zona serve a raccontare il ristorante senza perdersi in un lungo racconto. L’obiettivo è fissare una personalità credibile e immediatamente leggibile.',
      ctaLabel: 'Leggi la pagina',
      stats: [
        { value: 'Grande', label: 'terrazza da valorizzare' },
        { value: 'Pranzo > sera', label: 'ritmo pensato per tutta la giornata' },
        { value: 'Forno a legna', label: 'elemento visibile del luogo' },
      ],
    },
    access: {
      eyebrow: 'Contatti & accesso',
      title: 'Tutto ciò che serve per passare all’azione senza cercare.',
      text:
        'Contatti, orari, itinerario e accessi rapidi sono riuniti qui per massimizzare la conversione su mobile e desktop.',
      imageLabel: 'Mappa accesso',
    },
  },
  menuPage: {
    eyebrow: 'Il menu',
    title: 'Una pagina leggibile, mobile e pronta per essere aggiornata in modo pulito.',
    text:
      'Il menu finale sostituirà questi contenuti indicativi. La struttura è già pensata per categorie chiare, prezzi visibili e una lettura semplice da telefono.',
    note:
      'Le voci qui sotto sono esempi di struttura. Serviranno come base per permettere al cliente di fornire i piatti definitivi.',
    tagLabels: {
      vegetarian: 'Vegetariano',
      vegan: 'Vegano',
      fish: 'Pesce',
      pork: 'Maiale',
      spicy: 'Piccante',
    },
    categories: [
      {
        id: 'starters',
        title: 'Antipasti',
        items: [
          { name: 'Antipasto del giorno', description: 'Antipasto stagionale da precisare', price: '00 €' },
          { name: 'Verdure grigliate', description: 'Versione finale da definire', price: '00 €', tags: ['vegan'] },
          { name: 'Piccola burrata', description: 'Richiamo fresco ed estivo', price: '00 €', tags: ['vegetarian'] },
        ],
      },
      {
        id: 'salads',
        title: 'Insalate',
        items: [
          { name: 'Insalata della casa', description: 'Grande insalata da pranzo da precisare', price: '00 €', tags: ['vegetarian'] },
          { name: 'Pollo croccante', description: 'Ricetta e contorni da confermare', price: '00 €' },
          { name: 'Versione nizzarda', description: 'Interpretazione finale da validare', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'mains',
        title: 'Piatti',
        items: [
          { name: 'Entrecôte della casa', description: 'Taglio, salsa e contorno da precisare', price: '00 €' },
          { name: 'Piatto stufato', description: 'Ricetta della casa da completare', price: '00 €', tags: ['pork'] },
          { name: 'Pesce del giorno', description: 'Arrivo e cottura da definire', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'pizzas',
        title: 'Pizze al forno a legna',
        items: [
          { name: 'Margherita del forno', description: 'Base cotta a legna da precisare', price: '00 €', tags: ['vegetarian'] },
          { name: 'Pizza della casa', description: 'Ricetta della casa da completare', price: '00 €', tags: ['pork', 'spicy'] },
          { name: 'Pizza bianca', description: 'Versione finale da confermare', price: '00 €', tags: ['pork'] },
        ],
      },
      {
        id: 'desserts',
        title: 'Dolci',
        items: [
          { name: 'Dessert del giorno', description: 'Da finalizzare secondo il menu reale', price: '00 €' },
          { name: 'Grande classico', description: 'Versione bistrot da precisare', price: '00 €' },
          { name: 'Coppa gelato', description: 'Opzione fresca per l’estate', price: '00 €' },
        ],
      },
      {
        id: 'drinks',
        title: 'Bevande',
        items: [
          { name: 'Cocktail della casa', description: 'Cocktail della terrazza da definire', price: '00 €' },
          { name: 'Calice di vino', description: 'Selezione da confermare', price: '00 €' },
          { name: 'Bevanda fresca', description: 'Offerta finale da completare', price: '00 €' },
        ],
      },
    ],
  },
  galleryPage: {
    eyebrow: 'La galleria',
    title: 'Preparare i futuri visual senza dover rifare il sito.',
    text:
      'Questa pagina è pensata per accogliere poi le vere foto del locale. I blocchi già presenti servono a fissare inquadrature, dimensioni e ritmo visivo.',
    sections: [
      {
        title: 'Terrazza',
        text: 'Mostrare ampiezza, luce, tavoli e la sensazione di spazio.',
        images: ['Terrazza angolo', 'Terrazza servizio', 'Dettaglio terrazza'],
      },
      {
        title: 'Sala & bar',
        text: 'Definire il tono interno con legno, pietra, specchi, ottone e profondità.',
        images: ['Sala ampia', 'Grande bar', 'Dettaglio specchio'],
      },
      {
        title: 'Cucina & tavola',
        text: 'Far vivere il piatto, il forno a legna e i dettagli di servizio.',
        images: ['Forno a legna', 'Pizza in uscita', 'Piatto close-up'],
      },
    ],
  },
  aboutPage: {
    eyebrow: 'Chi siamo',
    title: 'Una pagina per fissare la personalità del luogo senza esagerare.',
    text:
      'Il contenuto finale spiegherà l’intenzione, l’accoglienza e la promessa del ristorante. La struttura mantiene un tono calmo, premium e leggibile per visitatori di passaggio.',
    sections: [
      {
        title: 'Il contesto',
        text:
          'Vieil Antibes, grande terrazza, materiali autentici, sala generosa, vero bar bistrot e forno visibile. L’idea è rendere questa atmosfera tangibile fin dal primo scroll.',
        imageLabel: 'Atmosfera del luogo',
      },
      {
        title: 'La promessa',
        text:
          'Cucina francese accessibile, classici ben eseguiti, pizze al forno a legna e un locale pensato tanto per un pranzo semplice quanto per una cena più lunga.',
        imageLabel: 'Cucina della casa',
      },
      {
        title: 'Il ritmo',
        text:
          'Il sito lascia spazio per raccontare tutta la giornata del ristorante: pranzo, aperitivo, cena, ombra estiva e l’energia autentica della grande terrazza.',
        imageLabel: 'Bar vivace',
      },
    ],
    highlights: [
      'Grande terrazza turistica',
      'Bar bistrot in legno e ottone',
      'Forno a legna visibile',
      'Materiali autentici rinnovati',
    ],
  },
  contactPage: {
    eyebrow: 'Contatti',
    title: 'Tutte le informazioni pratiche in una pagina semplice ed efficace.',
    text:
      'Questa pagina è pensata per rispondere rapidamente ai bisogni concreti: contattare il ristorante, preparare il percorso, verificare gli orari e capire gli accessi.',
    cards: [
      { title: 'Telefono', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
      { title: 'WhatsApp', value: 'Messaggio diretto', href: commonContact.whatsappHref },
      { title: 'Email', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
    ],
    addressTitle: 'Indirizzo',
    addressValue: 'Vieil Antibes, indirizzo finale da confermare',
    hoursTitle: 'Orari',
    hours: [
      { day: 'Lunedì', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Martedì', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Mercoledì', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Giovedì', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Venerdì', hours: '12:00 - 14:30 / 19:00 - 23:00' },
      { day: 'Sabato', hours: '12:00 - 15:00 / 19:00 - 23:00' },
      { day: 'Domenica', hours: 'Da confermare' },
    ],
    accessTitle: 'Accesso',
    accessText:
      'Inserire qui i dettagli pratici più utili: terrazza visibile, punto di riferimento, parcheggio più vicino e link diretto per raggiungere il ristorante.',
    mapLabel: 'Mappa zona',
  },
  legalPage: {
    eyebrow: 'Note legali',
    title: 'Una pagina pronta ad accogliere le informazioni amministrative finali.',
    text:
      'Il contenuto visualizzato qui è volutamente indicativo. Le informazioni legali, l’hosting, la società e la privacy saranno completati prima della messa online.',
    sections: [
      {
        title: 'Editore del sito',
        body: 'Nome della società, indirizzo, dati di registrazione, rappresentante legale e contatti.',
      },
      {
        title: 'Hosting',
        body: 'Nome del provider hosting, indirizzo, dati di contatto e ambiente tecnico scelto.',
      },
      {
        title: 'Dati personali',
        body: 'Il sito di lancio è previsto senza banner cookie e senza stack analytics pesante, ma le diciture finali dovranno comunque essere completate correttamente.',
      },
    ],
  },
  footer: {
    summary:
      'Prototipo locale pronto per essere sostituito poi con i testi, i visual e le informazioni definitive del ristorante.',
    copyright: 'Prototipo locale • La Table Antibes',
  },
  quickActions: [
    { label: 'Chiama', href: commonContact.phoneHref },
    { label: 'WhatsApp', href: commonContact.whatsappHref },
    { label: 'Itinerario', href: commonContact.directionsHref },
    { label: 'Menu', slug: 'menu' },
  ],
  contactLinks: commonContact,
};

siteContent.de = {
  localeName: 'Deutsch',
  shortCode: 'DE',
  alternateLanguages: {
    fr: 'Französisch',
    en: 'Englisch',
    it: 'Italienisch',
    de: 'Deutsch',
    nl: 'Niederländisch',
    es: 'Spanisch',
    ru: 'Russisch',
    uk: 'Ukrainisch',
    zh: 'Chinesisch',
  },
  brand: {
    name: 'La Table Antibes',
    district: 'Vieil Antibes',
    microTag: 'Große Terrasse • Holzofen • Vom Mittag bis zum Abend',
  },
  navLabels: {
    home: 'Start',
    menu: 'Menü',
    gallery: 'Galerie',
    about: 'Über uns',
    contact: 'Kontakt',
  },
  uiLabels: {
    languageSwitcher: 'Sprachauswahl',
    toggleMenu: 'Menü öffnen',
    toggleReserveMenu: 'Reservierungsoptionen öffnen',
    reserveMenuLabel: 'Reservierungsoptionen',
    toggleSocialMenu: 'Social-Kanäle öffnen',
    socialMenuLabel: 'Social-Kanäle',
    reserveMenuPhone: 'Telefon',
    reserveMenuWhatsapp: 'WhatsApp',
    aboutDetailsEyebrow: 'Details',
    aboutDetailsTitle: 'Hinweise zu Materialien und Raum, die später im finalen Inhalt weitergeführt werden.',
  },
  actions: {
    contact: 'Kontakt',
    reserve: 'Reservieren',
    menu: 'Menü ansehen',
    directions: 'Route',
    social: 'Kanäle',
    call: 'Anrufen',
    whatsapp: 'WhatsApp',
    email: 'E-Mail',
    gallery: 'Galerie entdecken',
    about: 'Den Ort entdecken',
    legal: 'Impressum',
    jumpToCategory: 'Zur Kategorie',
  },
  hero: {
    eyebrow: 'Sonniges Bistro im Herzen von Vieil Antibes',
    title: 'Eine Adresse für Terrasse, ehrliche Materialien und großzügige Küche.',
    text:
      'Präsentationsprototyp für ein lebendiges großes Restaurant, gedacht für Mittagessen, Abendessen und lange Drinks auf der Terrasse.',
    primaryLabel: 'Restaurant kontaktieren',
    secondaryLabel: 'Menü ansehen',
    imageLabel: 'Terrassen-Hero',
  },
  infoStrip: [
    { label: 'Adresse', value: 'Endgültige Adresse zu bestätigen' },
    { label: 'Öffnungszeiten', value: 'Mittags- und Abendservice' },
    { label: 'Telefon', value: '+33 0 00 00 00 00' },
    { label: 'Atmosphäre', value: 'Terrasse, Bar, Holzofen' },
  ],
  home: {
    intro: {
      eyebrow: 'Der Geist des Ortes',
      title: 'Ein Restaurant, das schnell überzeugt und Lust aufs Bleiben macht.',
      text:
        'Die Struktur stellt sofort die Terrasse, klassische französische Küche, Holzofenpizzen und die wichtigsten praktischen Infos für mobile Besucher in den Vordergrund.',
    },
    terrace: {
      eyebrow: 'Terrassen-Highlight',
      title: 'Schon in den ersten Sekunden zeigen, warum die Terrasse so wichtig ist.',
      text:
        'Dieser Bereich ist für das stärkste Bild des Ortes reserviert. Es soll Licht, Volumen und Komfort verkaufen, ohne die restliche Seite zu überladen.',
      imageLabel: 'Große Terrasse',
    },
    cuisine: {
      eyebrow: 'Küche & Ofen',
      title: 'Bistroküche, Wohlfühlgerichte und Pizzen aus dem Holzofen.',
      text:
        'Der finale Text wird das Angebot präzisieren, aber die Hierarchie steht schon, um Klassiker, Salate, Schmorgerichte und den sichtbaren Ofen zu präsentieren.',
      ctaLabel: 'Menü entdecken',
      imageLabel: 'Sichtbarer Ofen',
    },
    gallery: {
      eyebrow: 'Atmosphäre',
      title: 'Den Ort spürbar machen, noch vor dem ersten Besuch.',
      text:
        'Hier kommen später die echten Bilder hinein, um Gastraum, Bar, Materialien und Rhythmus des Restaurants zu zeigen. Bis dahin dienen die Blöcke als klare Platzhalter.',
      ctaLabel: 'Galerie ansehen',
      images: ['Großer Gastraum', 'Messingbar', 'Gedeckter Tisch'],
    },
    story: {
      eyebrow: 'Der Ton',
      title: 'Authentisch in den Materialien, klar in der Ausführung, täglich einladend.',
      text:
        'Dieser Bereich soll das Restaurant erzählen, ohne in einen langen Text auszuufern. Ziel ist eine glaubwürdige und sofort verständliche Persönlichkeit.',
      ctaLabel: 'Seite lesen',
      stats: [
        { value: 'Groß', label: 'Terrasse hervorheben' },
        { value: 'Mittag > Abend', label: 'für den ganzen Tag gedacht' },
        { value: 'Holzofen', label: 'sichtbarer Anker des Ortes' },
      ],
    },
    access: {
      eyebrow: 'Kontakt & Anfahrt',
      title: 'Alles Nötige, um ohne Suchen aktiv zu werden.',
      text:
        'Kontaktdaten, Öffnungszeiten, Route und Schnellzugriffe sind hier gebündelt, um die Conversion auf Mobile und Desktop zu maximieren.',
      imageLabel: 'Anfahrtsplan',
    },
  },
  menuPage: {
    eyebrow: 'Das Menü',
    title: 'Eine gut lesbare, mobile Seite, die später sauber gepflegt werden kann.',
    text:
      'Das endgültige Menü ersetzt diese Beispielinhalte. Die Struktur ist bereits auf klare Kategorien, sichtbare Preise und einfaches Lesen am Handy ausgelegt.',
    note:
      'Die Einträge unten sind Strukturbeispiele. Sie dienen als Grundlage, damit der Kunde später die finalen Gerichte liefern kann.',
    tagLabels: {
      vegetarian: 'Vegetarisch',
      vegan: 'Vegan',
      fish: 'Fisch',
      pork: 'Schwein',
      spicy: 'Scharf',
    },
    categories: [
      {
        id: 'starters',
        title: 'Vorspeisen',
        items: [
          { name: 'Vorspeise des Tages', description: 'Saisonale Vorspeise noch festzulegen', price: '00 €' },
          { name: 'Gegrilltes Gemüse', description: 'Endgültige Version noch festzulegen', price: '00 €', tags: ['vegan'] },
          { name: 'Kleine Burrata', description: 'Frischer, sommerlicher Akzent', price: '00 €', tags: ['vegetarian'] },
        ],
      },
      {
        id: 'salads',
        title: 'Salate',
        items: [
          { name: 'Haussalat', description: 'Großer Lunch-Salat noch zu präzisieren', price: '00 €', tags: ['vegetarian'] },
          { name: 'Knuspriges Hähnchen', description: 'Rezept und Beilagen noch zu bestätigen', price: '00 €' },
          { name: 'Niçoise-Variante', description: 'Endgültige Interpretation noch zu validieren', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'mains',
        title: 'Hauptgerichte',
        items: [
          { name: 'Entrecôte des Hauses', description: 'Stück, Sauce und Beilage noch festzulegen', price: '00 €' },
          { name: 'Schmorgericht', description: 'Hausrezept noch einzutragen', price: '00 €', tags: ['pork'] },
          { name: 'Fisch des Tages', description: 'Anlieferung und Garung noch festzulegen', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'pizzas',
        title: 'Holzofenpizzen',
        items: [
          { name: 'Margherita aus dem Holzofen', description: 'Holzofenbasis noch zu präzisieren', price: '00 €', tags: ['vegetarian'] },
          { name: 'Pizza des Hauses', description: 'Hausrezept noch einzutragen', price: '00 €', tags: ['pork', 'spicy'] },
          { name: 'Weiße Pizza', description: 'Endgültige Version noch zu bestätigen', price: '00 €', tags: ['pork'] },
        ],
      },
      {
        id: 'desserts',
        title: 'Desserts',
        items: [
          { name: 'Dessert des Tages', description: 'Später an die echte Karte anpassen', price: '00 €' },
          { name: 'Großer Klassiker', description: 'Bistro-Version noch zu präzisieren', price: '00 €' },
          { name: 'Eisbecher', description: 'Frische Sommeroption', price: '00 €' },
        ],
      },
      {
        id: 'drinks',
        title: 'Getränke',
        items: [
          { name: 'Hauscocktail', description: 'Hauscocktail für die Terrasse noch festzulegen', price: '00 €' },
          { name: 'Glas Wein', description: 'Auswahl noch zu bestätigen', price: '00 €' },
          { name: 'Kühles Getränk', description: 'Endgültiges Angebot noch zu ergänzen', price: '00 €' },
        ],
      },
    ],
  },
  galleryPage: {
    eyebrow: 'Die Galerie',
    title: 'Die zukünftigen Bilder vorbereiten, ohne die Website neu bauen zu müssen.',
    text:
      'Diese Seite ist dafür gedacht, später die echten Fotos des Ortes aufzunehmen. Die Platzhalterblöcke definieren bereits Bildausschnitt, Größen und visuellen Rhythmus.',
    sections: [
      {
        title: 'Terrasse',
        text: 'Größe, Licht, Tische und das Raumgefühl zeigen.',
        images: ['Terrasse Winkel', 'Terrasse Essen', 'Terrasse Detail'],
      },
      {
        title: 'Gastraum & Bar',
        text: 'Den Innenton mit Holz, Stein, Spiegeln, Messing und Tiefe setzen.',
        images: ['Großer Gastraum', 'Große Bar', 'Spiegeldetail'],
      },
      {
        title: 'Küche & Tisch',
        text: 'Gerichte, Holzofen und Servicedetails sichtbar machen.',
        images: ['Holzofen', 'Pizza aus dem Ofen', 'Gericht Nahaufnahme'],
      },
    ],
  },
  aboutPage: {
    eyebrow: 'Über uns',
    title: 'Eine Seite, die die Persönlichkeit des Ortes zeigt, ohne zu viel zu erzählen.',
    text:
      'Der finale Inhalt erklärt Idee, Gastfreundschaft und das Versprechen des Restaurants. Die Struktur bleibt ruhig, hochwertig und klar für Besucher mit wenig Zeit.',
    sections: [
      {
        title: 'Das Umfeld',
        text:
          'Vieil Antibes, große Terrasse, authentische Materialien, großzügiger Innenraum, echte Bistrobar und sichtbarer Ofen. Diese Stimmung soll schon beim ersten Scrollen greifbar werden.',
        imageLabel: 'Stimmung des Ortes',
      },
      {
        title: 'Das Versprechen',
        text:
          'Zugängliche französische Küche, gut gemachte Klassiker, Holzofenpizzen und ein Ort, der sowohl für ein schnelles Mittagessen als auch für ein längeres Abendessen funktioniert.',
        imageLabel: 'Hausküche',
      },
      {
        title: 'Der Rhythmus',
        text:
          'Die Seite lässt Raum, den ganzen Tagesverlauf des Restaurants zu erzählen: Mittag, Aperitif, Abendessen, Sommer-Schatten und die echte Energie der großen Terrasse.',
        imageLabel: 'Lebendige Bar',
      },
    ],
    highlights: [
      'Große touristische Terrasse',
      'Bistrobar aus Holz & Messing',
      'Sichtbarer Holzofen',
      'Erneuerte authentische Materialien',
    ],
  },
  contactPage: {
    eyebrow: 'Kontakt',
    title: 'Alle praktischen Informationen auf einer einfachen und effizienten Seite.',
    text:
      'Diese Seite ist dafür gedacht, konkrete Bedürfnisse schnell zu beantworten: das Restaurant kontaktieren, die Anfahrt vorbereiten, Öffnungszeiten prüfen und den Zugang verstehen.',
    cards: [
      { title: 'Telefon', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
      { title: 'WhatsApp', value: 'Direktnachricht', href: commonContact.whatsappHref },
      { title: 'E-Mail', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
    ],
    addressTitle: 'Adresse',
    addressValue: 'Vieil Antibes, endgültige Adresse zu bestätigen',
    hoursTitle: 'Öffnungszeiten',
    hours: [
      { day: 'Montag', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Dienstag', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Mittwoch', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Donnerstag', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Freitag', hours: '12:00 - 14:30 / 19:00 - 23:00' },
      { day: 'Samstag', hours: '12:00 - 15:00 / 19:00 - 23:00' },
      { day: 'Sonntag', hours: 'Noch zu bestätigen' },
    ],
    accessTitle: 'Anfahrt',
    accessText:
      'Hier kommen die wichtigsten praktischen Hinweise hinein: sichtbare Terrasse, Orientierungspunkt, nächster Parkplatz und direkter Routenlink für Gäste auf der Durchreise.',
    mapLabel: 'Karte',
  },
  legalPage: {
    eyebrow: 'Impressum',
    title: 'Eine fertige Seite für die späteren administrativen und rechtlichen Informationen.',
    text:
      'Der hier angezeigte Inhalt ist bewusst beispielhaft. Unternehmensdaten, Hosting, Datenschutz und rechtliche Hinweise werden vor dem Launch ergänzt.',
    sections: [
      {
        title: 'Seitenbetreiber',
        body: 'Name des Unternehmens, Adresse, Registrierungsdaten, gesetzlicher Vertreter und Kontaktdaten.',
      },
      {
        title: 'Hosting',
        body: 'Name des Hosting-Anbieters, Adresse, Kontaktdaten und die gewählte technische Umgebung.',
      },
      {
        title: 'Personenbezogene Daten',
        body: 'Die Launch-Version ist ohne Cookie-Banner und ohne schwere Analytics-Stack geplant, aber die finalen Datenschutzhinweise müssen dennoch sauber ergänzt werden.',
      },
    ],
  },
  footer: {
    summary:
      'Lokaler Prototyp, der später durch die endgültigen Texte, Bilder und Geschäftsinformationen des Restaurants ersetzt wird.',
    copyright: 'Lokaler Prototyp • La Table Antibes',
  },
  quickActions: [
    { label: 'Anrufen', href: commonContact.phoneHref },
    { label: 'WhatsApp', href: commonContact.whatsappHref },
    { label: 'Route', href: commonContact.directionsHref },
    { label: 'Menü', slug: 'menu' },
  ],
  contactLinks: commonContact,
};

siteContent.nl = {
  localeName: 'Nederlands',
  shortCode: 'NL',
  alternateLanguages: {
    fr: 'Frans',
    en: 'Engels',
    it: 'Italiaans',
    de: 'Duits',
    nl: 'Nederlands',
    es: 'Spaans',
    ru: 'Russisch',
    uk: 'Oekraïens',
    zh: 'Chinees',
  },
  brand: {
    name: 'La Table Antibes',
    district: 'Vieil Antibes',
    microTag: 'Groot terras • Houtoven • Van lunch tot avond',
  },
  navLabels: {
    home: 'Home',
    menu: 'Menu',
    gallery: 'Galerij',
    about: 'Over ons',
    contact: 'Contact',
  },
  uiLabels: {
    languageSwitcher: 'Taalkiezer',
    toggleMenu: 'Menu openen',
    toggleReserveMenu: 'Reserveringsopties openen',
    reserveMenuLabel: 'Reserveringsopties',
    toggleSocialMenu: 'Open sociale links',
    socialMenuLabel: 'Sociale links',
    reserveMenuPhone: 'Telefoon',
    reserveMenuWhatsapp: 'WhatsApp',
    aboutDetailsEyebrow: 'Details',
    aboutDetailsTitle: 'Aanknopingspunten voor materialen en ruimte om later door te trekken in de definitieve content.',
  },
  actions: {
    contact: 'Contact',
    reserve: 'Reserveren',
    menu: 'Bekijk het menu',
    directions: 'Route',
    social: 'Socials',
    call: 'Bellen',
    whatsapp: 'WhatsApp',
    email: 'E-mail',
    gallery: 'Bekijk de galerij',
    about: 'Ontdek de plek',
    legal: 'Juridische informatie',
    jumpToCategory: 'Ga naar categorie',
  },
  hero: {
    eyebrow: 'Zonnige bistro in het hart van Vieil Antibes',
    title: 'Een adres voor terras, eerlijke materialen en royale keuken.',
    text:
      'Presentatieprototype voor een levendig groot restaurant, bedacht voor lunch, diner en lange drankjes op het terras.',
    primaryLabel: 'Neem contact op met het restaurant',
    secondaryLabel: 'Bekijk het menu',
    imageLabel: 'Terras hero',
  },
  infoStrip: [
    { label: 'Adres', value: 'Definitief adres nog te bevestigen' },
    { label: 'Openingstijden', value: 'Lunch- en dinerservice' },
    { label: 'Telefoon', value: '+33 0 00 00 00 00' },
    { label: 'Sfeer', value: 'Terras, bar, houtoven' },
  ],
  home: {
    intro: {
      eyebrow: 'De sfeer van de plek',
      title: 'Een restaurant dat snel overtuigt en daarna zin geeft om te blijven.',
      text:
        'De structuur zet meteen het terras, de klassieke Franse keuken, de houtovenpizza’s en de praktische info voor mobiele bezoekers op de voorgrond.',
    },
    terrace: {
      eyebrow: 'Terras in beeld',
      title: 'Meteen laten zien waarom het terras zo belangrijk is.',
      text:
        'Deze zone is bedoeld voor het sterkste beeld van de zaak. Het moet licht, volume en comfort verkopen zonder de rest van de pagina te verzwaren.',
      imageLabel: 'Groot terras',
    },
    cuisine: {
      eyebrow: 'Keuken & oven',
      title: 'Bistrokeuken, comfortgerechten en pizza’s uit de houtoven.',
      text:
        'De definitieve tekst zal het aanbod preciseren, maar de hiërarchie staat al klaar om klassiekers, salades, stoofgerechten en de zichtbare oven te presenteren.',
      ctaLabel: 'Menu bekijken',
      imageLabel: 'Zichtbare oven',
    },
    gallery: {
      eyebrow: 'Sfeer',
      title: 'De plek laten voelen nog vóór het eerste bezoek.',
      text:
        'De toekomstige beelden komen hier om de zaal, de bar, de materialen en het ritme van het restaurant te tonen. Tot dan dienen de blokken als duidelijke placeholders.',
      ctaLabel: 'Galerij bekijken',
      images: ['Ruime zaal', 'Messing bar', 'Gedekte tafel'],
    },
    story: {
      eyebrow: 'De toon',
      title: 'Authentiek in de materialen, strak in de uitvoering, elke dag gastvrij.',
      text:
        'Deze zone zal het restaurant vertellen zonder in een lang verhaal te vervallen. Het doel is een geloofwaardige en meteen leesbare persoonlijkheid.',
      ctaLabel: 'Pagina lezen',
      stats: [
        { value: 'Groot', label: 'terras om te benadrukken' },
        { value: 'Lunch > avond', label: 'ritme voor de hele dag' },
        { value: 'Houtoven', label: 'zichtbaar kernonderdeel' },
      ],
    },
    access: {
      eyebrow: 'Contact & bereikbaarheid',
      title: 'Alles wat nodig is om direct actie te ondernemen.',
      text:
        'Contactgegevens, openingstijden, route en snelle acties zijn hier gebundeld om de conversie op mobiel en desktop te maximaliseren.',
      imageLabel: 'Bereikbaarheidskaart',
    },
  },
  menuPage: {
    eyebrow: 'Het menu',
    title: 'Een goed leesbare mobiele pagina die later netjes kan worden bijgewerkt.',
    text:
      'Het definitieve menu vervangt deze voorbeeldinhoud. De structuur is al klaar voor duidelijke categorieën, zichtbare prijzen en comfortabel lezen op telefoon.',
    note:
      'De onderstaande benamingen zijn structuurvoorbeelden. Ze dienen als basis zodat de klant later de definitieve gerechten kan aanleveren.',
    tagLabels: {
      vegetarian: 'Vegetarisch',
      vegan: 'Vegan',
      fish: 'Vis',
      pork: 'Varkensvlees',
      spicy: 'Pittig',
    },
    categories: [
      {
        id: 'starters',
        title: 'Voorgerechten',
        items: [
          { name: 'Voorgerecht van de dag', description: 'Seizoensstarter nog te bepalen', price: '00 €' },
          { name: 'Gegrilde groenten', description: 'Definitieve versie nog te bepalen', price: '00 €', tags: ['vegan'] },
          { name: 'Kleine burrata', description: 'Frisse zomerse invalshoek', price: '00 €', tags: ['vegetarian'] },
        ],
      },
      {
        id: 'salads',
        title: 'Salades',
        items: [
          { name: 'Huissalade', description: 'Grote lunchsalade nog te preciseren', price: '00 €', tags: ['vegetarian'] },
          { name: 'Krokante kip', description: 'Recept en garnituur nog te bevestigen', price: '00 €' },
          { name: 'Niçoise-variant', description: 'Definitieve interpretatie nog te valideren', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'mains',
        title: 'Hoofdgerechten',
        items: [
          { name: 'Entrecôte van het huis', description: 'Stuk vlees, saus en bijgerecht nog te bepalen', price: '00 €' },
          { name: 'Stoofgerecht', description: 'Huisrecept nog in te vullen', price: '00 €', tags: ['pork'] },
          { name: 'Vis van de dag', description: 'Aanvoer en bereiding nog te bepalen', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'pizzas',
        title: 'Pizza’s uit de houtoven',
        items: [
          { name: 'Oven-margherita', description: 'Houtovenbasis nog te preciseren', price: '00 €', tags: ['vegetarian'] },
          { name: 'Pizza van het huis', description: 'Huisrecept nog in te vullen', price: '00 €', tags: ['pork', 'spicy'] },
          { name: 'Witte pizza', description: 'Definitieve versie nog te bevestigen', price: '00 €', tags: ['pork'] },
        ],
      },
      {
        id: 'desserts',
        title: 'Desserts',
        items: [
          { name: 'Dessert van de dag', description: 'Later aanpassen aan het echte menu', price: '00 €' },
          { name: 'Grote klassieker', description: 'Bistroversie nog te preciseren', price: '00 €' },
          { name: 'IJscoupe', description: 'Frisse optie voor de zomer', price: '00 €' },
        ],
      },
      {
        id: 'drinks',
        title: 'Dranken',
        items: [
          { name: 'Cocktail van het huis', description: 'Terrascocktail nog te bepalen', price: '00 €' },
          { name: 'Glas wijn', description: 'Selectie nog te bevestigen', price: '00 €' },
          { name: 'Koud drankje', description: 'Definitief aanbod nog aan te vullen', price: '00 €' },
        ],
      },
    ],
  },
  galleryPage: {
    eyebrow: 'De galerij',
    title: 'Toekomstige beelden voorbereiden zonder de website te moeten herbouwen.',
    text:
      'Deze pagina is bedoeld om later de echte foto’s van de zaak te ontvangen. De placeholders leggen nu al cadrering, formaat en visueel ritme vast.',
    sections: [
      {
        title: 'Terras',
        text: 'Schaal, licht, tafels en het gevoel van ruimte tonen.',
        images: ['Terrashoek', 'Terras service', 'Terrasdetail'],
      },
      {
        title: 'Zaal & bar',
        text: 'De binnensfeer neerzetten met hout, steen, spiegels, messing en diepte.',
        images: ['Ruime zaal', 'Grote bar', 'Spiegeldetail'],
      },
      {
        title: 'Keuken & tafel',
        text: 'Het gerecht, de houtoven en de servicedetails laten leven.',
        images: ['Houtoven', 'Pizza uit de oven', 'Close-up gerecht'],
      },
    ],
  },
  aboutPage: {
    eyebrow: 'Over ons',
    title: 'Een pagina om de persoonlijkheid van de plek vast te leggen zonder te veel uit te leggen.',
    text:
      'De definitieve inhoud zal de intentie, gastvrijheid en belofte van het restaurant uitleggen. De structuur blijft rustig, premium en duidelijk voor bezoekers met weinig tijd.',
    sections: [
      {
        title: 'De omgeving',
        text:
          'Vieil Antibes, groot terras, authentieke materialen, royale binnenruimte, echte bistrobar en zichtbare oven. Het idee is om die sfeer meteen tastbaar te maken.',
        imageLabel: 'Sfeer van de plek',
      },
      {
        title: 'De belofte',
        text:
          'Toegankelijke Franse keuken, goed uitgevoerde klassiekers, houtovenpizza’s en een plek die even goed werkt voor een snelle lunch als voor een langer diner.',
        imageLabel: 'Huiskeuken',
      },
      {
        title: 'Het ritme',
        text:
          'De site laat ruimte om het volledige dagritme van het restaurant te vertellen: lunch, aperitief, diner, zomerschaduw en de echte energie van het grote terras.',
        imageLabel: 'Levendige bar',
      },
    ],
    highlights: [
      'Groot toeristisch terras',
      'Bistrobar in hout en messing',
      'Zichtbare houtoven',
      'Gerenoveerde authentieke materialen',
    ],
  },
  contactPage: {
    eyebrow: 'Contact',
    title: 'Alle praktische informatie op één eenvoudige en efficiënte pagina.',
    text:
      'Deze pagina is bedoeld om concrete vragen snel te beantwoorden: contact opnemen met het restaurant, de route plannen, openingstijden controleren en de bereikbaarheid begrijpen.',
    cards: [
      { title: 'Telefoon', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
      { title: 'WhatsApp', value: 'Direct bericht', href: commonContact.whatsappHref },
      { title: 'E-mail', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
    ],
    addressTitle: 'Adres',
    addressValue: 'Vieil Antibes, definitief adres nog te bevestigen',
    hoursTitle: 'Openingstijden',
    hours: [
      { day: 'Maandag', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Dinsdag', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Woensdag', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Donderdag', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Vrijdag', hours: '12:00 - 14:30 / 19:00 - 23:00' },
      { day: 'Zaterdag', hours: '12:00 - 15:00 / 19:00 - 23:00' },
      { day: 'Zondag', hours: 'Te bevestigen' },
    ],
    accessTitle: 'Bereikbaarheid',
    accessText:
      'Plaats hier de belangrijkste praktische details: zichtbaar terras, herkenningspunt, dichtstbijzijnde parking en een directe routelink voor bezoekers onderweg.',
    mapLabel: 'Kaart',
  },
  legalPage: {
    eyebrow: 'Juridische informatie',
    title: 'Een pagina die klaarstaat voor de definitieve administratieve en juridische informatie.',
    text:
      'De inhoud die hier wordt getoond is bewust indicatief. Bedrijfsgegevens, hosting, privacy en juridische vermeldingen worden voor de lancering aangevuld.',
    sections: [
      {
        title: 'Uitgever van de site',
        body: 'Naam van de onderneming, adres, registratiedetails, wettelijke vertegenwoordiger en contactgegevens.',
      },
      {
        title: 'Hosting',
        body: 'Naam van de hostingprovider, adres, contactgegevens en gekozen technische omgeving.',
      },
      {
        title: 'Persoonsgegevens',
        body: 'De launch-versie is voorzien zonder cookiebanner en zonder zware analytics-stack, maar de definitieve privacytekst moet wel correct worden toegevoegd.',
      },
    ],
  },
  footer: {
    summary:
      'Lokale prototypeversie die later wordt vervangen door de definitieve teksten, beelden en bedrijfsinformatie van het restaurant.',
    copyright: 'Lokaal prototype • La Table Antibes',
  },
  quickActions: [
    { label: 'Bellen', href: commonContact.phoneHref },
    { label: 'WhatsApp', href: commonContact.whatsappHref },
    { label: 'Route', href: commonContact.directionsHref },
    { label: 'Menu', slug: 'menu' },
  ],
  contactLinks: commonContact,
};

siteContent.es = {
  localeName: 'Español',
  shortCode: 'ES',
  alternateLanguages: {
    fr: 'Francés',
    en: 'Inglés',
    it: 'Italiano',
    de: 'Alemán',
    nl: 'Neerlandés',
    es: 'Español',
    ru: 'Ruso',
    uk: 'Ucraniano',
    zh: 'Chino',
  },
  brand: {
    name: 'La Table Antibes',
    district: 'Vieil Antibes',
    microTag: 'Gran terraza • Horno de leña • Del almuerzo a la noche',
  },
  navLabels: {
    home: 'Inicio',
    menu: 'Menú',
    gallery: 'Galería',
    about: 'Sobre nosotros',
    contact: 'Contacto',
  },
  uiLabels: {
    languageSwitcher: 'Selector de idioma',
    toggleMenu: 'Abrir el menú',
    toggleReserveMenu: 'Abrir opciones de reserva',
    reserveMenuLabel: 'Opciones de reserva',
    toggleSocialMenu: 'Abrir redes sociales',
    socialMenuLabel: 'Redes sociales',
    reserveMenuPhone: 'Teléfono',
    reserveMenuWhatsapp: 'WhatsApp',
    aboutDetailsEyebrow: 'Detalles',
    aboutDetailsTitle: 'Referencias de materiales y espacio para prolongar luego en el contenido final.',
  },
  actions: {
    contact: 'Contacto',
    reserve: 'Reservar',
    menu: 'Ver el menú',
    directions: 'Itinerario',
    social: 'Redes',
    call: 'Llamar',
    whatsapp: 'WhatsApp',
    email: 'Correo',
    gallery: 'Descubrir la galería',
    about: 'Descubrir el lugar',
    legal: 'Aviso legal',
    jumpToCategory: 'Ir a la categoría',
  },
  hero: {
    eyebrow: 'Bistró soleado en el corazón de Vieil Antibes',
    title: 'Una dirección de terraza, materiales auténticos y cocina generosa.',
    text:
      'Prototipo de presentación para un gran restaurante vivo, pensado para el almuerzo, la noche y las copas que se alargan en la terraza.',
    primaryLabel: 'Contactar el restaurante',
    secondaryLabel: 'Ver el menú',
    imageLabel: 'Terraza hero',
  },
  infoStrip: [
    { label: 'Dirección', value: 'Dirección final por confirmar' },
    { label: 'Horarios', value: 'Servicio de mediodía y noche' },
    { label: 'Teléfono', value: '+33 0 00 00 00 00' },
    { label: 'Ambiente', value: 'Terraza, bar, horno de leña' },
  ],
  home: {
    intro: {
      eyebrow: 'El espíritu del lugar',
      title: 'Un restaurante pensado para convencer rápido y dar ganas de quedarse.',
      text:
        'La estructura pone de inmediato en valor la terraza, la cocina francesa clásica, las pizzas al horno de leña y la información práctica que espera un visitante móvil.',
    },
    terrace: {
      eyebrow: 'Firma terraza',
      title: 'Mostrar desde los primeros segundos por qué la terraza importa.',
      text:
        'Esta zona está pensada para recibir la imagen más fuerte del lugar. Debe vender luz, volumen y comodidad sin sobrecargar el resto de la página.',
      imageLabel: 'Gran terraza',
    },
    cuisine: {
      eyebrow: 'Cocina & horno',
      title: 'Cocina bistrot, platos reconfortantes y pizzas al horno de leña.',
      text:
        'El texto final precisará la oferta, pero la jerarquía ya está lista para presentar los grandes clásicos, las ensaladas, los platos guisados y el horno visible.',
      ctaLabel: 'Explorar el menú',
      imageLabel: 'Horno visible',
    },
    gallery: {
      eyebrow: 'Ambiente',
      title: 'Hacer sentir el lugar antes incluso de la primera visita.',
      text:
        'Los futuros visuales se colocarán aquí para mostrar la sala, el bar, los materiales y el ritmo del restaurante. Mientras tanto, los bloques sirven como referencias claras.',
      ctaLabel: 'Ver la galería',
      images: ['Sala amplia', 'Bar de latón', 'Mesa puesta'],
    },
    story: {
      eyebrow: 'El tono',
      title: 'Auténtico en los materiales, limpio en la ejecución, acogedor cada día.',
      text:
        'Esta zona servirá para contar el restaurante sin perderse en un relato demasiado largo. El objetivo es fijar una personalidad creíble y legible de inmediato.',
      ctaLabel: 'Leer la página',
      stats: [
        { value: 'Grande', label: 'terraza a destacar' },
        { value: 'Mediodía > noche', label: 'pensado para todo el día' },
        { value: 'Horno de leña', label: 'elemento visible del lugar' },
      ],
    },
    access: {
      eyebrow: 'Contacto y acceso',
      title: 'Todo lo necesario para pasar a la acción sin buscar.',
      text:
        'Los datos de contacto, horarios, itinerario y accesos rápidos están reunidos aquí para maximizar la conversión tanto en móvil como en escritorio.',
      imageLabel: 'Plano de acceso',
    },
  },
  menuPage: {
    eyebrow: 'El menú',
    title: 'Una página legible, móvil y preparada para actualizarse con limpieza.',
    text:
      'El menú final sustituirá estos contenidos indicativos. La estructura ya está pensada para categorías claras, precios visibles y una lectura sencilla en teléfono.',
    note:
      'Los títulos de abajo son ejemplos de estructura. Servirán de base para que el cliente entregue más adelante los platos definitivos.',
    tagLabels: {
      vegetarian: 'Vegetariano',
      vegan: 'Vegano',
      fish: 'Pescado',
      pork: 'Cerdo',
      spicy: 'Picante',
    },
    categories: [
      {
        id: 'starters',
        title: 'Entrantes',
        items: [
          { name: 'Entrante del día', description: 'Entrante de temporada por precisar', price: '00 €' },
          { name: 'Verduras a la parrilla', description: 'Versión final por definir', price: '00 €', tags: ['vegan'] },
          { name: 'Pequeña burrata', description: 'Toque fresco y veraniego', price: '00 €', tags: ['vegetarian'] },
        ],
      },
      {
        id: 'salads',
        title: 'Ensaladas',
        items: [
          { name: 'Ensalada de la casa', description: 'Gran ensalada de mediodía por precisar', price: '00 €', tags: ['vegetarian'] },
          { name: 'Pollo crujiente', description: 'Receta y guarniciones por confirmar', price: '00 €' },
          { name: 'Ensalada niçoise', description: 'Interpretación final por validar', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'mains',
        title: 'Platos',
        items: [
          { name: 'Entrecot de la casa', description: 'Pieza, salsa y acompañamiento por precisar', price: '00 €' },
          { name: 'Plato guisado', description: 'Receta de la casa por completar', price: '00 €', tags: ['pork'] },
          { name: 'Pescado del día', description: 'Llegada y cocción por definir', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'pizzas',
        title: 'Pizzas al horno de leña',
        items: [
          { name: 'Margherita del horno', description: 'Base al horno de leña por precisar', price: '00 €', tags: ['vegetarian'] },
          { name: 'Pizza de la casa', description: 'Receta de la casa por completar', price: '00 €', tags: ['pork', 'spicy'] },
          { name: 'Pizza blanca', description: 'Versión final por confirmar', price: '00 €', tags: ['pork'] },
        ],
      },
      {
        id: 'desserts',
        title: 'Postres',
        items: [
          { name: 'Postre del día', description: 'A finalizar según la carta real', price: '00 €' },
          { name: 'Gran clásico', description: 'Versión bistrot por precisar', price: '00 €' },
          { name: 'Copa helada', description: 'Opción fresca para el verano', price: '00 €' },
        ],
      },
      {
        id: 'drinks',
        title: 'Bebidas',
        items: [
          { name: 'Cóctel de la casa', description: 'Cóctel de terraza por definir', price: '00 €' },
          { name: 'Copa de vino', description: 'Selección por confirmar', price: '00 €' },
          { name: 'Bebida fría', description: 'Oferta final por completar', price: '00 €' },
        ],
      },
    ],
  },
  galleryPage: {
    eyebrow: 'La galería',
    title: 'Preparar los futuros visuales sin tener que rehacer el sitio.',
    text:
      'Esta página está pensada para recibir más adelante las fotos reales del lugar. Los bloques ya fijan encuadres, tamaños y ritmo visual.',
    sections: [
      {
        title: 'Terraza',
        text: 'Mostrar amplitud, luz, mesas y sensación de espacio.',
        images: ['Terraza ángulo', 'Terraza servicio', 'Detalle terraza'],
      },
      {
        title: 'Sala & bar',
        text: 'Instalar el tono interior con madera, piedra, espejos, latón y profundidad.',
        images: ['Sala amplia', 'Gran bar', 'Detalle espejo'],
      },
      {
        title: 'Cocina & mesa',
        text: 'Hacer vivir el plato, el horno de leña y los detalles de servicio.',
        images: ['Horno de leña', 'Pizza saliendo', 'Plano cercano del plato'],
      },
    ],
  },
  aboutPage: {
    eyebrow: 'Sobre nosotros',
    title: 'Una página para fijar la personalidad del lugar sin exagerar.',
    text:
      'El contenido final explicará la intención, la acogida y la promesa del restaurante. La estructura mantiene un tono tranquilo, premium y legible para visitantes con prisa.',
    sections: [
      {
        title: 'El entorno',
        text:
          'Vieil Antibes, gran terraza, materiales auténticos, sala generosa, verdadero bar bistró y horno visible. La idea es volver tangible esa atmósfera desde el primer scroll.',
        imageLabel: 'Ambiente del lugar',
      },
      {
        title: 'La promesa',
        text:
          'Cocina francesa accesible, clásicos bien ejecutados, pizzas al horno de leña y un local pensado tanto para un almuerzo simple como para una cena más larga.',
        imageLabel: 'Cocina de la casa',
      },
      {
        title: 'El ritmo',
        text:
          'La web deja espacio para expresar toda la jornada del restaurante: almuerzo, aperitivo, cena, sombra en verano y la verdadera energía de la gran terraza.',
        imageLabel: 'Bar animado',
      },
    ],
    highlights: [
      'Gran terraza turística',
      'Bar bistró de madera y latón',
      'Horno de leña visible',
      'Materiales auténticos renovados',
    ],
  },
  contactPage: {
    eyebrow: 'Contacto',
    title: 'Toda la información práctica en una página simple y eficaz.',
    text:
      'Esta página está pensada para responder rápidamente a necesidades concretas: contactar con el restaurante, preparar la ruta, revisar horarios y entender los accesos.',
    cards: [
      { title: 'Teléfono', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
      { title: 'WhatsApp', value: 'Mensaje directo', href: commonContact.whatsappHref },
      { title: 'Correo', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
    ],
    addressTitle: 'Dirección',
    addressValue: 'Vieil Antibes, dirección final por confirmar',
    hoursTitle: 'Horarios',
    hours: [
      { day: 'Lunes', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Martes', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Miércoles', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Jueves', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Viernes', hours: '12:00 - 14:30 / 19:00 - 23:00' },
      { day: 'Sábado', hours: '12:00 - 15:00 / 19:00 - 23:00' },
      { day: 'Domingo', hours: 'Por confirmar' },
    ],
    accessTitle: 'Acceso',
    accessText:
      'Añadir aquí los detalles prácticos más útiles: terraza visible, punto de referencia, parking más cercano y enlace directo de itinerario para visitantes de paso.',
    mapLabel: 'Mapa',
  },
  legalPage: {
    eyebrow: 'Aviso legal',
    title: 'Una página lista para recibir la información administrativa final.',
    text:
      'El contenido mostrado aquí es deliberadamente indicativo. Los datos legales, el hosting, la sociedad y la privacidad se completarán antes de la publicación.',
    sections: [
      {
        title: 'Editor del sitio',
        body: 'Nombre de la sociedad, dirección, datos de registro, representante legal y datos de contacto.',
      },
      {
        title: 'Hosting',
        body: 'Nombre del proveedor de hosting, dirección, datos de contacto y entorno técnico elegido.',
      },
      {
        title: 'Datos personales',
        body: 'La versión de lanzamiento está prevista sin banner de cookies ni stack de analytics pesada, pero el texto final de privacidad deberá completarse correctamente.',
      },
    ],
  },
  footer: {
    summary:
      'Prototipo local listo para ser sustituido después por los textos, imágenes e información definitiva del restaurante.',
    copyright: 'Prototipo local • La Table Antibes',
  },
  quickActions: [
    { label: 'Llamar', href: commonContact.phoneHref },
    { label: 'WhatsApp', href: commonContact.whatsappHref },
    { label: 'Itinerario', href: commonContact.directionsHref },
    { label: 'Menú', slug: 'menu' },
  ],
  contactLinks: commonContact,
};

siteContent.ru = {
  ...siteContent.en,
  localeName: 'Русский',
  shortCode: 'RU',
  alternateLanguages: {
    fr: 'Французский',
    en: 'English',
    it: 'Italiano',
    de: 'Deutsch',
    nl: 'Nederlands',
    es: 'Español',
    ru: 'Русский',
    uk: 'Українська',
    zh: '中文',
  },
  navLabels: {
    home: 'Главная',
    menu: 'Меню',
    gallery: 'Галерея',
    about: 'О нас',
    contact: 'Контакты',
  },
  uiLabels: {
    ...siteContent.en.uiLabels,
    languageSwitcher: 'Выбор языка',
    toggleMenu: 'Открыть меню',
    toggleReserveMenu: 'Открыть варианты бронирования',
    reserveMenuLabel: 'Варианты бронирования',
    toggleSocialMenu: 'Открыть соцсети',
    socialMenuLabel: 'Соцсети',
    reserveMenuPhone: 'Телефон',
    reserveMenuWhatsapp: 'WhatsApp',
  },
  actions: {
    ...siteContent.en.actions,
    contact: 'Связаться',
    reserve: 'Забронировать',
    menu: 'Смотреть меню',
    directions: 'Маршрут',
    social: 'Соцсети',
    call: 'Позвонить',
    email: 'Почта',
    gallery: 'Открыть галерею',
    about: 'Открыть место',
    legal: 'Правовая информация',
    jumpToCategory: 'К категории',
  },
  menuPage: {
    eyebrow: 'Меню',
    title: 'Понятная мобильная страница меню, которую потом будет легко обновлять.',
    text:
      'Финальное меню заменит эти примерные записи. Структура уже готова для ясных категорий, видимых цен и удобного чтения с телефона.',
    note:
      'Названия ниже являются примерами структуры. Они служат базой, чтобы клиент позже смог передать финальные блюда.',
    tagLabels: {
      vegetarian: 'Вегетарианское',
      vegan: 'Веганское',
      fish: 'Рыба',
      pork: 'Свинина',
      spicy: 'Острое',
    },
    categories: [
      {
        id: 'starters',
        title: 'Закуски',
        items: [
          { name: 'Закуска дня', description: 'Сезонная закуска, нужно уточнить', price: '00 €' },
          { name: 'Овощи на гриле', description: 'Финальную версию нужно определить', price: '00 €', tags: ['vegan'] },
          { name: 'Небольшая буррата', description: 'Свежий летний акцент', price: '00 €', tags: ['vegetarian'] },
        ],
      },
      {
        id: 'salads',
        title: 'Салаты',
        items: [
          { name: 'Фирменный салат', description: 'Большой дневной салат, нужно уточнить', price: '00 €', tags: ['vegetarian'] },
          { name: 'Хрустящая курица', description: 'Рецепт и гарнир нужно подтвердить', price: '00 €' },
          { name: 'Салат нисуаз', description: 'Финальную интерпретацию нужно утвердить', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'mains',
        title: 'Основные блюда',
        items: [
          { name: 'Фирменный антрекот', description: 'Кусок, соус и гарнир нужно уточнить', price: '00 €' },
          { name: 'Томлёное блюдо', description: 'Домашний рецепт нужно заполнить', price: '00 €', tags: ['pork'] },
          { name: 'Рыба дня', description: 'Поставку и приготовление нужно уточнить', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'pizzas',
        title: 'Пицца из дровяной печи',
        items: [
          { name: 'Маргарита из печи', description: 'Основа из дровяной печи, нужно уточнить', price: '00 €', tags: ['vegetarian'] },
          { name: 'Фирменная пицца', description: 'Домашний рецепт нужно дополнить', price: '00 €', tags: ['pork', 'spicy'] },
          { name: 'Белая пицца', description: 'Финальную версию нужно подтвердить', price: '00 €', tags: ['pork'] },
        ],
      },
      {
        id: 'desserts',
        title: 'Десерты',
        items: [
          { name: 'Десерт дня', description: 'Позже адаптировать под реальное меню', price: '00 €' },
          { name: 'Большая классика', description: 'Бистро-версию нужно уточнить', price: '00 €' },
          { name: 'Мороженое', description: 'Свежий летний вариант', price: '00 €' },
        ],
      },
      {
        id: 'drinks',
        title: 'Напитки',
        items: [
          { name: 'Фирменный коктейль', description: 'Фирменный коктейль для террасы ещё нужно определить', price: '00 €' },
          { name: 'Бокал вина', description: 'Подбор нужно подтвердить', price: '00 €' },
          { name: 'Прохладительный напиток', description: 'Финальное предложение нужно дополнить', price: '00 €' },
        ],
      },
    ],
  },
  contactPage: {
    ...siteContent.en.contactPage,
    eyebrow: 'Контакты',
    title: 'Вся практическая информация на одной простой и понятной странице.',
    text:
      'Эта страница создана для того, чтобы быстро отвечать на практические вопросы: как связаться с рестораном, как добраться, как проверить часы работы и понять доступ.',
    cards: [
      { title: 'Телефон', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
      { title: 'WhatsApp', value: 'Сообщение напрямую', href: commonContact.whatsappHref },
      { title: 'Почта', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
    ],
    addressTitle: 'Адрес',
    addressValue: 'Vieil Antibes, финальный адрес уточняется',
    hoursTitle: 'Часы работы',
    hours: [
      { day: 'Понедельник', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Вторник', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Среда', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Четверг', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Пятница', hours: '12:00 - 14:30 / 19:00 - 23:00' },
      { day: 'Суббота', hours: '12:00 - 15:00 / 19:00 - 23:00' },
      { day: 'Воскресенье', hours: 'Уточняется' },
    ],
    accessTitle: 'Как добраться',
    accessText:
      'Здесь нужно указать полезные практические детали: видимая терраса, ориентир, ближайшая парковка и прямая ссылка на маршрут.',
    mapLabel: 'Карта',
  },
  legalPage: {
    ...siteContent.en.legalPage,
    eyebrow: 'Правовая информация',
    title: 'Готовая страница для финальной административной и юридической информации.',
    text:
      'Показанный здесь текст является примером. Юридические данные, хостинг, данные компании и приватность будут заполнены перед запуском.',
    sections: [
      {
        title: 'Издатель сайта',
        body: 'Название компании, адрес, регистрационные данные, законный представитель и контактная информация.',
      },
      {
        title: 'Хостинг',
        body: 'Название хостинг-провайдера, адрес, контактные данные и выбранная техническая среда.',
      },
      {
        title: 'Персональные данные',
        body: 'Стартовая версия сайта планируется без cookie-баннера и тяжёлой аналитики, но финальные формулировки по приватности всё равно нужно будет заполнить.',
      },
    ],
  },
};

siteContent.uk = {
  ...siteContent.en,
  localeName: 'Українська',
  shortCode: 'UA',
  alternateLanguages: {
    fr: 'Французька',
    en: 'English',
    it: 'Italiano',
    de: 'Deutsch',
    nl: 'Nederlands',
    es: 'Español',
    ru: 'Русский',
    uk: 'Українська',
    zh: '中文',
  },
  navLabels: {
    home: 'Головна',
    menu: 'Меню',
    gallery: 'Галерея',
    about: 'Про нас',
    contact: 'Контакти',
  },
  uiLabels: {
    ...siteContent.en.uiLabels,
    languageSwitcher: 'Вибір мови',
    toggleMenu: 'Відкрити меню',
    toggleReserveMenu: 'Відкрити варіанти бронювання',
    reserveMenuLabel: 'Варіанти бронювання',
    toggleSocialMenu: 'Відкрити соцмережі',
    socialMenuLabel: 'Соцмережі',
    reserveMenuPhone: 'Телефон',
    reserveMenuWhatsapp: 'WhatsApp',
  },
  actions: {
    ...siteContent.en.actions,
    contact: 'Зв’язатися',
    reserve: 'Забронювати',
    menu: 'Дивитися меню',
    directions: 'Маршрут',
    social: 'Соцмережі',
    call: 'Подзвонити',
    email: 'Пошта',
    gallery: 'Переглянути галерею',
    about: 'Дізнатися про місце',
    legal: 'Юридична інформація',
    jumpToCategory: 'До категорії',
  },
  menuPage: {
    eyebrow: 'Меню',
    title: 'Зручна мобільна сторінка меню, яку потім легко буде оновлювати.',
    text:
      'Фінальне меню замінить ці прикладні записи. Структура вже підготовлена для чітких категорій, видимих цін і зручного читання з телефона.',
    note:
      'Назви нижче є лише прикладами структури. Вони слугуватимуть основою, щоб клієнт згодом передав фінальні страви.',
    tagLabels: {
      vegetarian: 'Вегетаріанське',
      vegan: 'Веганське',
      fish: 'Риба',
      pork: 'Свинина',
      spicy: 'Гостре',
    },
    categories: [
      {
        id: 'starters',
        title: 'Закуски',
        items: [
          { name: 'Закуска дня', description: 'Сезонна закуска, потрібно уточнити', price: '00 €' },
          { name: 'Овочі на грилі', description: 'Фінальну версію потрібно визначити', price: '00 €', tags: ['vegan'] },
          { name: 'Невелика буррата', description: 'Свіжий літній акцент', price: '00 €', tags: ['vegetarian'] },
        ],
      },
      {
        id: 'salads',
        title: 'Салати',
        items: [
          { name: 'Фірмовий салат', description: 'Великий денний салат потрібно уточнити', price: '00 €', tags: ['vegetarian'] },
          { name: 'Хрустка курка', description: 'Рецепт і гарнір потрібно підтвердити', price: '00 €' },
          { name: 'Салат нісуаз', description: 'Фінальну інтерпретацію потрібно затвердити', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'mains',
        title: 'Основні страви',
        items: [
          { name: 'Фірмовий антрекот', description: 'Шматок, соус і гарнір потрібно уточнити', price: '00 €' },
          { name: 'Тушкована страва', description: 'Домашній рецепт потрібно заповнити', price: '00 €', tags: ['pork'] },
          { name: 'Риба дня', description: 'Поставку та приготування потрібно визначити', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'pizzas',
        title: 'Піца з дров’яної печі',
        items: [
          { name: 'Маргарита з печі', description: 'Основа з дров’яної печі, потрібно уточнити', price: '00 €', tags: ['vegetarian'] },
          { name: 'Фірмова піца', description: 'Домашній рецепт потрібно доповнити', price: '00 €', tags: ['pork', 'spicy'] },
          { name: 'Біла піца', description: 'Фінальну версію потрібно підтвердити', price: '00 €', tags: ['pork'] },
        ],
      },
      {
        id: 'desserts',
        title: 'Десерти',
        items: [
          { name: 'Десерт дня', description: 'Пізніше адаптувати до реального меню', price: '00 €' },
          { name: 'Велика класика', description: 'Бістро-версію потрібно уточнити', price: '00 €' },
          { name: 'Морозиво', description: 'Свіжий літній варіант', price: '00 €' },
        ],
      },
      {
        id: 'drinks',
        title: 'Напої',
        items: [
          { name: 'Фірмовий коктейль', description: 'Фірмовий коктейль для тераси ще треба визначити', price: '00 €' },
          { name: 'Келих вина', description: 'Підбір потрібно підтвердити', price: '00 €' },
          { name: 'Прохолодний напій', description: 'Фінальну пропозицію потрібно доповнити', price: '00 €' },
        ],
      },
    ],
  },
  contactPage: {
    ...siteContent.en.contactPage,
    eyebrow: 'Контакти',
    title: 'Уся практична інформація на одній простій та ефективній сторінці.',
    text:
      'Ця сторінка створена, щоб швидко відповідати на практичні потреби: як зв’язатися з рестораном, як дістатися, як перевірити години роботи та зрозуміти доступ.',
    cards: [
      { title: 'Телефон', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
      { title: 'WhatsApp', value: 'Повідомлення напряму', href: commonContact.whatsappHref },
      { title: 'Пошта', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
    ],
    addressTitle: 'Адреса',
    addressValue: 'Vieil Antibes, фінальна адреса уточнюється',
    hoursTitle: 'Години роботи',
    hours: [
      { day: 'Понеділок', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Вівторок', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Середа', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'Четвер', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: 'П’ятниця', hours: '12:00 - 14:30 / 19:00 - 23:00' },
      { day: 'Субота', hours: '12:00 - 15:00 / 19:00 - 23:00' },
      { day: 'Неділя', hours: 'Уточнюється' },
    ],
    accessTitle: 'Як дістатися',
    accessText:
      'Тут варто вказати найкорисніші практичні деталі: помітна тераса, орієнтир, найближча парковка та пряме посилання на маршрут.',
    mapLabel: 'Карта',
  },
  legalPage: {
    ...siteContent.en.legalPage,
    eyebrow: 'Юридична інформація',
    title: 'Готова сторінка для фінальної адміністративної та юридичної інформації.',
    text:
      'Показаний тут текст є навмисно умовним. Юридичні дані, хостинг, інформація про компанію та приватність будуть заповнені перед запуском.',
    sections: [
      {
        title: 'Видавець сайту',
        body: 'Назва компанії, адреса, реєстраційні дані, законний представник і контактна інформація.',
      },
      {
        title: 'Хостинг',
        body: 'Назва хостинг-провайдера, адреса, контактні дані та вибране технічне середовище.',
      },
      {
        title: 'Персональні дані',
        body: 'Стартова версія сайту планується без cookie-банера та важкої аналітики, але фінальні формулювання щодо приватності все одно потрібно буде акуратно додати.',
      },
    ],
  },
};

siteContent.zh = {
  ...siteContent.en,
  localeName: '中文',
  shortCode: 'ZH',
  alternateLanguages: {
    fr: '法语',
    en: 'English',
    it: 'Italiano',
    de: 'Deutsch',
    nl: 'Nederlands',
    es: 'Español',
    ru: 'Русский',
    uk: 'Українська',
    zh: '中文',
  },
  navLabels: {
    home: '首页',
    menu: '菜单',
    gallery: '图库',
    about: '关于我们',
    contact: '联系',
  },
  uiLabels: {
    ...siteContent.en.uiLabels,
    languageSwitcher: '语言切换',
    toggleMenu: '打开菜单',
    toggleReserveMenu: '打开预订选项',
    reserveMenuLabel: '预订选项',
    toggleSocialMenu: '打开社交媒体链接',
    socialMenuLabel: '社交媒体',
    reserveMenuPhone: '电话',
    reserveMenuWhatsapp: 'WhatsApp',
  },
  actions: {
    ...siteContent.en.actions,
    contact: '联系',
    reserve: '预订',
    menu: '查看菜单',
    directions: '路线',
    social: '社交',
    call: '致电',
    email: '邮箱',
    gallery: '查看图库',
    about: '了解餐厅',
    legal: '法律信息',
    jumpToCategory: '跳转到分类',
  },
  menuPage: {
    eyebrow: '菜单',
    title: '清晰、适合手机阅读、并便于后续维护的菜单页面。',
    text:
      '最终菜单将替换这些示例内容。当前结构已经为清晰分类、明确价格和手机上的舒适阅读做好准备。',
    note:
      '下方名称仅为结构示例，用作之后客户提供最终菜品内容的基础。',
    tagLabels: {
      vegetarian: '素食',
      vegan: '纯素',
      fish: '鱼类',
      pork: '猪肉',
      spicy: '辣',
    },
    categories: [
      {
        id: 'starters',
        title: '前菜',
        items: [
          { name: '今日前菜', description: '时令前菜，待确认', price: '00 €' },
          { name: '烤蔬菜', description: '最终版本待确定', price: '00 €', tags: ['vegan'] },
          { name: '小份布拉塔', description: '清新夏日风味', price: '00 €', tags: ['vegetarian'] },
        ],
      },
      {
        id: 'salads',
        title: '沙拉',
        items: [
          { name: '招牌沙拉', description: '适合午餐的大份沙拉，待确认', price: '00 €', tags: ['vegetarian'] },
          { name: '香脆鸡肉', description: '配方与配菜待确认', price: '00 €' },
          { name: '尼斯风味版本', description: '最终呈现待确认', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'mains',
        title: '主菜',
        items: [
          { name: '招牌肋眼牛排', description: '肉品、酱汁和配菜待确认', price: '00 €' },
          { name: '炖煮料理', description: '家常食谱待补充', price: '00 €', tags: ['pork'] },
          { name: '今日鲜鱼', description: '到货与烹调方式待确定', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'pizzas',
        title: '木火炉披萨',
        items: [
          { name: '炉烤玛格丽塔', description: '木火炉底待确认', price: '00 €', tags: ['vegetarian'] },
          { name: '招牌披萨', description: '家常配方待补充', price: '00 €', tags: ['pork', 'spicy'] },
          { name: '白披萨', description: '最终版本待确认', price: '00 €', tags: ['pork'] },
        ],
      },
      {
        id: 'desserts',
        title: '甜点',
        items: [
          { name: '今日甜点', description: '之后按真实菜单调整', price: '00 €' },
          { name: '经典甜点', description: '法式小酒馆版本待确认', price: '00 €' },
          { name: '冰淇淋杯', description: '适合夏天的清爽选择', price: '00 €' },
        ],
      },
      {
        id: 'drinks',
        title: '饮品',
        items: [
          { name: '店内招牌鸡尾酒', description: '露台招牌特调待定', price: '00 €' },
          { name: '单杯葡萄酒', description: '酒款选择待确认', price: '00 €' },
          { name: '清凉饮品', description: '最终饮品范围待补充', price: '00 €' },
        ],
      },
    ],
  },
  contactPage: {
    ...siteContent.en.contactPage,
    eyebrow: '联系',
    title: '把所有实用信息集中在一个简单高效的页面中。',
    text:
      '此页面用于快速回答最实际的问题：如何联系餐厅、如何前往、如何查看营业时间以及如何理解到达方式。',
    cards: [
      { title: '电话', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
      { title: 'WhatsApp', value: '直接消息', href: commonContact.whatsappHref },
      { title: '邮箱', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
    ],
    addressTitle: '地址',
    addressValue: 'Vieil Antibes，最终地址待确认',
    hoursTitle: '营业时间',
    hours: [
      { day: '周一', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: '周二', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: '周三', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: '周四', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: '周五', hours: '12:00 - 14:30 / 19:00 - 23:00' },
      { day: '周六', hours: '12:00 - 15:00 / 19:00 - 23:00' },
      { day: '周日', hours: '待确认' },
    ],
    accessTitle: '到达方式',
    accessText:
      '这里可以填写最有用的实用信息：醒目的露台、地标、最近停车位，以及方便游客使用的路线链接。',
    mapLabel: '地图',
  },
  legalPage: {
    ...siteContent.en.legalPage,
    eyebrow: '法律信息',
    title: '一个可直接接收最终行政与法律信息的页面。',
    text:
      '这里显示的内容目前只是示例。法律信息、主机信息、公司信息和隐私内容都会在上线前补全。',
    sections: [
      {
        title: '网站发布者',
        body: '公司名称、地址、注册信息、法定代表人以及联系方式。',
      },
      {
        title: '主机服务',
        body: '主机提供商名称、地址、联系方式以及所选技术环境。',
      },
      {
        title: '个人数据',
        body: '上线版本计划不使用 cookie 横幅和重型分析工具，但最终隐私说明仍需要在上线前完整补充。',
      },
    ],
  },
};

siteContent.ja = {
  ...siteContent.en,
  localeName: '日本語',
  shortCode: 'JP',
  alternateLanguages: {
    fr: 'Français',
    en: 'English',
    it: 'Italiano',
    de: 'Deutsch',
    nl: 'Nederlands',
    es: 'Español',
    ru: 'Русский',
    uk: 'Українська',
    zh: '中文',
    ja: '日本語',
  },
  navLabels: {
    home: 'ホーム',
    menu: 'メニュー',
    gallery: 'ギャラリー',
    about: '店舗について',
    contact: 'アクセス',
  },
  uiLabels: {
    ...siteContent.en.uiLabels,
    languageSwitcher: '言語切替',
    toggleMenu: 'メニューを開く',
    toggleReserveMenu: '予約方法を開く',
    reserveMenuLabel: '予約方法',
    toggleSocialMenu: 'SNSリンクを開く',
    socialMenuLabel: 'SNS',
    reserveMenuPhone: '電話',
    reserveMenuWhatsapp: 'WhatsApp',
    aboutDetailsEyebrow: '詳細',
    aboutDetailsTitle: '最終テキストで広げていくための素材感と空間のメモ。',
  },
  actions: {
    ...siteContent.en.actions,
    contact: '連絡する',
    reserve: '予約',
    menu: 'メニューを見る',
    directions: '道順',
    social: 'SNS',
    call: '電話',
    whatsapp: 'WhatsApp',
    email: 'メール',
    gallery: 'ギャラリーを見る',
    about: '店舗を見る',
    legal: '法的情報',
    jumpToCategory: 'カテゴリへ',
  },
  hero: {
    eyebrow: 'Vieil Antibesの中心にある陽だまりビストロ',
    title: 'テラスと素材感、そして気前のいい料理を楽しめる一軒。',
    text:
      'ランチからディナー、テラスでゆっくり過ごす一杯までを想定した、活気ある大型レストランのプロトタイプです。',
    primaryLabel: 'レストランに連絡する',
    secondaryLabel: 'メニューを見る',
    imageLabel: 'テラスのメインビジュアル',
  },
  infoStrip: [
    { label: '住所', value: '最終住所は要確認' },
    { label: '営業時間', value: 'ランチとディナー営業' },
    { label: '電話', value: '+33 0 00 00 00 00' },
    { label: '雰囲気', value: 'テラス、バー、薪窯' },
  ],
  home: {
    intro: {
      eyebrow: 'この店らしさ',
      title: 'すぐ魅力が伝わり、そのまま滞在したくなるレストラン。',
      text:
        'この構成では、大きなテラス、クラシックなフランス料理、薪窯ピザ、そしてモバイル訪問者がすぐ必要とする実用情報を最初から前面に出しています。',
    },
    terrace: {
      eyebrow: 'テラス',
      title: '最初の数秒で、このテラスの魅力をしっかり伝える。',
      text:
        'ここには店の印象を決める最も強い写真が入ります。光、広がり、心地よさを伝えつつ、ページ全体を重く見せない役割です。',
      imageLabel: '大きなテラス',
    },
    cuisine: {
      eyebrow: '料理と薪窯',
      title: 'ビストロ料理と心地よい定番、そして薪窯ピザ。',
      text:
        '最終テキストで内容は詰めていきますが、定番料理、サラダ、煮込み料理、そして見える薪窯を見せるための階層はすでに整っています。',
      ctaLabel: 'メニューを見る',
      imageLabel: '見える薪窯',
    },
    gallery: {
      eyebrow: '雰囲気',
      title: '初来店の前から、この店の空気感が伝わるようにする。',
      text:
        '今後ここに実際の写真が入り、ダイニング、バー、素材感、店のリズムを見せます。それまではブロックが明確なプレースホルダーとして機能します。',
      ctaLabel: 'ギャラリーを見る',
      images: ['広いダイニング', '真鍮のバー', 'テーブルセッティング'],
    },
    story: {
      eyebrow: 'トーン',
      title: '素材は本物、仕上がりはすっきり、毎日気持ちよく使える場所。',
      text:
        'このセクションでは長々と語りすぎずに、レストランの個性を伝えます。目指すのは、すぐ理解できて信頼できる印象です。',
      ctaLabel: 'ページを見る',
      stats: [
        { value: '大きい', label: 'テラスをしっかり見せる' },
        { value: '昼から夜まで', label: '一日を通して使える流れ' },
        { value: '薪窯', label: '店を象徴する見える設備' },
      ],
    },
    access: {
      eyebrow: '連絡先とアクセス',
      title: '迷わず行動に移れるよう、必要な情報をひとまとめに。',
      text:
        '連絡先、営業時間、行き方、クイックアクションをここにまとめ、モバイルでもデスクトップでも行動しやすくしています。',
      imageLabel: 'アクセスマップ',
    },
  },
  menuPage: {
    eyebrow: 'メニュー',
    title: '読みやすく、あとで更新しやすいモバイル向けのメニューページ。',
    text:
      '最終メニューはこれらの例示コンテンツに置き換わります。現在の構成は、明確なカテゴリ、見やすい価格表示、スマホでの読みやすさを前提に組まれています。',
    note:
      '以下の名称は構成例です。あとでお客様が最終的な料理名を渡しやすいようにするための土台です。',
    tagLabels: {
      vegetarian: 'ベジタリアン',
      vegan: 'ヴィーガン',
      fish: '魚',
      pork: '豚肉',
      spicy: '辛い',
    },
    categories: [
      {
        id: 'starters',
        title: '前菜',
        items: [
          { name: '本日の前菜', description: '季節の前菜、内容は後で確定', price: '00 €' },
          { name: 'グリル野菜', description: '最終バージョンは要調整', price: '00 €', tags: ['vegan'] },
          { name: '小さめのブッラータ', description: '夏らしい軽やかな一皿', price: '00 €', tags: ['vegetarian'] },
        ],
      },
      {
        id: 'salads',
        title: 'サラダ',
        items: [
          { name: 'ハウスサラダ', description: 'ランチ向けの大きなサラダ、内容は後で確定', price: '00 €', tags: ['vegetarian'] },
          { name: 'クリスピーチキン', description: 'レシピと付け合わせは要確認', price: '00 €' },
          { name: 'ニース風サラダ', description: '最終的な仕立ては後で調整', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'mains',
        title: 'メイン',
        items: [
          { name: '看板のアントルコート', description: '肉、ソース、付け合わせは要確認', price: '00 €' },
          { name: '煮込み料理', description: '店のレシピは後で記入', price: '00 €', tags: ['pork'] },
          { name: '本日の魚', description: '入荷と火入れは後で決定', price: '00 €', tags: ['fish'] },
        ],
      },
      {
        id: 'pizzas',
        title: '薪窯ピザ',
        items: [
          { name: '薪窯マルゲリータ', description: '薪窯らしいベースは後で調整', price: '00 €', tags: ['vegetarian'] },
          { name: '店の定番ピザ', description: '店のレシピは後で記入', price: '00 €', tags: ['pork', 'spicy'] },
          { name: 'ビアンカ', description: '最終バージョンは要確認', price: '00 €', tags: ['pork'] },
        ],
      },
      {
        id: 'desserts',
        title: 'デザート',
        items: [
          { name: '本日のデザート', description: '実際のメニューに合わせて後で調整', price: '00 €' },
          { name: '定番デザート', description: 'ビストロらしい仕立ては後で調整', price: '00 €' },
          { name: 'アイスクリーム', description: '夏向けのさっぱりした選択肢', price: '00 €' },
        ],
      },
      {
        id: 'drinks',
        title: 'ドリンク',
        items: [
          { name: '店のシグネチャーカクテル', description: 'テラス向けの看板カクテルは後で決定', price: '00 €' },
          { name: 'グラスワイン', description: 'セレクションは後で確定', price: '00 €' },
          { name: '冷たいドリンク', description: '最終ラインナップは後で補完', price: '00 €' },
        ],
      },
    ],
  },
  contactPage: {
    ...siteContent.en.contactPage,
    eyebrow: 'アクセス',
    title: '必要な実用情報を一ページにまとめた、わかりやすい構成です。',
    text:
      'このページは、レストランへの連絡方法、行き方、営業時間の確認、アクセスの把握といった実用的な疑問にすばやく答えるためのものです。',
    cards: [
      { title: '電話', value: '+33 0 00 00 00 00', href: commonContact.phoneHref },
      { title: 'WhatsApp', value: '直接メッセージ', href: commonContact.whatsappHref },
      { title: 'メール', value: 'bonjour@latable-antibes.fr', href: commonContact.emailHref },
    ],
    addressTitle: '住所',
    addressValue: 'Vieil Antibes、最終住所は要確認',
    hoursTitle: '営業時間',
    hours: [
      { day: '月曜', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: '火曜', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: '水曜', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: '木曜', hours: '12:00 - 14:30 / 19:00 - 22:30' },
      { day: '金曜', hours: '12:00 - 14:30 / 19:00 - 23:00' },
      { day: '土曜', hours: '12:00 - 15:00 / 19:00 - 23:00' },
      { day: '日曜', hours: '要確認' },
    ],
    accessTitle: '行き方',
    accessText:
      'ここには、目立つテラス、目印、最寄りの駐車場、そして旅行者がすぐ使えるルートリンクなど、役立つ情報を入れます。',
    mapLabel: '地図',
  },
  legalPage: {
    ...siteContent.en.legalPage,
    eyebrow: '法的情報',
    title: '最終的な管理情報と法的情報を受け入れるためのページです。',
    text:
      'ここに表示されている内容は現時点では例示です。法的情報、ホスティング情報、会社情報、プライバシー情報は公開前に整えます。',
    sections: [
      {
        title: 'サイト運営者',
        body: '会社名、住所、登録情報、法定代表者、連絡先をここに記載します。',
      },
      {
        title: 'ホスティング',
        body: 'ホスティング会社名、住所、連絡先、採用した技術環境を記載します。',
      },
      {
        title: '個人情報',
        body: '公開版では cookie バナーや重い解析は使わない想定ですが、最終的なプライバシー文言は公開前にきちんと補完します。',
      },
    ],
  },
  footer: {
    summary:
      'レストランの最終的なテキスト、画像、情報に後から置き換えられるローカルプロトタイプです。',
    copyright: 'ローカルプロトタイプ • La Table Antibes',
  },
  quickActions: [
    { label: '電話', href: commonContact.phoneHref },
    { label: 'WhatsApp', href: commonContact.whatsappHref },
    { label: '道順', href: commonContact.directionsHref },
    { label: 'メニュー', slug: 'menu' },
  ],
  contactLinks: commonContact,
};
