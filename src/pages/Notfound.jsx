import React from 'react'
import { Link } from 'react-router-dom'
import "./Notfound.scss"
const Notfound = () => {
    return (
        <div>
            <div id="background"></div>
<div className="top">
  <h1 className="not-found">404</h1>
  <h3 className="not-found-text">page not found</h3>
</div>
<div className="n-container">
  <div className="ghost-copy">
    <div className="one"></div>
    <div className="two"></div>
    <div className="three"></div>
    <div className="four"></div>
  </div>
  <div className="ghost">
    <div className="face">
      <div className="eye"></div>
      <div className="eye-right"></div>
      <div className="mouth"></div>
    </div>
  </div>
  <div className="shadow"></div>
</div>
<div className="bottom">
  <p className="boo">Boo, looks like a ghost stole this page!</p>
  
  <div className="n-buttons">
    
    <Link to="/" className="btn">Home</Link>
  </div>
</div>

        </div>
    )
}

export default Notfound