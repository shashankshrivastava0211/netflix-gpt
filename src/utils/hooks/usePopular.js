import { useEffect } from "react"

const usePopular=()=>{
    const getPopular= async()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular")
        const json = await data.json()
    }

    useEffect(()=>{
        getPopular()

    },[])
}
export default usePopular