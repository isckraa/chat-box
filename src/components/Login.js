import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <div className="connexionBox">
                <form className="connexion">
                    <input 
                        type="text"
                        placeholder="Entrer votre pseudo"
                        required
                    />
                    <button type="submit">Connexion</button>
                </form>
            </div>
        )
    }
}

export default Login;