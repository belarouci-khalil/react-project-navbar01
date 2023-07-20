import React from 'react'
import './Header.css'
const Header = () => {
  return (
<div className="navbar navbar-expand-md bg-dark navbar-dark text-white fixed-top">
        <div className="container">
            <a href="#" className="navbar-brand">navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mainmenu">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item"><a href="#hero" className="nav-link">Homme</a></li>
                    <li className="nav-item"><a href="#features" className="nav-link">About</a></li>
                    <li className="nav-item">
                    <a href="#features" className="nav-link">info</a>
                    </li>
                    <li className="nav-item"><a href="#faq" className="nav-link">Ask Me</a></li>
                    <li className="nav-item"><a href="./index-ar.html" className="nav-link">عربي</a></li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Header
