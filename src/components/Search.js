import React,{useState} from 'react'
import Button from './modal/Button';
import Modal, { ModalBody, ModalFooter, ModalHeader } from  "./modal/Modal";
const Search = ({search,setSearch,handleSearch,setGenre}) => {

    const [showModal,setShowModal]=useState(false)
    const [isActive,setIsActive]=useState(false)
    const handleClick=() =>{
        setIsActive(current =>!current)
      }
    
  return (
    
    <div className="main_head">
    {<p style={{textAlign:'center',color:"red"}}>{}</p>}
        <Modal
                show={showModal}
                setShow={setShowModal}
            >
                <ModalHeader>
                    <h2>Apply Filters</h2>
                </ModalHeader>
                <ModalBody>
                    <h3>select genre:</h3>
                    <ul>
                      <li 
                      onClick={() =>{setGenre("Action");handleClick()}}
                        className={isActive?"clicked":"" }>Action</li>
                      <li onClick={() =>{setGenre("adventure");handleClick()}}  className={isActive?"clicked":""}>Adventure</li>
                      <li onClick={() =>{setGenre("comedy");handleClick()}}  className={isActive?"clicked":""}>Comedy</li>
                      <li onClick={() =>{setGenre("drama");handleClick()}}  className={isActive?"clicked":""}>Drama</li>
                      <li onClick={() =>{setGenre("vampire");handleClick()}}  className={isActive?"clicked":""}>vampire</li>
                      <li onClick={() =>{setGenre("fantasy");handleClick()}}  className={isActive?"clicked":""}>Fantasy</li>
                      <li onClick={() =>{setGenre("historical");handleClick()}}  className={isActive?"clicked":""}>Historical</li>
                    </ul>

                </ModalBody>
                <ModalFooter>
                    <Button className="modalBtn" onClick={() => setShowModal(false)}>
                        Filter
                    </Button>
                </ModalFooter>
            </Modal>
    </div>
  )
}

export default Search