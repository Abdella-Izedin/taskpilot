import { createBrowserRouter, Outlet } from "react-router";
import ErrorBoundary from "@/pages/Error";
import App from "@/pages/App";
import Home from "@/pages/web/Home";
import AppHome from "@/pages/app/AppHome";
import AppMain from "./app/AppMain";
import AppTasks from "./app/AppTasks";
import AppInbox from "./app/AppInbox";
import ProjectsMain from "./app/projects/ProjectsMain";

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
          element: <AppMain />,
          children: [
            {
              index: true,
              element: <AppHome />,
            },
            {
              path: "tasks",
              element: <AppTasks />,
            },
            {
              path: "inbox",
              element: <AppInbox />,
            },
            {
              path: "projects",
              element: <Outlet />,
              children: [
                {
                  index: true,
                  element: <ProjectsMain />,
                },
                {
                  path: "new",
                  element: <div>New Project Flow</div>,
                },
                {
                  path: ":projectId",
                  element: <div>Project</div>,
                },
              ],
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
