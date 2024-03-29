import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./components/movies";
import MovieForm from "./components/movieForm";
import NavBar from "./components/navBar";
import Customers from "./components/customers";
import Rentals from "./components/rentals";
import NotFound from "./components/notFound";
import LoginForm from "./components/loginForm";
import Register from "./components/register";
import "./App.css";

function App() {
    return (
        <React.Fragment>
            <NavBar />
            <main className="container">
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={LoginForm} />
                    <Route path="/movies/:id" component={MovieForm} />
                    <Route path="/movies/new" component={MovieForm} />
                    <Route path="/movies" component={Movies}></Route>
                    <Route path="/customers" component={Customers}></Route>
                    <Route path="/rentals" component={Rentals}></Route>
                    <Route path="/not-found" component={NotFound} />
                    <Redirect from="/" exact to="/movies" />
                    <Redirect to="not-found" />
                </Switch>
            </main>
        </React.Fragment>
    );
}

export default App;
