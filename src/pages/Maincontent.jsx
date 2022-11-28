import React, { useEffect,useState } from 'react'
import AnimeCard from './animeCard'
import UseWatchList from '../components/hooks/UseWatchlist';


export const MainContent = (props) => {
    const [watchList,setWatchList]=UseWatchList();
    const [message,setMessage]=useState('')
    const addToWatchList =(data) =>{
      setWatchList(prev =>{
        return [...prev,data]
      })
      setMessage("added to watch list ")
    }
      useEffect(() =>{
        localStorage.setItem("watchList",JSON.stringify(watchList))
      },[watchList])

      const clearMessage=() =>{
        setInterval(() =>{
          setMessage('')
        },3000)
      }
      clearMessage();

  return (
    <main>  <p>{message}</p>
        <div className="anime-list">
           {
                 props?.animeList?.map(anime =>(
                    <AnimeCard 
                    key={anime?.mal_id}
                    id={anime?.mal_id}
                    title={anime?.title}
                    score={anime?.score}
                    rating={anime?.rating}
                    image={anime?.images.jpg.large_image_url}
                    add={addToWatchList}
                    status={anime?.status}
                    text={"+add"}
                    />
                 ))
           }
        </div>
    </main>
  )
}
