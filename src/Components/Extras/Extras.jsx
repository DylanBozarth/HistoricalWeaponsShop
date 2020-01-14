import React, { Component } from 'react';
import {MenuItem} from '../menu-item/menu-item'
import '../Extras/Extras.css'



class Extras extends Component {
    constructor() {
        super();
    this.state = { sections: [
        {
          title: 'Historical Archery',
          imageUrl: 'https://www.historic-uk.com/wp-content/uploads/2017/12/archers.jpg',
          size: 'extra',
          id: 1,
          linkUrl: '/Archery'
        },
        {
          title: 'Fantasy Weapons',
          imageUrl: 'https://www.whats-on-netflix.com/wp-content/uploads/2018/07/is-the-lord-of-the-rings-trilogy-on-netflix-2018.jpg',
          size: 'extra',
          id: 2,
          linkUrl: '/Fantasy'
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="directory-menu">
        {
            /* destructoring and adding props to components */
            this.state.sections.map(({title, imageUrl, timePeriod, id, size, linkUrl }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} timePeriod={timePeriod} size={size} linkUrl={linkUrl} />
        ))}
        </div> );
    }
}
 
export default Extras;