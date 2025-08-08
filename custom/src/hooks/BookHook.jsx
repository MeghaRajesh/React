import { useState } from "react"

export const useBookHook=()=>{
    const [books,setBooks]=useState([
        {title:'Wings of Fire',author:'Abdul Kalam'}
    ]);

    const getAllBooks=()=>{
        return books;
    }
    function addBooks(book){
        var ub=[...books,book];
        setBooks(ub);
    }
    function removeBooks(title){
        var ub=books.filter((e)=>title!=e.title);
        setBooks(ub);
    }
    return {
        books,getAllBooks,addBooks,removeBooks
    }
}