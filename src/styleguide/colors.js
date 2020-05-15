import React, { Fragment } from 'react'

import t from '../../tailwind.config'

const definedColors = []

Object.entries(t.theme.colors).forEach(([key, value]) => {
  if (typeof value === 'object') {
    Object.entries(value).forEach(([k, v]) => {
      definedColors.push({ name: `${key}-${k}`, val: v })
    })
  } else {
    definedColors.push({ name: key, val: value })
  }
})

function Colors() {
  return (
    <div className="flex items-center mt-5 w-full max-w-4xl m-auto flex-wrap justify-center grid grid-cols-7">
      {definedColors.map(color => {
        return (
          <Fragment key={color.name}>
            <div className="flex flex-wrap  justify-center m-2">
              <h5 className="text-xs markdown no-toc w-full text-center">
                {color.name}
              </h5>
              <div
                className={`h-12 w-12 rounded-lg shadow-inner bg-${color.name}`}
              />
              <div className="text-gray-800 text-xs leading-none w-full text-center">
                <div className="mt-1 font-normal opacity-75">{color.val}</div>
              </div>
            </div>
          </Fragment>
        )
      })}
    </div>
  )
}

export default Colors
