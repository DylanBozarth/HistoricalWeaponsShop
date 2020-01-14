import React, { Component } from 'react';
import { DisplayItem } from '../ItemDisplayer/itemDisplayer';
import '../EarlyMiddle/EarlyMiddle.css'

class EarlyMiddle extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Full set of Charlamange-era armor',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1",
          price: '$700',
          id: 1,
          desc: "Christianize those damn norsemen in this fully battle ready suit of armor!",
          catagory: 'armor'
        },
        {
          title: 'Spare armor and weapons',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: 'Varies',
          id: 2,
          desc: 'Sometimes we make mistakes, those mistakes are discounted. ',
          catagory: 'weapons'
        },
        {
          title: 'Dane axe',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$200',
          id: 3,
          desc: 'Protect the emperor with this authentic reproduction of the famous Dane-axe!',
        catagory: 'axe'
        },
        {
          title: 'The Dark ages ',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$20',
          id: 4,
          desc: 'Learn more about the history of this period.',
        catagory: 'book'
        },
        {
          title: "Alan horseman's helm",
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '60',
          id: 5,
          desc: 'Does not obstruct vision',
        catagory: 'helmet'
        },
        {
          title: 'Steel Spear ',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$100',
          id: 6,
          desc: 'Standard issue to every soldier in this period, and maybe to you too',
        catagory: 'spear'
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPageEarly Container"> 
        <div className="Early">
        <h1>The Early middle ages, also called the dark ages. The age of rival kings and viking raids. </h1>
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
        
export default EarlyMiddle;
