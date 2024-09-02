import React from 'react';
import * as styles from './userProfile.module.css';
import { StaticImage } from 'gatsby-plugin-image'

const userProfile = () => {
  return (
    <div>
        <div className={styles.whiteWrapper}>
            <StaticImage  className={styles.circleProfile}
              alt="Clifford, a reddish-brown pitbull, posing on a couch and looking stoically at the camera"
              src="../../../blog/images/profileImage.png"/>
            <p className={styles.siteDescription}>
            <br/>yulaf`s record..☃️
            </p>
            <div className={styles.greyRule}/>
            <h3 className={styles.smallHeading}>생각하자</h3>
            <br/>

            <div className={styles.smallPostLink}>
              🧠가 멈추기전까지 기록해보기!<br/><br/>
              👩🏻‍💻배우고 익히고 경험한 내용을 기록하기 위한 블로그 
            </div>
            <br/>
            <br/>
            <br/>
            <p className={styles.github}>
            
              <a href="https://github.com/dbeod2">yura`s github link</a>
            </p>
        </div>
    </div>
  )
}

export default userProfile