import React from "react";

const Message = React.memo(function Message({ message }) {
    console.log("Message rendered");
    return <h3>{message}</h3>;
});

export default Message;