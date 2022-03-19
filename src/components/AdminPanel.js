import React from "react";
import CreatePresale from "./CreatePresale";
import NavbarAdmin from "./NavbarAdmin";
import "./AdminPanel.css";
import Footer from "./Footer";

export default function AdminPanel() {
  return (
    <>
      <NavbarAdmin />
      <CreatePresale />
      <Footer />
    </>
  );
}


