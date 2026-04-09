import { Navigate, Route, Routes, useLocation, useOutletContext, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { siteContent, supportedLanguages } from './content/locales/index.js';
import { SiteLayout } from './site/SiteLayout';
import { HomePage } from './site/pages/HomePage';
import { MenuPage } from './site/pages/MenuPage';
import { LegalPage } from './site/pages/LegalPage';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location.pathname]);

  return null;
}

function SiteLocaleLayout() {
  const { lang } = useParams();

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to="/fr" replace />;
  }

  return <SiteLayout lang={lang} locale={siteContent[lang]} basePath="" />;
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
        <Route path="/:lang" element={<SiteLocaleLayout />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="legal" element={<LegalPage />} />
        </Route>
        <Route path="/v6/:lang/*" element={<LegacyVersionRedirect />} />
        <Route path="*" element={<Navigate to="/fr" replace />} />
      </Routes>
    </>
  );
}
