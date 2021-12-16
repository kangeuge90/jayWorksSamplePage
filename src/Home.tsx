// import { Link } from 'react-router-dom'
import DisplayJayWorks from './DisplayJayWorks';
import DisplayMezzanineAssembly from './DisplayMezzanineAssembly';
import DisplayAwall from './DisplayAwall';
import WhatWeDo from './assets/whatWeDo.png'
import './Home.css'

function Home() {
    return (
        <body className="homeContainer">
          <h1>Home</h1>
          {/* <img src=""></img> */}
            {/* Jay Works background image */}
          <div className="whatWeDoContainer">
            <img id='whatWeDoImage' src={WhatWeDo}></img>
              <div className="displayContainer">
                <div className='awallContainer'>
                  <DisplayAwall />
                </div>
                <div className='jayWorksContainer'>
                  <DisplayJayWorks />
                </div>
                <div className='mezzanineContainer'>
                  <DisplayMezzanineAssembly />
                </div>
              </div>
          </div>
        </body>
    )
}

export default Home;