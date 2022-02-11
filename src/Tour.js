import React, { useState } from 'react';

const Tour = ({id, image, info, price, name}) => {
  const [readMore, setReadMore] = useState(false) // Added in this feature

  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>{readMore? info : `${info.substring(0, 200)}...`} 
        <button onClick={() => setReadMore(! readMore)}>{readMore ? 'Show Less' : 'Read More'}</button></p>
        <button className="delete-btn">Not Interested</button>
      </footer>
    </article>
  );
};

// Added in this feature "<p>{readMore? info : `${info.substring(0, 200)}...`}" and 
//"<button onClick={() => setReadMore(! readMore)}>{readMore ? 'Show Less' : 'Read More'}</button></p>"

export default Tour;
