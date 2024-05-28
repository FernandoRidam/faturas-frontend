import {
  createBrowserRouter,
} from "react-router-dom";

import {
  AppLayout,
} from "../components/AppLayout";

import {
  Dashboard,
} from "../pages/Dashboard";

import {
  Invoice,
} from "../pages/Invoice";

const router = createBrowserRouter([
  {
    path: "/",
    Component: AppLayout,
    children: [
      {
        path: "",
        Component: Dashboard,
      },
      {
        path: "invoices",
        Component: Invoice,
      },
    ]
  },
]);

export default router;
