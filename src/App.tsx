import React, { FC } from 'react';
import Animation from './views/Login/Animation';
import './app.less';
import { LoginConfig } from './views/Login';
const App: FC<any> = (props) => {
	return (
		<div className='app'>
			<Animation />
			<LoginConfig />
		</div>
	);
};

export { App };
