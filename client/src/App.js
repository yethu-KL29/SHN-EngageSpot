import React from "react";
import {Engagespot} from "@engagespot/react-component";
import { sendNotification } from "./service/api";
import { Route,Routes } from "react-router-dom";
import LoginPage from "./Auth/Login";
import DataProvider from "./Context/DataContext";
import { useContext } from "react";
import { DataContext } from "./Context/DataContext";
import Compo from "./compo/Compo";


const App = () => {
  
  return (
     <DataProvider>
      <Compo/>
      </DataProvider>
    
     
         
  )
}

export default App


