import React from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
const Note = ({title, content, deleteItem, id }) => {

  const deleteNote =() =>{
        deleteItem(id);
  }

  return (
    <div>
      <div className='note'>
        <h1>{title}</h1>
        <br />
        <p>{content}</p>
        <button className='btn' onClick={deleteNote}>
            <DeleteOutlineIcon className='deleteIcon'></DeleteOutlineIcon>
        </button>
     
      </div>
    </div>
  )
}

export default Note
