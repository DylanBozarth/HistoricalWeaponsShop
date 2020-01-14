import React, { Component } from 'react';
import { DisplayItem } from '../ItemDisplayer/itemDisplayer';
import '../Roman/Roman.css'

class Roman extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Roman Centurion armor',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1",
          price: '$250 ',
          id: 1,
          desc: 'Lead exactly C number of men against the gauls in this gleaming set of armor.',
          catagory: 'armor'
        },
        {
          title: 'Roman Britian',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$20',
          id: 2,
          desc: 'Learn more',
          catagory: 'book'
        },
        {
          title: 'Gladiator sword',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$120',
          id: 3,
          desc: 'ARE YOU NOT ENTERTAINED?',
        catagory: 'sword'
        },
        {
          title: 'Roman gladius ',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$8-',
          id: 4,
          desc: 'Standard issue roman short sword.',
        catagory: 'sword'
        },
        {
          title: "Roman Helmet",
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$90',
          id: 5,
          desc: "Stand proud and tall with this Roman helmet.",
        catagory: 'helmet'
        },
        {
          title: 'Roman spear',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$40',
          id: 6,
          desc: 'Use these before your gladius, ave true to Caesar',
        catagory: 'spear'
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPageRoman Container"> 
        <div className="Roman">
        <h1>Imperium Romanum!
        </h1>
        <div className="ItemListRoman row">
        {
             
            this.state.items.map(({title, imageUrl, desc, price, id }) => (
            <DisplayItem key={id} title={title} imageUrl={imageUrl} desc={desc} price={price} />
        ))} 
            </div> 
            
            </div>
            
            </div>
        )
    }
} 
        
export default Roman;