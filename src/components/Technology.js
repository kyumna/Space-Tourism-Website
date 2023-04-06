import React from 'react'
import data from './../data'
import  firstTechnology from '../images/image-launch-vehicle-portrait.jpg'
import secondTechnology from '../images/image-spaceport-portrait.jpg'
import thirdTechnology from '../images/image-space-capsule-portrait.jpg'


function Technology() {
  function changeTab(e){
    setTechnologyIndex(e.target.dataset.index)
     const children = technologyNavigation.current.children
     for (let i = 0; i < children.length; i++) {
       const child = children[i]
       child.classList.remove('active')
     }
     e.target.classList.add('active')
   }
   
   const technologyImages=[
     firstTechnology,
     secondTechnology,
     thirdTechnology,
     
   ]
   const technologyNavigation=React.useRef()
   const[technologyIndex,setTechnologyIndex]=React.useState(0)

  return (
    <div className='technology-section'>

    <div className='technology-subtitle'>
      <span>03 </span>meet your technology
    </div>
    {
      <>
        <div className='technology-image'>
          <img src={technologyImages[technologyIndex]} alt='dd' />
        </div>
        <div ref={technologyNavigation} className='technology-navigation'>
          <div data-index={0} onClick={changeTab}className='technology-tab active'>1</div>
          <div data-index={1} onClick={changeTab}className='technology-tab'>2</div>
          <div data-index={2} onClick={changeTab}className='technology-tab'>3</div>
          
        </div>
        <div className='technology-content'>
          <div className='technology-content-subtitle'>
            The technology...
          </div>
          <div className='technology-content-name'>
            {data.technology[technologyIndex].name}
          </div>
          <div className='technology-content-bio'>
            {data.technology[technologyIndex].description}
          </div>
        </div>
      </>
    }

  </div>
  )
}

export default Technology