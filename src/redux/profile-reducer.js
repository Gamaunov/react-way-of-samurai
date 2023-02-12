const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "some message", likesCount: 1 },
    { id: 2, message: "some message", likesCount: 2 },
    { id: 3, message: "some message", likesCount: 3 },
    { id: 4, message: "some message", likesCount: 4 },
  ],
  newPostText: "textExample",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    // break;
    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return state;
    // break;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});

export default profileReducer;
