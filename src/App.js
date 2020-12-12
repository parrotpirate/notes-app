import React from 'react';
import NoteForm from './noteform/noteform';
import NoteList from './notelist/notelist';
import LowdbComponent from './reacttolowdb';

class App extends LowdbComponent {

    state = {
            selectedNoteIndex: '',
            selectedNote: '',
            notes: [],
    };

    render() {

        return (
            <div className="container">
                <h1>Notes</h1>

                <div className="new-note">
                    <NoteForm 
                    notes={this.state.notes}
                    selectedNote={this.state.selectedNote}
                    selectedNoteIndex={this.state.selectedNoteIndex}
                    handleSubmit={this.handleSubmit} />
                </div>

                <div className="note-list-container">
                    <h2>Note List</h2>
                    <NoteList
                        notes={this.state.notes}
                        selectedNoteIndex={this.state.selectedNoteIndex}
                        removeNote={this.removeNote}
                        selectNote={this.selectNote}
                    />
                </div>
            </div>
        );
    }
    
    handleSubmit = note => {
        this.setState({notes: [...this.state.notes, note]});
    }
    
    selectNote = (note, index) => this.setState({ selectedNoteIndex: index, selectedNote: note });

    removeNote = async (note) => {
        const noteIndex = this.state.notes.indexOf(note);
        await this.setState({ notes: this.state.notes.filter(_note => _note !== note) });
        if(this.state.selectedNoteIndex === noteIndex) {
          this.setState({ selectedNoteIndex: null, selectedNote: null });
        } else {
          this.state.notes.length > 1 ?
          this.selectNote(this.state.notes[this.state.selectedNoteIndex - 1], this.state.selectedNoteIndex - 1) :
          this.setState({ selectedNoteIndex: null, selectedNote: null })
    }}
}

export default App;