import React, { useState } from 'react'
import moon from './../images/image-moon.png'
import mars from './../images/image-mars.png'
import europa from './../images/image-europa.png'
import titan from './../images/image-titan.png'
import data from './../data'

function Destination() {
  const [planetNumber, setPlanetNumber] = useState(3)
  const navigation = React.useRef()
  const planetImages = [
    moon,
    mars,
    europa,
    titan
  ]

  function tabChange(e) {
    setPlanetNumber(e.target.dataset.index)
    let children = navigation.current.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      child.classList.remove('active')
    }
    e.target.classList.add('active')
  }
  return (
    <div className='destination-section'>

      <div className='destination-content'>{

            <React.Fragment>

              <h1 className='destination-content-subtitle'>
                <span>01</span>pick your destination
              </h1>

              <div className='destination-content-image'> <img src={planetImages[planetNumber]} alt="" /></div>

              <div className='destination-content-navigation' ref={navigation}>
                <div data-index={0}  onClick={tabChange} className='tab active'> moon</div>
                <div data-index={1} onClick={tabChange} className='tab'> mars</div>
                <div data-index={2} onClick={tabChange} className='tab'> europa</div>
                <div data-index={3} onClick={tabChange} className='tab'> titan</div>
              </div>
              <h1 className='destination-content-title'>{data.destinations[planetNumber].name}</h1>
              <p className='destination-content-body'>{data.destinations[planetNumber].description}</p>

              <div className='destination-content-info'>

                <div className='distance'>
                  <p>avg. distance</p>
                  <h1>{data.destinations[planetNumber].distance}</h1>

                </div>
                <div className='time'>
                  <p>est. time</p>
                  <h1>{data.destinations[planetNumber].travel}</h1>
                </div>
              </div>

            </React.Fragment>
          
        }
      






      </div>

    </div>
  )
}

export default Destination