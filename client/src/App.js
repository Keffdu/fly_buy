// import Yogi from './Yogi.jpeg'
import { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useHistory } from "react-router-dom";
import FlightInfoContainer from "./components/FlightInfoContainer";
import Login from "./components/Login";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import image from './img/piper-archer-flying-above-cloud.jpeg'
// import { Switch, Route } from "react-router-dom"


function App() {

  let history = useHistory()
  const[errors, setErrors]=useState(null)

  const { user, setUser } = useContext(UserContext);

console.log(user)
// console.log(errors)

    if (user === null) {
      return (
        <Login 
          setErrors={setErrors}
          errors={errors}
          />
      )
    }
  return (
    <div>
      <div className="header_container">
      <Header image={image}/>
      <FlightInfoContainer />
      </div>
      <Homepage />
    </div>
  );
}

export default App;