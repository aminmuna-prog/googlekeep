import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {

  const [note, setNote] = useState({

    title: '',
    content: '',
  });

  const inputEvent = (e) =>{
    // const value = e.target.value;
    // const name = e.target.name;

    const {value, name} = e.target;
    setNote((predata) =>{
       return{
        ...predata,
        [name]: value,
       }
    })
  }

  const addivent = () =>{
      props.passNote(note);
      setNote({
        title: '',
        content: '',
      })
  }
  return (
    <div>
      <div className='main_note'>
        <form>
          <input 
            type="text" 
            placeholder='Title' 
            autoComplete='off' 
            name='title'
            value={note.title}
            onChange={inputEvent }
          />
         <textarea id="" cols="" 
            rows="" 
            placeholder='write a note...'
            name = 'content'
            value={note.content}
            onChange={inputEvent}
            ></textarea> 
            <Button>
              <AddIcon className="plus_sign" onClick={addivent}></AddIcon>
            </Button>
          
        </form>
      </div>
    </div>
  )
}

export default CreateNote
