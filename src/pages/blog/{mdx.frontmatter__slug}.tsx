import * as React from 'react'
import * as styles from '../../components/layout.module.css'
import { graphql } from 'gatsby'
import Layout from '../../components/layout'
import Seo from '../../components/seo'
import UserProfile from '../../components/userprofile/userProfile'
import ContentDetail from '../../components/contenddetail/contentDetail'

const BlogPost = ({ data, children }) => {
    return (
      <Layout pageTitle={data.mdx.frontmatter.title}>
          <div className={styles.layoutContentWrapper}>
            <div className={styles.layoutContainer}>
              <div className={styles.layoutContainerRow}>
                <div className={styles.profileWidth}>
                  <UserProfile />
                </div>
                <ContentDetail data={data} children={children}/>
              </div>
            </div>
          </div>
        </Layout>
    )
  }
  

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost