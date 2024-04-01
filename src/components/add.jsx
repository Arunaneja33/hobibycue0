import React from 'react'
import add from '../img/add.png'
import sub from '../img/sub.png'
import './add.css'
function ADD() {
  return (
    <div><img className='addimg' src = {add}/>
    <div className="container sub">
    <img className='addimg' src = {sub}/>
    </div>

    </div>
  )
}

export default ADD