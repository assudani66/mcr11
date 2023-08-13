"use client"
import React, { createContext, useReducer, ReactNode, useContext } from "react";
import { movies } from "@/libs/data";

interface UserDetailsState {
    movies: movieInfo[];
    wishList: number[];
    staredMovies: number[];
}

export enum UserDetailsActionKind {
    ADD_MOVIE = "ADD_MOVIE",
    WISHLIST_MOVIE = "WISHLIST_MOVIE",
    STAR_MOVIE = "STAR_MOVIE"
}

type UserDetailsActions =
    | { type: UserDetailsActionKind.ADD_MOVIE; payload: movieInfo }
    | { type: UserDetailsActionKind.STAR_MOVIE; payload: number }
    | { type: UserDetailsActionKind.WISHLIST_MOVIE; payload: number };

interface UserDetailsContextType {
    state: UserDetailsState;
    dispatch: React.Dispatch<UserDetailsActions>;
}

const userDetailsContext = createContext<UserDetailsContextType>({} as UserDetailsContextType);

const userDetailsReducer = (state: UserDetailsState, action: UserDetailsActions): UserDetailsState => {
    switch (action.type) {
        case UserDetailsActionKind.ADD_MOVIE:
            return { ...state, movies: [...state.movies, action.payload] };
        case UserDetailsActionKind.STAR_MOVIE:
            const alreadyAdded = state.staredMovies.includes(action.payload)
            if (!alreadyAdded) {
                return { ...state, staredMovies: [...state.staredMovies, action.payload] };
            }
            return { ...state, staredMovies: state.staredMovies.filter((id) => id !== action.payload) }
        case UserDetailsActionKind.WISHLIST_MOVIE:
            const alreadyWishList = state.wishList.includes(action.payload)
            if (!alreadyWishList) {
                return { ...state, wishList: [...state.wishList, action.payload] };
            }
            return { ...state, wishList: state.wishList.filter((id) => id !== action.payload) }
        default:
            return state;
    }
};

export const UserDataContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const initialState: UserDetailsState = {
        movies: movies,
        wishList: [],
        staredMovies: []
    };

    const [state, dispatch] = useReducer(userDetailsReducer, initialState);

    return (
        <userDetailsContext.Provider value={{ state, dispatch }}>
            {children}
        </userDetailsContext.Provider>
    );
};

export const useUserDetailsContext = () => useContext(userDetailsContext)