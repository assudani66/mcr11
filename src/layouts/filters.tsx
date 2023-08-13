"use client"
import Button from '@/components/UI/button';
import { geners, rating, yearOfRelease } from '@/libs/constants'
import { FilterActionKind, useDataContext } from '@/store/filter.context';
import React from 'react'

const FiltersNavBar = () => {
    const { filterState, filterDispatch } = useDataContext();
    console.log(filterState)
    return (
        <div>
            <select onChange={(e) => {
                filterDispatch({
                    type: FilterActionKind.TOGGLE_ACTIVE_CATEGORIY,
                    payload: { updatedParameter: e.target.value },
                })
            }
            }
                value={filterState.activeCategory}
            >
                <option value={'All'}>
                    All
                </option>
                {geners.map((name, index) => (
                    <option
                        key={index}
                        value={name}
                    >
                        {name}
                    </option>
                ))}
            </select>
            <select onChange={(e) => {
                filterDispatch({
                    type: FilterActionKind.TOGGLE_RATING,
                    payload: { updatedParameter: e.target.value },
                })
            }
            }
                value={filterState.rating}
            >
                <option value={'All'}>
                    All
                </option>
                {rating.map((name, index) => (
                    <option
                        key={index}
                        value={name}
                    >
                        {name}
                    </option>
                ))}
            </select>
            <select onChange={(e) => {
                filterDispatch({
                    type: FilterActionKind.TOGGLE_RELEASE_YEAR,
                    payload: { updatedParameter: e.target.value },
                })
            }
            }
                value={filterState.releaseYear}
            >
                <option value={'All'}>
                    All
                </option>
                {yearOfRelease.map((name, index) => (
                    <option
                        key={index}
                        value={name}
                    >
                        {name}
                    </option>
                ))}
            </select>
            <Button>Add a movie</Button>
        </div>
    )
}

export default FiltersNavBar