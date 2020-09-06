import React from "react";
import Homepage from "./components/HomePage/Homepage";
import { Route } from "react-router-dom";
import Room from "./components/Room/Room";

function App() {
    return (
        <div>
            <Route exact path="/">
                <Homepage />
            </Route>
            <Route exact path="/:id">
                <Room />
            </Route>
        </div>
    );
}

export default App;
