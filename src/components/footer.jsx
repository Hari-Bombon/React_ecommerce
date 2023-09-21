import React from 'react'
import{ AiFillTwitterCircle} from 'react-icons/ai'
import { Link } from 'react-router-dom';
import {BsFacebook , BsInstagram , BsLinkedin} from 'react-icons/bs'


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
              <div className="col-3 social-icons d-flex justify-content-around">
                <Link><AiFillTwitterCircle/></Link>
                <Link><BsFacebook /></Link>
                <Link><BsInstagram /></Link>
                <Link><BsLinkedin /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  </>;
    
  
}

export default Footer