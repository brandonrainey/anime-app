import React from "react";
import CRIcon from "./Crunchyroll-logo.png";

export default function AnimeCard({ anime, sortValue, dropValue }) {
  const newTitle = anime.title.replace(/\s+/g, "-").toLowerCase();

  return (
    
      <div className={`p-2 flex-3  pb-8 flex myCard flex-col items-center`}>
        <div className='cardNumber'>{sortValue === 'Score' ? anime.score : dropValue === 'Top Anime' || dropValue === '' ? `#${anime.rank}` : ''}</div>
      <a key={anime.mal_id} href={anime.url} target="_blank" rel="noreferrer">
        <figure className="flex justify-center transform duration-200 hover:scale-105 pb-4">
          <img
            src={anime.image_url}
            alt={anime.mal_id}
            className="rounded-md shadow-2xl"
          />
        </figure>
        <h1 className="font-medium">{anime.title}</h1>
        <a
          href={`https://www.crunchyroll.com/search?from=&q=${newTitle}`}
          target="_blank"
          rel="noreferrer"
          className="flex text-sm"
        >
          Find on Crunchyroll{" "}
          <img src={CRIcon} alt={anime.mal_id} className="h-5" />
        </a>
      </a>
    </div>
    

    


  );
}
