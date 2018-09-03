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
import AdminAppartementAddPage from './AdminAppartementAddPage';
import EditAppartementPage from './EditAppartementPage';
import ConfirmationSuppression from './ConfirmationSuppression';
import AdminLogin from './AdminLogin';
import AdminDashboard from './AdminDashboard';
import Contact from './Contact';
import authorized from './HOC/authorized';
import AdminEstimation from './AdminEstimation';
import AdminQuestions from './AdminQuestions';
import AdminRecherches from './AdminRecherches';
import RechercheItem from './RechercheItem';
import EstimationItem from './EstimationItem';
import Recherche from './Recherche';
import Catalogue from './Catalogue';
import FaireGerer from './FaireGerer';
import Conseils from './Conseils';
import DetailsAppartement from './DetailsAppartement';
import ScrollToTop from './ScrollToTop';
import Quartier from './Quartier';

class AppRouter extends React.Component{
  render(){
    return(

<BrowserRouter>
<ScrollToTop>
<div className="main">
<Header />
<Switch>
        <Route exact path="/AdminDashboard" component={authorized(AdminDashboard)} />
        <Route exact path="/AdminCatalogue" component={authorized(AdminCatalogue)} />
        <Route exact path="/AdminAddAppartement" component={authorized(AdminAppartementAddPage)} />
        <Route exact path="/confirmationSuppression/:id" component={authorized(ConfirmationSuppression)} />
        <Route exact path="/editAppartement/:id" component={authorized(EditAppartementPage)} />
        <Route exact path="/AdminEstimation" component={authorized(AdminEstimation)} />
        <Route exact path="/AdminQuestions" component={authorized(AdminQuestions)} />
        <Route exact path="/AdminRecherches" component={authorized(AdminRecherches)} />
        <Route exact path="/admin" component={AdminLogin} />
        <Route path="/estimation" component={Estimation} />
        <Route path="/recherche" component={Recherche} />
        <Route exact path="/rechercheItem/:recherche_mail" component={RechercheItem} />
        <Route exact path="/estimationItem/:estimation_mail" component={EstimationItem} />
        <Route path="/catalogue/:id" component={CatalogueFiche} />
        <Route exact path="/agence" component={Agence} />
          <Route exact path="/quartier" component={Quartier} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/catalogue" component={Catalogue} />
        <Route exact path="/conseils" component={Conseils} />
        <Route exact path="/faireGerer" component={FaireGerer} />
        <Route exact path="/detailsAppartement/:id" component={DetailsAppartement} />
        <Route exact path="/" component={Home} />
        <Route component={NotFoundPage} />
</Switch>
<Footer />
</div>
</ScrollToTop>
</BrowserRouter>
    );
  };
}

export default AppRouter;
