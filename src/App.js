import React from 'react'
import { MovieCard } from './components/MovieCard'

export const App = () => {
  
const greet = (q) => {
 q();
}

const g = () => {
  alert("hello world")
}

const o = () => {
  g(greet);
}
   
  return (
    <div>
       <div className='p-4 grid grid-cols-6 '>
     
      <MovieCard title={'Venom: The Last Dance'} image={'https:image.tmdb.org/t/p/original/aosm8NMQ3UyoBVpSxyimorCQykC.jpg'}/>
      <MovieCard title={'Spiderman'} image={'https://upload.wikimedia.org/wikipedia/en/2/21/Web_of_Spider-Man_Vol_1_129-1.png'}/>
      <MovieCard detail={'hello'}/>
      <MovieCard detail={'hello'}/>
     
      </div>
   
      <div className='p-5'>
        <button onClick={() => {o('Goodnight')}} className='bg-blue-gray-800 text-white size-10  w-[100px] text-center rounded-md'>Click me</button>
      </div>
    </div>
     
  )
}
