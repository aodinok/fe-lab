import React from 'react'

import styles from './App.css'

const App = () => (
  <grid className='grid'>
    <header className='header'><button onClick={() => {
      fetch('/api/1.0/users').then((data) => {
        data.json().then((users) => {
          document.getElementById('users').innerHTML = JSON.stringify(users)
        })
      })
    }}></button></header>
    <content className='content'>blog site content<div id='users' /></content>
    <footer className='footer'>Odessa, 2017</footer>
  </grid>
)

export default App
