import React, { useEffect, useState } from 'react'
import './Rowpost.css'
import axios from '../../axios'
import { IMAGE_URL } from '../../Constants/Constants'

function RowPost(props) {
  const [originals, setoriginals] = useState([])
  useEffect(() => {
   axios.get(props.url).then((response)=>{
    setoriginals(response.data.results)
    
   }) 
  }, [])
  return (
    <div className='row'>
        <h3 className='row-head'>{props.title}</h3>
        <div className='posters'>
          {originals.map((items)=>
          <img className={`${props.isSmall ? 'smallPoster':'poster'}`} src={`${IMAGE_URL+items.backdrop_path}`} alt="poster" />
          )}
        </div>
    </div>
  )
}

export default RowPost
