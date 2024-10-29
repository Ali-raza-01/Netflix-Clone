import React, { useState, useEffect } from 'react'
import back_arrow_icon from '../assets/back_arrow_icon.png'
import '../pages/Player.css'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const [playerData, setPlayerData ] = useState({
    name : "",
    key : "",
    published_at : "",
    type : "",
  })
  const {id} = useParams();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWZkZDM1OWYxNzZmYjkzMzc2OGE2OTFiMjhhNWQ4ZiIsIm5iZiI6MTcyOTg5MTA2Ni42MzczMzEsInN1YiI6IjY3MWMwOWYzOWZmNjgxZDllMGE0MWEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ao5VFClhxC9vj6yQDtSV06C0rYR-9ncklbU98xwnCUc'
    }
  };
  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(res => res.json())
    .then(res => setPlayerData(res.results[0]))
    .catch(err => console.error(err));

  }, [])
  
  const nav = useNavigate();
 
  return (
    <div className='player'>
      <img src={back_arrow_icon} onClick={()=> {nav(-2)}} />
      <iframe src={`https://www.youtube.com/embed/${playerData.key}`}
       height="90%" width="90%" title='Trailer' frameBorder="0" allowFullScreen></iframe>
       <div className="player-info">
        <p>{playerData.published_at.slice(0,10)}</p>
        <p>{playerData.name}</p>
        <p>{playerData.type}</p>

       </div>
    </div>
  )
}

export default Player