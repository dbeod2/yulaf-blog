import * as React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Seo = ({ title, description, currentPage, numPages }) => {
    const pageTitle = currentPage > 1 ? `${title} - Page ${currentPage}` : title;
    const siteMetadata = useSiteMetadata();
    return (
        <>
            <title>{title} | {siteMetadata.title}</title>
            <meta name="description" content={description}/>
        </>
    )
}

export default Seo