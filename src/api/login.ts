import { request } from 'src/utils/request';

const loginApi = (params: { userName: string; password: string }) => {
	return request.post('/authLogin', { ...params });
};

export { loginApi };
