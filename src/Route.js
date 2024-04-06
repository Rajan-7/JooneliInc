// import {
//   createBrowserRouter,
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";
// import Blog from "./components/Jooneli/Blog/Blog";
// import Main from "./components/Jooneli/main";
// import About from "./components/Jooneli/About/About";
// import Bod from "./components/Jooneli/BoD/Bod";
// import Client from "./components/Jooneli/Client/Client";
// import Career from "./components/Jooneli/Career/Career";
// import ManageTeam from "./components/Jooneli/ManageTeam/ManageTeam";
// import Banking from "./components/Jooneli/Banking/Banking";
// import Trading from "./components/Jooneli/Trading/Trading";
// import Talk from "./components/Jooneli/LetsTalk/Talk";
// import UserLogin from "./components/Jooneli/Login/UserLogin";
// import ForgetPass from "./components/Jooneli/Login/ForgetPass";
// import SignIn from "./components/Jooneli/Login/SignIn";
// import Logout from "./components/Jooneli/logout/Logout";
// import Software from "./components/Jooneli/jobs/Software";
// import PageNotFound from "./components/Jooneli/PageNotFound/PageNotFound";
// import AdminLayout from "./components/Layout/AdminLayout";
// import AdminUser from "./components/Jooneli/Admin/AdminUser";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Main />,
//   },
//   {
//     path: "/blog",
//     element: <Blog />,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/bod",
//     element: <Bod />,
//   },
//   {
//     path: "manageteam",
//     element: <ManageTeam />,
//   },
//   {
//     path: "career",
//     element: <Career />,
//   },
//   {
//     path: "client",
//     element: <Client />,
//   },
//   {
//     path: "bank",
//     element: <Banking />,
//   },
//   {
//     path: "trading",
//     element: <Trading />,
//   },
//   {
//     path: "talk",
//     element: <Talk />,
//   },
//   {
//     path: "login",
//     element: <UserLogin />,
//   },
//   {
//     path: "forgetpass",
//     element: <ForgetPass />,
//   },
//   {
//     path: "signin",
//     element: <SignIn />,
//   },
//   {
//     path: "logout",
//     element: <Logout />,
//   },
//   {
//     path: "software",
//     element: <Software />,
//   },
//   {
//     path: "*",
//     element: <PageNotFound />,
//   },
//   {
//     path:"admin",
//     element:<AdminLayout/>
//   },
// ]);

// const router = () => {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Main />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/bod" element={<Bod />} />
//           <Route path="/manageteam" element={<ManageTeam />} />
//           <Route path="/career" element={<Career />} />
//           <Route path="/client" element={<Client />} />
//           <Route path="/bank" element={<Banking />} />
//           <Route path="/talk" element={<Talk />} />
//           <Route path="/trading" element={<Trading />} />
//           <Route path="/login" element={<UserLogin />} />
//           <Route path="/signin" element={<SignIn />} />
//           <Route path="/logout" element={<Logout />} />
//           <Route path="/admin" element={<AdminLayout />}>
//             <Route path="users" element/>
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// };

// export default router;
