import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Form() {

  // <label htmlFor="message">Message:</label>
  // <textarea id="message" name="message" value={formData.message}  />

  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http:localhost:9000/submit", formData)
    .then((res) => {
        setFormData({
            name: '',
            email: '',
          });
      }).catch((err) => {
          console.log(err.message);
        })
    }

  return (
    <>
      <form action='/submit' method='post' onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />

        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default Form;
