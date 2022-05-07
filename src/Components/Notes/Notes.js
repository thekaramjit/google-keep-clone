import React, { useState } from 'react'
import NoteComponent from './NoteComponent'
import './notes.css'

function Notes() {
  const [notes,setNotes]=useState([])
    const [subNotes,setSubNotes]=useState({
      id:0,
      title:"",
      body:""
    })
    const {title,body}=subNotes
    const handleSubmit=(e)=>{
      e.preventDefault();
    }

    const handleChange=(e)=>{
      const name=e.target.name
      const value=e.target.value
      setSubNotes((preValue)=>{
        return{
          ...preValue,[name]:value
        }
      })
    }

    const addNote=()=>{
      if(subNotes.title===""){
        return alert("Please make a title!")
      }
      setNotes(notes.concat(subNotes)) 
      setSubNotes((preValue)=>{
        return{
          id:preValue.id+1,
          title:"",
          body:""
        }
      })
    }

    const handleRemove=(id)=>{
      const sortedNotes=notes.filter((element)=>{
        return element.id!==id
      })
      setNotes(sortedNotes)
    }

    return (
      <div >
          <div className='note w-50 container my-5'>
              <form onSubmit={handleSubmit} autoComplete="off" className=" m-auto">
                  <input className="title w-100" type="text" value={title} onChange={handleChange} name="title" placeholder="Title" />
                  <input className="noteBody w-100" type="text" value={body} onChange={handleChange} name="body" placeholder="Take a Note..." />
                  <button className="addBtn w-100" onClick={addNote}><i className="fa-solid fa-plus text-secondary"></i></button>
              </form>
          </div>
          <div>
            <NoteComponent  handleRemove={handleRemove} notes={notes}/>
          </div>
          

      </div>
    );

}

export default Notes