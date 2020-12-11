import React, { Component } from 'react';
import Form from './Form';
import NoteList from './NoteList';

class App extends Component {
    state = {
        characters: []
    };

    removeCharacter = index => {
        const { characters } = this.state;

        this.setState({
            characters: characters.filter((character, i) => {
                return i !== index;
            })
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters } = this.state;

        return (
            <div className="container">
                <h1>Notes</h1>

                <div className="new-note">
                    <Form handleSubmit={this.handleSubmit} />
                </div>

                <div className="note-list-container">
                    <h2>Note List</h2>
                    <NoteList
                        characterData={characters}
                        removeCharacter={this.removeCharacter}
                    />
                </div>
            </div>
        );
    }
}

export default App;