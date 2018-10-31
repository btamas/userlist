import * as React from 'react';
import UserList from 'components/userlist';
import { getUsers } from 'apis/user';
import { IUser, User } from 'models/user';

import './style';

interface IUsersPageState {
	search: string;
	pageSize: number;
	users: IUser[];
}

const PageSizes = [10, 20, 50];

export default class UsersPage extends React.PureComponent<{}, IUsersPageState> {
	state = {
		search: '',
		pageSize: 10,
		users: []
	};

	async getList() {
		const { search, pageSize } = this.state;
		const userList = await getUsers({
			name: search,
			limit: pageSize
		});
		const users = userList.map(userProp => new User(userProp));
		this.setState({ users });
	}

	onSearch = (event: React.SyntheticEvent<HTMLInputElement>) => {
		const inputField = event.currentTarget;
		this.setState(
			{
				search: inputField.value
			},
			this.getList
		);
	};

	onPageSizeChange = (event: React.SyntheticEvent<HTMLSelectElement>) => {
		const inputField = event.currentTarget;
		this.setState(
			{
				pageSize: parseInt(inputField.value, 10)
			},
			this.getList
		);
	};

	componentWillMount() {
		this.getList();
	}

	get search() {
		return (
			<span>
				<label htmlFor="search">Search: </label>
				<input type="text" name="search" className="userpage__controlinput" onKeyUp={this.onSearch} />
			</span>
		);
	}

	get pageSizeSelector() {
		return (
			<select className="userpage__controlinput" onChange={this.onPageSizeChange}>
				{PageSizes.map(pageSize => (
					<option key={pageSize}>{pageSize}</option>
				))}
			</select>
		);
	}

	get controls() {
		return (
			<div className="userpage__controls">
				{this.search}
				{this.pageSizeSelector}
			</div>
		);
	}

	get userList() {
		const { users } = this.state;

		if (users.length) {
			return <UserList users={users} />;
		}

		return <div className="empty">List is empty</div>;
	}

	render() {
		return (
			<div className="userpage">
				<h1 className="title">User list</h1>
				{this.controls}
				{this.userList}
			</div>
		);
	}
}
