import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { dataCreate, dataGet, sendNotification,getUser } from "../service/api";

const Home = () => {
  
  const [array, setarray] = useState([])
  const [find, setfind] = useState([])
  const [data, setdata] = useState({
    title: "",
    description: "",
    author: "",
    });
    
 

    const handleSubmit = async (e) => {
        e.preventDefault();
        let response = await dataCreate(data);
        console.log(response);
        let res = await dataGet();
        if (res && res.data && res.data.message) {
          setarray(res.data.message);
           sendNotification(array,find);
         
         
        }
       
          
    

      };
      
  const inputchange = (e) => {

    setdata({
        ...data,
        [e.target.name]: e.target.value
    })
    console.log(data)
    };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
      name="title"
        label="Title"
        variant="outlined"
        fullWidth
        margin="normal"
        
        onChange={inputchange}
      />
      <TextField
      name="description"
        label="description"
        variant="outlined"
        fullWidth
        margin="normal"
        
        onChange={inputchange}
      />
      <TextField
        name="author"
        label="Author"
        variant="outlined"
        fullWidth
        margin="normal"
       
        onChange={inputchange}
      />
      
      <Button
        type="submit"
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: "1rem" }}
      >
        Submit
      </Button>
    </form>
  );
};

export default Home;
