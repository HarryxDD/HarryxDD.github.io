import {BasicRoute} from "components/elements/AppRouter";
import Layout from "components/layouts/Layout";
import {PAGES} from "constants/app";
import AboutPage from "pages/about/page";
import ContactPage from "pages/contact/page";
import PortfolioPage from "pages/portfolio/page";
import ResumePage from "pages/resume/page";
import {FaRegCompass} from "react-icons/fa";

export const routes: BasicRoute[] = [
  {
    path: "/",
    component: Layout,
    exact: false,
    routes: [
      { path: "/about", label: "About", component: AboutPage, exact: true },
      {
        path: PAGES.RESUME_PAGE,
        label: "Resume",
        icon: FaRegCompass,
        component: ResumePage,
        exact: true,
      },
      {
        path: PAGES.PORTFOLIO_PAGE,
        label: "Portfolio",
        icon: FaRegCompass,
        component: PortfolioPage,
        exact: true,
      },
      {
        path: PAGES.CONTACT_PAGE,
        label: "Contact",
        icon: FaRegCompass,
        component: ContactPage,
        exact: true,
      },
    ],
  },
];
