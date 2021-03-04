import React from 'react'

const Book = (props) => {
    const {id, title, author, deleteBook, showForm} = props
    const renderBook = () => {
        <div className='book-container'>
            <div className='book-header'>
             <h1>{title}</h1>
             <div>
                 <p>{author} </p>
                <p> {id}</p>
            </div>
            </div>
            <div className='book-footer'>
                <p onClick={()=> deleteBook(id)}>delete</p>
                <p onClick={() => showForm(true)}>Edit</p>
                <p>Id: {id}</p>
            </div>
        </div>
    }

    return (
        <>
        {!showForm && renderBook}
        </>
    )
}

export default Book