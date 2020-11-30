import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation/index";
import Listing from "./components/Listing/index";
import Cart from "./components/Cart/index";
import Home from "./components/Home/index";
import Search from "./components/Search/index";
import LoginSignUpModal from "./components/LoginSignUpModal";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const [modal, setModal] = useState(null);
  const requireLogin = useSelector(state => state.require.requireLogin);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() =>
    setIsLoaded(true));
  }, [dispatch]);
  useEffect(() => setModal(requireLogin ? <LoginSignUpModal /> : null), [requireLogin])

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
      <Switch>
        <Route path="/cart" component={Cart} />
        <Route path="/listings/:id" component={Listing} />
        <Route path="/search" component={Search} />
        <Route path="/" component={Home} />
      </Switch>
  )}
    {isLoaded && modal}
    </>
  )


}

export default App;
