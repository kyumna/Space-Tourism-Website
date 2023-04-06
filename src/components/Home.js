import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  // var headerHeight = document.querySelector('header').offsetHeight;
  
 
  return (
    <div className='home-section'>
      <div className='home-content'>
        <div className='home-content-subtitle'>so, you want to travel to</div>
        <h1 className='home-content-title'>Space</h1>
        <p className='home-content-body'>What means dummy text?
          Lorem ipsum, placeholder or dummy text used in typesetting and graphic design for previewing layouts. It features scrambled Latin text, which emphasizes the design over content of the layout. It is the standard placeholder text of the printing and publishing industrie
        </p>
        <div className='home-content-explore'>
          <Link to="/destination">explore</Link>
        </div>
      </div>
    </div>
  )
}

export default Home