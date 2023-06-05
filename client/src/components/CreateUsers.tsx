import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CreateUsers () {
  const navigate = useNavigate();

  const [user, setUser] = useState({ name: '', email: '' });

  const onChangeName = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:9000/api/submit', user)
      .then((res) => {
        setUser({
          name: '',
          email: '',
        });
        navigate("/")
      })
      .catch((err) => {
        console.log("Error creating user: " + err.message);
      })
  }
  return (
    <>
      <h1> Creating Users </h1>

      <Link to='/'> Show Users List </Link>

      <form noValidate onSubmit={onSubmit} method="post">
        <div className='form-group'>
          <input type='text' placeholder='User Name' name='name' className='form-control' value={user.name} onChange={onChangeName}
          />
        </div>

        <div className='form-group'>
          <input type='email' placeholder='Email' name='email' className='form-control' value={user.email} onChange={onChangeName}
          />
        </div>

        <input type="submit" title="Submit" value="Just do it" />
      </form>
    </>
  )
}

export default CreateUsers;
