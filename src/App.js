import React, {useState} from 'react';
import Board from './Board.js'
import AddNote from './AddNote.js'
import CreateMobileNote from './CreateMobileNote.js';
import PropTypes from 'prop-types'
import './App.css';




function App() {

  const [notes, setNotes] = useState([
    {id: 1, value: '1', isShown: false},
    {id: 2, value: '2', isShown: false},
    {id: 3, value: '3', isShown: false},
    {id: 4, value: '4', isShown: false},
  ])

  let [newMobileNote, setNewMobileNote] = useState(false)

  function createNote(value) {
    setNotes(
      notes.concat([{
        id: Date.now(),
        value,
        isShown: false
      }])
    )
  }

  function showNote (id) {
    setNotes(
      notes.map (note => {
        if (note.id === id) {
          note.isShown = !note.isShown
        }
        return note
      })
    )
  }

  function deleteNote (id) {
    setNotes(
      notes.filter(note => note.id !== id)
    )
  }

  function changeNoteShownState(id) {
   setNotes(
     notes.map(note => {
       if (note.id === id) {
         note.isShown = false
       }
       return note
     })
   )
  }

  function addChange(value, id) {
    notes.map(note => {
      if (note.id === id) {
        note.value = value
      }
      return note
    })
  }

  function createMobileNote() {
    setNewMobileNote(
      newMobileNote = true
    )
  }
  function cancelNewMobileNote() {
    setNewMobileNote(
      newMobileNote = false
    )
  }
  
  return (
    <div className="App">
        <h1 className = "title">Мои заметки</h1>
        <button className = "addNoteMin" onClick = {() => createMobileNote()}>+</button>
        <AddNote onCreateNote = {createNote}/>
        {notes.length? 
        <Board notes = {notes} onAddChange = {addChange} onCloseNote = {changeNoteShownState} onShowNote = {showNote} onDeleteNote = {deleteNote}/> : 
        'Нет заметок. Создай новую!'
      }
        {newMobileNote === true && <CreateMobileNote createNote = {createNote} cancelNewMobileNote = {cancelNewMobileNote}/>}
    </div>
  );
}

App.propTypes = {
  notes: PropTypes.array,
  
}

export default App;
