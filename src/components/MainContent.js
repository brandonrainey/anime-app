import React, { useEffect } from 'react'
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

    const checkSort = (e) => {
        console.log(e.target.value)
        props.setSortValue(e.target.value)
        if (e.target.value === 'Score') {
            sortByValue()
        }
        if (e.target.value === 'Name') {
            sortByName()
        }
        if (e.target.value === 'Episodes') {
            sortByEpisode()
        }
        if (e.target.value === 'Date') {
            sortByDate()
        }
        
    }

    const checkAcending = (e) => {
        props.setAcendingValue(e.target.value) 
            
        
        
    }

    const sortByValue = () => {
        if (props.acendingValue === 'Acending') {
            props.animeList.sort((a, b) => {
            return b.score - a.score
        })
        } else if (props.acendingValue === 'Decending') {
            props.animeList.sort((a, b) => {
                return a.score - b.score
            })
        }
        

        console.log(props.animeList)
    }

    const sortByEpisode = () => {
        if (props.acendingValue === 'Acending') {
            props.animeList.sort((a, b) => {
            return b.episodes - a.episodes
        })
        } else if (props.acendingValue === 'Decending') {
            props.animeList.sort((a, b) => {
                return a.episodes - b.episodes
            })
        }
        

        console.log(props.animeList)
    }

    const sortByName = () => {
        props.animeList.sort((a, b) => {
            let nameA = a.title.toUpperCase()
            let nameB = b.title.toUpperCase()

            if(props.acendingValue === 'Acending') {
                if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }

            return 0
            }

            if (props.acendingValue === 'Decending') {
                if (nameA < nameB) {
                    return 1
                }
                if (nameA > nameB) {
                    return -1
                }
    
                return 0
            }

            return 0
            
        })
        
    }

    const sortByDate = () => {
        props.animeList.sort((a, b) => {
            let nameA = a.start_date.toUpperCase()
            let nameB = b.start_date.toUpperCase()

            if(props.acendingValue === 'Acending') {
                if (nameA < nameB) {
                return -1
            }
            if (nameA > nameB) {
                return 1
            }

            return 0
            }

            if (props.acendingValue === 'Decending') {
                if (nameA < nameB) {
                    return 1
                }
                if (nameA > nameB) {
                    return -1
                }
    
                return 0
            }

            return 0
            
        })
        
    }

    useEffect(() => {
        if (props.acendingValue === 'Acending') {
            props.setAcending('Acending')
            
        } else if (props.acendingValue === 'Decending') {
            props.setAcending('Decending')
            
        }

        if (props.sortValue === 'Score') {
            sortByValue()
        
        }

        if (props.sortValue === 'Name') {
            sortByName()
            
        }

        if (props.sortValue === 'Episodes') {
            sortByEpisode()
            
        }

        if (props.sortValue === 'Date') {
            sortByDate()
            
        }

        
        
        // if (props.sortValue === 'Score') {
        //     sortByValue()
            
        // }
    }, [props.acendingValue, props.sortValue])
   
    return (
        <div className='bg-grey-400'>

            
                <div className='flex mb-12'>
                <div className='search-box'>
                    <form 
                        className='mt-6 ml-8'
                        onSubmit={props.HandleSearch}
                        >
                            <button className="btn-search"><i className="flex justify-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg></i></button>
                        <input
                            type='search'
                            placeholder='Search anime...' 
                            className='input-search'
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
                            <option value='Upcoming Anime' name='upcoming'>Upcoming Anime</option>
                        </select>
                        
                    </div> 
                </div>
                

                <div className='flex justify-center items-center flex-col mb-4'>
                    <div className='text-center text-2xl mb-6 w-60 bg-gray-300 rounded-xl h-10'>
                        {props.displayTitle}
                    </div>
                    <div className='flex ml-auto'>
                        <div className='ml-auto mt-auto pr-12 outline-none'>
                            <select className='w-40' onChange={checkAcending} value={props.acending}>
                                <option value='Select...' name='select'>Sort by...</option>
                                <option value='Acending' name='top'>Acending</option>
                                <option value='Decending' name='seasonal'>Decending</option>
                                
                            </select>
                            
                        </div> 
                        <div className='ml-auto mt-auto pr-12 outline-none'>
                            <select className='w-40' onChange={checkSort} value={props.sortValue}>
                                <option value='Select...' name='select'>Sort by...</option>
                                <option value='Score' name='top'>Score</option>
                                <option value='Name' name='seasonal'>Name</option>
                                <option value='Episodes' name='upcoming'>Episodes</option>
                                <option value='Date' name='upcoming'>Date</option>
                            </select>
                            
                        </div> 
                    </div>
                </div>
            
            
            <div className='flex justify-center bg-grey-400'>
                
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
