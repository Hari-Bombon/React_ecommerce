import React from 'react'
import icon from '../assets/icons/1000_F_408307182_eYKkYshjzXPMSxpjLWIdFOY7lqG0ahF5.jpg'


const hero = () => {
  return (
    <div className='hero p-5'>
        <div className='container-xxl'>
            <div className='hero-details d-flex justify-content-around'>
              <div className='card p-2'>
                <img src={icon} alt="" className='img-fluid'/>
                <p>Fast Orders</p>
              </div>
              <div className='card p-2'>
                <img src={icon} alt="" className='img-fluid'/>
                <p>Fast Shipping</p>
              </div>
              <div className='card p-2'>
                <img src={icon} alt="" className='img-fluid'/>
                <p>24*7 Support</p>
              </div>
              <div className='card p-2'>
                <img src={icon} alt="" className='img-fluid'/>
                <p>High Savings</p>
              </div>
            </div>
        </div>
      </div>
  )
}

export default hero