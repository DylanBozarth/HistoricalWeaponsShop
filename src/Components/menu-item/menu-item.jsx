import React from 'react'
import { withRouter } from 'react-router-dom'

export const MenuItem = ({title, imageUrl, timePeriod, size, linkUrl}) => (
/* destructor the title off of the props  the same as {props.title} */ 
/* this is called string interpolation, setting the css class dynamically */
<a className={`${size} menu-item`} href={`${linkUrl}`} style={{ color: 'white', 
   backgroundImage: `url(${imageUrl})`}}>
 

<div className="content" > 
  <h1 className="title">{title}<br /> </h1> <p className="year">{timePeriod}</p>
   <span className="subtitle">Shop for books and repilcas</span>
   
</div>
</a>

)