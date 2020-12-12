import React, { Component } from 'react';
/* import LowdbComponent from './ReactLowdb'; */

class NoteForm extends Component {
    
    constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            text: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { title, text } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="title">Title</label><br/>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={this.handleChange} /><br/>
                <label htmlFor="text">Text</label><br/>
                <textarea
                    rows={10}
                    name="text"
                    id="text"
                    value={text}
                    onChange={this.handleChange} /><br/>
                <button type="submit">
                    Add Note
                </button>
            </form>
        );
    }
}

export default NoteForm;