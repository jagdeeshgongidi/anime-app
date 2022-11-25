import React from 'react'
import { Link } from 'react-router-dom'
const AnimeCard = ({ title, score, rating, image, id, add, status }) => {
    return (
        <div className="card">
            <button className="add-watchList" onClick={() => add({ image, id, title, score })} > Add</button>

            <div className="img1"><img className='homeImg' src={image} alt={title} loading="lazy" /></div>

            <div className="title">{title}</div>
            <div className="text">{status}</div>
            <div className="catagory">{rating ? (rating).split(" ").join("").slice(0, 5) : "..."} </div>
            <div className="views">{score}</div>
            <div className='more'><Link className='NextPage' to={`anime/${id}`} >More...</Link></div>
        </div>
    )
}

export default AnimeCard