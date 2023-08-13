"use client"
import MovieCard from '@/components/composables/movieCard.composable'
import { useDataContext } from '@/store/filter.context'
import React from 'react'

const Page = ({ params }: { params: { movieId: string } }) => {
    const { data } = useDataContext()
    const selectedMovie = data.find((selectedMovie) => params.movieId === selectedMovie.id.toString())
    return (
        <div>
            <MovieCard film={selectedMovie!} />
        </div>
    )
}

export default Page