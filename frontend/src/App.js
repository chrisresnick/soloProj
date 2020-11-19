import React, { useState, useEffect } from 'react';
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage"
import SignupForm from './components/SignupForm';
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/index"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() =>
    setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <Switch>
        <Route path="/login" component={LoginFormPage} />
        <Route path="/signup" component={SignupForm} />
      </Switch>
  )}
    </>
  )


}

export default App;
