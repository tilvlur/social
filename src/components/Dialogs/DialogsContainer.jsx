import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";

/*
const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState().dialogsPage;

                    let sendMessage = () => {
                        store.dispatch(sendMessageActionCreator());
                    }

                    let onMessageChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    }

                    return <Dialogs dialogs={state.dialogs}
                                    messages={state.messages}
                                    sendMessage={sendMessage}
                                    updateNewMessageText={onMessageChange}
                                    newMessageText={state.newMessageText} />
                }
            }
        </StoreContext.Consumer>
    )
}
*/

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator());
        },
        updateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;