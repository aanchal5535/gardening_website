import React from 'react';
import './company.css';


const Company = () => {
  return (
    <section className="company">
        <div className="company-container">
            <h3 className='topic'><span style={{color:'#006400'}}>#Gardener</span> has been covered</h3>
            <div className="brands">
                <div className="brand-name">
                <img src="https://i.ibb.co/Gfwzz1S/logo-godrej.png" alt="" />
                </div>
                <div className="brand-name">
                <img src="https://i.ibb.co/vjrRZFM/logo-oppo.png" alt="" />
                </div>
                <div className="brand-name">
                <img src="https://i.ibb.co/3zs234S/logo-coca-cola.png" alt="" />
                </div>
                <div className="brand-name">
                <img src="https://i.ibb.co/7Wt343W/logo-paypal.png" alt="" />
                </div>
                <div className="brand-name">
                <img src="https://i.ibb.co/GVSNwJD/logo-philips.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Company
