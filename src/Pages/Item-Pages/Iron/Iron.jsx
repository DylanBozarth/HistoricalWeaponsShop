import React, { Component } from 'react';
import { DisplayItem } from '../ItemDisplayer/itemDisplayer';
import '../Iron/Iron.css'

class Iron extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Iron age axe',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1",
          price: '$60',
          id: 1,
          desc: 'For chopping down "trees" ',
          catagory: 'axe'
        },
        {
          title: 'Iron Broadsword',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$100',
          id: 2,
          desc: 'When most people say "sword" this is what comes to mind. ',
          catagory: 'sword'
        },
        {
          title: 'Sword with scabbard',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$120',
          id: 3,
          desc: 'Perfect for concealed carry.',
        catagory: 'sword'
        },
        {
          title: 'Shortsword',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$100',
          id: 3,
          desc: 'Like a regular sword, but shorter',
        catagory: 'sword'
        },
        {
          title: 'Book about the Iron age',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$15',
          id: 3,
          desc: 'facinating stuff, trust me.',
        catagory: 'book'
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPageIron Container"> 
        <div className="Iron">
        <h1>The Iron age. Before Humanity mastered steel production, but had advanced beyond bronze weapons and tools.</h1>
        <div className="ItemListIron row">
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
        
export default Iron;