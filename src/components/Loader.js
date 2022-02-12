import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Loader() {
  const loadCont = useRef(null);

  useEffect(() => {
      gsap.to(loadCont.current, {duration: 0.5, opacity:0, display:"none", delay:5})
  })

  return (
    <div ref={loadCont} className="load-container">
      <div className="spinner-box">
        <div className="blue-orbit leo"></div>

        <div className="green-orbit leo"></div>

        <div className="red-orbit leo"></div>

        <div className="white-orbit w1 leo"></div>
        <div className="white-orbit w2 leo"></div>
        <div className="white-orbit w3 leo"></div>
      </div>
    </div>
  );
}
