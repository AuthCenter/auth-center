import React, { FC } from 'react';
import { loginApi } from 'src/api/login';
import { FormLayout, stepTo } from 'src/utils/tools';
import { WlyForm, WlyFormItem, WlyInput, WlyButton } from 'wlyUI';
import './index.less';
const LoginConfig: FC<any> = (props) => {
	const [form] = WlyForm.useForm();
	return (
		<div className='login-config'>
			<WlyForm {...FormLayout()} form={form} name='login' autoComplete='off'>
				<WlyFormItem label={'用户名'} name='userName'>
					<WlyInput autoComplete='off' />
				</WlyFormItem>
				<WlyFormItem label={'密码'} name='password'>
					<WlyInput type='password' autoComplete='off' />
				</WlyFormItem>
				<WlyFormItem
					wrapperCol={{
						offset: 7
					}}>
					<WlyButton
						type='primary'
						htmlType='submit'
						onClick={() => {
							const params = form.getFieldsValue();
							loginApi(params).then((res) => {
								if (res.data.code === 0) {
									stepTo();
								}
							});
						}}>
						登录
					</WlyButton>
				</WlyFormItem>
			</WlyForm>
			{/* <WlyButton></WlyButton> */}
		</div>
	);
};

export { LoginConfig };
