'use strict'
import React from 'react'
import {Router, Route, IndexRedirect, browserHistory} from 'react-router'
import {render} from 'react-dom'
import {connect, Provider} from 'react-redux'
import Swipeable from './components/Swipeable'
import Footer from './components/Footer'
import store from './store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

let data = [
    {
        title: 'A wonderful day',
        text: '—— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— -',
        image: 'portrait-1.jpg',
        id: '1'
    },
    {
        title: 'My amazing journey',
        text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ——— ———— ',
        image: 'portrait-2.jpg',
        id: '2'
    },
    {
        title: 'Three recipes without cocoa',
        text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ———',
        image: 'portrait-3.jpg',
        id: '3'
    },
    {
        title: 'Generic clickbait title',
        text: ' —— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— - ——— ',
        image: 'portrait-4.jpg',
        id: '4'
    }
];

const App = () => (
  <MuiThemeProvider>
    <div>
    <Swipeable initialCardsData={data} />
    <Footer />
    </div>
  </MuiThemeProvider>
);

render (
    <App />,
  document.getElementById('main')
)
