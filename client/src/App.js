// import Yogi from './Yogi.jpeg'
import { useState, useContext } from "react";
import { UserContext } from "./context/user";
import FlightInfoContainer from "./components/FlightInfoContainer";
import Login from "./components/Login";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import image from './img/piper-archer-flying-above-cloud.jpeg'
import { Switch, Route } from "react-router-dom"
import SignupForm from "./components/SignupForm";
import AirportList from "./components/AirportList";
import AirportDetails from "./components/AirportDetails";
import FlightLessonForm from "./components/FlightLessonForm";
import FlightLessonList from "./components/FlightLessonList";
import EditFlightLesson from "./components/EditFlightLesson";
import FlightLogBook from "./components/FlightLogBook";
import AccountInfo from "./components/AccountInfo";

function App() {


 

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
            <Route path='/flight_lesson/plane/:id'>
              <FlightLessonForm
              />
            </Route>
            <Route path='/flights'>
              <FlightLessonList
              />
            </Route>
            <Route path='/flight_lesson/edit/:id'>
              <EditFlightLesson
              />
            </Route>
            <Route path='/log_book'>
              <FlightLogBook
              />
            </Route>
            <Route path='/profile'>
              <AccountInfo
              />
            </Route>
          </Switch>
      </div>
    )
  } else {
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
  )};
}

export default App;