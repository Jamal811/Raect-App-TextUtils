import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode]= useState('light');

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert(
      {
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    
  }
  const removeBodyClasses=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-sucess')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-primary')
  }
  const toogleMode = (cls) =>{
    removeBodyClasses();
    console.log(cls)
    document.body.classList.add('bg-'+cls)
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled","success");
      document.title = "TextUtils - Dark Mode";
      // setInterval(() => {
      //   document.title = "TextUtils is amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtils now";
      // }, 1500);
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
    <Router>
     <Navbar title="TextUtils" aboutText="About us" mode={mode} toogleMode={toogleMode} />
     <Alert alert={alert}/>
     <Routes>
     <Route exact path="/about" element={<About mode={mode}/>}/>
     <Route exact path="/" element={<TextForm showAlert={showAlert} heading = "Enter the text to analyze" mode={mode}/>}/>
        </Routes>
      </Router>
  </>
  );
}

export default App;
