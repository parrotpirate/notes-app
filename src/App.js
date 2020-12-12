import React, { Component } from 'react';
import NoteForm from './NoteForm';
import NoteList from './NoteList';
import LowdbComponent from './ReactLowdb';

class App extends LowdbComponent {
    state = {
        notes: []
    };

    removeNote = index => {
        const { notes } = this.state;

        this.setState({
            notes: notes.filter((note, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = note => {
        this.setState({notes: [...this.state.notes, note]});
    }

    render() {
        const { notes } = this.state;

        return (
            <div className="container">
                <h1>Notes</h1>

                <div className="new-note">
                    <NoteForm handleSubmit={this.handleSubmit} />
                </div>

                <div className="note-list-container">
                    <h2>Note List</h2>
                    <NoteList
                        noteData={notes}
                        removeNote={this.removeNote}
                    />
                </div>
            </div>
        );
    }
}

export default App;