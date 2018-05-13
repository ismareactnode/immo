import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import './Main.css';
import Estimation from './Estimation.js';
import Home from './Home.js';
import Agence from './Agence.js';
import CatalogueFiche from './CatalogueFiche.js';
import NotFoundPage from './NotFoundPage.js';
import AdminCatalogue from './AdminCatalogue';
import AppartementAddPage from './AppartementAddPage';
import EditAppartementPage from './EditAppartementPage';
import ConfirmationSuppression from './ConfirmationSuppression';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import Contact from './Contact';
import authorized from './HOC/authorized';

class AppRouter extends React.Component{
  render(){
    return(

<BrowserRouter>
<div id="main">
<Header />
<Switch>
        <Route exact path="/AdminDashboard" component={authorized(AdminDashboard)} />
        <Route exact path="/AdminCatalogue" component={authorized(AdminCatalogue)} />
        <Route exact path="/addAppartement" component={authorized(AppartementAddPage)} />
        <Route exact path="/confirmationSuppression/:id" component={authorized(ConfirmationSuppression)} />
        <Route exact path="/editAppartement/:id" component={authorized(EditAppartementPage)} />

        <Route exact path="/admin" component={AdminLogin} />
        <Route path="/estimation" component={Estimation} />
        <Route exact path="/" component={Home} />
    <Route path="/catalogue/:id" component={CatalogueFiche} />
    <Route exact path="/agence" component={Agence} />
    <Route exact path="/contact" component={Contact} />
    <Route component={NotFoundPage} />
</Switch>
<Footer />
</div>
</BrowserRouter>

    );
  };
}

export default AppRouter;
