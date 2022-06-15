import React, { FC } from 'react';
import Login from './views/Login';
import './app.less';
const App: FC<any> = (props) => {
	return (
		<div className='app'>
			<Login />
		</div>
	);
};

export { App };
