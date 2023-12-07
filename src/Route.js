import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Jooneli/Blog/Blog";
import Main from "./components/Jooneli/main";
import About from "./components/Jooneli/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);

export default router;
