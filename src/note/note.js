import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

class Note extends Component {
  render() { 
    const { _index, _note, selectedNoteIndex } = this.props;
    return ( 
      <Grid item>
      <Card className="note-card" 
        key={_index}
        selected={selectedNoteIndex === _index}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h3">{_note.title}</Typography>
            <Typography component="p">{_note.text}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
        <IconButton onClick={() => this.selectNote(_note, _index)}>
          <EditIcon></EditIcon>
        </IconButton>
          <IconButton onClick={() => this.removeNote(_note)}>
            <DeleteIcon></DeleteIcon>
          </IconButton>
        </CardActions>
      </Card>
      </Grid>
     );
  }
  
  selectNote = (n, i) => this.props.selectNote(n, i);

  removeNote = (note) => {
    this.props.removeNote(note);
  }
}
 
export default Note;
