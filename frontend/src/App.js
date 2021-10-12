import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import HomePage from "./components/HomePage";
import "./index.css";
import ArtistsPage from "./components/Artistspage";
import SongsPage from "./components/SongsPage";
import ArtistsProfile from "./components/ArtistsProfile"
import {getUser} from "./store/users";

function App() {
  const dispatch = useDispatch();

  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

    useEffect(() => {
      dispatch(getUser());
    }, [dispatch]);

  return (
    <nav>
      <div className="navigation">
        <Navigation isLoaded={isLoaded} />
      </div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/artists" exact>
          <ArtistsPage />
        </Route>
        <Route path="/artists/:userId" exact>
          <ArtistsProfile />
        </Route>
        <Route path="/songs">
          <SongsPage />
        </Route>
      </Switch>
    </nav>
  );
}

export default App;
