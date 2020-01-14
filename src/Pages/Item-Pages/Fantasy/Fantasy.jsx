import React, { Component } from 'react';
import { DisplayItem } from '../ItemDisplayer/itemDisplayer';
import '../Fantasy/Fantasy.css'

class Fantasy extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Fantasy axe',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1",
          price: '$60 ',
          id: 1,
          desc: 'From skyrim I think',
          catagory: 'axe'
        },
        {
          title: 'Metal killing claw',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$150',
          id: 2,
          desc: ' Looks pretty dangerous',
          catagory: 'dagger'
        },
        {
          title: 'Morrowind Dagger',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$60',
          id: 3,
          desc: 'Get those imperials with this',
        catagory: 'dagger'
        },
        {
          title: 'Axe from WoW ',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$60',
          id: 4,
          desc: 'Axe from world of warcraft',
        catagory: 'axe'
        },
        {
          title: "Spear-fan",
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$130',
          id: 5,
          desc: "",
        catagory: 'spear'
        },
        {
          title: 'Fantasy sword 2',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$150',
          id: 6,
          desc: '',
        catagory: 'sword'
        },
        {
          title: 'Fantasy sword 3',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$150',
          id: 7,
          desc: '',
        catagory: 'sword'
        },
        {
          title: ' Blue Fantasy  sword ',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$150',
          id: 8,
          desc: '',
        catagory: 'sword'
        },
        {
          title: 'Fantasy ninja swords',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$200 for both',
          id: 9,
          desc: '',
        catagory: 'sword'
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPageFantasy Container"> 
        <div className="Fantasy">
        <h1>From Tolkien to Anime, we are your fantasy weapon dealer.
          (magic not included)
        </h1>
        <div className="ItemListFantasy row">
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
        
export default Fantasy;