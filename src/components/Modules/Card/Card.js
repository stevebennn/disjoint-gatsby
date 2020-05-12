import React from 'react'
import { motion } from 'framer-motion'
import cardConfig from './card.config'

const list = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: cardConfig.cardEnterStagger,
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
}

const item = {
  visible: { opacity: 1, ...cardConfig.cardEnd },
  hidden: { opacity: 0, ...cardConfig.cardStart },
}

const Card = () => {
  return (
    <motion.div initial="hidden" animate="visible" variants={list}>
      <motion.div
        className={cardConfig.container}
        variants={item}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <div className={cardConfig.textContainer}>
          <div className={cardConfig.title}>The Coldest Sunset</div>
          <p className={cardConfig.body}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <motion.button
            type="button"
            className="bg-gray-700 text-white font-sans py-2 px-8"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            click me
          </motion.button>
        </div>
      </motion.div>
      <motion.div
        className={cardConfig.container}
        variants={item}
        transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      >
        <div className={cardConfig.textContainer}>
          <div className={cardConfig.title}>The Coldest Sunset</div>
          <p className={cardConfig.body}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatibus quia, nulla! Maiores et perferendis eaque,
            exercitationem praesentium nihil.
          </p>
          <motion.button
            type="button"
            className="bg-gray-700 text-white font-sans py-2 px-8"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            click me
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  )
}
export default Card
