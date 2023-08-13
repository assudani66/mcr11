"use client"
import React from 'react';
import Button from '../UI/button';
import { UserDetailsActionKind, useUserDetailsContext } from '@/store/movie.context';

const MovieCard = ({ film }: { film: movieInfo | Partial<movieInfo> }) => {
  const { state, dispatch } = useUserDetailsContext()
  return (
    <div className='flex flex-col  space-y-2 w-80 items-center p-5 border rounded-lg wrap m-2'>
      <img className='w-40' src={film.imageURL} alt={film.title} />
      <p>{film.title}</p>
      <p>{film.summary}</p>
      <div className='flex justify-between w-full'>
        <Button onClick={() => {
          dispatch({ type: UserDetailsActionKind.STAR_MOVIE, payload: film.id! })
        }} >Star</Button>
        <Button onClick={() => {
          dispatch({ type: UserDetailsActionKind.WISHLIST_MOVIE, payload: film.id! })
        }} >Add to WishList</Button>

      </div>
    </div>
  );
};

export default MovieCard;
