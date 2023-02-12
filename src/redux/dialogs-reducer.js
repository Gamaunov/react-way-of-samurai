const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    // break;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messages.push({ id: 6, message: body });
      return state;
    // break;
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});

export default dialogsReducer;
