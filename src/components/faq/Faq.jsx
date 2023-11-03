import React, { useState } from 'react';
import './faq.css';


const data=[ 
    {
        question: 'first',
        answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapientelaborum cupiditate possimus labore, hic temporibus velit dicta earumsuscipit commodi eum enim atque at? Et perspiciatis dolore iurevoluptatem'
    },
    {
        question: 'second',
        answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapientelaborum cupiditate possimus labore, hic temporibus velit dicta earumsuscipit commodi eum enim atque at? Et perspiciatis dolore iurevoluptatem'
    },
    {
        question: 'third',
        answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapientelaborum cupiditate possimus labore, hic temporibus velit dicta earumsuscipit commodi eum enim atque at? Et perspiciatis dolore iurevoluptatem'
    },
    {
        question: 'fourth',
        answer:'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapientelaborum cupiditate possimus labore, hic temporibus velit dicta earumsuscipit commodi eum enim atque at? Et perspiciatis dolore iurevoluptatem'
    },
];

const Faq = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  return (
    <section className="faq">
        <h1>Frequently Asked Question</h1>

        {
    data.map(({question,answer},index)=>{
        return(
            <div className="accordion" key={index}>
      <div className="accordion-header" onClick={toggleAccordion(index)}>
        <h3 className="accordion-title">{question}</h3>
        <span className={`accordion-icon ${openAccordion === index ? 'open' : ''}`}> &#x25B6;</span>
      </div>
      {openAccordion === index && (
        <div className="accordion-content">
          <p>{answer}</p>
        </div>
      )}
    </div>
        )
    })
  }
    
    </section>
  );
};

export default Faq;