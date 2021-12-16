import React, { useState, useEffect, useRef } from "react";
import Axios from "axios";
import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Pagination from "./components/Pagination";

function App() {
  const [anime, setAnime] = useState([]);
  const [search, setSearch] = useState("");
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [displayTitle, setDisplayTitle] = useState("Top Anime");
  const [dropValue, setDropValue] = useState("");
  const [sort, setSort] = useState("");
  const [sortValue, setSortValue] = useState("");
  const [acendingValue, setAcendingValue] = useState("");
  const [acending, setAcending] = useState("");
  const [page, setPage] = useState(1)
  const topRef = useRef()

  const scrollToTop = () => {
    topRef.current.scrollIntoView({ block: "start" });
  };

  const getTopAnime = async () => {
    setLoading(true);

    
    setDisplayTitle("Top Anime");
    setSortValue("Order by...");
    await Axios.get(`https://api.jikan.moe/v3/top/anime/${page}/bypopularity`)
      .then((response) => {
        console.log(response);
        setAnimeList(response.data.top);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSeasonalAnime = async () => {
    setAnimeList([]);
    setLoading(true);
    setDisplayTitle("Seasonal Anime");
    setSortValue("Order by...");
    await Axios.get("https://api.jikan.moe/v3/season/2022/spring").then(
      (response) => {
        setAnimeList(response.data.anime);
        setLoading(false);
      }
    );
  };

  const getUpcomingAnime = async () => {
    setAnimeList([]);
    setLoading(true);
    setDisplayTitle("Upcoming Anime");
    setSortValue("Order by...");
    await Axios.get("https://api.jikan.moe/v3/season/later").then(
      (response) => {
        setAnimeList(response.data.anime);
        setLoading(false);
      }
    );
  };

  const HandleSearch = (e) => {
    e.preventDefault();
    
    FetchAnime(search);
  };

  const FetchAnime = async (query) => {
    setAnimeList([]);
    setDropValue(search);
    setLoading(true);
    setSortValue("Order by...");
    await Axios.get(
      `https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=50&page=${page}`
    )
      .then((response) => {
        setAnimeList(response.data.results);
        setDisplayTitle(`Search Results`);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  
  useEffect(() => {
    if (displayTitle === 'Top Anime') {
      getTopAnime();
      return
    }
    if (search) {
      FetchAnime()
    }
    console.log(animeList)
  }, [page]);

  useEffect(() => {
    setPage(1);
  }, [search])

  return (
    <div className="bg-gray-200" ref={topRef}>
      <Header />
      <MainContent
        anime={anime}
        setAnime={setAnime}
        search={search}
        setSearch={setSearch}
        HandleSearch={HandleSearch}
        animeList={animeList}
        loading={loading}
        setLoading={setLoading}
        displayTitle={displayTitle}
        setDisplayTitle={setDisplayTitle}
        getTopAnime={getTopAnime}
        dropValue={dropValue}
        setDropValue={setDropValue}
        getSeasonalAnime={getSeasonalAnime}
        getUpcomingAnime={getUpcomingAnime}
        sort={sort}
        setSort={setSort}
        sortValue={sortValue}
        setSortValue={setSortValue}
        acending={acending}
        setAcending={setAcending}
        acendingValue={acendingValue}
        setAcendingValue={setAcendingValue}
        setPage={setPage}
      />
      <Pagination 
        page={page}
        setPage={setPage}
        animeList={animeList}
        scrollToTop={scrollToTop}
        displayTitle={displayTitle}
      />
    </div>
  );
}

export default App;
