

import React from 'react';
import Responsive from 'react-responsive';

import './NotificationEstimation.css';

const Desktop = props => <Responsive {...props} minWidth={768} />;
const Mobile = props => <Responsive {...props} maxWidth={767} />;

const NotificationEstimation = ({name}) => {

  return (
      <div className="notifEstimationContainer">
       <Desktop>
        <div className="notifEstimation">
          <p>
             Cher Mr/Mme <strong>{name}</strong> , vous
             allez recevoir l'estimation de votre bien
             dans les 24 heures.</p>
             <p>Nous vous remercions pour
             la confiance que vous portez en notre expertise.
             </p>
        </div>
        </Desktop>

        <Mobile>
        <div className="notifEstimationMobile">
          <p>
             Cher Mr/Mme <strong>{name}</strong> , vous
             allez recevoir l'estimation de votre bien
             dans les 24 heures.</p>
             <p>Nous vous remercions pour
             la confiance que vous portez en notre expertise.
             </p>
        </div>
        </Mobile>
      </div>
     );
}
export default NotificationEstimation;
