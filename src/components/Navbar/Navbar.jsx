import React from "react";
import "./Navb.scss";
import { RiHome3Fill } from "react-icons/ri";
import { BsFillImageFill } from "react-icons/bs";
import { HiPaintBrush } from "react-icons/hi2";
import { ImVideoCamera } from "react-icons/im";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="container-nav">
        <div>
          <Link to="/home">
            <RiHome3Fill className="icon" />
            Home
          </Link>
        </div>
        <div>
          <Link to="/fotos">
            <BsFillImageFill className="icon" />
            Fotos
          </Link>
        </div>
        <div>
          <Link to="/ilutraciones">
            <HiPaintBrush className="icon" />
            Ilustraciones
          </Link>
        </div>
        <div>
          <Link to="/videos">
            <ImVideoCamera className="icon" />
            Videos
          </Link>
        </div>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
