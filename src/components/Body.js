import React, { Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MainBrowsePage from "./MainBrowsePage";
import LoadingUi from "./LoadingUi";

const Body = () => {
  const GPTSearch = lazy(() => import("./GPTSearch"));
  const MovieDetails = lazy(() => import("./MovieDetails"));
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
      children: [
        {
          path: "/browse",
          element: <MainBrowsePage />,
        },
        {
          path: "/browse/gpt",
          element: (
            <Suspense fallback={<LoadingUi />}>
              <GPTSearch />
            </Suspense>
          ),
        },
        {
          path: "/browse/details/:movid",
          element: (
            <Suspense>
              <MovieDetails />
            </Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
