import React, { Component } from 'react';
import Button from '@material-ui/core/Button'

class NoteForm extends Component {
    
    constructor(props) {
        super(props);

        this.initialState = {
            title: '',
            text: ''
        };

        this.state = this.initialState;
    }

      componentDidMount = () => {
        this.setState({
          text: this.props.selectedNote.body,
          title: this.props.selectedNote.title,
        });
      }

      // componentDidUpdate = () => {
      //     this.setState({
      //       text: this.props.selectedNote.body,
      //       title: this.props.selectedNote.title,
      //     });
      // }
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
        // const { title, text } = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={this.state.title}
                    onChange={this.handleChange} />
                <label htmlFor="text">Text</label>
                <textarea
                    rows={10}
                    name="text"
                    id="text"
                    value={this.state.text}
                    onChange={this.handleChange} />
                <Button
                    variant="contained" 
                    color="primary"
                    type="submit">
                    Add Note
                </Button>
            </form>
        );
    }
}

export default NoteForm;