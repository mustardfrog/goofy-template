import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function UserDetails() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:9000/api/submit/${id}`)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      }).catch((err) => {
        console.log("Error getting user" + err.message)
      })
  }, [id])

  return (
    <>
      <div>
        <h2>{user.name}</h2>
        <h4>{user.email}</h4>
      </div>
    </>
  )
}

export default UserDetails;
