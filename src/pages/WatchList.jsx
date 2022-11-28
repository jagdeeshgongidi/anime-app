import React from 'react'
import useWatchList from '../components/hooks/UseWatchlist';
import { Link } from 'react-router-dom';
import AnimeCard from './animeCard';
const WatchList = () => {
    const [watchList,setWatchList]=useWatchList();
    const deleteWatchList=(id) =>{
        setWatchList((prev) =>{
          return prev.filter((item)=>item.id!==id);
        })
        localStorage.setItem('watchList',JSON.stringify(watchList));
    }
  return (
    <div className='animeList'>
       {
        watchList.length>0?watchList?.map((each,index) => <AnimeCard add={deleteWatchList} key={index} id={each.id} title={each.title} image={each.image} text="delete" score={each.score} />):<div><h2>Add some anime to binge watch</h2><Link className="n-buttons" to="/">Home</Link></div>
       }
    </div>  
  )
}

export default WatchList