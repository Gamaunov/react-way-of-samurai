let rerenderEntireTree = () => {
  console.log("state changed");
};

let state = {
  profilePage: {
    posts: [
      { id: 1, message: "some message", likesCount: 12 },
      { id: 2, message: "some message", likesCount: 1 },
    ],
    newPostText: "newPostText--text",
  },
  dialogsPage: {
    dialogs: [
      { id: 1, name: "Yura" },
      { id: 2, name: "Sveta" },
      { id: 3, name: "Vika" },
      { id: 4, name: "Denis" },
    ],
    messages: [
      { id: 1, message: "some massage" },
      { id: 2, message: "some massage" },
      { id: 3, message: "some massage" },
      { id: 4, message: "some massage" },
    ],
  },
};

window.state = state;
export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  rerenderEntireTree(state);
};
export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
