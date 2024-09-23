import React from "react";
import Card from "./components/Card";
import './App.css';
import lamp from './assets/lamp.png'
import juelz from './assets/juelz.png'
import palmtree from './assets/palmtree.png'
import william from './assets/william.png'
import sasha from './assets/sasha.png'
import escapeh from './assets/escapeh.png'
import yetep from './assets/yetep.png'
import cfg from './assets/cfg.png'
import isoknock from './assets/isoknock.png'
import anyma from './assets/anyma.png'
import coachella from './assets/coachella.png'
import edc from './assets/edc.jpg'


const concerts = [
  {name: 'Lamp', date: 'September 24th', location: 'The Novo', image:lamp, web:"https://www.thenovodtla.com/events/detail/566165"},
  {name: 'Juelz', date: 'October 4th', location: 'The Bellwether', image:juelz, web:"https://thebellwetherla.com/events/juelz-241004"},
  {name: 'Palm Tree Festival', date: 'October 6th', location: 'Dana Point', image:palmtree, web:"https://www.palmtreemusicfestival.com/"},
  {name: 'William Black', date: 'October 12th', location: 'Exchange LA', image:william, web:"https://exchangela.com/event/lost-in-dreams-presents-william-black-edm-dj-music-concert-show-tonight-tomorrow-2024-oct-12-best-night-club-near-me-los-angeles/"},
  {name: 'Sasha Alex Sloan', date: 'October 17th', location: "The Roxy", image:sasha, web:"https://sadgirlsloan.com/"},
  {name: 'Escape', date: 'October 25th', location: 'NOS Event Center', image:escapeh, web:"https://escapehalloween.com/"},
  {name: 'Yetep', date: 'November 15th', location:'Academy LA', image:yetep, web:"https://academy.la/event/yetep-edm-shows-events-clubs-la-2024-nov-15-best-night-club-near-me-hollywood-los-angeles/"},
  {name: 'Camp Flog Gnaw', date: 'November 16th', location:'Dodger Stadium', image:cfg, web:"https://www.campfloggnaw.com/"},
  {name: 'ISOKNOCK', date: 'December 7th', location: 'Snapdragon Stadium', image:isoknock, web:"https://isoknock.com/"},
  {name: 'Anyma', date: 'December 30th', location: 'The Sphere', image:anyma , web:"https://www.anyma.com/"},
  {name: 'Coachella', date: 'April 18th', location: "Indio", image:coachella, web: "https://www.coachella.com/"},
  {name: 'EDC Las Vegas', date: 'May 16th', location: "Las Vegas Motor Speedway", image:edc, web:"https://lasvegas.electricdaisycarnival.com/"}
]

const App = () => {
  return (
    <div className="app-container">
      <h1 className="title">🎆 CONCERT HUB 🎆</h1>
      <div className="App">
        {concerts.map((concert, index) => (
          <Card key={index} concert={concert} />
        ))}
      </div>  
    </div>
  )
}

export default App
