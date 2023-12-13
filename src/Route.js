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
import Talk from "./components/Jooneli/LetsTalk/Talk";
import UserLogin from "./components/Jooneli/Login/UserLogin";
import ForgetPass from "./components/Jooneli/Login/ForgetPass";
import SignIn from "./components/Jooneli/Login/SignIn";

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
  },
  {
    path:"talk",
    element:<Talk/>
  },
  {
    path:'login',
    element:<UserLogin/>
  },
  {
    path:'forgetpass',
    element:<ForgetPass/>
  },
  {
    path:'signin',
    element:<SignIn/>
  }

]);

export default router;
