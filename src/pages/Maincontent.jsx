import React, { useEffect,useState } from 'react'
import AnimeCard from './animeCard'
import UseWatchList from '../components/hooks/UseWatchlist';
import Button from '../components/modal/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from  "../components/modal/Modal";

export const MainContent = (props) => {
    const [watchList,setWatchList]=UseWatchList();
    const [showModal,setShowModal]=useState(false)
    const [isActive,setIsActive]=useState(false)
    const [message,setMessage]=useState('')
    const handleClick=() =>[
      setIsActive(current =>!current)
    ]
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
    <main>  
    <div className="main_head">
    {<p style={{textAlign:'center',color:"red"}}>{message}</p>}
        <form>
            <input type="text" placeholder="Search for an anime ....." 
            value={props.search}
            onChange={(e)=>props.setSearch(e.target.value)}
            />
            <Button className="modalBtn" onClick={(e) => {setShowModal(true);e.preventDefault();}}>
                filters
        </Button>
            <button id="search" onClick={props.handleSearch}>Search</button>
        </form>
        
        <Modal
                show={showModal}
                setShow={setShowModal}
            // hideCloseButton
            >
                <ModalHeader>
                    <h2>Apply Filters</h2>
                </ModalHeader>
                <ModalBody>
                    <h3>select genre:</h3>
                    <ul>
                      <li 
                      onClick={() =>{props.setGenre("Action");handleClick()}}
                        className={isActive?"clicked":"" }>Action</li>
                      <li onClick={() =>{props.setGenre("adventure");handleClick()}}  className={isActive?"clicked":""}>Adventure</li>
                      <li onClick={() =>{props.setGenre("comedy");handleClick()}}  className={isActive?"clicked":""}>Comedy</li>
                      <li onClick={() =>{props.setGenre("drama");handleClick()}}  className={isActive?"clicked":""}>Drama</li>
                      <li onClick={() =>{props.setGenre("vampire");handleClick()}}  className={isActive?"clicked":""}>vampire</li>
                      <li onClick={() =>{props.setGenre("fantasy");handleClick()}}  className={isActive?"clicked":""}>Fantasy</li>
                      <li onClick={() =>{props.setGenre("historical");handleClick()}}  className={isActive?"clicked":""}>Historical</li>
                    </ul>

                </ModalBody>
                <ModalFooter>
                    <Button className="modalBtn" onClick={() => setShowModal(false)}>
                        Filter
                    </Button>
                </ModalFooter>
            </Modal>


    </div>
        <div className="anime-list">
           {
                 props.animeList.map(anime =>(
                    <AnimeCard 
                    key={anime.mal_id}
                    id={anime.mal_id}
                    title={anime.title}
                    score={anime.score}
                    rating={anime.rating}
                    image={anime.images.jpg.large_image_url}
                    add={addToWatchList}
                    status={anime.status}
                    />
                 ))
           }
        </div>
    </main>
  )
}
