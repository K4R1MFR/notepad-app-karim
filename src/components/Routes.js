import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddNote from '../pages/AddNote';
import EditNote from '../pages/EditNote';
import Home from '../pages/Home';


export default function Routes() {
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route exact path="/pages/AddNote" ><AddNote /></Route>
            <Route exact path="/pages/EditNote/:index" ><EditNote /></Route>
        </Switch>
    );
}