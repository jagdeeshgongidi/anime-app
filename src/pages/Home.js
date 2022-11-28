import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MainContent } from './Maincontent';
import Spinner from '../components/Spinner';
import PageNation from '../components/PageNation';
import TopContent from './Topcontent';
const Home = () => {
    const [loading, setLoading] = useState(false)
    const [animeList, setAnimeList] = useState([]);
    const [topAnime, setTopAnime] = useState([])
    const [pageInfo, setPageInfo] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const AnimeData = await axios.get(`https://api.jikan.moe/v4/anime?filter=${''}&limit=12&sfw=true&sort=asc&page=${currentPage}`);
                isMounted &&setAnimeList(AnimeData.data.data)
                setPageInfo(AnimeData.data.pagination)
            } catch (err) {
                console.log(err)
            }
        }
        fetchData();
        return () => {
            isMounted = false;
        }
    }, [currentPage])

    useEffect(() => {
        let isMounted=true
        const fetchTopAnime = async () => {
            try {
                const topAnimeData = await axios.get('https://api.jikan.moe/v4/top/anime?order_by=bypopularity&limit=10');
                isMounted && setTopAnime(topAnimeData.data.data)
                setLoading(true)
            } catch (err) {
                console.log(err);
            }
        }
        fetchTopAnime();
        return ()=>{
            isMounted=false
        }
    }
    ,[])
   

    const nextPage = () => {
        scrollTop();
        setCurrentPage(prev => {
            return prev + 1
        })
    }
    const prevPage = () => {
        scrollTop();
        setCurrentPage(prev => {
            if (prev === 1) {
                return prev
            } else {
                return prev - 1
            }

        })
    }

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return (
        <div className="">
            <div className='content-wrap'>
                {loading ? 
                <> 
                {
                    currentPage ===1?
                    <> <TopContent  topAnime={topAnime} />
                    <MainContent animeList={animeList} /></>
                    :<MainContent animeList={animeList} />
                }
                </>
                : <Spinner />
                }

            </div>
            <footer>
                {
                    loading ?
                <div className="pageBtns">
                    <PageNation pageInfo={pageInfo} currentPage={currentPage} prevPage={prevPage}  nextPage={nextPage} />
                </div>
                 :null
                }
            </footer>

        </div>

    )
}

export default Home