import React from 'react';
import {BiPhoneCall} from  'react-icons/bi'

const header = () => {
  return (
    <>
      <header className='header-top-strip p-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p>The Trending outfits at 100% off</p> {/* Fixed the typo in "The" */}
            </div>
            <div className='col-6' d-flex-justify-content-between>
              <div>
              <a href='tel:+9743189032'> <BiPhoneCall /> Call us +7543189032</a>
              </div>
              <div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header; // Changed component name to start with an uppercase letter (convention)

