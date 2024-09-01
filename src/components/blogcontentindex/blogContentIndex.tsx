import * as React from 'react'
import { Link, graphql } from 'gatsby'
import * as styles from './blogContentIndex.module.css';

const BlogContentIndex = ({ data }) => {
    return (
        <ul className={styles.list}>
            {data.allMdx.nodes.map(node => (
                <li className={styles.listItem}>
                    <a href={`/blog/${node.frontmatter.slug}`} className={styles.postTitle}>
                        <div className={styles.postList}>
                            <div className={styles.postContent}>
                                <div className={styles.postRow}>
                                    <div className={styles.postText}>
                                        <h2 className={styles.postTitleLink}>{node.frontmatter.title}</h2>
                                        <div className={styles.postDetailWrapper}>
                                            <div className={styles.postDetailInfo}>{node.frontmatter.date}</div>
                                        </div>
                                        <div className={styles.boxSizing}>
                                            <p className={styles.postDtailTitle}>
                                                {node.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                </li>
            ))
            }
        </ul >
    )
}

export default BlogContentIndex