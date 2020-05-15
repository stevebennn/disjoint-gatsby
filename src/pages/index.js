import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Card from '../components/modules/card/card'
import ImageGallery from '../components/sections/imageGallery/imageGallery'
import Hero from '../components/sections/hero/hero'
// import Image from '../components/image'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    {/* <Hero />
    <ImageGallery /> */}
    <Card />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
