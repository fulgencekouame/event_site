import React from 'react';
import '../Cards.css';
import OutilsItem from './OutilsItem';
// import {Link} from 'react-router-dom'

function Outils() {
  return (
       
    
    <div className='cards'>
      <h1>Nos Outils évènementiels</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <OutilsItem
              src='images/sa3.jpg'
              text='espace situé à Cocody Riviéra2 abritant plus de 50 personnes'
              label='Outils evenementiels'
              path='/services'
            />
            <outilsItem
              src='images/conf1.jpg'
              text="espace situé à Yopougon maroc abritant plus de 100 personnes"
              label='Outils evenementiels'
              path='/services'
            />
            <OutilsItem
              src='images/conf1.jpg'
              text="espace situé à Bassam abritant plus de 50 personnes"
              label='Outils evenementiels'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <OutilsItem
              src='images/sa1.jpg'
              text='espace situé à Macory abritant plus de 500 personnes'
              label='Outils evenementiels'
              path='/services'
            />
            <OutilsItem
              src='images/conference2.jpg'
              text='espace situé à Cocody Faya abritant plus de 100 personnes'
              label='Outils evenemetiels'
              path='/products'
            />
            <OutilsItem
              src='images/sa5.jpg'
              text='espace situé à Trecheville abritant plus de 200 personnes'
              label='Outils evenementiels'
              path='/sign-up'
            />
          </ul>
          <ul className='cards__items'>
            <OutilsItem
              src='images/sa1.jpg'
              text='espace situé à Cocody Angré abritant plus de 300 personnes'
              label='Outils evenementiels'
              path='/services'
            />
            <OutilsItem
              src='images/conference2.jpg'
              text='espace situé à Bingerville abritant plus de 100 personnes'
              label='outils evenementiels'
              path='/products'
            />
            <OutilsItem
              src='images/sa5.jpg'
              text='espace situé au 2plateaux abritant plus de 50 personnes'
              label='Outils evenementiels'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Outils;
