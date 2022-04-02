import React from "react";
import CreatePresale from "./CreatePresale";
import NavbarAdmin from "./NavbarAdmin";
import "./AdminPanel.css";
import Footer from "./Footer";

export default function AdminPanel({price}) {
  return (
    <>
      <NavbarAdmin price={price}/>
      <CreatePresale />
      <Footer />
    </>
  );
}


