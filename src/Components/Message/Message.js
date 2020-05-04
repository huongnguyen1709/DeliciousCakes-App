import React, { useState } from 'react'

const Message = () => {
    const [message, toggleMessage] = useState(true)
    return (
        <h3 className="message">
            {
                message ? "Welcome to our Store !" : "You have ordered 1 Strawberry Cake !"
            }

        </h3>
    );
}

export default Message;