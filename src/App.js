import React from 'react';
import Dashboard from './components/dashboard'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeadSideVirus, faHeadSideMask, faHeadSideCough, faHeadSideCoughSlash, faVirus } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faHeadSideVirus, faHeadSideMask, faHeadSideCough, faHeadSideCoughSlash, faVirus)

function App() {
  return (
    <div className="App">
      <header className="App-header" />
      <body className={"bg-color"}>
        <Dashboard />
        <br />
      </body>
    </div>
  );
}

export default App;
