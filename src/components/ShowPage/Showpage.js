import React from "react";
import FloatButtom from "../FloatButtom/FloatButtom";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";
import "./ShowPage.css";
const ShowPage = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h2>Os Nossos serviços Estarão disponivel Brevemente</h2>
      </div>
      <div className="spacer"></div>
      <FloatButtom/>
      <Footer />
    </>
  );
};

export default ShowPage;
