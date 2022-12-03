import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { MainContent } from './Maincontent';
import Spinner from '../components/Spinner';
import PageNation from '../components/PageNation';
const FilterResults = () => {
  const params=useParams();
  let genres=params.list

  const [loading,setLoading]=useState(false);
  const [AnimeList,setAnimeList]=useState([])
  const [currentPage,setCurrentPage]=useState(1);
  const [pageInfo, setPageInfo] = useState({})
  useEffect(() => {
    let isMounted=true
    const searchQuery = async () => {
        try {
            const searchResult = await axios.get(`https://api.jikan.moe/v4/top/anime?genres=${genres}&limit=12&page=${currentPage}`);
            isMounted&&setAnimeList(searchResult.data.data)
            setPageInfo(searchResult.data.pagination)
            setLoading(true)
        } catch (err) {
            console.log(err)
        }
    }
    searchQuery();

    return () =>{
      isMounted=false
    }
  }, [currentPage,genres])




  
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
    <div className='content-wrap'>
      {
        loading?
        <>
        <MainContent animeList={AnimeList} />
        <div className="pageBtns">
        <PageNation pageInfo={pageInfo} currentPage={currentPage} prevPage={prevPage}  nextPage={nextPage} />
        </div> 
         </>
         : <Spinner />
      }

   </div>
  )
}

export default FilterResults