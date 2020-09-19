import profileReducer from "./profile-reducer";
import dialogReducer from "./dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 10 },
                { id: 2, message: 'It\'s my first post.', likesCount: 25 },
            ],
            newPostText: 'Введите сообщение...',
        },
        dialogsPage: {
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
        },
    },
    _callSubscriber() {
        console.log('no subscribers (observers)');
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogReducer(this._state.dialogsPage, action);

        this._callSubscriber(this._state);
    },
}

export default store;