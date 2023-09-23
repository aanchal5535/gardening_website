import React from 'react';
import Navbar from './components/navbar/Navbar';
import Heading from './components/heading/Heading';
import Company from './components/company/Company';
import Offers from './components/offers/Offers';
import Order from'./components/order/Order';
import Design from './components/design/Design';
import Faq from './components/faq/Faq';
import Testimonals from './components/testimonals/Testimonals';

import Custom from './components/custom/Custom';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <div>
      <Navbar/>
      <Heading/>
      <Company/>
      <Offers/>
      <Order/>
      <Design/>
      <Faq/>
      <Testimonals/>
     
      <Custom/>
      <Footer/>
    </div>
  )
}

export default App
