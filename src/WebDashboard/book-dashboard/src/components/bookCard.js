import React from 'react';


const bookCard = ( id, title, description ) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      {/* <img alt='book' src={``} /> */}
      <h2>{id}</h2>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
  export default bookCard;