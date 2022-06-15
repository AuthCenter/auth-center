import React, { FC } from 'react';
import { LoginConfig } from './LoginConfig';
import Animation from './Animation';
import './index.less';

const Login: FC<any> = (props) => {
	return (
		<div className='login'>
			<Animation />
			<LoginConfig />
		</div>
	);
};

export default Login;
