import React from 'react'
import './Banner.css'
function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>STRANGER THINGS</h1>
            <div className='banner-buttons'>
                <button className='button'><i class="bi bi-play"></i> Play</button>
                <button className='button'><i class="bi bi-plus"></i> My List</button>
            </div>
            <h3 className='banner-head2'>Watch season 4 now.</h3>
            <h6 className='banner-head3' >Strange sightings.Government secrets. Fearless kids. And a dark force that turns a small town upside down.</h6>
        </div>
    </div>
  )
}

export default Banner
