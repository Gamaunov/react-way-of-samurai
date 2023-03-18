import React from "react";
import styles from "./Users.module.css";
import defaultPhoto from "../../assets/images/user-default.svg";
import axios from "axios";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/users")
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  }

  render() {
    return (
      <div>
        {this.props.users.map((u) => (
          <div key={u.id}>
            <span>
              <div>
                <img
                  alt="It`s me"
                  className={styles.userPhoto}
                  src={u.photos.small != null ? u.photos.small : defaultPhoto}
                />
              </div>
              <div>
                {u.followed ? (
                  <button onClick={() => this.props.follow(u.id)}>
                    Follow
                  </button>
                ) : (
                  <button onClick={() => this.props.unfollow(u.id)}>
                    Unfollow
                  </button>
                )}
              </div>
            </span>
            <span>
              <span>
                <div>{u.name}</div>
                <div>{u.status}</div>
              </span>
              <span>
                <div>{"u.location.country"}</div>
                <div>{"u.location.city"}</div>
              </span>
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
