import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate hook from React Router
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { dataCreate, dataGet, sendNotification, getUser } from "../service/api";

import './style.css'

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const [array, setarray] = useState([]);
  const [username, setusername] = useState([]);
  const [data, setdata] = useState({
    title: "",
    description: "",
    image: "",
    author: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response = await dataCreate(data);
    let res = await dataGet();
    if (res && res.data) {
      setarray(res.data.message);
      getUser(setusername);
      sendNotification(array, username);
      navigate("/feed"); 
      
    } 
  };

  const inputchange = (e) => {
    setdata({
      ...data,
      [e.target.name]: e.target.value,
    });
    console.log(data);
  };

  return (
    <div className="form">
    <form className='my-form' onSubmit={handleSubmit}>
      <TextField
        name='title'
        label='Title'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={inputchange}
      />
      <TextField
        name='description'
        label='Description'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={inputchange}
      />
      <TextField
        name='image'
        label='Image'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={inputchange}
      />
      <TextField
        name='author'
        label='Author'
        variant='outlined'
        fullWidth
        margin='normal'
        onChange={inputchange}
      />
      <Button
        type='submit'
        variant='contained'
        color='primary'
        fullWidth
        style={{ marginTop: '1rem', boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)' }}
      >
        Double Tap to Submit
      </Button>
    </form>
    </div>
  );
};

export default Home;
