import * as url from 'url';
import * as path from 'path';
import * as qs from 'qs';
import config from 'config';

export enum RequestMethod {
	GET = 'GET',
	POST = 'POST'
}

export interface IRequestOptions {
	pathname: string;
	method: RequestMethod;
	parameters?: any;
}

export const apiRequest = async (options: IRequestOptions) => {
	const { pathname, method, parameters } = options;

	const { protocol, host, version } = config.api;

	let requestUrl = url.format({
		protocol,
		slashes: true,
		host,
		pathname: path.join(version, pathname)
	});

	let body: string | undefined;
	if (parameters) {
		switch (method) {
			case RequestMethod.GET:
				requestUrl += `?${qs.stringify(parameters)}`;
				break;
			default:
				body = JSON.stringify(parameters);
		}
	}

	const response = await fetch(requestUrl, {
		method: RequestMethod[method as any],
		body
	});

	if (!response.ok) {
		throw response;
	}

	let jsonResponse;
	try {
		jsonResponse = await response.json();
	} catch (e) {
		/**
		 * Response is not json
		 */
		jsonResponse = {};
	}
	return jsonResponse;
};
