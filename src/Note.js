import React from 'react'
import PropTypes from 'prop-types'

function Note ({ note, onClickDelete, onShow}) {
    console.log(note)

    return (
        <div className = "Note" onClick = {() => onShow(note.id)}>
            <p className = "note-text">{note.value}</p>
        </div>
    )
}

Note.propTypes = {
    note: PropTypes.object.isRequired,
    onClickDelete: PropTypes.func.isRequired,
    onShow: PropTypes.func.isRequired
}


export default Note