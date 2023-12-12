import { createBrowserRouter } from "react-router-dom";
import Blog from "./components/Jooneli/Blog/Blog";
import Main from "./components/Jooneli/main";
import About from "./components/Jooneli/About/About";
import Bod from "./components/Jooneli/BoD/Bod";
import Client from "./components/Jooneli/Client/Client";
import Career from "./components/Jooneli/Career/Career";
import ManageTeam from "./components/Jooneli/ManageTeam/ManageTeam";
import Banking from "./components/Jooneli/Banking/Banking";
import Trading from "./components/Jooneli/Trading/Trading";

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
  {
    path: "/bod",
    element: <Bod />,
  },
  {
    path: "manageteam",
    element: <ManageTeam />,
  },
  {
    path: "career",
    element: <Career />,
  },
  {
    path:"client",
    element:<Client/>
  }
  ,
  {
    path:"bank",
    element:<Banking/>
  },
  {
    path:"trading",
    element:<Trading/>
  }
]);

export default router;
