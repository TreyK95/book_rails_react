import React, {useState} from 'react'
import Books from './Books'
import axios from 'axios'


const App = () =>{
  const handleError = (error) =>{
    console.log(error)
    alert('error getting books check console')
  }

  const [books, setBooks] = useState([])
  const [loading, setLoading] = useState(false)

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
         // extra step: actually delete from db
        //   TODO: uncomment whenDB ready  
        let response = await axios.delete(`/books/${id}`)
        // response.data should the thing deleted
        // remove Id from UI
        // filter id out if items in new array with filter
        let filterBooks = books.filter( i => i.id !== id )

          // setItems with newArray
          setBooks(filterBooks)
      }catch(err){
          handleError(err)
          setLoading(false)
      }
  }


  return (
    <>
        <h1>App</h1>
        <button disabled={loading} onClick={getBooks}>{loading ? 'loading': 'getBooks'}</button>
        {/* <button disabled={loading} onClick={getItemsNoAsync}>{loading ? 'loading': 'getItems'}</button> */}
        <Books deleteBook={deleteBook} header='Books' books={books}/>
    </>
    )
}

export default App
