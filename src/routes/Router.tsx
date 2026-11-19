import { BrowserRouter, Route, Routes } from "react-router-dom";
import SiteLayout from "../components/SiteLayout";
import BlogPage from "../pages/BlogPage";
import HomePage from "../pages/HomePage";
import { PATHS } from "./paths";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.BLOG} element={<BlogPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
