import {BasicRoute} from "components/elements/AppRouter";
import Layout from "components/layouts/Layout";
import {PAGES} from "constants/app";
import HomePage from "pages/home-page/page";
import TestPage from "pages/test-page/page";
import {FaRegCompass} from "react-icons/fa";

export const routes: BasicRoute[] = [
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      { path: "/", component: HomePage, exact: true },
      {
        path: PAGES.TEST_PAGE,
        label: "Test",
        icon: FaRegCompass,
        component: TestPage,
        exact: true,
      },
    ],
  },
];
