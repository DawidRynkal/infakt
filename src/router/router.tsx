import { Routes, Route } from "react-router";
import Accountants from "../pages/accountants/accountants";
import HomePage from "../pages/home-page";
import routerPaths from "./router-paths";

const Router = () => (
  <Routes>
    <Route path={routerPaths.home} element={<HomePage />} />
    <Route path={routerPaths.accountants} element={<Accountants />} />
  </Routes>
);

export default Router;
