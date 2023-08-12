import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [formdata, setFormdata] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [userdata, setUserdata] = useState([]);

  const handleChange = (e) => {
    setFormdata((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://127.0.0.1:4000/addUser", formdata);
      toast.success(res.data.message);
    } catch (err) {
      console.log("Error while posting ", err.message);
    }
  };

  const getAlluserDetails = async () => {
    try {
      const res = await axios.get("http://localhost:4000/getAllUsers");
      setUserdata(res.data.data);
      toast.success(res.data.message);
    } catch (err) {
      console.log("Error while fetching all user Details", err.message);
    }
  };
  return (
    <>
      <Toaster />
      <h1>Test Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={formdata.username}
          onChange={handleChange}
          name="username"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={formdata.email}
          onChange={handleChange}
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={formdata.password}
          onChange={handleChange}
          name="password"
        />
        <button type="submit">Submit</button>
      </form>
      <br />
      <br />
      <hr />
      <button onClick={getAlluserDetails}>Get All User</button>
      {userdata.map((item) => (
        <>
          <p>{item.email}</p>
          <p>{item.username}</p>
          <p>{item.password}</p>
        </>
      ))}
      <br />
      <br />
      <hr />
      
    </>
  );
}

export default App;
