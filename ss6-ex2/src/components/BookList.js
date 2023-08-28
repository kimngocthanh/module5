import { useState, useEffect } from 'react';
import * as BookService from '../service/BookService';
import { Link } from "react-router-dom"
function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBook();
    }, [])

    const getAllBook = async () => {
        const result = await BookService.getAll();
        setBooks(prev => prev = result);

    }

    const deleteBook = async (id) => {
        await BookService.deleteBook(id);
        getAllBook();
    }

    return (
        <>
            <div className='container'>
                <h1>Book list</h1> 
                <Link to={'/create'}><button className='btn btn-success'>Add</button></Link>
                <table className='table table-striped'>
                    <thead><tr>
                        <th>title</th>
                        <th>quantity</th>
                        <th>edit</th>
                        <th>delete</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            books.map((book) => (
                                <tr key={book}>
                                    <td>{book.title}</td>
                                    <td>{book.quantity}</td>
                                    <td><Link to={'/edit/'+book.id}><button className='btn btn-warning'>Edit</button></Link></td>
                                    <td><button className='btn btn-danger' onClick={()=> deleteBook(book.id)}>delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default BookList;