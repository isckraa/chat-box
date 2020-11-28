import React from 'react';

const Message = ({ pseudo, message, isUser }) => {
    if(isUser(pseudo)) {
        return(
            <p className="user-message"><b>{pseudo} : </b>{message}</p>
        )
    } else {
        return(
            <p className="not-user-message"><b>{pseudo} : </b>{message}</p>
        )
    }
}

export default Message;