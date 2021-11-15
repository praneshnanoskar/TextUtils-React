
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,

// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 3000)
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark")
      document.body.style.background = "rgb(2 26 60)"
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode'
      // setInterval(()=>
      // {
      //   document.title='TextUtils is amazing Mode'
      // },2000);
      // setInterval(()=>
      // {
      //   document.title='Install TextUtils now'
      // },1500);
    }

    else {
      setMode("light")
      document.body.style.background = "white"
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode'

    }


  }
  return (

    <>
      {/* <Router> */}

        <Navbar title="Textutil" mode1={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <Navbar title="Textutils3" aboutText="About2"/> */}

        <div className="container my-3">
          {/* <Switch>
            <Route exact path="/about"> */}
        {/* <About /> */}
            {/* </Route> */}

            {/* <Route exact path="/"> */}
              <TextForm heading="Enter the text to analyze" showAlert={showAlert} mode1={mode} />
            {/* </Route>
          </Switch> */}
        </div>






      {/* </Router> */}
    </>


  );
}

export default App;


