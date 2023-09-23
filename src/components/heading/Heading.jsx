import React from 'react';
import './heading.css';
import Image from '../../assests/R-removebg-preview.png';
import {AiOutlineArrowRight} from 'react-icons/ai';

const Heading = () => {
  return (
    <section className="heading">
      <div className="heading-container">
        <article className="heading-info">
                <h1 className='heading-title'>Realizing the idel <br/>
                <span style={{color:'#006400'}}>Home Gardern,</span>
                 Now It's<br/> <span style={{color:'#006400'}}>Easier</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Consequatur aspernatur aut unde earum cupiditate est sequi. 
                    Vero veniam earum eligendi, sequi corporis provident quae, sed, reiciendis culpa voluptas voluptatibus doloremque.
                </p>
                <button type='submit' className='btn btn-primary'>Order Now</button>
                <a href="#">See how it's works <AiOutlineArrowRight className='submit-icon'/></a>
        </article>
        <article className='heading-img'>
            <img src={Image} alt="gardener"></img>
        </article>
      </div>
    </section>
  )
}

export default Heading
