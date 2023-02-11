import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      newMessageBody: "",
    },
    sidebar: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.profilePage, action);
    this._state.sidebar = sidebarReducer(this._state.profilePage, action);

    this._callSubscriber(this._state);
  },
};

window.store = store;

export default store;
