import React, {useState} from 'react'
import PropTypes from 'prop-types'

function ShowNote ({ onClose, notes, onAddChange, onClickDeleteNote }) {

    const _notes = [...notes]
    const note = _notes.find(note => note.isShown === true)

    const [value, setValue] = useState(note.value)

    function addNewValue(event) {
        onAddChange(value, note.id)
        onClose(note.id)
    }

     return (
        <div className = "noteblock">
            <div className = "noteblock__body">
                <textarea className = "changeNoteInput" value = {value} onChange = {event => setValue(event.target.value)}></textarea>
                <div className = "noteblock__buttons">
                    <button className = "note__button changeNote__button" onClick = {addNewValue}>Изменить</button>
                    <button className = "note__button closeNote__button" onClick = {() => onClickDeleteNote(note.id)}>Удалить</button>
                    <button className = "note__button closeNote__button" onClick = {() => onClose(note.id)}>Закрыть</button>
                </div>
            </div>
        </div>
    )
}

ShowNote.propTypes = {
 onClose: PropTypes.func.isRequired,
 notes: PropTypes.array.isRequired,
 onAddChange: PropTypes.func.isRequired,
 onClickDeleteNote: PropTypes.func.isRequired
}

export default ShowNote