import React from 'react';
import './order.css';
import Girl from '../../assests/gardener-removebg-preview.png';
import ME from '../../assests/logo-removebg-preview.png';

const Heading = () => {
  return (
    <section className="heading">
      <div className="order-container">
        <article className="heading-info">
        <div className="navbar-logo">
          <img src={ME} alt="app logo" />
        </div>
              <h1 className='heading-title'>Order <br/>Let's Make  <span style={{color:'#006400'}}>Garden</span> <br/>More Beautiful </h1>
              <button type='submit' className='btn btn-primary'>Order Now</button>
        </article>
        <div className="order">
        <div className="order-image">
          <img src={Girl} alt='About Image'/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Heading
