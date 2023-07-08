import React, { Component } from 'react'
import '../Css/Addimage.css';

 class Addimage extends Component {
  render() {
    return (
      <main className='main'>
      <div className="content">
        <h1 className="title">
          Jordan Shoes for the 
          <span>Ultimate Performance</span> 
        </h1>

       <p className="description">
        Designed for ultimate performance, our shoes provide unbeatable support, comfort, and style. Experience the perfect fusion of form and function, and unleash your inner athlete with every stride. Elevate your game with Jordan shoes.
       </p>
       <div className="buttons">
       <button className="buy-now">Buy Now</button>
       <button className="explore">Explore
       <i className='fa and fa-chevron-right'></i>
       </button>
     </div>

     <div className="available">
       
       <h4>Available on:</h4>
       <img className="logos" src="/images/Daraz-Logo.png" alt="daraz-logo" />
     </div>
   </div>

   <div className="image">
     <img className="shoe-image" src="/images/jordan-brand.png" alt="jordan-shoe" />
   </div>
 </main>
);
}
}

export default Addimage;
