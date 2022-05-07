import React, { useState } from "react";
import "./notes.css";

function NoteComponent({ notes, handleRemove, handleUpdate }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const [flag,setFlag]=useState(0)
  return (
    <div className="container">
      <div className="formatDiv">
          <button onClick={()=>{ setFlag(0)}} className="formatBtn btn btn-warning text-light mx-3" >Grid</button>
          <button onClick={()=>{setFlag(1)}} className="formatBtn btn btn-warning text-light" >Linear</button>
      </div>
          
          

      <div className="row">
          {notes.length > 0 &&
            notes.map((element) => {
              return (
                <div key={element.id} className={flag===0?"col-xl-3 col-md-4":"col-12"}>
                <div className={flag===0?"notess":"notesLinear"}>
                <form
                    onSubmit={handleSubmit}
                    autoComplete="off"
                    className="m-auto"
                  >
                    <p className="title w-100 m-0 p-0 fw-bold"  type="text">
                      {element.title}
                    </p>
                    <p
                      className="notessBody w-100"
                      onChange={(e) => {
                        handleUpdate(e, element.id);
                      }}
                      type="text"
                      name="noteBody"
                      placeholder="Take a Note..."
                    >{flag===0 && element.body.length>30 ? element.body.slice(0,30)+"...": element.body}</p>

                    <button style={{"font-size":"17px"}}
                      className="addBtn w-100"
                      onClick={(e) => {
                        handleRemove(element.id);
                      }}
                    >
                      <i className="fa-solid fa-trash text-secondary"></i>
                    </button>
                  </form>
                </div>
                  
                </div>
              );
            })}
        </div>
    </div>
  );
}

export default NoteComponent;
