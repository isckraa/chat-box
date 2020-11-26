import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pseudo: '',
            goToChat: false
        }
    }

    handleChange = (event) => {
        const pseudo = event.target.value;
        this.setState({ pseudo });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ goToChat: true });
    }

    render() {
        if(this.state.goToChat) {
            return <Redirect push to={`/pseudo/${this.state.pseudo}`} />
        }

        return (
            <div className="connexionBox">
                <form className="connexion" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="Entrer votre pseudo"
                        onChange={this.handleChange}
                        required
                    />
                    <button type="submit">Connexion</button>
                </form>
            </div>
        )
    }
}

export default Login;