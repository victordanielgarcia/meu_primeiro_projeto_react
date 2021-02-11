import React from "react";

import {BrowserRouter} from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css';

import Routes from "./Routes/Routes"

export default function App() {
  
    return (
      <div>
         <BrowserRouter>
            <Routes />
        </BrowserRouter>
      </div>
    )
}