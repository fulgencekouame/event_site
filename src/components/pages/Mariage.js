import React from 'react';
import '../Cards.css';
import MariageItem from './MariageItem';
// import {Link} from 'react-router-dom'

function Mariage() {
  return (
       
    
    <div className='cards'>
      <h1>Nos Espaces pour Mariages</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <MariageItem
              src='images/sa3.jpg'
              text='espace situé à Cocody Riviéra2 abritant plus de 50 personnes'
              label='Mariage'
              path='/detailmariage'
            />
            <MariageItem
              src='images/conf1.jpg'
              text="espace situé à Yopougon maroc abritant plus de 100 personnes"
              label='Mariage'
              path='/detailmariage'
            />
            <MariageItem
              src='images/conf1.jpg'
              text="espace situé à Bassam abritant plus de 50 personnes"
              label='Mariage'
              path='/detailmariage'
            />
          </ul>
          <ul className='cards__items'>
            <MariageItem
              src='images/sa1.jpg'
              text='espace situé à Macory abritant plus de 500 personnes'
              label='Mariage'
              path='/detailmariage'
            />
            <MariageItem
              src='images/conference2.jpg'
              text='espace situé à Cocody Faya abritant plus de 100 personnes'
              label='Mariage'
              path='/detailmariage'
            />
            <MariageItem
              src='images/sa5.jpg'
              text='espace situé à Trecheville abritant plus de 200 personnes'
              label='Maraige'
              path='/detailmariage'
            />
          </ul>
          <ul className='cards__items'>
            <MariageItem
              src='images/sa1.jpg'
              text='espace situé à Cocody Angré abritant plus de 300 personnes'
              label='Mariage'
              path='/detailmariage'
            />
            <MariageItem
              src='images/conference2.jpg'
              text='espace situé à Bingerville abritant plus de 100 personnes'
              label='Mariage'
              path='/detailmariage'
            />
            <MariageItem
              src='images/sa5.jpg'
              text='espace situé au 2plateaux abritant plus de 50 personnes'
              label='Mariage'
              path='/detailmariage'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mariage;
