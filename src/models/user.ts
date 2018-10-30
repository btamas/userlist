import { IUserEntity } from 'apis/schemas/user';

export interface IUserProps extends IUserEntity {}

export interface IUser {
	readonly id: number;
	readonly name: string;
}

export class User implements IUser {
	private props: IUserProps;

	constructor(props: IUserProps) {
		this.props = props;
	}

	get id() {
		return this.props.userId;
	}

	get name() {
		return `${this.props.firstName} ${this.props.lastName}`;
	}
}
