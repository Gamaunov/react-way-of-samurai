import React from "react";
import styles from "./Users.module.css";
import photoPerson_1 from "../../img/person/1.jpg";
import photoPerson_2 from "../../img/person/2.jpg";
import photoPerson_3 from "../../img/person/3.jpg";
import photoPerson_4 from "../../img/person/4.jpg";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl: photoPerson_1,
        followed: false,
        fullName: "Danny",
        status: "hey what`s your twenty",
        location: { city: "Belgorod", country: "Russia" },
      },
      {
        id: 2,
        photoUrl: photoPerson_2,
        followed: true,
        fullName: "Polina",
        status: "hey what`s your fifty",
        location: { city: "Sevastopol", country: "Russia" },
      },
      {
        id: 3,
        photoUrl: photoPerson_3,
        followed: false,
        fullName: "Evgeniya",
        status: "hey what`s your cat",
        location: { city: "Paris", country: "France" },
      },
      {
        id: 4,
        photoUrl: photoPerson_4,
        followed: false,
        fullName: "Maria",
        status: "hey what`s your dog",
        location: { city: "California", country: "Russia" },
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div>
          <span>
            <div>
              <img
                alt="It`s me"
                className={styles.userPhoto}
                src={u.photoUrl}
              />
            </div>
            <div>
              {u.followed ? (
                <button onClick={() => props.follow(u.id)}>Follow</button>
              ) : (
                <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullname}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
