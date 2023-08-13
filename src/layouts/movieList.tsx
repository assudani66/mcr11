import React from 'react';
import MovieCard from '@/components/composables/movieCard.composable';

interface MovieInfo {
    id: number;
    title: string;
    year: number;
    genre: string[] | string;
    rating: number;
    director: string;
    writer: string;
    cast: string[] | string;
    summary: string;
    imageURL: string;
}

interface MovieListProps {
    movieList: (MovieInfo | Partial<MovieInfo>)[];
}

const MovieList = ({ movieList }: MovieListProps) => {
    return (
        <div className='flex flex-wrap w-full p-2'>
            {movieList.map((movieInfo, index) => (
                <MovieCard key={index} film={movieInfo} />
            ))}
        </div>
    );
};

export default MovieList;
