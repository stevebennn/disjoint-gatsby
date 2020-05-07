import React from 'react'
import cardConfig from './card.config'

const Card = () => {
  return (
    <div className={cardConfig.container}>
      {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
      <div className={cardConfig.textContainer}>
        <div className={cardConfig.title}>The Coldest Sunset</div>
        <p className={cardConfig.body}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
    </div>
  )
}
export default Card
