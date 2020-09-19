const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
    dialogs: [
        { id: 1, name: 'Dimych' },
        { id: 2, name: 'Andrew' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Victor' },
        { id: 6, name: 'Valera' },
    ],
    messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your classes?' },
        { id: 3, message: 'Yo!' },
        { id: 4, message: 'Yo! Tima' },
    ],
    newMessageText: 'Введите сообщение...',
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE: {
            let newMessage = {
                id: 5,
                message: state.newMessageText,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: '',
            };
        }
        case UPDATE_NEW_MESSAGE_TEXT: {
            return {
                ...state,
                newMessageText: action.newText,
            }
        }
        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export default dialogsReducer;