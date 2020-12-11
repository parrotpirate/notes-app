import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            text: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { title, value } = event.target;

        this.setState({
            [title] : value
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
                <label>Title</label><br/>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={this.handleChange} /><br/>
                <label>Text</label><br/>
                <input
                    // rows={5}
                    type="text"
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

export default Form;