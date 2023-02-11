const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "some message", likesCount: 1 },
        { id: 2, message: "some message", likesCount: 2 },
        { id: 3, message: "some message", likesCount: 3 },
        { id: 4, message: "some message", likesCount: 4 },
      ],
      newPostText: "textExample",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Yura" },
        { id: 2, name: "Sveta" },
        { id: 3, name: "Vikki" },
        { id: 4, name: "Denis" },
        { id: 5, name: "Veronica" },
      ],
      messages: [
        { id: 1, message: "some text" },
        { id: 2, message: "some text" },
        { id: 3, message: "some text" },
        { id: 4, message: "some text" },
      ],
      newMessageBody: ""
    },
    sidebar: {}
  },
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log("state changed");
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {

  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const sendMessageCreator = () => ({ SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

window.store = store;

export default store;
