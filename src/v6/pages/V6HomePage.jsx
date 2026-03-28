import { Link } from 'react-router-dom';
import { useLocale } from '../../App';
import { v5HomePlaceholderContent } from '../../v5/homePlaceholderContent';
import { v5PagePlaceholderContent } from '../../v5/pagePlaceholderContent';
import { CutleryIcon, PinIcon } from '../../v5/V5Icons';
import { v5Media } from '../../v5/media';
import { V6ReserveDropdown } from '../ReserveDropdown';

const homeEventContent = {
  fr: {
    eyebrow: 'Événements & groupes',
    title: 'Privatisez pour vos événements !',
    text:
      'La Table Antibes peut accueillir vos groupes en salle ou en terrasse pour un événement privé ou professionnel dans le Vieil Antibes, dans un cadre pensé pour les moments à partager.',
    tags: ['Mariages', 'Anniversaires', 'Repas de groupe'],
    aria: "Types d'événements",
    imageAlt: 'Table dressée pour recevoir un groupe',
  },
  en: {
    eyebrow: 'Events & groups',
    title: 'Host your events with us',
    text:
      'La Table Antibes can host private or professional groups indoors or on its terrace in the heart of Vieil Antibes, in a setting designed for shared moments.',
    tags: ['Weddings', 'Birthdays', 'Group meals'],
    aria: 'Event types',
    imageAlt: 'Set table prepared for a group event',
  },
  it: {
    eyebrow: 'Eventi e gruppi',
    title: 'Organizza i tuoi eventi da noi',
    text:
      'La Table Antibes può accogliere i tuoi gruppi in sala o in terrazza per un evento privato o professionale nel cuore del Vieil Antibes, in un contesto pensato per i momenti da condividere.',
    tags: ['Matrimoni', 'Compleanni', 'Pasti di gruppo'],
    aria: 'Tipi di eventi',
    imageAlt: 'Tavola apparecchiata per ricevere un gruppo',
  },
  de: {
    eyebrow: 'Veranstaltungen und Gruppen',
    title: 'Feiern Sie Ihre Veranstaltungen bei uns',
    text:
      'La Table Antibes empfängt Gruppen im Gastraum oder auf der Terrasse für private und berufliche Anlässe im Herzen von Vieil Antibes, in einem Rahmen für gemeinsame Momente.',
    tags: ['Hochzeiten', 'Geburtstage', 'Gruppenessen'],
    aria: 'Eventarten',
    imageAlt: 'Gedeckter Tisch für eine Gruppe',
  },
  nl: {
    eyebrow: 'Evenementen en groepen',
    title: 'Organiseer uw evenementen bij ons',
    text:
      'La Table Antibes ontvangt uw gezelschappen in de zaal of op het terras voor privé- of zakelijke momenten in het hart van Vieil Antibes, in een sfeer die gemaakt is om samen te genieten.',
    tags: ['Bruiloften', 'Verjaardagen', 'Groepsmaaltijden'],
    aria: 'Soorten evenementen',
    imageAlt: 'Gedekte tafel om een groep te ontvangen',
  },
  es: {
    eyebrow: 'Eventos y grupos',
    title: 'Celebre sus eventos con nosotros',
    text:
      'La Table Antibes puede recibir a sus grupos en sala o en terraza para un evento privado o profesional en el corazón del Vieil Antibes, en un entorno pensado para compartir momentos.',
    tags: ['Bodas', 'Cumpleaños', 'Comidas de grupo'],
    aria: 'Tipos de eventos',
    imageAlt: 'Mesa preparada para recibir a un grupo',
  },
  ru: {
    eyebrow: 'Мероприятия и группы',
    title: 'Проводите свои мероприятия у нас',
    text:
      'La Table Antibes принимает группы в зале и на террасе для частных и деловых мероприятий в самом сердце Vieil Antibes, в атмосфере, созданной для приятных встреч.',
    tags: ['Свадьбы', 'Дни рождения', 'Групповые ужины'],
    aria: 'Типы мероприятий',
    imageAlt: 'Сервированный стол для группы',
  },
  uk: {
    eyebrow: 'Події та групи',
    title: 'Проводьте свої події у нас',
    text:
      'La Table Antibes приймає групи в залі та на терасі для приватних і ділових подій у самому серці Vieil Antibes, у просторі, створеному для приємних спільних моментів.',
    tags: ['Весілля', 'Дні народження', 'Групові вечері'],
    aria: 'Типи подій',
    imageAlt: 'Сервірований стіл для групи',
  },
  zh: {
    eyebrow: '活动与团体',
    title: '在这里举办您的活动',
    text:
      'La Table Antibes 可在室内或露台接待私人活动和团体聚会，位置就在 Vieil Antibes 核心区域，环境轻松而适合分享重要时刻。',
    tags: ['婚礼', '生日', '团体聚餐'],
    aria: '活动类型',
    imageAlt: '为团体活动准备好的餐桌',
  },
  ja: {
    eyebrow: 'イベント・団体利用',
    title: 'イベント利用のご相談も承ります',
    text:
      'La Table Antibes では、Vieil Antibes の中心で、店内またはテラスにてプライベートやビジネスの集まりに対応できます。',
    tags: ['ウェディング', '誕生日', '団体のお食事'],
    aria: 'イベントの種類',
    imageAlt: '団体利用のために整えられたテーブル',
  },
  ko: {
    eyebrow: '이벤트 및 단체 이용',
    title: '이벤트 대관도 가능합니다',
    text:
      'La Table Antibes 는 Vieil Antibes 중심에서 실내와 테라스 모두 개인 모임이나 비즈니스 모임을 위한 단체 이용에 대응할 수 있습니다.',
    tags: ['웨딩', '생일', '단체 식사'],
    aria: '이벤트 종류',
    imageAlt: '단체 이용을 위해 준비된 테이블',
  },
};

function ShowcaseCard({ src, alt }) {
  return (
    <figure className="v5-showcase-card">
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  );
}

export function V6HomePage() {
  const { lang, locale, buildLocalizedPath } = useLocale();
  const home = v5HomePlaceholderContent[lang] ?? v5HomePlaceholderContent.fr;
  const pages = v5PagePlaceholderContent[lang] ?? v5PagePlaceholderContent.fr;
  const contact = pages.contact;
  const events = homeEventContent[lang] ?? homeEventContent.en;

  return (
    <>
      <section className="v3-hero">
        <img
          className="v3-hero__image"
          src={v5Media.heroTerrace}
          alt="Grande terrasse peinte dans le Vieil Antibes"
          fetchPriority="high"
          decoding="async"
        />
        <div className="v3-hero__overlay" />

        <div className="v3-hero__content">
          <h1>{home.hero.title}</h1>
          <p>{home.hero.text}</p>

          <div className="v3-button-row">
            <V6ReserveDropdown locale={locale} />
            <Link className="v3-button v6-hero-menu-button" to={buildLocalizedPath('menu')}>
              <CutleryIcon />
              {locale.actions.menu}
            </Link>
            <div>
              <a
                className="v3-button v3-button--secondary v6-hero-directions-button"
                href={locale.contactLinks.directionsHref}
                target="_blank"
                rel="noreferrer"
              >
                <PinIcon />
                {locale.actions.directions}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container v5-cuisine">
          <div className="v5-cuisine__intro">
            <span className="v3-kicker">{home.cuisine.eyebrow}</span>
            <h2>{home.cuisine.title}</h2>
            <p>{home.cuisine.text}</p>
            <div>
              <Link className="v3-button v3-button--primary" to={buildLocalizedPath('menu')}>
                <CutleryIcon />
                {locale.actions.menu}
              </Link>
            </div>
          </div>

          <div className="v5-cuisine__grid">
            <ShowcaseCard src={v5Media.pizzaPainted} alt="Pizza peinte au feu de bois" />
            <ShowcaseCard src={v5Media.cuisineTopRight} alt="Pizza peinte dans le four" />
            <ShowcaseCard src={v5Media.cuisineBottomLeft} alt="Plat peint avec légumes verts et citron" />
            <ShowcaseCard src={v5Media.cuisineBottomRight} alt="Plat peint sur table en bois" />
          </div>
        </div>
      </section>

      <section className="v3-section">
        <div className="v3-container v5-ambiance">
          <div className="v3-copy">
            <span className="v3-kicker">{home.ambiance.eyebrow}</span>
            <h2>{home.ambiance.title}</h2>
            <p>{home.ambiance.text}</p>
          </div>

          <div className="v5-cuisine__grid v5-ambiance__media">
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={v5Media.barInterior} alt="Bar et salle" loading="lazy" decoding="async" />
            </figure>
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={v5Media.interiorSunlit} alt="Salle lumineuse" loading="lazy" decoding="async" />
            </figure>
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={v5Media.galleryRoom} alt="Grande salle bistrot" loading="lazy" decoding="async" />
            </figure>
            <figure className="v5-showcase-card v5-ambiance__card">
              <img src={v5Media.galleryCutlery} alt="Table dressée" loading="lazy" decoding="async" />
            </figure>
          </div>
        </div>
      </section>

      <section className="v3-section v3-section--soft">
        <div className="v3-container v6-events__grid">
          <div className="v3-copy v6-events__copy">
            <span className="v3-kicker">{events.eyebrow}</span>
            <h2>{events.title}</h2>
            <p>{events.text}</p>
            <div className="v6-events__tags" aria-label={events.aria}>
              {events.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>

          <figure className="v3-feature-image v6-events__image">
            <img
              src={v5Media.galleryCutlery}
              alt={events.imageAlt}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section id="access" className="v3-section">
        <div className="v3-container v6-contact-stack">
          <div className="v3-grid v3-grid--contact-page">
            <div className="v3-contact-copy">
              <div>
                <h2>{contact.addressTitle}</h2>
                <p>{contact.addressValue}</p>
              </div>

              <div>
                <h2>{contact.hoursTitle}</h2>
                <div className="v3-hours">
                  {locale.contactPage.hours.map((slot) => (
                    <div key={slot.day}>
                      <span>{slot.day}</span>
                      <strong>{contact.hourValue}</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2>{contact.accessTitle}</h2>
                <p>{contact.accessText}</p>

                <div className="v3-button-row v6-access-actions">
                  <V6ReserveDropdown locale={locale} buttonClassName="v6-access-button v6-access-button--reserve" />
                  <a className="v6-access-link" href={locale.contactLinks.directionsHref} target="_blank" rel="noreferrer">
                    <PinIcon />
                    <span>{locale.actions.directions}</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="v3-contact-media v5-contact-media">
              <figure className="v3-feature-image">
                <img src={v5Media.homeAccess} alt="Carte statique du quartier" loading="lazy" decoding="async" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
