"use client";
import { movies } from "@/libs/data";
import React from "react";
import { createContext, useReducer, useContext, useState, useEffect } from "react";

type ToggleCategories = {
    updatedParameter?: string
}

export enum FilterActionKind {
    TOGGLE_ACTIVE_CATEGORIY = "TOGGLE_ACTIVE_CATEGORIY",
    TOGGLE_RATING = "TOGGLE_RATING",
    TOGGLE_RELEASE_YEAR = "TOGGLE_RELEASE_YEAR",
}
interface FilterAction {
    type: FilterActionKind;
    payload?: ToggleCategories
}

interface FilterState {
    activeCategory: string;
    rating: number | string;
    releaseYear: number | string;

}

interface dataContextType {
    filterState: FilterState;
    filterDispatch: React.Dispatch<FilterAction>
    data: movieInfo[]
    addItem: (newItem: movieInfo) => void
}
const dataContext = createContext<dataContextType>({} as dataContextType);

export const DataContextProvider = ({ children }: React.PropsWithChildren) => {

    const [data, setData] = useState(movies)

    const syncStorage = () => {
        const storedData = localStorage.getItem("data");
        if (!storedData) {
            localStorage.setItem("data", JSON.stringify(movies));
            setData(movies);
        } else {
            setData(JSON.parse(storedData));
        }
    };

    const addItem = (newItem: movieInfo) => {
        const updatedData = [...data, newItem]
        // @ts-ignore
        setData(updatedData)
        localStorage.setItem("data", JSON.stringify(updatedData))
    }

    useEffect(() => { syncStorage() }, [])

    const initialFiltersState = {
        activeCategory: "All",
        rating: "All",
        releaseYear: "All",
    }

    const filterReducer = (state: FilterState, action: FilterAction): FilterState => {
        switch (action.type) {
            case FilterActionKind.TOGGLE_ACTIVE_CATEGORIY:
                return {
                    ...state, activeCategory: action.payload?.updatedParameter || state.activeCategory
                }
            case FilterActionKind.TOGGLE_RATING:

                return {
                    ...state, rating: action.payload?.updatedParameter || state.rating
                }
            case FilterActionKind.TOGGLE_RELEASE_YEAR:
                return {
                    ...state, releaseYear: action.payload?.updatedParameter || state.releaseYear
                }
            default:
                return state
        }
    }

    const [filterState, filterDispatch] = useReducer(filterReducer, initialFiltersState)

    return (
        <dataContext.Provider value={{ filterState, filterDispatch, data, addItem }}>  {children}
        </dataContext.Provider>);
};

export const useDataContext = () => useContext(dataContext)