import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import * as styles from './layout.module.css'
import { defineCustomElements as deckDeckGoHighlightElement } from "@deckdeckgo/highlight-code/dist/loader";

const Layout = (props) => {
    const { pageTitle, children } = props;
    const data = useStaticQuery(graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `)
    deckDeckGoHighlightElement();
    return (
        <>
            <div className={styles.navigationBar}>
                <div className={styles.container}>
                    <a href="/" className={styles.navBrand} aria-label="home">
                        <div className={styles.siteName}>yulaf.blog</div>
                    </a>
                    <nav role="navigation" className={styles.navMenu}>
                        {/* <a href="/" aria-current="page" className={styles.navLink}>Home</a> */}
                        {/* <a href="/blog" aria-current="page" className={styles.navLink}>Post</a> */}
                    </nav>
                </div>
            </div>
            <div>
                {children}
            </div>
        </>
    )
}

export default Layout
