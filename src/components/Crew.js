import React from 'react'
import data from './../data'
import firstCrew from '../images/image-douglas-hurley.png'
import fourthCrew from '../images/image-anousheh-ansari.png'
import thirdCrew from '../images/image-mark-shuttleworth.png'
import secondCrew from '../images/image-victor-glover.png'


function Crew() {

  function changeTab(e){
   setCrewIndex(e.target.dataset.index)
    const children = crewNavigation.current.children
    for (let i = 0; i < children.length; i++) {
      const child = children[i]
      child.classList.remove('active')
    }
    e.target.classList.add('active')
  }


  
  const crewImages=[
    firstCrew,
    secondCrew,
    thirdCrew,
    fourthCrew
  ]
  const crewNavigation=React.useRef()
  const[crewIndex,setCrewIndex]=React.useState(0)
  return (
    <div className='crew-section'>

      <div className='crew-subtitle'>
        <span>02 </span>meet your crew
      </div>
      {
        <>
          <div className='crew-image'>
            <img src={crewImages[crewIndex]} alt='dd' />
          </div>
          <div ref={crewNavigation} className='crew-navigation'>
            <div data-index={0} onClick={changeTab}className='crew-tab active'></div>
            <div data-index={1} onClick={changeTab}className='crew-tab'></div>
            <div data-index={2} onClick={changeTab}className='crew-tab'></div>
            <div data-index={3} onClick={changeTab}className='crew-tab'></div>
          </div>
          <div className='crew-content'>
            <div className='crew-content-role'>
              {data.crew[crewIndex].role}
            </div>
            <div className='crew-content-name'>
              {data.crew[crewIndex].name}
            </div>
            <div className='crew-content-bio'>
              {data.crew[crewIndex].bio}
            </div>
          </div>
        </>
      }

    </div>
  )
}

export default Crew