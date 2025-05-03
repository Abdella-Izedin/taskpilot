import { createBrowserRouter, Outlet } from "react-router";
import ErrorBoundary from "@/pages/Error";
import App from "@/pages/App";
import Home from "@/pages/web/Home";
import AppHome from "@/pages/app/AppHome";

const appRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Outlet />,
      errorElement: <ErrorBoundary />,
      children: [
        {
          path: "/",
          element: <App />,
          children: [
            {
              index: true,
              element: <Home />,
            },
          ],
        },
        {
          path: "app",
          element: <Outlet />,
          children: [
            {
              index: true,
              element: <AppHome />,
            },
          ],
        },
      ],
    },
    {
      path: "/auth",
    },
  ],
  { basename: "" }
);

export default appRouter;
