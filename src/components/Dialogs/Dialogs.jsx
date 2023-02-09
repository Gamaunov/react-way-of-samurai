import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElements = props.state.messages.map((message) => (
    <Message message={message.message} />
  ));
  return (
    <div className="dialogs">
      <div className="dialogs__items">{dialogsElements}</div>
      <div className="dialogs__messages">{messagesElements}</div>
    </div>
  );
};

export default Dialogs;
