import React, { Component } from 'react';
import { DisplayItem } from '../ItemDisplayer/itemDisplayer';
import '../HighMiddle/HighMiddle.css'

class HighMiddle extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Late middle ages Warhammer',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1",
          price: '$115 ',
          id: 1,
          desc: 'No armor will stand up to you with this! ',
          catagory: 'Hammer'
        },
        {
          title: 'The Knight',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$15',
          id: 2,
          desc: ' A day in the life, very educational.',
          catagory: 'book'
        },
        {
          title: 'Full set of middle ages armor',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$600',
          id: 3,
          desc: 'All 3 sets of Middle ages armor. Light, medium, heavy.',
        catagory: 'armor'
        },
        {
          title: 'Halberd ',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$110',
          id: 4,
          desc: 'Is it a spear, is it an axe? Yes.',
        catagory: 'spear'
        },
        {
          title: "Plate armor helmet",
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$55',
          id: 5,
          desc: "Not reccomended for swimming.",
        catagory: 'helmet'
        },
        {
          title: 'Templar shield',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$50',
          id: 6,
          desc: 'Dues vult',
        catagory: 'shield'
        },
        {
            title: "King's sword",
            imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
            price: '$500',
            id: 6,
            desc: 'With real gold ',
          catagory: 'sword'
          }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPageHighMiddle Container"> 
        <div className="HighMiddle">
        <h1>The high middle ages
         
        </h1>
        <div className="ItemListHighMiddle row">
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
        
export default HighMiddle;