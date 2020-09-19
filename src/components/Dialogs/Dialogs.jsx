import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {
    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id} />); //key={d.id} чтобы реакт не ругался

    let messagesElements = props.messages.map(m => <Message message={m.message} key={m.id} />); //key={d.id} чтобы реакт не ругался

    let newMessageElement = React.createRef();

    let onSendMessage = () => {
        props.sendMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    ref={newMessageElement}
                    value={props.newMessageText}
                    onChange={onMessageChange} />
            </div>
            <div>
                <button onClick={onSendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Dialogs;