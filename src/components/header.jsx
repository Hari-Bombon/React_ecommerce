import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import {Link} from 'react-router-dom'
import logo from'../assets/logo.png'

const Header = () => {
  return (
    <>
      <header className='header-top-strip p-3'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
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
      <header className='header-upper p-5 shadow-sm'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-2'>
             <Link to='/'><img src={logo} alt="" className='img-fluid logo' /></Link>
            </div>
            <div className="col-3">
            <div className="input-group mb-3">
  <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
  <span className="input-group-text" id="basic-addon2">@example.com</span>
</div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-between">
              <Link to={'/'}>Home</Link>
              <Link to={'shop'}>Shop</Link>
              <Link to={'blogs'}>Blog</Link>
              <Link to={'about'}>About</Link>
              <Link to={'contact'}>Contact</Link>
            </div>
            <div className="col-5">

            </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header 

