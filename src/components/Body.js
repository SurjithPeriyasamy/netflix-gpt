import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";
import MovieDetails from "./MovieDetails";
import MainBrowsePage from "./MainBrowsePage";
import GPTSearch from "./GPTSearch";
const Body = () => {
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
          element: <GPTSearch />,
        },
        {
          path: "/browse/details/:movid",
          element: <MovieDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={appRouter} />;
};

export default Body;
