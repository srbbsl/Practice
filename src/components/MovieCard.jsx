import React from 'react'

export const MovieCard = ({title, image}) => {
  


    const imageBase = 'https:image.tmdb.org/t/p/original'
   
     const movie = {
       "adult": false,
       "backdrop_path": "/3V4kLQg0kSqPLctI5ziYWabAZYF.jpg",
       "id": 912649,
       "original_language": "en",
       "original_title": "Venom: The Last Dance",
       "overview": "Eddie and Venom are on the run. Hunted by both of their worlds and with the net closing in, the duo are forced into a devastating decision that will bring the curtains down on Venom and Eddie's last dance.",
       "popularity": 12413.089,
       "poster_path": "/aosm8NMQ3UyoBVpSxyimorCQykC.jpg",
       "release_date": "2024-10-22",
       "title": "Venom: The Last Dance",
       "video": false,
       "vote_average": 6.7,
       "vote_count": 1262
     };
  return (
    <div className='p-4'>
     
         <div className='w-[300px] bg-green-200 rounded-lg shadow-lg'>
      
         <img className='rounded-t-lg w-full h-[400px]' src={image} alt='' />
      
       

        <div className='p-3 space-y-2'>
          <h1 className='text-xl font-bold w-full'>{title}</h1>
          <div className='flex justify-between'>
            <p className='font-semibold'>{`Vote: ${movie.vote_average}`}</p>
            <p className='font-semibold'>{`Vote Count: ${movie.vote_count}`}</p>
          </div>
          
          <p className='line-clamp-3'>{movie.overview}</p>
        </div>
        
     
      </div>
     
      
       
    </div>
  )
}
