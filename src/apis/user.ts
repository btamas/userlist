import { IUserEntity } from 'apis/schemas/user';
import { apiRequest, RequestMethod } from './index';
import config from 'config';

interface IGetUserParameters {
	limit?: number;
	offset?: number;
	name?: string;
}

interface IGetUserResult extends Array<IUserEntity> {}

export async function getUsers(parameters: IGetUserParameters): Promise<IGetUserResult> {
	return apiRequest({
		method: RequestMethod.GET,
		pathname: config.api.user,
		parameters
	});
}
