import React, { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";

  function App() {
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode(){
    if(mode === 'light'){
        setMode('dark')
        document.body.style.backgroundColor = 'rgb(9 28 42)';
        showAlert("Dark Mode is Enabled!", "success")
    }else{
        setMode('light')
        document.body.style.backgroundColor = 'white';
        showAlert("Light Mode is Enabled!", "success")
    }
  }
  const [mode, setMode] = useState('light');
  return (
      // <Router>
      <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
          </Route>
        </Switch> */}
        {/* <Routes>
          <Route exact path="/about" element={<About />} />
          <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      </div>
      </>
      // </Router>
  );
}

export default App;
