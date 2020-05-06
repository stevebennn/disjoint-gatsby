import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import cardConfig from "../components/card.config"

const IndexPage = () => (
    <Layout>
        <div className={cardConfig.container}>
            {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains" /> */}
            <div className="px-6 py-4">
                <div className={cardConfig.title}>The Coldest Sunset</div>
                <p className={cardConfig.body}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
            </div>
        </div>
        <SEO title="Home" />
        {/* <h1>Hi people</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p> */}
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
            <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)

export default IndexPage
