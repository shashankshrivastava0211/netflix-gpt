import { useEffect } from "react"
import { api_options } from "../constants"
import { useDispatch } from "react-redux"
import { addUpComming } from "../MoviesSliceTwo"

const useUpcomming = ()=>{
    const dispatch = useDispatch()
    const getUpComming = async()=>{//upcomming movie k liye hai ye logic 
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming",api_options)//smjh aaya m kya kr raha th? mei jo link tujhe bhji hai meeting ki usey hi copy krke idhr paste kr raha th muje lga th api ki link copy hai 
        const json = await response.json()//isse dekhte hai data aaya ya nhi ab check krne ki zrurt nhi qki dkh lia hai hamne ki aagya hai tohisko hatara hu 
        dispatch(addUpComming(json.results))
    }//dkho aagya data results k andr 

    useEffect(()=>{
        getUpComming()

    },[])
}
export default useUpcomming