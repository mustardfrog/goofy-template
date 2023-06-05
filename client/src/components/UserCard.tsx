import React from "react";
import { Link, useNavigate } from "react-router-dom";

import "../assets/styles/UserCard.css"

const UserCard = (props) => {
  const user = props.user;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/show-user/${user._id}`);
  }

  // <h2>
  //   <Link to={`/show-user/${user._id}`} >{user.name}</Link>
  // </h2>
  return (
      <div className="user-card">
        <Link to={`/show-user/${user._id}`} className="user user-link">{user.name}</Link>
        <h4 className="user">{user.email}</h4>

      <br />
    </div>
  )
}
export default UserCard;
