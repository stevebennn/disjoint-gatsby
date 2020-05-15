import React from 'react'
import Colors from '../styleguide/colors'
import Type from '../styleguide/type'
import Layout from '../components/layout'

function Styleguide() {
  return (
    <Layout>
      <div className="w-full max-w-4xl m-auto ">
        <h2 className="text-2xl w-full p-3 text-bold border-b-2 mb-10 ">
          Typography
        </h2>
        <Type />
        <h2 className="text-2xl w-full p-3 my-10 font-bold border-b-2 ">
          Colors
        </h2>
        <Colors />
      </div>
    </Layout>
  )
}

export default Styleguide
