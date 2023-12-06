import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Jooneli/Blog/Blog";
import Main from "./components/Jooneli/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

export default router;
