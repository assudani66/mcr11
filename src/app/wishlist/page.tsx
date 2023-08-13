"use client"
import MovieList from '@/layouts/movieList'
import { useDataContext } from '@/store/filter.context'
import { useUserDetailsContext } from '@/store/movie.context'
import React from 'react'

const Page = () => {
    const { state } = useUserDetailsContext()
    const { data } = useDataContext()

    const wishlistedMovies = data.filter((movie) => state.wishList.includes(movie.id))

    return (
        <MovieList movieList={wishlistedMovies} />
    )
}

export default Page