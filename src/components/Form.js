import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <form className="form">
                <textarea 
                    maxLength="140"
                    required
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