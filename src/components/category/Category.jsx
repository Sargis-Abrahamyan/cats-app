import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';

import * as actions from '../../store/actions/actions';
import styles from './scss/category.module.scss';

const Category = () => {
	const dispatch = useDispatch();
	const {category} = useSelector((state) => state);
	const {pathname} = useLocation();

	const handelChangeCategory = (id) => {
		dispatch(actions.actions_category_id(id));
		dispatch(actions.actionLoading(true));
	};

	return (
		<nav>
			<ul className={styles.list_block}>
				{category.length !== 0 &&
					category.map((items) => (
						<li key={items.id} className={styles.list_items}>
							<Link
								to={`${items.name}`}
								className={` ${`/${items?.name}` === pathname ? styles.active : null}`}
								onClick={() => handelChangeCategory(items.id)}
							>
								{items.name}
							</Link>
						</li>
					))}
			</ul>
		</nav>
	);
};

export default Category;
