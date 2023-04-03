//homepage.js
import { useState } from "react";
import NavbarDesktop from "./components/navbar/navbar.jsx";
import Fallback from './fallback.jsx'
import Rightbar from "./components/rightbar/rightbar.jsx";
import  Menubar from "./components/menubar/menubar.jsx";

import { Stack } from "@mui/material";
import { Outlet } from "react-router-dom";
export default function Homepage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <Stack direction="row">
        <Menubar />
        <NavbarDesktop />
      </Stack>
      <Outlet />
      <Fallback />
      <Rightbar />
    </>
  );
}
