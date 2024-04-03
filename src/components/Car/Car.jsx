import React from 'react';
import './Car.css';
import ButtonPrimary from '../ButtonPrimary/ButtonPrimary';
import ButtonSecondary from '../ButtonSecondary/ButtonSecondary';

function Car({imgSrc, model, testDrive}) {
  return (
    <div className='car'>
        <div className="car__image">
            <img src={imgSrc} alt={model} />
        </div>
        <h2 className='car__model'>{model}</h2>
        <div className="car__actions">
            <ButtonPrimary name='order'></ButtonPrimary>
            {testDrive && <ButtonSecondary name='test drive'/>}
        </div>
        <div className="car__message">
            <span>Request a Call</span> to speak with a product specialist, value your trade-in or apply for leasing.
        </div>
    </div>
  )
}

export default Car