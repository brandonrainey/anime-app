import React from "react";
import Banner from "./banner4.png";


export default function Header() {
  return (
    <h1
      className="text-5xl border-b-2 border-black border-opacity-50 h-60 pt-12 pl-4 myHeader text-white font-bold"
      style={{
        backgroundImage: `url(${Banner})`,
        backgroundSize: "100% 15rem",
        backgroundRepeat: "no-repeat",
      }}
    >
      Anime-DB
    </h1>
  );
}
