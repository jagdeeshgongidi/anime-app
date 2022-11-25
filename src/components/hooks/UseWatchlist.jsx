import {useContext } from "react"
import { watchListContext } from "../contextApi/contextProvider"
const UseWatchList = () => {
  return  useContext(watchListContext)
}

export default UseWatchList