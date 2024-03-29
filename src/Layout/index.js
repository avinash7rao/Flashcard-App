import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { Decks } from "../Decks";
import { Homepage } from "../Homepage";
import { listDecks } from "../utils/api";
import Header from "./Header";
import NotFound from "./NotFound";

function Layout() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    async function loadDecks() {
      const loadedDecks = await listDecks();
      setDecks(loadedDecks);
    }
    loadDecks();
  }, []);

  return (
    <div>
      <Header />
      <div className="container">
        <Switch>
          <Route exact path="/">
            <Homepage decks={decks} />
          </Route>
          <Route path="/decks">
            <Decks decks={decks} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
