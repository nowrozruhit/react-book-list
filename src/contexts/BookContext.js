import React, { createContext, useReducer, useEffect } from 'react';
import { BookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();


const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(BookReducer, [], () => {
        const localStorageData = localStorage.getItem('books');
        return localStorageData ? JSON.parse(localStorageData) : [];
    });
    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books));
    }, [books]);

    return(
        <BookContext.Provider value={{ books, dispatch }}>
            { props.children }
        </BookContext.Provider>
    );
}

export default BookContextProvider;
