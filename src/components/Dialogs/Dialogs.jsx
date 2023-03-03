import React from "react";
import "./Dialogs.css";
import DialogItem from "./DialogItem/DialogItem.jsx";
import Message from "./Message/Message.jsx";

const Dialogs = (props) => {
  let state = props.dialogsPage
  let dialogsElements = state.dialogs.map((dialog) => (
    <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />
  ));
  let messagesElements = state.messages.map((message) => (
    <Message key={message.id} message={message.message} />
  ));
  let newMessageBody = state.newMessageBody;
  let onSendMessageClick = () => {
    props.sendMessage()
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value
    props.updateNewMessageBody(body)
  };
  return (
    <div className="dialogs">
      <div className="dialogs__items">{dialogsElements}</div>
      <div className="dialogs__messages">
        <div> {messagesElements} </div>
        <div>
          <div>
            <textarea value={newMessageBody}
                      onChange={onNewMessageChange}
                      placeholder="message">

            </textarea>
          </div>
          <div>
            <button onClick={onSendMessageClick}>
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
