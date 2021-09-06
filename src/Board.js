import React from 'react';
import Note from './Note.js'
import PropTypes from 'prop-types';
import ShowNote from './ShowNote.js';

function Board ({ notes, onDeleteNote, onShowNote, onCloseNote, onChangeNote, onAddChange}) {

    return (
        <div className = "Board">
            {notes.map (note => {
                return <Note key = {note.id} onShow = {onShowNote} note = {note} onClickDelete = {onDeleteNote}/>
            })}
            {notes.find(note => note.isShown === true) && <ShowNote notes = {notes} onClickDeleteNote = {onDeleteNote} onChange = {onChangeNote} onAddChange = {onAddChange} onClose = {onCloseNote} />}
        </div>
    )
}

Board.propTypes = {
    notes: PropTypes.array.isRequired,
    onDeleteNote: PropTypes.func.isRequired
}

export default Board