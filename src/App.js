import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileInfo/ProfileContainer";

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
              element={<DialogsContainer store={props.store} />}
            />
            <Route
              path="/profile/*"
              element={
                <ProfileContainer
                />
              }
            />
            <Route
              path="/users/*"
              element={
                <UsersContainer
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