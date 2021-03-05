import React from 'react'
import Book from './Book'

const Books = (props) => {
  const {header, books, deleteBook, updateBook} = props
    
  const renderBooks = () =>{
    if(books.length == 0){
        return <p>no books</p>
    }

    return books.map( book => <Book updateBook={updateBook} deleteBook={deleteBook} key={book.id} {...book}/>)
}
return (
    <>
      <div className='books-container'>
        <h1>{header ? header : 'Books'}</h1>
        {renderBooks()}
      </div>
    </>
)
}

export default Books