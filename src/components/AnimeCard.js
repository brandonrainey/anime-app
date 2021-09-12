import React from 'react'

export default function AnimeCard({anime}) {
    return (
        <div className='p-2 flex-3'>
            <a 
				key={anime.mal_id}
				href={anime.url} 
				target="_blank" 
				rel="noreferrer">
				<figure>
					<img 
						src={anime.image_url} 
						alt={anime.mal_id} />
				</figure>
				<h3>{ anime.title }</h3>
			</a>
        </div>
    )
}
