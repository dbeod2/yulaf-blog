import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'

const IndexPage = () => {
  return (
    <Layout pageTitle="율라프 끄적끄적">
      <p></p>
    </Layout>
  )
}

export const Head = () => <Seo title="index"/>

export default IndexPage