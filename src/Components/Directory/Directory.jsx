import React, { Component } from 'react';
import {MenuItem} from '../menu-item/menu-item'
import '../Directory/Directory.css'



class Directory extends Component {
    constructor() {
        super();
    this.state = { sections: [
        {
          title: 'Neolithic Era',
          imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/747fbd9e-36b7-4df3-a9b9-95d479fcb0d8/d5rppqi-702139fc-e859-4f82-9d8c-75baba778ddf.png/v1/fill/w_1024,h_576,q_75,strp/neolithic_art_by_roycroftcreative-d5rppqi.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi83NDdmYmQ5ZS0zNmI3LTRkZjMtYTliOS05NWQ0NzlmY2IwZDgvZDVycHBxaS03MDIxMzlmYy1lODU5LTRmODItOWQ4Yy03NWJhYmE3NzhkZGYucG5nIiwid2lkdGgiOiI8PTEwMjQiLCJoZWlnaHQiOiI8PTU3NiJ9XV19.IrOXrTBYsxzfV4PvLMBINrNCmwdr00p8jDWyjKkmm8k',
          timePeriod: "10,000–4,500 BC",
          id: 1,
          linkUrl: '/neolithic'
        },
        {
          title: 'Bronze Age',
          imageUrl: 'https://eden-saga.com/wp-content/uploads/casque-corinthien-bonaparte-antique-cheval-688po.jpg',
          timePeriod: '3200–600 BC',
          id: 2,
          linkUrl: '/bronzeage'
        },
        {
          title: 'Iron Age',
          imageUrl: 'https://sites.google.com/site/michaelmiltichtimeline/_/rsrc/1351126275492/home/the-beginnings-of-human-society-4000-b-c-e/4000-1000-b-c-e/1000-500-b-c-e/L23_armor.jpeg?height=290&width=400',
          timePeriod: '1200 BC- 800AD',
          id: 3,
          linkUrl: '/ironage'
        },
        {
          title: 'Roman Era',
          timePeriod: '400 BC - 400AD',
          imageUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30509e92-9920-48e4-a625-c6529f23d653/d2jl0p5-4ce4cedd-8e0d-44e6-8233-db688e6a2ee0.jpg/v1/fill/w_900,h_662,q_75,strp/roman_army_by_byzantinum.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwic3ViIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl0sIm9iaiI6W1t7InBhdGgiOiIvZi8zMDUwOWU5Mi05OTIwLTQ4ZTQtYTYyNS1jNjUyOWYyM2Q2NTMvZDJqbDBwNS00Y2U0Y2VkZC04ZTBkLTQ0ZTYtODIzMy1kYjY4OGU2YTJlZTAuanBnIiwid2lkdGgiOiI8PTkwMCIsImhlaWdodCI6Ijw9NjYyIn1dXX0.yNGI4zdR_KKSySrK0rTZWvG_wy9w9hWZeL74MvKIkhc',
          id: 4,
          linkUrl: '/romanera'
        },
        {
          title: 'Early middle ages',
          imageUrl: 'https://i.pinimg.com/736x/74/4d/90/744d90b8e0ed383016ecb6a5dceddd86--roman-soldiers-dark-ages.jpg',
          timePeriod: '600 BC - 1100 AD',
          size: 'large',
          id: 5,
          linkUrl: '/earlymiddleages'
        },
        {
          title: 'Late middle Ages',
          timePeriod: '1100 - 1600 AD',
          imageUrl: 'http://deremilitari.org/wp-content/uploads/2014/06/Medieval-Warfare.gif',
          size: 'large',
          id: 6,
          linkUrl: '/latemiddleages'
        },
      ] 
    }
    }
    render() { 
        return ( <div className="directory-menu">
        {
            /* destructoring and adding props to components */
            this.state.sections.map(({title, imageUrl, timePeriod, id, size, linkUrl }) => (
            <MenuItem key={id} title={title} imageUrl={imageUrl} timePeriod={timePeriod} linkUrl={linkUrl} size={size} />
        ))}
        }
        </div> );
    }
}
 
export default Directory;