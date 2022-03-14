import React from 'react';
import { render } from 'react-dom';
import './style.css';
import Animal from './components/zvire'

const App = () => {
  return (
    <div className='zoo'>
      <Animal name="Gibon obrovský" spiecies="gibon.jpg" />
      <Animal name="Lev, královský" spiecies="lev.jpg" />
      <Animal name="Nosorožeč nejmilejší" spiecies="nosorozec.jpg" />
      <Animal name="Panda rozkošná" spiecies="panda.jpg" />
      <Animal name="Papoušek barevný" spiecies="papousek.jpg" />
      <Animal name="Slon chobotový" spiecies="slon.jpg" />
      <Animal name="Surikata nejmilovanější" spiecies="surikata.jpg" />
      <Animal name="Tygr drsný" spiecies="tygr.jpg" />
      <Animal name="Velbloud dvojhrbý" spiecies="velbloud.jpg" />
      <Animal name="Žirafa dlouhá" spiecies="zirafa.jpg" />
      
    </div>
  )
}

render(<App />, document.querySelector('#app'));
