import React from "react";
import "./ProfileInfo.css";
import profileBg from "../../../img/content.jpg";

const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img className="profileinfo__img" alt="bg" src={profileBg} />
      </div>
      <div className="profileinfo__description">description</div>
    </div>
  );
};
export default ProfileInfo;
