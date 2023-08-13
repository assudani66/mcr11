import React from 'react';
import MovieList from '@/layouts/movieList';
import { movies } from '@/libs/data';

export default function Home() {

  return (
    <div>
      <MovieList movieList={movies} />
    </div>
  );
}

