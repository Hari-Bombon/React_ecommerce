import {React } from 'react'
import {Link} from 'react-router-dom;'
import Hero from '../components/hero';

const Home = () => {
  return <>
  <section className='banner p-5'>
    <div className="container-xxl">
      <div className="row">
      <div className="banner-details p-5 d-flex flex-column align-items-start justify-content-center">
        <span className='shadow-lg p-4 mt-3 text-white'>Trade in offer !!</span>
        <h1>Super Value Deals</h1>
        <h2>On All products</h2>
        <p className='p-1 m-0 '>Save more with Apneck</p>
        <Link className='button-link mb-3'>Shop Now</Link>
      </div>
      </div>
    </div>
  </section>

  <Hero />
  </>
   
  
}

export default Home