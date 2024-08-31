import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Seo = ({ title }) => {
    const siteMetadata = useSiteMetadata();
    return (
        <title>{title} | {siteMetadata.title}</title>
    )
}

export default Seo