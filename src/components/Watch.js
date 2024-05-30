import { useParams } from "react-router-dom"
import React from "react"
import Header from "./Header"
import Container from "./Container"

const Watch =()=>{
    const movieId = useParams()
    
    return (
        <div>
            
            <Container movieId={movieId.id} />
        </div>
    )
}
export default Watch