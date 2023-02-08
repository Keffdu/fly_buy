// import Yogi from './Yogi.jpeg'
import { useState, useContext } from "react";
import { UserContext } from "./context/user";
import { useHistory } from "react-router-dom";
import FlightInfoContainer from "./components/FlightInfoContainer";
import Login from "./components/Login";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import image from './img/piper-archer-flying-above-cloud.jpeg'
import { Switch, Route } from "react-router-dom"
import SignupForm from "./components/SignupForm";
import AirportList from "./components/AirportList";
import AirportDetails from "./components/AirportDetails";


function App() {

  let history = useHistory()

 

  const { user } = useContext(UserContext);

// console.log(user)
// console.log(errors)

  if (user) {
    return (
      <div className="homepage">
          <div className="header_container">
            <Header image={image} />
            <FlightInfoContainer />
          </div>
          <Switch>
            <Route exact path='/'>
              <Homepage />
            </Route>
            <Route exact path='/airports'>
              <AirportList
              />
            </Route>
            <Route path='/airports/:id'>
              <AirportDetails
              />
            </Route>
          </Switch>
      </div>
    )
  }
  return (
    <>
      <Switch>
        <Route exact path='/'>
          <Login
          />
        </Route>
        <Route exact path='/signup'>
          <SignupForm
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;