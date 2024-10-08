import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';

const App = () => {
    return (
        <Router>
            <Header />
            <main>
                <Route path="/" component={HomeScreen} exact />
                <Route path="/product/:id" component={ProductScreen} />
                <Route path="/cart" component={CartScreen} />
                <Route path="/login" component={LoginScreen} />
                <Route path="/register" component={RegisterScreen} />
            </main>
        </Router>
    );
};

export default App;
