import React from 'react';
import {Routes, Route, useLocation} from 'react-router-dom';
// components
import NavBar from '../nav/NavBar/index';
import Cats from '../section/cats';

const Root = () => {
	const {pathname} = useLocation();

	return (
		<>
			<NavBar />
			<Routes>
				<Route path={`/${pathname}`} element={<Cats />} />
				<Route path={`/:${pathname}`} element={<Cats />} />
			</Routes>
		</>
	);
};

export default Root;
