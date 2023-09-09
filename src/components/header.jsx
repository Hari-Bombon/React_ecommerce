import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import {Link} from 'react-router-dom'

const header = () => {
  return (
    <>
      <header className='header-top-strip p-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-6'>
              <p>The Trending outfits at 100% off</p> {/* Fixed the typo in "The" */}
            </div>
            <div className='col-6 d-flex-justify-content-between'>
              <div>
              <a href='tel:+9743189032'>  Call us +7543189032</a>
              </div>
              <div>
            <Link>  <BiPhoneCall className='fs-3 mx-4' /></Link>
            <Link>  <AiOutlineMail className='fs-3 mx-4'/> </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default header; // Changed component name to start with an uppercase letter (convention)

