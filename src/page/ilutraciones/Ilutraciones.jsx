import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import IlutracionesLanding from "./IlutracionesLanding";
import ApiIlutraciones from "../../Api/ApiIlutraciones";

function Ilutraciones() {
  return (
    <>
      <IlutracionesLanding />
      <Navbar />
      <ApiIlutraciones />
    </>
  );
}

export default Ilutraciones;
