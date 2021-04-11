import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/HomePage";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
// import SingleThought from './pages/SingleThought';
// import Profile from './pages/Profile';
import Signup from "./pages/Signup";
import GuestPortal from "./pages/GuestPortal";
import WeddingDetails from "./pages/WeddingDetails";
import { StoreProvider } from "./utils/GlobalState";

const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token')
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : ''
      }
    })
  },
  uri: '/graphql',
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
        <StoreProvider>
          <Header />
          <div className="body-container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/guestportal" component={GuestPortal} />
              <Route exact path="/weddingdetails" component={WeddingDetails} />
              <Route component={NoMatch} />
           
              
            </Switch>
          </div>
          <Footer />
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
