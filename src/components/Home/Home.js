import React, { Fragment } from "react";
import NavBar from "../NavBar/NavBar";
import FloatButtom from "../FloatButtom/FloatButtom";
import Footer from "../Footer/Footer";
import img from "../../asset/img/imgbckg.png";
import "./Home.scss";

const Home = () => {
  return (
    <Fragment>
      <NavBar />
      <div className="container m">
        
          <div className="container">
            <div className="card card-size card-backg">
              <figure className="contact_shape">
                <img className="contact_img" src={img} alt="Nelson tito" />
              </figure>
              <h6 className="hearder-text l-spacing">MARVITA</h6>
              <p className="main-text">
                <p className="text"> Bem-vindo a MARVITA</p>
                Prestadora de Serviços, MARVITA (SU), LDA, Desde 2017 Prestadora
                de Serviços, MARVITA (SU), LDA, nosso foco tem sido levar aos
                nossos clientes um fluxo constante de departamentos de alta
                qualidade e marcas de lojas especializadas com economias
                extraordinárias a.k.a. pechinchas, enquanto fornece uma
                experiência de compra fácil, divertida e organizada. Então, qual
                é o nosso segredo? Enquire: NAME O poder de salvar CONTACT Somos
                grandes - como a maior rede de varejo de baixo custo do país,
                temos um grande poder de compra EMAIL Somos experientes - nossos
                compradores procuram as melhores marcas e os estilos mais
                recentes no mundo todo. Trabalhamos diretamente com os
                fabricantes para negociar os melhores negócios!
              </p>
            </div>
        </div>

        <div className="espaco"></div>
        <div className="div-space"></div>
      </div>
      <FloatButtom />
      <Footer />
    </Fragment>
  );
};

export default Home;
