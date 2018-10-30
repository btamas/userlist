export interface IConfig {
	/**
	 * Defines the API url and sub APIs
	 */
	api: {
		protocol: string;
		host: string;
		version: string;
		user: string;
	};
}
