import { Routes, Route } from "react-router";
import Accountants from "../pages/accountants/accountants";
import HomePage from "../pages/home-page";
import routerPaths from "./router-paths";
import DetailsPage from "../pages/details-page";

const Router = () => (
  <Routes>
    <Route path={routerPaths.home} element={<HomePage />} />
    <Route path={routerPaths.accountants} element={<Accountants />} />
    <Route path={routerPaths.accountantsDetails} element={<DetailsPage />} />
  </Routes>
);

export default Router;
