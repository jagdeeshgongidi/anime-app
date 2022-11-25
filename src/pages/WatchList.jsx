import React from 'react'
import WatchCard from '../components/WatchCard';
import useWatchList from '../components/hooks/UseWatchlist';
const WatchList = () => {
    const [watchList]=useWatchList();


  return (
    <div className='animeList'>
       {
        watchList?.map((each,index) => <WatchCard key={index} id={each.id} title={each.title} image={each.image} score={each.score} />)
       }
    </div>  
  )
}

export default WatchList