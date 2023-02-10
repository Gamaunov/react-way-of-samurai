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
      ],
      messages: [
        { id: 1, message: "some text" },
        { id: 2, message: "some text" },
        { id: 3, message: "some text" },
        { id: 4, message: "some text" },
      ],
    },
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
    if (action.type === "ADD-POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  },
};

window.store = store;

export default store;
