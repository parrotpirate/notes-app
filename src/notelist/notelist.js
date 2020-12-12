import React, {Component} from 'react'
import Note from '../note/note';
import Grid from '@material-ui/core/Grid'

class NoteList extends Component {
  render() {
    const {notes, selectedNoteIndex} = this.props; 
    return ( 
      <Grid
      container
      direction="row"
      spacing={2}
      justify="flex-start"
      alignItems="flex-start">
        {
          notes.map((_note, _index) => {
            return(
              <Note
              key={_index}
              _note={_note}
              _index={_index}
              selectedNoteIndex={selectedNoteIndex}
              selectNote={this.selectNote}
              removeNote={this.removeNote}>
              </Note>
            )
          })
        }
      </Grid>
     );
  }
  
  selectNote = (n, i) => this.props.selectNote(n, i);
  removeNote = (note) => this.props.removeNote(note);
}
 

export default NoteList;