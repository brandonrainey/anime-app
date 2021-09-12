import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './App.css';
import Header from './components/Header';
import MainContent from './components/MainContent';


function App() {
  const [anime, setAnime] = useState([])
  const [search, setSearch] = useState('')
  const [animeList, setAnimeList] = useState([])
  const [loading, setLoading] = useState(false)
  const [displayTitle, setDisplayTitle] = useState('')
  const [dropValue, setDropValue] = useState('')


  const getTopAnime = async () => {
    setLoading(true)
    setDisplayTitle('Top Anime')
   await Axios.get('https://api.jikan.moe/v3/top/anime/1/bypopularity').then((response) => {
      
      setAnimeList(response.data.top.slice(0, 9))
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  const getSeasonalAnime = async () => {
    setAnimeList([])
    setLoading(true)
    await Axios.get('https://api.jikan.moe/v3/season/2021/spring').then((response) => {
      
      setAnimeList(response.data.anime.slice(0, 9))
      setLoading(false)
    })
  }

  const getUpcomingAnime = async () => {
    setAnimeList([])
    setLoading(true)
    await Axios.get('https://api.jikan.moe/v3/season/later').then((response) => {
      setAnimeList(response.data.anime.slice(0, 9))
      setLoading(false)
    })
  }

  const HandleSearch = (e) => {
    e.preventDefault()
    FetchAnime(search)
  }

  const FetchAnime = async (query) => {
    setAnimeList([])
    setDropValue(search)
    setLoading(true)
    await Axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&order_by=title&sort=asc&limit=9`).then((response) => {
      
      setAnimeList(response.data.results)
      setDisplayTitle(`Search Results`)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  useEffect(() => {
    
  }, [])

  
  return (
    <div >
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
      />
    </div>
  );
}

export default App;
