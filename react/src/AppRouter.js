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
import AppartementsDashboardPage from './AppartementsDashboardPage';
import AppartementAddPage from './AppartementAddPage';
import EditAppartementPage from './EditAppartementPage';
import ConfirmationSuppression from './ConfirmationSuppression';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import authorized from './HOC/authorized';

class AppRouter extends React.Component{
  render(){
    return(

<BrowserRouter>
<div id="main">
<Header />
<Switch>
        <Route exact path="/AdminDashboard" component={authorized(AdminDashboard)} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route path="/estimation" component={Estimation} />
        <Route exact path="/addAppartement" component={AppartementAddPage} />
        <Route exact path="/editAppartement/:id" component={EditAppartementPage} />
        <Route exact path="/confirmationSuppression/:id" component={ConfirmationSuppression} />
  <Route exact path="/" component={Home} />
  <Route exact path="/catalogue" component={AppartementsDashboardPage} />
    <Route path="/catalogue/:id" component={CatalogueFiche} />
    <Route exact path="/agence" component={Agence} />
    <Route component={NotFoundPage} />
</Switch>
<Footer />
</div>
</BrowserRouter>

    );
  };
}

export default AppRouter;
