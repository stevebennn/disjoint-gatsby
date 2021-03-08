import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import cardConfig from './card.config'
import { ShopifyContext } from '../../../context/ShopifyProvider'
import { Link } from 'gatsby'

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

const Card = ({ node: { title, variants, description, handle } }) => {
  const { addVariantToCart } = useContext(ShopifyContext)
  // console.log(variants[0].shopifyId)

  return (
    <motion.div
      className={cardConfig.container}
      variants={item}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      <div className={cardConfig.textContainer}>
        <div className={cardConfig.title}>{title}</div>
        <p className={cardConfig.body}>{description}</p>
        <motion.button
          type="button"
          className={cardConfig.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          // onClick={() => addVariantToCart(variants[0].shopifyId, 1)}
        >
          <Link to={`/products/${handle}`}>Shop</Link>
        </motion.button>
      </div>
    </motion.div>
  )
}

const CardList = ({ edges }) => {
  return (
    <motion.div initial="hidden" animate="visible" variants={list}>
      {edges.map(({ node }, index) => (
        <Card key={`${node.title}-${index}`} node={node} />
      ))}
    </motion.div>
  )
}

export default CardList
