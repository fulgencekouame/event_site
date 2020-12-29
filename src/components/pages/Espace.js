import React from 'react';
import '../Cards.css';
import EspaceItem from './EspaceItem';

function Espace() {
  return (
    <div className='cards'>
      <h1>Nos différentes prestations</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <EspaceItem
              src='images/sa3.jpg'
              text='Nous vous proposons ici les meilleurs locaux pour vos ceremonies de mariage'
              label='Mariage'
              path='/espace'
            />
            <EspaceItem
              src='images/conf1.jpg'
              text="les meilleurs locaux pour organiser vos ceremonies d'anniversaire sont par ici"
              label='Anniversaire'
              path='/espace'
            />
            <EspaceItem
              src='images/sa1.jpg'
              text='Ne cherchez plus loin les meilleurs endroits pour organiser vos baptemes'
              label='Bapteme'
              path='/espace'
            />
            <EspaceItem
              src='images/conference2.jpg'
              text='les cadres propices pour des conferences reussies'
              label='Conference'
              path='/espace'
            />
          </ul>
          <ul className='cards__items'>
          <EspaceItem
              src='images/sa3.jpg'
              text='Nous vous proposons ici les meilleurs locaux pour vos ceremonies de mariage'
              label='Mariage'
              path='/espace'
            />
            <EspaceItem
              src='images/sa1.jpg'
              text='Ne cherchez plus loin les meilleurs endroits pour organiser vos baptemes'
              label='Bapteme'
              path='/espace'
            />
            <EspaceItem
              src='images/conference2.jpg'
              text='les cadres propices pour des conferences reussies'
              label='Conference'
              path='/espace'
            />
            <EspaceItem
              src='images/sa5.jpg'
              text='tous ce dont vous avez besoin pour organiser vos evènements'
              label='le materiel evènementiel'
              path='/espace'
            />
          </ul>
          <ul className='cards__items'>
            <EspaceItem
              src='images/sa3.jpg'
              text='Nous vous proposons ici les meilleurs locaux pour vos ceremonies de mariage'
              label='Mariage'
              path='/espace'
            />
            <EspaceItem
              src='images/conf1.jpg'
              text="les meilleurs locaux pour organiser vos ceremonies d'anniversaire sont par ici"
              label='Anniversaire'
              path='/espace'
            />
            <EspaceItem
              src='images/sa1.jpg'
              text='Ne cherchez plus loin les meilleurs endroits pour organiser vos baptemes'
              label='Bapteme'
              path='/espace'
            />
            <EspaceItem
              src='images/conference2.jpg'
              text='les cadres propices pour des conferences reussies'
              label='Conference'
              path='/espace'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Espace;
