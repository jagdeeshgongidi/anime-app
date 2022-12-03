import React, { useEffect,useState,useRef } from 'react'
import AnimeCard from './animeCard'
import UseWatchList from '../components/hooks/UseWatchlist';
import Button from "../components/modal/button/Button";
import Modal, { ModalBody, ModalFooter, ModalHeader } from "../components/modal/modal/Modal";
import {Multiselect} from "multiselect-react-dropdown"
import {useNavigate} from "react-router-dom"
export const MainContent = (props) => {
  const navigate=useNavigate()
  const [showModal, setShowModal] = useState(false);
    const [watchList,setWatchList]=UseWatchList();
    const [message,setMessage]=useState('')
    const dataref=useRef()
    const data=[
      {genre:"action",id:1},
      {genre:"adventure",id:2},
      {genre:"funny",id:3},
      {genre:"crime",id:4}
    ]
    const [genres]=useState(data)
    
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

      const arr=[]
      const selectedData=(e)=>{
      e.forEach(genres => {
        arr.push(genres.genre)
      });
    }

      const navigateToSearch=() =>{
        const arr2=[...new Set(arr)]
       
        let filters=arr2.join(",")
        navigate(`/filter/${filters}`)
      }

  return (
    <main> 
    
     <p>{message}</p>
     <div>
                        <Button onClick={() => setShowModal(true)}>
                            Filters
                        </Button>
                        <Modal
                            show={showModal}
                            setShow={setShowModal}
                        // hideCloseButton
                        >
                            <ModalHeader>
                               <h3>Apply filters</h3>
                            </ModalHeader>
                            <ModalBody>
                            <div style={{width:"90%",justifyContent:"center" ,display:"flex"}}>
         <h3>select genre</h3>
    <Multiselect options={genres}  ref={dataref} displayValue='genre'  onSelect={(e) =>selectedData(e)} />
        </div>
                               
                            </ModalBody>
                            <ModalFooter>
                                <Button onClick={() => {setShowModal(false);navigateToSearch()}}>
                                    Apply
                                </Button>
                            </ModalFooter>
                        </Modal>
                    </div>
     
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
