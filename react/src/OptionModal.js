
import React from 'react';
import Modal from 'react-modal';

const OptionModal = ({sended, desend, envoyer}) => (
    <Modal
    isOpen={!!sended}
    onRequestClose={desend}
    contentLabel="Bien envoyé">
      <h1>Pour recevoir votre estimation gratuitement</h1>
      <h2>dans les 24 heures</h2>
      <form>
        <label>Votre nom</label><input type="text"/>
        <label>Votre adresse mail</label><input type="text"/>
          <label>Votre numéro</label><input type="text"/>
        <button
        onClick={envoyer}>recevoir votre estimation gratuitement</button>


      </form>
      <p>Vous allez recevoir un mail de
       confirmation de votre envoi, puis vous recevrez la
        réponse à votre question dans les 24 heures. Vous serez
        contacté si besoin est pour de plus amples informations.</p>
      <button
      onClick={desend}>Ok</button>
    </Modal>

  );


export default OptionModal;
