import React, {useState} from 'react'

const BookForm = (props) => {
    const { addBook, setShowForm, id, title:titleInit, author: authorInit , updateBook} = props
    
    const [title, setTitle] = useState(titleInit ? titleInit : "")
    const [author, setAuthor] = useState(authorInit ? authorInit : "")


    const handleSubmit = (e) => {
        e.preventDefault()
        // here I have my the fields 
        if(id){
          updateBook({title, author}, id)
          // toggle form here
          setShowForm(false)
        } else{
          addBook({ title, author})
        }
       
        // clear form
        setTitle('')
        setAuthor('')
    }
    return (
        <form onSubmit={handleSubmit} style={styles.formContainer}>
            <h1>{id ? `Edit Book ${id}` : "Add Book"}</h1>
            <p>Title</p>
            <input
                style={styles.input}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <p>Author</p>
            <input
                style={styles.input}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <br />
            <button type='submit'>{id ? "Update" : "Add"}</button>
            {setShowForm && <button type="button" onClick={() => setShowForm(false)}>Cancel</button>}
        </form>
    )
}

const styles = {
    formContainer: {
        border: '1px solid whitesmoke',
        margin: '10px',
        padding: '20px'
    },
    input: {
        width: '600px',
        height: '20px',
        marginBottom: '10px'
    }
}

export default BookForm