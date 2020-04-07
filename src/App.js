import React from 'react';
import Dashboard from './components/dashboard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {
  faHeadSideVirus,
  faHeadSideMask,
  faHeadSideCough,
  faHeadSideCoughSlash,
  faArrowAltCircleUp,
  faVirus,
  faProcedures,
  faBan
  } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHeadSideVirus, faHeadSideMask, faHeadSideCough, faHeadSideCoughSlash, faVirus, faArrowAltCircleUp,
  faProcedures, faBan)

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <div className={"body-bg-color"}>
        <Dashboard />
        <br />
      </div>
    </div>
  );
}

export default App;
