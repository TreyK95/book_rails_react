import React, {useState} from 'react'

const BookForm = (props) => {
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const {addBook} = props

    const handleSubmit = (event) => {
        event.preventDefault()
        // here I have my the fields 
        addBook({title, author}) 




        // clear form
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <p>Title</p>
            <input 
               value={title}
               onChange={(event)=> setTitle(event.target.value)}           
             />
            <p>category</p>
            <input
             value={author}
             onChange={(event)=> setAuthor(event.target.value)}         
            />
            <button>Create Book</button>
        </form>
    )
}

export default BookForm