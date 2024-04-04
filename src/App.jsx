import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { TweenMax, Power3 } from "gsap";

function App() {
  let logoItem = useRef(null);
  let textItem = useRef(null);

  console.log(logoItem);
  useEffect(()=>{
    console.log(logoItem)
    // logoItem.style.display = "none"
    TweenMax.to(logoItem,0.5,{
      opacity:1,
      y:-20,
      ease: Power3.easeInOut
    })
    TweenMax.to(textItem,1,{
      opacity:1,
      y:-20,
      ease: Power3.easeInOut
    })
  },[])
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img
            src={viteLogo}
            className="logo"
            alt="Vite logo"
            ref={(el) => {
              logoItem = el;
            }}
          />
        </a>
      </div>
      <h1>Vite + React</h1>
      <p className="read-the-docs" ref={el=>{textItem=el}}>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
