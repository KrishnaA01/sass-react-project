import React from 'react';
import '../styles/CreamSection.scss';
import box from '../assets/box.png';
import bus from '../assets/bus.png';
import cart from '../assets/cart.png';
import gift from '../assets/gift.png';

const CreamSection = () => {
  return (
   <section className="main">
     <div className="center-text">
       <h1>Good Gifts Made Easy</h1>
     </div>

     <div className="allExp">
       <div className="exps">
         <div className="gift">
           <img src={box} alt="" />
         </div>
         <p>Send As A Gift</p>
         <p>Ship your gift with free return</p>
       </div>
       <div className="exps">
         <div className="gift">
           <img src={bus} alt="" />
         </div>
         <p>Send As A Gift</p>
         <p>Ship your gift with free return</p>
       </div>
       <div className="exps">
         <div className="gift">
           <img src={cart} alt="" />
         </div>
         <p>Send As A Gift</p>
         <p>Ship your gift with free return</p>
       </div>
       <div className="exps">
         <div className="gift">
           <img src={gift} alt="" />
         </div>
         <p>Send As A Gift</p>
         <p>Ship your gift with free return</p>
       </div>
     </div>
   </section>
  )
};

export default CreamSection;
