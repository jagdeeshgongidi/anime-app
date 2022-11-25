import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from '../components/Spinner';
export const AnimeInfo = () => {
    const [animeData, setAnimeData] = useState({})
    const [loading, setLoading] = useState(false)
    const params = useParams();
    useEffect(() => {
        let isMounted = true;
        const getOneAnime = async () => {
            try {
                const anime = await axios.get(`https://api.jikan.moe/v4/anime/${params.id}`)
                isMounted && setAnimeData(anime.data.data)

                setLoading(true)
            } catch (err) {
                console.log(err)
            }
        }
        getOneAnime()
        return () => {
            isMounted = false
        }


    }, [params.id])
    return (
        <div className="anime-info">

            {
                loading ?
                    <div className="movie-card">
                        <div className="container">
                            <iframe className="cover" width="290" height="215" src={animeData.trailer.embed_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            <div className="hero" style={{backgroundImage:`url(${animeData.images.jpg.large_image_url})`,backgroundSize:"cover"}}>
                                <div className="details">
                                    <div className="title1">{animeData.title} </div>
                                    <div className="title2">
                                            <span className='title'>{animeData.rating?(animeData.rating).split(" ").join("").slice(0,5):"..."}</span>
                                            <span className='title'>{animeData.score?animeData.score:0}</span>
                                            <span className='title'>{"❤️"+animeData.favorites?animeData.favorites:0}</span>
                                            <span className='title'>Rank{" "+animeData.rank?animeData.rank:0}</span>
                                    </div> 
                                    {
                                        animeData?.genres?.map((genre,index)=>{
                                            return <span className='genre' key={index}>{genre.name}</span>
                                        })
                                    }
                                </div>
                            </div>
                            <div className="description">
                                <div className="column2">
                                    <p>{animeData.synopsis}</p>
                                    <div className="avatars">
                                       
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>

                    : <Spinner />

            }
        </div>
    )
}
