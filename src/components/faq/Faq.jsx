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

const Faq = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="faq">
        <h1>Frequently Asked Question</h1>

        {
    data.map(({question,answer},index)=>{
        return(
            <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h3 className="accordion-title">{question}</h3>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>&#x25B6;</span>
      </div>
      {isOpen && (
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