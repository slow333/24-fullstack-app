import React from 'react';

const Pizza = ({pizza}) => {
  const {name, ingredients, price, photoName, soldOut} = pizza;

  return (
       <div className={`pizza ${soldOut ? "sold-out" : ""}`}>
         <img src={photoName} className={`${soldOut ? "sold-out" : ""}`} alt={name}/>
         <div>
         <h3>{name}</h3>
         <p>{ingredients}</p>
         <p> ${price} {soldOut ? "(sold out)": ''}</p>

         </div>
       </div>
  );
};

export default Pizza;