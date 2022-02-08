import React, {useRef} from "react";
import Banner from "./banner4.png";


export default function Header() {
  
  return (
    <header
      className="text-6xl border-b-2 border-black border-opacity-50 h-60 pt-12 pl-12 myHeader text-white font-bold font-custom"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "100% 15rem",
        backgroundRepeat: "no-repeat",
      }}
      
    >
      Anime-DB
    </header>
  );
}
