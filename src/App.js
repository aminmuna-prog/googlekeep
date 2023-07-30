
import { useState } from 'react';
import './App.css';
import CreateNote from './component/CreateNote';
import Footer from './component/Footer';
import Header from './component/Header';
import Note from './component/Note';

function App() {

  const [addItem, setAdditem] = useState([]);

  const addNote = (note) =>{
    setAdditem((preData) =>{
      return [...preData, note]
    })

  }

  const onDelete = (id) =>{
      setAdditem((olddata) =>
        olddata.filter((currentVal, indx)=>{
          return indx !== id;
        })
      )
  }
  return (
    <div className="App">
      <Header></Header>
      <CreateNote passNote={addNote}></CreateNote>
      
      {
         addItem.map((val, index) =>{
            return(
              <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              deleteItem = {onDelete}
              ></Note>
            )
         })
      }
      <Footer></Footer>
    </div>
  );
}

export default App;
