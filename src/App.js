import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route  } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import {auth} from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51I5XitBSCwP240W951NIDKdWI7OWe8IsVvNkcUcosJhnz7ZnofWtO0QBi7BDDtKykg9nM05maHXeADrkdkOsOcaK00ZG8omCeZ')

function App() {
  const [{},dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        })
      }
      else {
        //user logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  },[]);

  return (
    //BEM convention
    <Router>
      <div className="app">
        
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
