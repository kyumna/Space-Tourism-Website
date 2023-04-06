import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from './images/logo.svg'
import burgerIcon from './images/icon-hamburger.svg'
import closeIcon from './images/icon-close.svg'
import { useLocation } from 'react-router-dom'



function Nav() {
    const location=useLocation()
    const [open, setOpen] = useState(false)
    const [active,setActive]=useState(window.location.pathname.replace('/','')||'home')
    function close(){
        setOpen(false)
    }

    React.useEffect(()=>{
        setActive(location.pathname.replace('/','') ? location.pathname.replace('/','') : 'home')
    },[location])
    return (
        <header>
       
            <nav className={`nav ${open?'show':""}`}>
                <div className='logo'>
                    <img src={logo} alt='logo' />

                </div>
                <div className='line'></div>
                <ul className={`ul ${active}`}>
                    <li onClick={close} ><Link to='./'>00 Home</Link></li>
                    <li onClick={close}><Link to='./Destination'>01 Destination</Link></li>
                    <li onClick={close}><Link to='./Crew'>02 Crew</Link></li>
                    <li onClick={close}><Link to='./Technology'>03 Technology</Link></li>
                </ul>

                <div onClick={()=>setOpen(!open)} className='burger'>
                    {
                        open === false ?

                            <img src={burgerIcon} alt='' /> :
                            <img src={closeIcon} alt='' />
                }
                </div>
            </nav>

        </header>
    )
}

export default Nav