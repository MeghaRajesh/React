import { useContext, useState } from "react";
import { useBookHook } from "../hooks/BookHook"
import { bookContext } from "../App";

export const Book = () => {
    const [bok, setBok] = useState({});
    // const { books, getAllBooks, addBooks, removeBooks } = useBookHook();
    const { books, getAllBooks, addBooks, removeBooks }=useContext(bookContext)

    return (
        <div>
            Title:<br/>
            <input type="text"  onChange={(e) => setBok({...bok, title: e.target.value })} /><br/><br/>
            Author:<br/>
            <input type="text"  onChange={(e) => setBok({ ...bok,author: e.target.value })} /><br/><br/>
            <input type="button" value="Add" onClick={()=>addBooks(bok )} /> &nbsp; &nbsp;
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>
                        {books.map((x,i)=><tr key={i}>
                                <td>{x.title}</td>
                                <td>{x.author}</td>
                                <td>
                                <input type="button" value="Delete" onClick={()=>removeBooks(x.title)} />
                                </td>
                            </tr>
                        )}
                </tbody>
            </table>
        </div>
    );

} 