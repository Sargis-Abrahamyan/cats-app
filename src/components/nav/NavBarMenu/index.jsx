import React from 'react';
import {useDispatch} from 'react-redux';
import {Link, useLocation} from 'react-router-dom';

import * as actions from '../../../store/actions/actions';
import styles from './NavBarMenu.module.scss';

const NavBarMenu = ({id, name}) => {
	const dispatch = useDispatch();
	const {pathname} = useLocation();

	const handelChangeCategory = () => {
		dispatch(actions.actions_category_id(id));
		dispatch(actions.actionLoading(true));
	};

	return (
		<li className={styles.list_items}>
			<Link
				to={`${name}`}
				className={` ${`/${name}` === pathname && styles.active}`}
				onClick={() => handelChangeCategory()}
			>
				{name}
			</Link>
		</li>
	);
};

export default NavBarMenu;
