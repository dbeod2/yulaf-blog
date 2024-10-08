import * as React from 'react'
import * as styles from '../components/layout.module.css'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/seo'
import UserProfile from '../components/userprofile/userProfile'
import BlogContentIndex from '../components/blogcontentindex/blogContentIndex'

const IndexPage = ({ data, pageContext }) => {
  const { previous, next } = pageContext;

  return (
    <Layout>
      <div className={styles.layoutContentWrapper}>
        <div className={styles.layoutContainer}>
          <div className={styles.layoutContainerRow}>
            <div className={styles.profileWidth}>
              <UserProfile />
            </div>
            <div className={styles.layoutBlogContentIndexWrapper}>
                <BlogContentIndex data={data} pageContext={pageContext} />
            </div>
          </div>
        </div>
      </div>
      <nav>
        {previous && (
          <Link to={previous.frontmatter.slug}>
            ← {previous.frontmatter.title}
          </Link>
        )}
        {next && (
          <Link to={next.frontmatter.slug}>
            {next.frontmatter.title} →
          </Link>
        )}
      </nav>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC }}) {
      nodes {
        frontmatter {
          date
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Home Page" />

export default IndexPage