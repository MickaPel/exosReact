import React from 'react';
import dataMovie from '../assets/db/db.json'
import Card from './Card';

function Librairie() {

    const data = dataMovie.shows;
    console.log(data)

  return (
    <div>
        <h2>My Movies</h2>
        <div className='grid'>
            {data ? data.map((movie) => <Card key={movie.id} title={movie.title} image={movie.image} isWatched={movie.isWatched} />)
            : <p>Une erreur s'est produite</p>}
        </div>
    </div>
  )
}

export default Librairie