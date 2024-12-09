"use client";

import Navbar from "../../components/Navbar";
import Main from "./components/Main";
import Carousel from "./components/Carousel";
import Provision from "./components/Provision";
import Cards from "./components/Cards";
import SubscribeComponent from "./components/SubscribeComponent";
import Footer from "./components/Footer";

const ArtDeLaTable: React.FC = () => {
  return (
    <div>
      <Navbar />
      {/* --------------------------------Main section------------------------------------------------- */}
      <Main />
      {/* --------------------------------Carousel Section------------------------------------------------- */}
      <Carousel />
      {/* --------------------------------------Next Section------------------------------------ */}
      <Cards />
      {/* --------------------------------Next Section----------------------------------------- */}
      <Provision />
      {/* ---------------------------------subscribe section-------------------------------------- */}
      <SubscribeComponent />
      {/* ---------------------------------------footer section------------------------------------------ */}
      <Footer />
    </div>
  );
};

export default ArtDeLaTable;
