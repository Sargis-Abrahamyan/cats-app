import React from 'react';
import styles from './fullScrren.module.scss';

const FullScrren = ({fullScrren, setFullScrren}) => {
	return (
		<>
			{fullScrren && (
				<div className={styles.cats_full_screen_wrapper}>
					<div className={styles.cats_full_screen_block}>
						<img src={fullScrren} alt='cats' />
						<button onClick={() => setFullScrren('')} className={styles.close_btn}>
							X
						</button>
					</div>
				</div>
			)}
		</>
	);
};

export default FullScrren;
