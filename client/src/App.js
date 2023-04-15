import React from "react";
import {Engagespot} from "@engagespot/react-component";
import { sendNotification } from "./service/api";

const theme = {
   notificationButton: {
      iconFill: '#B764AB',
   },
   colors: {
      brandingPrimary: '#B764AB',
      colorSecondary: '#ecebfa',
   },
   feedItem: {
      hoverBackground: '#ecebfa',
   },
   dropdown: {
      hoverBackground: '#ecebfa',
      menuItemHoverBackground: '#ecebfa',
   },
};

const App = () => {
  return (
    <div>
      <Engagespot apiKey="70lqwpbeq4kicg0xszf4z9" userId="yethu@kichu" theme = {theme} />,
      <button onClick={() => sendNotification()}
         >Send</button>
    </div>
  )
}

export default App


