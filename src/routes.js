import React from 'react';
import { BrowserRouter, Route, Switch }  from 'react-router-dom';
import Home from './pages/home';
import Edit from './pages/edit';
import Users from './pages/users';
import TopBar from './components/TopBar';
import Footer from './components/Footer';

const Routes = () => (
    <BrowserRouter>
        <TopBar />
        <Switch>
            <Route exact path="/" component={ Home }></Route>
            <Route path="/edit/:userId" component={ Edit }></Route>
            <Route path="/users" component={ Users }></Route>
        </Switch>
        <Footer />
    </BrowserRouter>
);

export default Routes;