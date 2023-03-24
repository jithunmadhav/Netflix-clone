import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import { IMAGE_URL } from '../../Constants/Constants'
import { banner_url } from '../../url'

function Banner() {
  const [movie, setmovie] = useState()
  useEffect(() => {
     axios.get(banner_url).then(response=>{
      const a = Math.floor(Math.random() * (20 - 1)) + 1;
      setmovie(response.data.results[a])
     })
  }, [])
  return (
    <div style={{ backgroundImage:`url(${movie ? IMAGE_URL+movie.backdrop_path : ""})` }} className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title : ""}</h1>
            <div className='banner-buttons'>
                <button className='button'><i class="bi bi-play"></i> Play</button>
                <button className='button'><i class="bi bi-plus"></i> My List</button>
            </div>
            <h3 className='banner-head2'>Watch now.</h3>
            <h6 className='banner-head3' >{movie ? movie.overview : ""}</h6>
        </div>
    </div>
  )
}

export default Banner
