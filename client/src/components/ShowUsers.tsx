import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserCard from "./UserCard";

function ShowUsers() {

  const [user, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:9000/api/submit')
      .then(res => {
        setUsers(res.data)
      })
      .catch((err) => {
        console.log('Error show users');
      })
  }, [])

  // const userList = user.length === 0 ? 'There is no users registered' : user.map((user, k) => <h3 key={k}>{user.name}</h3>)
  const userList = user.length === 0 ? 'There is no users registered' : user.map((user, k) => { return <UserCard user={user} key={k} /> })
  return (
    <>
      <h1> Showing Users </h1>
      <div className="user-list">{userList}</div>
      <Link to='/create-user' className="user-link link"> + Add new User </Link>
      <br />
    </>
  )
}

export default ShowUsers;
