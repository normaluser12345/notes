import React, {useState} from 'react'
import PropTypes from 'prop-types'

function AddNote (props) {

    const [value, setValue] = useState('')

    function submitHandler(event) {
        const text = document.getElementById('text')
        event.preventDefault();
        text.blur()
        if (value.trim()) {
            props.onCreateNote(value)
            setValue('')
        }
    }

    return (
        <form className = "AddNote" onSubmit = {submitHandler}>
            <textarea id = "text" className = "add-input" value = {value} onChange = {event => setValue(event.target.value)}/>
            <button type="submit">Добавить заметку</button>
        </form>
    )
}

AddNote.propTypes = {
    value: PropTypes.string,
    submitHandler: PropTypes.func,
    onCreateNote: PropTypes.func.isRequired
}

export default AddNote