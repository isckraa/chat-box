import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    createMessage = () => {
        const { addMessage, pseudo } = this.props;
        const message = {
            message: this.state.message,
            pseudo
        }

        addMessage(message);

        // Reset
        this.setState({ message: '' })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createMessage();
    }

    handleChange = (event) => {
        const message = event.target.value;
        this.setState({ message });
    }

    render() {
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <textarea 
                    maxLength="140"
                    required
                    onChange={this.handleChange}
                    value={this.state.message}
                />
                <div className="info">
                    0 / 140
                </div>
                <button type="submit">Envoyer !</button>
            </form>
        )
    }
}

export default Form;