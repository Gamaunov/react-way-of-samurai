import React from "react";
import styles from "./Users.module.css";
import defaultPhoto from "../../assets/images/user-default.svg";
import {NavLink} from "react-router-dom";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount) / props.pageSize;
  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  let curP = props.currentPage;
  let curPF = curP - 5 < 0 ? 0 : curP - 5;
  let curPL = curP + 5;
  let slicedPages = pages.slice(curPF, curPL);

  return (
    <div>
      <div className={styles.pagination}>
        {slicedPages.map((p) => (
          <span
            className={props.currentPage === p && styles.selectedPage}
            onClick={(e) => props.onPageChanged(p)}
          >
            {p}
          </span>
        ))}
      </div>
      {props.users.map((u) => (
        <div>
          <span>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img
                  alt="It`s me"
                  className={styles.userPhoto}
                  src={u.photos.small != null ? u.photos.small : defaultPhoto}
                />
              </NavLink>
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
};

export default Users;
