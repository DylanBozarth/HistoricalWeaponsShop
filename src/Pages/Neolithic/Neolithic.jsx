import React, { Component } from 'react';
import {Route, link} from 'react-router-dom'

import { DisplayItem } from '../itemDisplayer';

class Neolithic extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Neolithic Rock art',
          imageUrl: 'art.jpg',
          Price: '$300',
          id: 1,
          Desc: 'Own a (reproduction) priceless piece of human history. Authentically reproduced from a cave in France. '
        },
        {
          title: 'Fantasy Weapons',
          imageUrl: 'https://www.whats-on-netflix.com/wp-content/uploads/2018/07/is-the-lord-of-the-rings-trilogy-on-netflix-2018.jpg',
          price: '$10',
          id: 2,
          Desc: 'Yee'
        }
      ] 
    }
  }
    render() { 
        return ( <div>
        {
             
            this.state.items.map(({title, imageUrl, desc, price, id }) => (
            <DisplayItem key={id} title={title} imageUrl={imageUrl} desc={desc} price={price} />
        ))} 
            </div> 
        )
    }
} 
        
export default Neolithic;
