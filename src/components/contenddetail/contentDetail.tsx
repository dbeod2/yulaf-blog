import * as React from 'react'
import * as styles from './contentDetail.module.css';

const ContentDetail = ({ data, children }) => {
    return (
        <div className={styles.contentDetailWrapper}>
            <div className={styles.contentDetailSubWrapper}>
                <div className={styles.contentDetail}>
                    <h1>{data.mdx.frontmatter.title}</h1>
                    <div className={styles.detailWrapper}>
                        <div className={styles.detaiPostDate}>{data.mdx.frontmatter.date}</div>
                        <div className={styles.greyRule} />
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <a href="/" className={styles.listButton}>← 전체목록</a>
            </div>
        </div>
    )
}

export default ContentDetail