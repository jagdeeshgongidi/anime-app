import React from 'react'
import { Link } from 'react-router-dom'
const TopContent = ({topAnime}) => {
    return (
        <section>
            <div className="movie-slide" style={{background: '#000', color: '#fff'}} >
                <div className="container-title">TOP&nbsp;
                    <span style={{color: '#f93'}}>Anime</span>
                </div>

                <div className="movie-box">
                {
                    topAnime.map((anime,index) => {
                        return (
                                <div key={index} id={anime.mal_id} className="movie-info">
                                <Link  to={`anime/${anime.mal_id}`}>
                                    <img alt="movie poster" src={anime.images.jpg.large_image_url} />
                                        <div className="movie-name">{anime.title}</div>
                                    <div className="review">❤️{anime.score}/10 </div>
                                    </Link>
                                </div>
                              
                                
                        )
                    })
                }
                </div>
            </div>
        </section>
    )
}

export default TopContent