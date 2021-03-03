import React from 'react'

const Book = (props) => {
    const {id, title, author, deleteBook} = props
    return (
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
                <p>edit</p>
                <p>Id: {id}</p>
            </div>
        </div>
    )
}

export default Book