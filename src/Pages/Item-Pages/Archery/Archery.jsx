import React, { Component } from 'react';
import { DisplayItem } from '../ItemDisplayer/itemDisplayer';
import '../Archery/Archery.css'

class Archery extends Component {
    constructor() {
        super();
    this.state = { items: [
        {
          title: 'Historical Arrowheads',
          imageUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1",
          price: '$10 each',
          id: 1,
          desc: "Handmade arrow heads in various styles.",
          catagory: 'supplies'
        },
        {
          title: 'Handmade arrows',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$15 for 5',
          id: 2,
          desc: ' Authentic wooden arrows',
          catagory: 'supplies'
        },
        {
          title: 'Yew wood longbow',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$200',
          id: 3,
          desc: 'Warning: 150lbs draw weight, only for experienced archers',
        catagory: 'bow'
        },
        {
          title: 'Mongolian horse bow ',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$60',
          id: 4,
          desc: '45lbs draw weight, horse not included.',
        catagory: 'bow'
        },
        {
          title: "Belt fastened leather quiver",
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$30',
          id: 5,
          desc: "Not like hollywood, doesn't go on your back.",
        catagory: 'supplies'
        },
        {
          title: 'Bow targets',
          imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.6VlNGksN5K9h8VpDxMsH5gHaLI%26pid%3DApi&f=1',
          price: '$5',
          id: 6,
          desc: 'Paper targets, 50cm by 50cm',
        catagory: 'supplies'
        }
      ] 
    }
  }
    render() { 
        return ( 
        <div className="FullPageArchery Container"> 
        <div className="Archery">
        <h1>Archery has been in practice for more than 10000 years. We aim to provide bows from at least some of those years. </h1>
        <div className="ItemListArchery row">
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
        
export default Archery;