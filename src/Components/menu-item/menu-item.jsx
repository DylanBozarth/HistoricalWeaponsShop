import React from 'react'

export const MenuItem = ({title, imageUrl, timePeriod, size}) => (
/* destructor the title off of the props  the same as {props.title} */ 
/* this is called string interpolation, setting the css class dynamically */
<div style={{
   backgroundImage: `url(${imageUrl})`
}} className={`${size} menu-item`}>

<div className="content">
   <h1 className="title">{title}<br /> </h1> <p className="year">{timePeriod}</p>
   <span className="subtitle">Shop for books and repilcas</span>
</div>
</div>

)