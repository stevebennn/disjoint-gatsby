import React from 'react'

function ImageGallery() {
  return (
    <div className="w_full bg-gray-200 px-10 mb-10">
      <h3>Section Title</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsa
        tenetur repudiandae iure corporis accusamus eius, tempore hic iusto
        quas.
      </p>
      <div className="grid grid-rows-2 grid-flow-col gap-4">
        <div className="image bg-gray-400 row-span-2 col-span-4 " />
        <div className="image bg-gray-400 row-span-2 col-span-2 " />
        <div className="image bg-gray-400 row-span-2 col-span-2" />
        <div className="image bg-gray-400" />
        <div className="image bg-gray-400" />
        <div className="image bg-gray-400" />
      </div>
      <button type="button">Click Me</button>
    </div>
  )
}

export default ImageGallery
