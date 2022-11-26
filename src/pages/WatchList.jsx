import React from 'react'
import WatchCard from '../components/WatchCard';
import useWatchList from '../components/hooks/UseWatchlist';
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
        watchList?.map((each,index) => <WatchCard onDelete={deleteWatchList} key={index} id={each.id} title={each.title} image={each.image} score={each.score} />)
       }
    </div>  
  )
}

export default WatchList