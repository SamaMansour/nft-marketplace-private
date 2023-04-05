import React, { useState } from "react";
import BackToTop from "../../assets/svg/Back To Top.svg"
import './ScrollToTop.scss'

const ScrollToTop = () => {
  
    const [visible, setVisible] = useState(false);
    window.addEventListener("scroll", () => {
      window.pageYOffset > 100 ? setVisible(true) : setVisible(false);
    });
  
  return (
    <div className="scroll"><img src={BackToTop}/></div>
  )
}

export default ScrollToTop