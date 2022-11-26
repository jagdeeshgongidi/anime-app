import React from 'react'
import { Link } from 'react-router-dom'
const WatchCard = ({title,image,id,score,onDelete}) => {
  return (
             <div className="card"> 
            <button className="add-watchList" onClick={() =>onDelete(id)}>delete</button>
            <div className="img1"><img className='homeImg' src={image} alt={title} loading="lazy" /></div>
            <div className="title">{title}</div>
            <div className="text">{score}</div>
            <div className='more'><Link className='NextPage' to={`anime/${id}`} >More...</Link></div>
        </div>
  )
}

export default WatchCard