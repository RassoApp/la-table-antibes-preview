import { Navigate, Route, Routes, useLocation, useOutletContext, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { siteContent, supportedLanguages } from './content/siteContent';
import { SiteLayout } from './components/SiteLayout';
import { HomePage } from './pages/HomePage';
import { MenuPage } from './pages/MenuPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';
import { CompareHomePage } from './pages/CompareHomePage';
import { StitchLayout } from './v2/StitchLayout';
import { V2HomePage } from './v2/pages/V2HomePage';
import { V2MenuPage } from './v2/pages/V2MenuPage';
import { V2GalleryPage } from './v2/pages/V2GalleryPage';
import { V2AboutPage } from './v2/pages/V2AboutPage';
import { V2ContactPage } from './v2/pages/V2ContactPage';
import { V2LegalPage } from './v2/pages/V2LegalPage';
import { V3Layout } from './v3/V3Layout';
import { V3HomePage } from './v3/pages/V3HomePage';
import { V3MenuPage } from './v3/pages/V3MenuPage';
import { V3GalleryPage } from './v3/pages/V3GalleryPage';
import { V3AboutPage } from './v3/pages/V3AboutPage';
import { V3ContactPage } from './v3/pages/V3ContactPage';
import { V3LegalPage } from './v3/pages/V3LegalPage';
import { V4Layout } from './v4/V4Layout';
import { V4HomePage } from './v4/pages/V4HomePage';
import { V5Layout } from './v5/V5Layout';
import { V5HomePage } from './v5/pages/V5HomePage';
import { V5MenuPage } from './v5/pages/V5MenuPage';
import { V5GalleryPage } from './v5/pages/V5GalleryPage';
import { V5AboutPage } from './v5/pages/V5AboutPage';
import { V5ContactPage } from './v5/pages/V5ContactPage';
import { V5LegalPage } from './v5/pages/V5LegalPage';
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

  if (!supportedLanguages.includes(lang)) {
    return <Navigate to={`/${version}/fr`} replace />;
  }

  return <LayoutComponent lang={lang} locale={siteContent[lang]} basePath={`/${version}`} />;
}

function LegacyLocaleRedirect() {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);
  const [lang = 'fr', ...rest] = segments;
  const suffix = rest.length > 0 ? `/${rest.join('/')}` : '';

  return <Navigate to={`/v2/${lang}${suffix}`} replace />;
}

export function useLocale() {
  return useOutletContext();
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<CompareHomePage />} />
        <Route path="/v1" element={<Navigate to="/v1/fr" replace />} />
        <Route path="/v1/:lang" element={<LocaleLayout version="v1" LayoutComponent={SiteLayout} />}>
          <Route index element={<HomePage />} />
          <Route path="menu" element={<MenuPage />} />
          <Route path="gallery" element={<GalleryPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="legal" element={<LegalPage />} />
        </Route>

        <Route path="/v2" element={<Navigate to="/v2/fr" replace />} />
        <Route path="/v2/:lang" element={<LocaleLayout version="v2" LayoutComponent={StitchLayout} />}>
          <Route index element={<V2HomePage />} />
          <Route path="menu" element={<V2MenuPage />} />
          <Route path="gallery" element={<V2GalleryPage />} />
          <Route path="about" element={<V2AboutPage />} />
          <Route path="contact" element={<V2ContactPage />} />
          <Route path="legal" element={<V2LegalPage />} />
        </Route>

        <Route path="/v3" element={<Navigate to="/v3/fr" replace />} />
        <Route path="/v3/:lang" element={<LocaleLayout version="v3" LayoutComponent={V3Layout} />}>
          <Route index element={<V3HomePage />} />
          <Route path="menu" element={<V3MenuPage />} />
          <Route path="gallery" element={<V3GalleryPage />} />
          <Route path="about" element={<V3AboutPage />} />
          <Route path="contact" element={<V3ContactPage />} />
          <Route path="legal" element={<V3LegalPage />} />
        </Route>

        <Route path="/v4" element={<Navigate to="/v4/fr" replace />} />
        <Route path="/v4/:lang" element={<LocaleLayout version="v4" LayoutComponent={V4Layout} />}>
          <Route index element={<V4HomePage />} />
          <Route path="menu" element={<V3MenuPage />} />
          <Route path="gallery" element={<V3GalleryPage />} />
          <Route path="about" element={<V3AboutPage />} />
          <Route path="contact" element={<V3ContactPage />} />
          <Route path="legal" element={<V3LegalPage />} />
        </Route>

        <Route path="/v5" element={<Navigate to="/v5/fr" replace />} />
        <Route path="/v5/:lang" element={<LocaleLayout version="v5" LayoutComponent={V5Layout} />}>
          <Route index element={<V5HomePage />} />
          <Route path="menu" element={<V5MenuPage />} />
          <Route path="gallery" element={<V5GalleryPage />} />
          <Route path="about" element={<V5AboutPage />} />
          <Route path="contact" element={<V5ContactPage />} />
          <Route path="legal" element={<V5LegalPage />} />
        </Route>

        <Route path="/v6" element={<Navigate to="/v6/fr" replace />} />
        <Route path="/v6/:lang" element={<LocaleLayout version="v6" LayoutComponent={V6Layout} />}>
          <Route index element={<V6HomePage />} />
          <Route path="menu" element={<V6MenuPage />} />
          <Route path="legal" element={<V6LegalPage />} />
          <Route path="gallery" element={<Navigate to=".." replace />} />
          <Route path="about" element={<Navigate to=".." replace />} />
          <Route path="contact" element={<Navigate to=".." replace />} />
        </Route>

        <Route path="/:lang/*" element={<LegacyLocaleRedirect />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
