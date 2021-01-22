import React, { useState, useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext);
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_BOOK', book: { author, title } });
        setAuthor('');
        setTitle('');
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input type="text" name="title" value={title} placeholder = "Title" onChange = {e => setTitle(e.target.value)} required />
            <input type="text" name="author" value={author} placeholder = "Author" onChange = {e => setAuthor(e.target.value)} required />
            <input type="submit" value="Add Book"/>
        </form>
    );
}
 
export default BookForm;
