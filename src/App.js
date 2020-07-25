import React,{ useRef, useEffect } from 'react';

import useWebAnimations from "@wellyshen/use-web-animations";
import './App.css';
import alice from "./alice.gif"
import knight from "./knight.png"
import palm_small from "./palm_small.png"
import rook from "./rook.png"
import bush from "./bush.png"
import pawn from "./pawn.png"
import pawn_small from "./pawn_small.png"
import rook_small from "./rook_small.png"
import tree from "./tree.png"
import bg_sky from "./bg_sky.jpg"
import bg_earth from "./bg_earth.jpg"

function App() {
  const { ref, playState, getAnimation } = useWebAnimations({
    keyframes: [
      {transform: "translate(100%,0)"},
      {transform: "translate(0%,0)"}

    ],
    timing: {
      duration: 3000, // Run for 1000ms
      iterations: Infinity, // Repeat once
      easing: "ease-in-out", // Use a fancy timing function
    },
    
  });
  
  let knightRef = useRef(null)
  useEffect( () => { 
   knightRef.current.animate([
    { transform: 'translateX(100%)' },
    {transform: 'translateX(0%)' }
  ],{
      duration: 10000,
      iterations: Infinity
  })
},[])


  return (
    <div>
           <div >
               <img src={bg_sky} alt="bg_sky" id="main"/> 
               <img src={bg_sky} alt="bg_sky" id="main"/> 
               <img src={bg_sky} alt="bg_sky" id="main"/> 
               <img src={bg_sky} alt="bg_sky" id="main"/> 
               <img src={bg_sky} alt="bg_sky" id="main"/> 
             </div> 
             
            
            <div>
              <img src={bg_earth} alt="bg_earth" id="earth"/> 
              <img src={alice} alt="alice" id="alice"/>  
            </div>


           <div ref={ref} id="images">
            <img src={tree} alt="tree" id="tree"/>
          </div>

          <div ref={knightRef} >
            <img src={knight} alt="knight" id="knight"  /> 
            <img src={rook} alt="rook" id="rook"/> 
          </div>            
            
            <div>
            <img src={bush} alt="bush" id="bush" /> 
            <img src={pawn} alt="pawn" id="pawn" /> 
            <img src={pawn_small} alt="pawn_small" id="pawn_small"/> 
            <img src={rook_small} alt="rook_small" id="rook_small" /> 
            <img src={palm_small} alt="palm_small" id="palm_small" /> 
           </div>
          <hr/> 
           <button onClick={() =>{getAnimation().pause()}}>Pause</button> <br></br> <br></br>
           <button onClick={() =>{getAnimation().play()}}>Play</button> <br></br>
    </div>
  );
}

export default App;
