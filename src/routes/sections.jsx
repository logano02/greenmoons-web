import { lazy, Suspense } from "react";
import { Outlet, Navigate, useRoutes } from "react-router-dom";

import DashboardLayout from "../layouts/dashboard";
import ProtectedRoute from "./protectRoutes";

export const IndexPage = lazy(() => import("../pages/main"));
export const MoviesFev = lazy(() => import("../pages/movies-fev"));
export const LoginPage = lazy(() => import("../pages/login"));
export const Page404 = lazy(() => import("../pages/page-not-found"));

export default function Router() {
  const ProtectedIndexPage = ProtectedRoute(IndexPage);
  const ProtectedMoviesFev = ProtectedRoute(MoviesFev);

  const routes = useRoutes([
    {
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { element: <ProtectedIndexPage />, index: true },
        { path: "fevorotes", element: <ProtectedMoviesFev /> },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
    {
      path: "404",
      element: <Page404 />,
    },
    {
      path: "*",
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
