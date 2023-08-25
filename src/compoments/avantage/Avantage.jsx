import React from 'react';
import './Avantage.css';

import { Avantages } from '../../data.js';

interface AvantageItem {
  id: number;
  icon: string;
  title: string;
  text: string;
}

function Avantage() {
  return (
    <>
    <div className='avantages'>
      {Avantages.map((item: AvantageItem) => {
        const { id, icon, title, text } = item;
        return (
          <div className='avantage' key={id}>
            <img className='icons-avantage' src={icon} alt={title} />
            <h2 className='title-avantage'>{title}</h2>
            <p className='text-avantage'>{text}</p>
          </div>
        );
      })}
            <p className='text-sousblock'> *Hors SCPI, SCI, trackers et actions. D’autres frais peuvent s’appliquer.</p>

    </div>
    </>


  );
}

export default Avantage;
