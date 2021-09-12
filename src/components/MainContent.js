import React from 'react'
import AnimeCard from './AnimeCard'
import LoadingScreen from './LoadingScreen'

export default function MainContent(props) {

    

    const checkDropdown = (e) => {
        props.setDropValue(e.target.value)
        if (e.target.value === 'Top Anime') {
            props.getTopAnime()
        } else if (e.target.value === 'Seasonal Anime') {
            props.getSeasonalAnime()
        } else if (e.target.value === 'Upcoming Anime') {
            props.getUpcomingAnime()
        }
        console.log(props.dropValue)
    }

   
    return (
        <div >
            <div className='flex'>
               <div className=''>
                <form 
                    className='mt-12 ml-8'
                    onSubmit={props.HandleSearch}
                    >
                    <input
                        type='search'
                        placeholder='Search for...' 
                        className='border rounded outline-none'
                        value={props.search}
                        onChange={e => props.setSearch(e.target.value)}
                    />
                </form>
            </div>
                <div className='ml-auto mt-auto pr-12 outline-none'>
                    <select className='w-40' onChange={checkDropdown} value={props.dropValue}>
                        <option value='Select...' name='select'>Select...</option>
                        <option value='Top Anime' name='top'>Top Anime</option>
                        <option value='Seasonal Anime' name='seasonal'>Seasonal Anime</option>
                        <option>Upcoming Anime</option>
                    </select>
                    
                </div> 
            </div>
            


            <div className='text-center text-2xl'>
                    {props.displayTitle}
            </div>
            <div className='flex justify-center'>
                
               <div className='flex flex-wrap justify-center flex-row w-2/3 ' >
                    <LoadingScreen
                        loading={props.loading} 
                    /> 
                    {props.animeList.map((item) => (
                        <AnimeCard 
                            anime={item}
                            key={item.mal_id}
                        /> 
                    
                    ))}
                </div> 
            </div>
            
        </div>
    )
}
