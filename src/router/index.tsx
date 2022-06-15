import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { App } from 'src/App';

const RootRoute = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='' element={<Navigate to={'login'} replace />}></Route>
				<Route path='login' element={<App />}></Route>
			</Routes>
		</BrowserRouter>
	);
};
export default RootRoute;
