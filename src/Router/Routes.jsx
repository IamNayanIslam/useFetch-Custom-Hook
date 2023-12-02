import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Posts from "../Components/ShowPosts/Posts";
import Home from "../Components/Home/Home";
import ShowPhotos from "../Components/ShowPhotos/ShowPhotos";
import Error from "../Components/Error/Error";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "post",
        element: <Posts />,
      },
      {
        path: "photos",
        element: <ShowPhotos />,
      },
    ],
  },
  {
    path: "/*",
    element: <Error />,
  },
]);
