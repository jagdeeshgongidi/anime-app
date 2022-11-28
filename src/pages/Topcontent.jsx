import React from 'react'

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
                                <div key={index} className="movie-info">
                                    <img alt="movie poster" src={anime.images.jpg.large_image_url} />
                                        <div className="movie-name">{anime.title}</div>
                                    <div className="review">❤️{anime.score}/10 </div>
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