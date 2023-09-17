import React, {useState} from 'react';

import FullScrren from './fullscrren';
import styles from './catsitems.module.scss';

const CatsItems = ({cat: {url}}) => {
	const [fullScrren, setFullScrren] = useState('');

	return (
		<>
			<div className={styles.cats_block}>
				<img src={url} alt='cats' onClick={() => setFullScrren(url)} />
			</div>

			<FullScrren fullScrren={fullScrren} setFullScrren={setFullScrren} />
		</>
	);
};

export default CatsItems;
