import React from 'react'
import{ AiFillTwitterCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {BsFacebook , BsInstagram , BsLinkedin} from 'react-icons/bs'
import google from '../assets/pay/google-play-logo.jpg'
import  pay from '../assets/pay/available-the-app-store-logo-png-images-14.png'


const Footer = () => {
  return <>
  <footer className='footer p-5'>
    <div className="container">
      <div className="row">
        <div className="col-4 d-flex flex-column">
          <h3 className='mb-5'>Contact us</h3>
          <div className="footer-details">
            <p className='mb-3'><b>Address:</b>Adayar,Address:Adyar, Spencer plaza , 2nd floor</p>
            <p className='mb-3'><b>Phone:</b> <a href='tel:+9743189032'>  Call us +7543189032</a></p>
            <p className='mb-5'><b>Hours Open:</b> From 10 A.M to 11 P.M</p>
             <p className='mb-3'><b>Follow Us</b></p>
              <div className="col-4 social-icons d-flex justify-content-around">
              <Link to="#" key="twitter"><AiFillTwitterCircle className='fs-4'/></Link>
                <Link><BsFacebook className='fs-4'/></Link>
                <Link><BsInstagram className='fs-4' /></Link>
                <Link><BsLinkedin className='fs-4'/></Link>
            </div>
          </div>
        </div>
        <div className="col-2">
          <h3 className='mb-5'>About</h3>
          <div className="footer-details">
            <Link className='mb-3 d-flex flex-column'>
              About Us
              </Link>
              <Link className='mb-3'>
              Delivery
              </Link>
              <Link className='mb-3'>
              Privacy Policy
              </Link>
              <Link className='mb-3'>
              Fee Policy
              </Link>
              <Link className='mb-3'>
              Terms & Conditions
              </Link>
          </div>
        </div>
        <div className="col-2">
          <h3 className='mb-5'>Account</h3>
          <div className="footer-details">
            <Link className='mb-3 d-flex flex-column'>
              Profile
              </Link>
              <Link className='mb-3'>
              View Cart
              </Link>
              <Link className='mb-3'>
              My Orders
              </Link>
              <Link className='mb-3'>
              My Wishlist
              </Link>
              <Link className='mb-3'>
              Help
              </Link>
              <Link className='mb-3'>
              Coupons
              </Link>
          </div>
        </div>
        <div className="col-4">
          <h3 className='mb-3'>Install App</h3>
          <div className="footer-details">
            <p>Available On Google Play Services & App Store</p>
            <div className='pay'>
          <Link>
           < img src={google} alt="" className='img-fluid p-3 my-3'/>
           </Link>
           <Link className='pay'>
            <img src={pay} alt="" className='img-fluid p-3 my-3'/>
            </Link>
            </div>
            <p className='mb-2'>Payment Methods</p>
            <Link>
           < img src={google} alt="" className='img-fluid p-3 my-3'/>
           </Link>
          </div>
        </div>
      </div>
      <hr />
      <div className="row d-flex justify-content-between">
        <div className="col-8">
          <p>&copy; Developed by Haripriya 2023</p>
        </div>
        <div className="col-3 d-flex justify-content-between">
          <Link className='text-black'>Privacy Policy</Link>
          <Link className='text-black'>Terms of User</Link>
          <Link className='text-black'>Contact Me</Link>
        </div>
      </div>
    </div>
  </footer>
  </>;
    
  
}

export default Footer