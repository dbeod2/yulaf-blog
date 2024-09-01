import React from 'react';
import * as styles from './userProfile.module.css';

const userProfile = () => {
  return (
    <div>
        <div className={styles.whiteWrapper}>
            <img src="https://cdn.prod.website-files.com/5e4b1a54e48aed761d1ff229/5e4b1a54e48aed65841ff2a5_photo-1443180236447-432ea00e6ead.jpg"
            className={styles.circleProfile}/>
            <p className={styles.siteDescription}>
            yulaf`s record..☃️
            </p>
            <div className={styles.greyRule}/>
            <h3 className={styles.smallHeading}>쉴 줄아는 율라프 기술 블로그</h3>
            <br/>

            <div className={styles.smallPostLink}>
              🧠가 멈추기전까지 기록해보기!<br/><br/>
              👩🏻‍💻배우고 익히고 써본 내용을 기록하기 위한 블로그 
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