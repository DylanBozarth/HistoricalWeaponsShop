import React, { Component } from 'react';
import { DisplayItem } from '../ItemDisplayer/itemDisplayer';
import '../Bronze/Bronze.css'

class Bronze extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Bronze age Armor',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1",
          price: '$500',
          id: 1,
          desc: "Heavy, state of the art (2000BC), Myceneian charriot soldier's armor. ",
          catagory: 'armor'
        },
        {
          title: 'Wooden axe with bronze head',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$25',
          id: 2,
          desc: 'Simple but elegant. Free replacements on the wooden handle ',
          catagory: 'axe'
        },
        {
          title: 'Bronze dagger',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$50',
          id: 3,
          desc: 'Most likely a ceremonial dagger due to bronze not being a strong metal. Will look good on a wall',
        catagory: 'dagger'
        },
        {
          title: 'Bronze swords, ',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$200',
          id: 4,
          desc: 'Arm yourself and friends with these authentic reproductions',
        catagory: 'sword'
        },
        {
          title: 'Bronze age sword with scabbard',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$150',
          id: 5,
          desc: 'Great for hiking and time traveling.',
        catagory: 'sword'
        },
        {
          title: 'Bronze age weapons and armor, ',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$150',
          id: 6,
          desc: 'For a real in-depth look at the period.',
        catagory: 'book'
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPageBronze Container"> 
        <div className="Bronze">
        <h1>The Bronze age, humanity's first metal. </h1>
        <div className="ItemList row">
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
        
export default Bronze;
