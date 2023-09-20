import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { AiOutlineMail } from 'react-icons/ai';
import { VscAccount } from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { HiOutlineInboxIn } from 'react-icons/hi';
import { VscAccount } from 'react-icons/vsc';
import { CgShoppingCart } from 'react-icons/cg';

const Header = () => {
  return (
    <>
      <header className='header-top-strip p-1 px-4 shadow-sm'>
        <div className='container-xxl'>
          <div className='row d-flex m-auto align-items-center'>
            <div className='col-2'>
              <p>The Trending outfits at 100% off</p>
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
            <div className='col-2 text-center'>
             <Link to='/'><img src={logo} alt="" className='img-fluid logo ' /></Link>
            </div>
            <div className="col-3 d-flex align-items-center mt-3 ">
            <div className="input-group mb-3">
            <span className='input-text-text' id="basic-addon1">All</span>
            <input type="text" className="form-control" placeholder="Search products" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <button className="input-group-text" id="basic-addon2"><button>Search</button></button>
          </div>
            </div>
            <div className="col-4 d-flex align-items-center justify-content-between text-center">
              <Link to={'/'}>Home</Link>
              <Link to={'shop'}>Shop</Link>
              <Link to={'blogs'}>Blog</Link>
              <Link to={'about'}>About</Link>
              <Link to={'contact'}>Contact</Link>
            </div>
            <div className="nav-links col-3 d-flex align-item-center justify-content-around">
              <Link className='d-flex' ><HiOutlineInboxIn className="fs-3 mx-2"/>
              <p className=''>Wishlist</p>
              </Link>
              <Link className='d-flex'><VscAccount className="fs-3 mx-2 "/>
              <p>Account</p>
              </Link>
              <Link className='d-flex'><VscAccount/>
              <p><CgShoppingCart className="fs-3 mx-2" /></p>
              </Link>
            </div>
          </div>

        </div>
      </header>
    </>
  );
};

export default Header;

