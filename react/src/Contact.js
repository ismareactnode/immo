import React from 'react';
import './Contact.css';

const Contact = () => {
  return(
    <div id="Contact">

      <div id="gauche">

        <div id="formQuestion">
          <h3>Posez votre question</h3>
          <form>
            <textarea></textarea>
            <button type="submit">Envoyer</button>
          </form>
        </div>

        <div id="message">
          <h3>Votre expert vous répond de façon</h3>
          <h3>immédiate et gratuite</h3>
        </div>
      </div>

      <div id="droite">
         <div id="mail"><img src="iconeMail7.png" />
           <a href="mailto:kl935780@gmail.com">kl935780@gmail.com</a>
         </div>


        <div id="tel"><img src="iconeTel2.png" alt="tel"/>
          06 75 40 25 00
        </div>
      </div>
    </div>

  );
}

export default Contact;
