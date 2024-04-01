import React from 'react'
import './mainbody.css'
import mb from '../img/mb.png'
function Mainbody() {
  return (
    <div className='mainbody'>
        <div className='container1'>
            <div className='heading'>Explore your <span className='hobby'>hobby</span> or <span className='passion'>passsion</span></div>
            <p className='text1'>
                <br/>
                Sign-in to intreact with a community of fellow hobbyists and an eco-system of experts, teachers,<br/>
                supplierss, classes, workshops, and places to practice or perform. Your hobby may be<br/>
                about visual or performing arts, sports, games, gardening, model making, cooking, indoor <br/>or
                outdoor activities... 
                <br/><br/>
                If you are an expert or a seller, you can  Add your listing and promote yourself, your students,<br/>
                products, services or events, Hop on your hobbyhorsse and enjoy the ride
            </p>
            <br/><br/>
            <img className='mbimg' src={mb}/>
        </div>

        <div className="container2">
    <header>
      {/* <h1>Sign In</h1> */}
      <div className="switch">
        <button id="signInBtn" className="active">Sign In</button>
        <button id="joinInBtn">Join In</button>
      </div>
    </header>
    <form id="signInForm">
      <div className="social-buttons">
        <button className="google-btn">Continue with Google</button>
        <button className="facebook-btn">Continue with Facebook</button>
      </div>
      <div className='orconnect'>or connect with</div>
      <div className="input-fields">
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
      </div>
      <button type="submit">Agree and Continue</button>
    </form>
  </div>

    </div>
  )
}

export default Mainbody