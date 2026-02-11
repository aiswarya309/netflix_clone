import React, { useEffect, useRef } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'


const TitleCards = ({title,category}) => {
const cardsRef = useRef()
const options = {method: 'GET', headers: {accept: 'application/json'}};

const handleWheel = (event)=>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY

}
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/authentication', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));
  cardsRef.current.addEventListener('wheel',handleWheel)
})


  return (
    <div className='titlecards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.map((card,index)=>{
          return <div className="card" key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCards