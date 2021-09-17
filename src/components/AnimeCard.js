import React from 'react'
import CRIcon from './Crunchyroll-logo.png'

export default function AnimeCard({anime}) {
	const newTitle =  anime.title.replace(/\s+/g, '-').toLowerCase()



    return (
        <div className='p-2 flex-3  pb-8 flex justify-center myCard'>
            <a 
				key={anime.mal_id}
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure className='flex justify-center transform duration-200 hover:scale-110 pb-4'>
					<img 
						src={anime.image_url} 
						alt={anime.mal_id}
						className='rounded-md shadow-xl' />
				</figure>
				<h3 className='font-medium'>{ anime.title }</h3>
				<a 
					href={`https://www.crunchyroll.com/search?from=&q=${newTitle}`}
					target="_blank" 
					rel="noreferrer"
					className='flex text-sm'>
				
					Find on Crunchyroll <img src={CRIcon} alt={anime.mal_id} className='h-5'/>
				</a>

			</a>
        </div>
    )
}
