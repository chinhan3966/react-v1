import React, {useState} from 'react'
import {FiX, FiMenu} from 'react-icons/fi'
import './Navbar.css'
function Navbar({listNav}) {

    const [menuClick, setMenuClick] = useState(false);

    const toogleClick = () => {
        setMenuClick(!menuClick)
    }
    return (
        <div className = 'navbar'>
            <h1>traveloka</h1>
            {menuClick ? (
                <FiX size={25} className="navbar__menu" onClick={toogleClick}/>
                ):(
                <FiMenu size={25} className="navbar__menu" onClick={toogleClick}/>
                )}
            <ul className={menuClick ? 'navbar__list navbar__list--active' : 'navbar__list'}>
                {
                    listNav.map((item, index) => (
                        <li key={index} className='navbar__item'>
                            <a className='navbar__link' href={item.url}>
                                {item.title}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Navbar
