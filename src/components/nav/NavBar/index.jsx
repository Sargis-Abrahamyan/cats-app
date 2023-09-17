import React from 'react';
import {useSelector} from 'react-redux';

import styles from './navbar.module.scss';
import NavBarMenu from '../NavBarMenu';

const Category = () => {
	const {category} = useSelector((state) => state);

	return (
		<nav>
			<ul className={styles.list_block}>
				{category.length && category.map((item,index) => <NavBarMenu key={index} {...item} />)}
			</ul>
		</nav>
	);
};

export default Category;
