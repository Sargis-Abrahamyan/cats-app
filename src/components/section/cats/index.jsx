import React from 'react';

import {UseList} from './useList';
import CatsItems from '../catsItems';
import styles from './cats.module.scss';

const Cats = () => {
	const {cats, handelAddCats} = UseList();

	return (
		<div className={styles.main_container}>
			<div className={styles.main_list_wrapper}>
				{cats.map((cat, index) => (
					<CatsItems key={index} cat={cat} />
				))}
			</div>

			<button className={styles.add_cats_btn} onClick={handelAddCats}>
				Add More
			</button>
		</div>
	);
};

export default Cats;
