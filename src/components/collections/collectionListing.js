import React from 'react'

const CollectionListing = ({ collections }) => {
  return (
    <div className="">
      <h1>{collections.shopifyCollection.handle}</h1>
      {collections.shopifyCollection.products.map(item => {
        return (
          <div key={item.title}>
            <div>{item.title}</div>
          </div>
        )
      })}
    </div>
  )
}

export default CollectionListing
