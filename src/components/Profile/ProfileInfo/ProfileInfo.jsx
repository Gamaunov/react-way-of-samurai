import React from "react";
import "./ProfileInfo.css";
import profileBg from "../../../img/content.jpg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img className="profileinfo__img" alt="bg" src={profileBg} />
      </div>
      <div className="profileinfo__description">
        <img
          className="profileinfo__user-img"
          src={props.profile.photos.large}
          alt="me"
        />
        <div className="profileinfo__desc">
          <span>
            <span className="profileinfo__desc-item">Зовите меня:</span>{" "}
            {props.profile.fullName}
          </span>
          <span>
            {" "}
            <span className="profileinfo__desc-item">Немного о себе:</span>{" "}
            {props.profile.aboutMe}
          </span>
          <span>
            <span className="profileinfo__desc-item">Работа:</span>{" "}
            {props.profile.lookingForAJob === true ? "" : "не"} ищу работу
          </span>
          <span>
            <span className="profileinfo__desc-item">О работе:</span>{" "}
            {props.profile.lookingForAJobDescription}
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProfileInfo;
