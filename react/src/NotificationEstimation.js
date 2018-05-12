

import React from 'react';
import './NotificationEstimation.css';

const NotificationEstimation = ({name}) => {
  
  return (
      <div>
    <p id="notif">
       `Cher Mr/Mme {name} , vous
       allez recevoir l'estimation de votre bien
       dans les 24 heures.`</p>
       <p>Nous vous remercions pour
       la confiance que vous portez en notre expertise.
       </p>
       </div>
     );
}
export default NotificationEstimation;
