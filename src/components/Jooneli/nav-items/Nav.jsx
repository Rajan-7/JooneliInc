// import React, { useState } from "react";
// import "./header.css";
// import { Link } from "react-router-dom";

// const Nav = () => {
//   const [show, setShow] = useState(false);
//   // console.log(show);

//   return (
//     <>
//       <div className={` ${true ? "hover-effect--background" : ""}`}></div>
//       <nav className="nav-bar">
//         <div className="logo-container">
//           <figure>
//             <Link to="/">
//               <img src="/image/jooneli.png" alt="" />
//             </Link>
//           </figure>
//         </div>
//         {/* <div className={` ${true ? "hover-effect-background" : ""}`}></div> */}
//         {/* <div className={` ${true ? "{{display:block;}}" : ""}`}></div> */}

//         <ul>
//           <li className="nav-item">
//             <Link to="/" className="item">
//               Home
//             </Link>
//           </li>
//         </ul>
//         <ul className="navigate-link">
//           <div className="nav-item display-list">
//             <Link
//               className="display-btn"
//               onMouseOver={() => setShow(true)}
//               onMouseLeave={() => setShow(false)}
//             >
//               Product
//             </Link>
//             <div className="drop-down--product">
//               <Link to="/bank" className="drop">
//                 360 Core Banking System
//               </Link>
//               <Link to="/trading" className="drop">
//                 Jooneli Trading
//               </Link>
//             </div>
//           </div>
//         </ul>
//         <ul className="navigate-link">
//           <div className="nav-item display-list">
//             <Link className="display-btn">Company</Link>
//             <div className="drop-down--business">
//               <Link to="/about" className="drop">
//                 About Us
//               </Link>
//               <Link to="/client" className="drop">
//                 Our Clients
//               </Link>
//               <Link to="/bod" className="drop">
//                 Boards of Directors
//               </Link>
//               <Link to="/manageteam" className="drop">
//                 Management Team
//               </Link>
//               <Link to="/career" className="drop">
//                 Careers
//               </Link>
//             </div>
//           </div>
//         </ul>
//         <ul>
//           <li className="nav-item">
//             <Link to="/blog">Blog</Link>
//           </li>
//         </ul>
//         <ul>
//           <li className="nav-item">
//             <Link to="/talk">Lets Talk</Link>
//           </li>
//         </ul>
//         <ul>
//           <li className="nav-item">
//             <Link to="/login">Login</Link>
//           </li>
//         </ul>
//       </nav>
//     </>
//   );
// };

// export default Nav;
