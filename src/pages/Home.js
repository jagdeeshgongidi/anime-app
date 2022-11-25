import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { MainContent } from './Maincontent';
import Sidebar from './SideBar';
import Spinner from '../components/Spinner';
const Home = () => {
    const [loading, setLoading] = useState(false)
    const [animeList, setAnimeList] = useState([]);
    const [search, setSearch] = useState("");
    const [topAnime, setTopAnime] = useState([])
    const [pageInfo, setPageInfo] = useState({})
    const [currentPage, setCurrentPage] = useState(1);
    const [genre,setGenre]=useState('');

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const AnimeData = await axios.get(`https://api.jikan.moe/v4/anime?filter=${genre}&limit=12&sfw=true&sort=asc&page=${currentPage}`);
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
    }, [currentPage,genre])

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
    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = async () => {
            try {
                const searchResult = await axios.get(`https://api.jikan.moe/v4/anime?q=${search}&sfw=true&order_by=popularity&sort=asc&limit=10&page=${currentPage}&genre=${genre}`);
                setAnimeList(searchResult.data.data)
                setPageInfo(searchResult.data.pagination)
                setLoading(true)
            } catch (err) {
                console.log(err)
            }
        }
        searchQuery()
    }

    const nextPage = () => {
        scrollTop();
        setCurrentPage(prev => {
            return prev + 1
        })
    }
    const prevPage = () => {
        scrollTop()
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
                {loading ? <> 
                <Sidebar topAnime={topAnime} />
                <MainContent
                        animeList={animeList}
                        search={search}
                        setSearch={setSearch}
                        handleSearch={handleSearch}
                        setGenre={setGenre}
                    >
                    </MainContent>
                </>
                    : <Spinner />
                }

            </div>
            <footer>
                {
                    loading ?
                <div className="pageBtns">
                        <button onClick={nextPage} disabled={!pageInfo.has_next_page}>
                            next
                        </button>
                        <p>page:{currentPage}/{pageInfo.last_visible_page}</p>
                    <button onClick={prevPage} disabled={currentPage === 1} >
                        Prev
                    </button>
                    <br></br>
                </div>
                 :null
                }
               <p style={{textAlign:'center'}}>@jagadeeshGongidi</p>
            </footer>

        </div>

    )
}

export default Home