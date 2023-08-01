import React from "react";
import Marquee from "react-fast-marquee";
import "./sass/promo.css";

const Promo = () => {
  return (
    <>
      <div
        className="promo fixed-top ">
        <Marquee speed={50} direction={"left"} play={true}>
          <span className="titulo">
            &#9673;&nbsp;&nbsp;&nbsp;&nbsp; Galerias Y Cenefas &nbsp;&nbsp;&nbsp;&nbsp;
            &#9673;&nbsp;&nbsp;&nbsp;&nbsp; Barrio la Alqueria &nbsp;&nbsp;&nbsp;&nbsp;
            &#9673;&nbsp;&nbsp;&nbsp;&nbsp; Calle 41b sur # 52a-56 &nbsp;&nbsp;&nbsp;&nbsp;
            &#9673;&nbsp;&nbsp;&nbsp;&nbsp; Tel. 310 787 8993 &nbsp;&nbsp;&nbsp;&nbsp;
            &#9673;&nbsp;&nbsp;&nbsp;&nbsp; Cortinas Modernas Bogota &nbsp;&nbsp;&nbsp;&nbsp;
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default Promo;
