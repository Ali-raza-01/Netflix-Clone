import React, { useState , useEffect, useRef} from 'react'
import card_data from '../assets/cards/Cards_data'
import '../components/TitleCards.css'
import { Link } from 'react-router-dom'





const Card = ({title, category}) => {
  const cardsRef = useRef()
  const [apiData, setApiData] = useState([]); 

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYWZkZDM1OWYxNzZmYjkzMzc2OGE2OTFiMjhhNWQ4ZiIsIm5iZiI6MTcyOTg5MTA2Ni42MzczMzEsInN1YiI6IjY3MWMwOWYzOWZmNjgxZDllMGE0MWEyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ao5VFClhxC9vj6yQDtSV06C0rYR-9ncklbU98xwnCUc'
    }
  };
  
 useEffect(() => {
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel)

}, []);
  const handleWheel= (e)=>{
    e.preventDefault()
    cardsRef.current.scrollLeft += e.deltaY
  }
 console.log(apiData)




  return (
    <div className='title_cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card_list" ref={cardsRef}>
        {apiData.map((data, index)=>{
            return <Link to={`/player/${data.id}`} className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+data.backdrop_path} />
              <span>{data.title}</span>
        
            </Link>

          })
        }

      </div>
    </div>
    
  )
}

export default Card