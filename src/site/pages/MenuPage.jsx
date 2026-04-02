import { useEffect, useRef, useState } from 'react';
import { useLocale } from '../../App';

const WINE_CATEGORY_IDS = new Set(['french-wines', 'world-wines', 'premium-cellar', 'champagnes']);
const WINE_PRICE_COLUMN_ORDER = ['glass', '50cl', '75cl'];
const WINE_PRICE_COLUMN_LABELS = {
  glass: 'Verre',
  '50cl': '50 cl',
  '75cl': '75 cl',
};

function parseWinePrice(price) {
  if (!price) return null;

  const columns = {
    glass: '',
    '50cl': '',
    '75cl': '',
  };

  const parts = price.split('•').map((part) => part.trim()).filter(Boolean);

  parts.forEach((part) => {
    let match = part.match(/^Verre\s+(.+)$/i);
    if (match) {
      columns.glass = match[1].trim();
      return;
    }

    match = part.match(/^50\s*cl\s+(.+)$/i);
    if (match) {
      columns['50cl'] = match[1].trim();
      return;
    }

    match = part.match(/^75\s*cl\s+(.+)$/i);
    if (match) {
      columns['75cl'] = match[1].trim();
      return;
    }

    columns['75cl'] = part;
  });

  return columns;
}

function getWinePriceColumns(items) {
  const parsedPrices = items
    .filter((item) => item.kind !== 'section')
    .map((item) => parseWinePrice(item.price))
    .filter(Boolean);

  return WINE_PRICE_COLUMN_ORDER.filter((column) => parsedPrices.some((price) => price[column]));
}

function splitWineCategoryIntoGroups(items) {
  const groups = [];
  let currentGroup = { label: null, items: [] };

  items.forEach((item) => {
    if (item.kind === 'section') {
      if (currentGroup.items.length || currentGroup.label) {
        groups.push(currentGroup);
      }
      currentGroup = { label: item.label, items: [] };
      return;
    }

    currentGroup.items.push(item);
  });

  if (currentGroup.items.length || currentGroup.label) {
    groups.push(currentGroup);
  }

  return groups;
}

export function MenuPage() {
  const { locale } = useLocale();
  const tagLabels = locale.menuPage.tagLabels ?? {};
  const menuTabs = locale.menuPage.tabs ?? null;
  const menuGroups = locale.menuPage.groups ?? [{ id: 'all', title: null, categories: locale.menuPage.categories ?? [] }];
  const categories = menuGroups.flatMap((group) => group.categories);
  const usesTabbedLayout = Boolean(menuTabs?.length);
  const tabButtonsRef = useRef(new Map());
  const tabsContainerRef = useRef(null);
  const [activeTabId, setActiveTabId] = useState(menuTabs?.[0]?.id ?? null);
  const [tabFadeState, setTabFadeState] = useState({
    canScrollLeft: false,
    canScrollRight: false,
  });

  useEffect(() => {
    if (!menuTabs?.length) return;
    if (!menuTabs.some((tab) => tab.id === activeTabId)) {
      setActiveTabId(menuTabs[0].id);
    }
  }, [menuTabs, activeTabId]);

  useEffect(() => {
    if (!activeTabId) return;
    const activeButton = tabButtonsRef.current.get(activeTabId);
    activeButton?.scrollIntoView({
      behavior: 'smooth',
      inline: 'nearest',
      block: 'nearest',
    });
  }, [activeTabId]);

  useEffect(() => {
    const node = tabsContainerRef.current;

    if (!node || !menuTabs?.length) return undefined;

    function updateScrollState() {
      const maxScrollLeft = node.scrollWidth - node.clientWidth;

      setTabFadeState({
        canScrollLeft: node.scrollLeft > 2,
        canScrollRight: maxScrollLeft - node.scrollLeft > 2,
      });
    }

    updateScrollState();
    node.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('resize', updateScrollState);

    return () => {
      node.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [activeTabId, menuTabs]);

  function scrollToCategory(categoryId) {
    const target = document.getElementById(categoryId);

    if (!target) return;

    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  function renderItem(category, item) {
    if (item.kind === 'section') {
      return (
        <div key={`${category.id}-${item.label}`} className="v6-menu-subsection">
          {item.label}
        </div>
      );
    }

    return (
      <div key={`${category.id}-${item.name}`} className="v3-menu-item">
        <div className="v6-menu-item__copy">
          <div className="v6-menu-item__title-row">
            <h3>{item.name}</h3>
            {item.tags?.length ? (
              <div className="v6-menu-item__tags">
                {item.tags.map((tag) => (
                  <span key={`${item.name}-${tag}`} className={`v6-menu-tag is-${tag}`}>
                    {tagLabels[tag] ?? tag}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          {item.description ? <p>{item.description}</p> : null}
        </div>
        {item.price ? <strong>{item.price}</strong> : null}
      </div>
    );
  }

  function renderWinePriceRow(priceColumns, priceMap) {
    return (
      <div className="v6-menu-price-grid" style={{ '--menu-price-columns': priceColumns.length }}>
        {priceColumns.map((column) => (
          <strong key={column}>{priceMap[column] || ''}</strong>
        ))}
      </div>
    );
  }

  function renderWineCategory(category) {
    const groups = splitWineCategoryIntoGroups(category.items ?? []);

    return (
      <article key={category.id} id={category.id} className="v3-menu-panel v6-menu-panel--wine">
        <h2>{category.title}</h2>
        <div className="v6-menu-wine-groups">
          {groups.map((group, groupIndex) => {
            const priceColumns = getWinePriceColumns(group.items);

            return (
              <section
                key={`${category.id}-${group.label ?? 'group'}-${groupIndex}`}
                className="v6-menu-wine-group"
              >
                {(group.label || priceColumns.length) && (
                  <div className="v6-menu-wine-group__header">
                    {group.label ? <div className="v6-menu-subsection">{group.label}</div> : <div aria-hidden="true" />}
                    {priceColumns.length ? (
                      <div
                        className="v6-menu-price-grid v6-menu-price-grid--header"
                        style={{ '--menu-price-columns': priceColumns.length }}
                        aria-hidden="true"
                      >
                        {priceColumns.map((column) => (
                          <span key={column}>{WINE_PRICE_COLUMN_LABELS[column]}</span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                )}

                <div className="v3-menu-items">
                  {group.items.map((item) => {
                    const priceMap = parseWinePrice(item.price);

                    return (
                      <div key={`${category.id}-${item.name}`} className="v3-menu-item v6-menu-item--wine">
                        <div className="v6-menu-item__copy">
                          <div className="v6-menu-item__title-row">
                            <h3>{item.name}</h3>
                          </div>
                          {item.description ? <p>{item.description}</p> : null}
                        </div>
                        {priceMap && priceColumns.length ? renderWinePriceRow(priceColumns, priceMap) : null}
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
      </article>
    );
  }

  function renderCategory(category) {
    if (WINE_CATEGORY_IDS.has(category.id)) {
      return renderWineCategory(category);
    }

    const panelClasses = [
      'v3-menu-panel',
      category.layout === 'split-items' ? 'v6-menu-panel--split-items' : '',
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <article key={category.id} id={category.id} className={panelClasses}>
        <h2>{category.title}</h2>
        <div className="v3-menu-items">
          {category.items.map((item) => renderItem(category, item))}
        </div>
      </article>
    );
  }

  function estimateSectionWeight(section) {
    return (section.items ?? []).reduce((total, item) => {
      if (item.kind === 'section') return total + 0.3;
      return total + (item.description ? 1.25 : 1);
    }, 1.1);
  }

  function splitSectionsIntoColumns(tab) {
    const sections = tab.sections ?? [];

    if (tab.id === 'wines') {
      return [sections];
    }

    const hasExplicitColumns = sections.some((section) => typeof section.desktopColumn === 'number');

    if (hasExplicitColumns) {
      const columns = [[], []];

      sections.forEach((section) => {
        const columnIndex = section.desktopColumn === 1 ? 1 : 0;
        columns[columnIndex].push(section);
      });

      return columns.filter((column) => column.length);
    }

    const columns = [[], []];
    const heights = [0, 0];

    sections.forEach((section) => {
      const columnIndex = heights[0] <= heights[1] ? 0 : 1;
      columns[columnIndex].push(section);
      heights[columnIndex] += estimateSectionWeight(section);
    });

    return columns.filter((column) => column.length);
  }

  const activeTab = usesTabbedLayout ? menuTabs.find((tab) => tab.id === activeTabId) ?? menuTabs[0] : null;
  const activeTabColumns = activeTab ? splitSectionsIntoColumns(activeTab) : [];

  return (
    <div className="v3-page v5-page v5-page--menu v6-page--menu">
      <section className="v3-section v6-menu-section">
        <div className="v3-container">
          {usesTabbedLayout ? (
            <>
              <div
                className="v6-menu-tabs-shell"
                data-can-scroll-left={tabFadeState.canScrollLeft}
                data-can-scroll-right={tabFadeState.canScrollRight}
              >
                <div
                  ref={tabsContainerRef}
                  className="v6-menu-tabs"
                  role="tablist"
                  aria-label={locale.menuPage.eyebrow}
                >
                  {menuTabs.map((tab) => {
                    const isActive = tab.id === activeTab.id;

                    return (
                      <button
                        key={tab.id}
                        id={`menu-tab-${tab.id}`}
                        ref={(node) => {
                          if (node) {
                            tabButtonsRef.current.set(tab.id, node);
                          } else {
                            tabButtonsRef.current.delete(tab.id);
                          }
                        }}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        aria-controls={`menu-panel-${tab.id}`}
                        className={`v6-menu-tab ${isActive ? 'is-active' : ''}`}
                        onClick={() => setActiveTabId(tab.id)}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div
                id={`menu-panel-${activeTab.id}`}
                className="v6-menu-tab-panel"
                role="tabpanel"
                aria-labelledby={`menu-tab-${activeTab.id}`}
              >
                <div className={`v6-menu-tab-stacks v6-menu-tab-stacks--${activeTab.id}`}>
                  {activeTabColumns.map((column, columnIndex) => (
                    <div key={`${activeTab.id}-column-${columnIndex}`} className="v6-menu-tab-stack">
                      {column.map((section) => renderCategory(section))}
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="v3-chip-row v6-menu-chip-row">
                {categories.map((category) => (
                  <button key={category.id} type="button" onClick={() => scrollToCategory(category.id)}>
                    {category.title}
                  </button>
                ))}
              </div>

              <div className="v3-menu-columns">
                {categories.map((category) => renderCategory(category))}
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
