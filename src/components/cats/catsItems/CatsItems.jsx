import React, { useState } from 'react';
// scss
import styles from "./scss/catsitems.module.scss";

const CatsItems = ({ cat: { url } }) => {
  const [fullScrren, setFullScrren] = useState('');

  return <>
    <div className={styles.cats_block}>
      <img src={url} alt="cats" onClick={() => setFullScrren(url)} />
    </div>

    {
      fullScrren && <div className={styles.cats_full_screen_wrapper}>
        <div className={styles.cats_full_screen_block}>
          <img src={fullScrren} alt="cats" />
          <button onClick={() => setFullScrren("")} className={styles.close_btn}>X</button>
        </div>
      </div>
    }
  </>

}

export default CatsItems;