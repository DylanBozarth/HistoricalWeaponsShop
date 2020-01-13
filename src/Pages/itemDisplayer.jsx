import React from 'react'


export const DisplayItem = ({title, imageUrl, price, desc, id}) => (
/* destructor the title off of the props  the same as {props.title} */ 
/* this is called string interpolation, setting the css class dynamically */


<div key={id} className="content">
   <h1 className="title">{title}<br /> </h1> <p className="price">{price}</p>
   <span className="subtitle">{desc}</span>
</div>
)
 /* <img className="image">{imageUrl}</img> */