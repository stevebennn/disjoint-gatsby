import React, { Fragment } from 'react'

import t from '../../tailwind.config'

const definedTypeSizes = []

Object.entries(t.theme.fontSize).forEach(([key, value]) => {
  definedTypeSizes.push({ name: key, val: value })
})

function Type() {
  return (
    <>
      {definedTypeSizes.map(item => {
        return (
          <p key={item} className={`text-${item.name} p-3`}>
            Lorem ipsum dolor sit amet.
          </p>
        )
      })}
    </>
  )
}

export default Type
