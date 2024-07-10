import React from 'react';
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className='container'>
        <div className="nav-contect">
            <h5>Halwo <span>Adam</span></h5>
            <ul>
                <li>
                    <a href="" className='menu-item'>Home</a>
                </li>
                <li>
                    <a href="" className='menu-item'>Skill</a>
                </li>
                <li>
                    <a href="" className='menu-item'>Contact</a>
                </li>
             

            </ul>
            <button className='btn' onClick={() =>{}}>
                Hire me
            </button>
        </div>

    </div>
  )
}

export default Navbar