import React, {useState} from 'react'
import BookForm from './BookForm'

const Book = (props) => {
    const {id, isbn, title, author, deleteBook, updateBook} = props
    const [showForm, setShowForm] = useState(false)
    const renderBook = () => {return (
        <>
        <div className='book-header'>
            <h1>{title}</h1>
            <div>
                <p>Author: {author} </p>
            </div>
        </div>
        <div className='book-footer'>
            <button onClick={() => deleteBook(id)}>Delete</button>
            <button onClick={() => setShowForm(true)}>Edit</button>
            <p>ID: {id}</p>
        </div>
        </>
    )}

    const clickHandler = () => {
        console.log('clicked')
    }

    return (
        <div className='book-container'>
            {!showForm && renderBook()}
            {showForm && <BookForm updateBook={updateBook} setShowForm={setShowForm} isbn={isbn} title={title} author={author} id={id}/>}
        </div>
    )
}

export default Book