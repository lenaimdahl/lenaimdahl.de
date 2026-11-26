import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../components/SiteLayout";
import { LanguageProvider } from "../i18n/LanguageProvider";
import HomePage from "../pages/HomePage";
import NotFoundPage from "../pages/NotFoundPage";
import { PATHS } from "./paths";

export default function Router() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path={PATHS.HOME} element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </LanguageProvider>
    </BrowserRouter>
  );
}
