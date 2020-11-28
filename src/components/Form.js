import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: '',
            length: 0
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
        this.setState({ message: '', length: 0 })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.createMessage();
    }

    handleChange = (event) => {
        const message = event.target.value;
        const length = message.length;
        this.setState({ message, length });
    }

    handleKeyUp = (event) => {
        if(event.key === "Enter") {
            this.createMessage();
        }
    }

    render() {
        return(
            <form className="form" onSubmit={this.handleSubmit}>
                <textarea 
                    maxLength="140"
                    required
                    onChange={this.handleChange}
                    value={this.state.message}
                    onKeyUp={this.handleKeyUp}
                />
                <div className="info">
                    {this.state.length} / 140
                </div>
                <button type="submit">Envoyer !</button>
            </form>
        )
    }
}

export default Form;