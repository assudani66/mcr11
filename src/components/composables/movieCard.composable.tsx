import React from 'react';
import Button from '../UI/button';

const MovieCard = ({ film }: { film: movieInfo | Partial<movieInfo> }) => {
  return (
    <div className='flex flex-col  space-y-2 w-80 items-center p-5 border rounded-lg wrap m-2'>
      <img className='w-40' src={film.imageURL} alt={film.title} />
      <p>{film.title}</p>
      <p>{film.summary}</p>
      <div className='flex justify-between w-full'>
        <Button>Star</Button>
        <Button>Add to wishList</Button>
      </div>
    </div>
  );
};

export default MovieCard;
