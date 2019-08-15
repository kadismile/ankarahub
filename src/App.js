import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
    <BrowserRouter>
      <div className="spt_main_content">
          <Route render={props => <Header {...props} />} />
          <Switch>
            <Route
              path="/"
              exact
              render={props => <Home {...props} />}
            />
            <Route
              path="/product/:name"
              exact
              render={props => <ProductDetails {...props} />}
            />
          </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
