"use client"
import React from 'react';
import MovieList from '@/layouts/movieList';
import { movies } from '@/libs/data';
import Navbar from '@/layouts/navbar';
import FiltersNavBar from '@/layouts/filters';
import { useDataContext } from '@/store/filter.context';

export default function Home() {
  const { filterState, data } = useDataContext();

  const categorisedState = filterState.activeCategory === "All" ? data : data?.filter(({ genre }) => genre.includes(filterState.activeCategory));

  const yearOfMovieFilter = filterState.releaseYear === "All" ? categorisedState : categorisedState?.filter(({ year }) => {
    return filterState.releaseYear === year.toString()
  });
  const ratingFiltered = filterState.rating === "All" ? yearOfMovieFilter : yearOfMovieFilter?.filter(({ rating }) => {
    return filterState.rating === rating.toString()
  });

  return (
    <div>
      <Navbar />
      <FiltersNavBar />
      <MovieList movieList={ratingFiltered} />
    </div>
  );
}
