import React, {useState} from 'react'
import PropTypes from 'prop-types'

function CreateMobileNote({ createNote, cancelNewMobileNote }) {

    

    const [value, setValue] = useState('')

    function createMobileNote(event) {
         event.preventDefault();

         if (value.trim()) {
            createNote(value)
            setValue('')
            cancelNewMobileNote()
         }
    }


    return (
        <div className = "noteblock">
            <div className = "noteblock__body">
                <textarea className = "changeNoteInput" value = {value} onChange = {event => setValue(event.target.value)} autoFocus></textarea>
                <div className = "noteblock__buttons">
                    <button className = "note__button changeNote__button" onClick = {createMobileNote}>Добавить</button>
                    <button className = "note__button closeNote__button" onClick = {() => cancelNewMobileNote()}>Отменить</button>
                </div>
            </div>
        </div>
    )


}

CreateMobileNote.propTypes = {
    value: PropTypes.string,
    createNote: PropTypes.func.isRequired,
    cancelNewMobileNote: PropTypes.func.isRequired
}


export default CreateMobileNote