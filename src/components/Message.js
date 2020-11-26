import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return(
            <p className="user-message"><b>{ this.props.pseudo } : </b>{ this.props.message }</p>
        )
    }
}

export default Message;