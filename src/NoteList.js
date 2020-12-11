import React from 'react'

const NoteCards = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <div className="note-card" key={index}>
        <h3>{row.title}</h3>
        <p>{row.text}</p>
        <button onClick={() => props.removeCharacter(index)}>Delete</button>
      </div>
    )
  })

  return <div>{rows}</div>
}

const NoteList = (props) => {
    const {characterData, removeCharacter} = props
  return (
    <div className="note-list">
      <NoteCards characterData={characterData} removeCharacter={removeCharacter}/>
    </div>
   );
}

export default NoteList;