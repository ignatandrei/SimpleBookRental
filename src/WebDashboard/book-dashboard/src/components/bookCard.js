import React from 'react';


const bookCard = (title, author, description) => {
  return (
    <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt='book' src={``} />
      <h2>{title}</h2>
      <h3>{author}</h3>
      <p>{description}</p>
    </div>
  );
}
  export default bookCard;