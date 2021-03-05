import React, {useState} from 'react'
import Books from './Books'
import BookForm from './BookForm'
import axios from 'axios'


const App = () =>{
  const handleError = (error) =>{
    console.log(error)
    alert('error getting books check console')
  }

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const getBooks = async () =>{
    console.log('getBooks called')
      try{
        setLoading(true)
        let response = await axios.get('/books')
        setLoading(false)
        setBooks(response.data)
      } catch(error){
          handleError(err)
          setLoading(false)
      }
    }

  const deleteBook = async(id) => {
    console.log('clicked, ID:', id)
      try{
        let response = await axios.delete(`/books/${id}`)
        let filterBooks = books.filter( i => i.id !== id )

          // setBooks with newArray
          setBooks(filterBooks)
      }catch(err){
          handleError(err)
          setLoading(false)
      }
  }

  const addBook = async (obj) => {

    console.log(obj)
     // want to add to db
     try{
     let response = await axios.post('/books', {...obj, isbn:Math.random()})
      //then update UI(need to in app.js)
      setBooks([response.data, ...books])
     }
     catch(err){
         handleError(err)
     }

    
 }

  const updateBook = async (bookObj, id) => {
    console.log('updateBook called')
    console.log(bookObj)
    try{

    let response = await axios.put(`/books/${id}`, bookObj)
    
    let updateBooks = books.map(book => book.id !== id ? book : response.data)

    setBooks(updateBooks)
  } catch (err) {
    handleError(err)
}
  }


  return (
    <>
        <h1>App</h1>
        <button disabled={loading} onClick={getBooks}>{loading ? 'loading': 'Load Books'}</button>
        <button onClick={()=>setShowForm(!showForm)}>{showForm ? "Hide Form" : "Create Book"}</button>
        {showForm && <BookForm addBook={addBook}/>}
        <Books updateBook={updateBook} deleteBook={deleteBook} header='Books' books={books}/>
    </>
    )
}

export default App
