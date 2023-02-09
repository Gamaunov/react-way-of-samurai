import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <NavBar />
        <div className="app-wrapper__content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={<Dialogs state={props.state.dialogsPage} />}
            />
            <Route
              path="/profile/*"
              element={
                <Profile
                  profilePage={props.state.profilePage}
                  addPost={props.addPost}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
