import { Navigate, Route, Routes, useLocation, useOutletContext, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { siteContent, supportedLanguages } from './content/siteContent';
import { V6Layout } from './v6/V6Layout';
import { V6HomePage } from './v6/pages/V6HomePage';
import { V6MenuPage } from './v6/pages/V6MenuPage';
import { V6LegalPage } from './v6/pages/V6LegalPage';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return null;
}

function LocaleLayout({ version, LayoutComponent }) {
  const { lang } = useParams();
  const versionBasePath = version ? `/${version}` : '';

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to={versionBasePath ? `${versionBasePath}/fr` : '/fr'} replace />;
  }

  return <LayoutComponent lang={lang} locale={siteContent[lang]} basePath={versionBasePath} />;
}

function LegacyVersionRedirect() {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const [, lang = 'fr', ...rest] = segments;
  const suffix = rest.length > 0 ? `/${rest.join('/')}` : '';

  return <Navigate to={`/${lang}${suffix}`} replace />;
}

export function useLocale() {
  return useOutletContext();
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/fr" replace />} />
        <Route path="/:lang" element={<LocaleLayout version="" LayoutComponent={V6Layout} />}>
          <Route index element={<V6HomePage />} />
          <Route path="menu" element={<V6MenuPage />} />
          <Route path="legal" element={<V6LegalPage />} />
        </Route>
        <Route path="/v6/:lang/*" element={<LegacyVersionRedirect />} />
        <Route path="*" element={<Navigate to="/fr" replace />} />
      </Routes>
    </>
  );
}
