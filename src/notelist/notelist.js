import React from 'react'

const NoteCards = (props) => {
  const rows = props.noteData.map((row, index) => {
    return (
      <div className="note-card" key={index}>
        <h3>{row.title}</h3>
        <p>{row.text}</p>
        <button onClick={() => props.removeNote(index)}>Delete</button>
      </div>
    )
  })

  return <div>{rows}</div>
}

const NoteList = (props) => {
    const {noteData, removeNote} = props
  return (
    <div className="note-list">
      <NoteCards noteData={noteData} removeNote={removeNote}/>
    </div>
   );
}

export default NoteList;