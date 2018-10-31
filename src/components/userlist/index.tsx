import * as React from 'react';
import { IUser } from 'models/user';
import List from 'components/list';

import './style';

interface IUserListProps {
	users: IUser[];
}

const initialImage = (name: string) =>
	`https://ui-avatars.com/api/?size=32&rounded=true&background=fff&color=2185c1&name=${name}`;

const UserList: React.StatelessComponent<IUserListProps> = props => {
	const renderItem = (item: IUser) => (
		<span className="userlistitem">
			<img src={initialImage(item.name)} />
			<span className="userlistitem__name">{item.name}</span>
		</span>
	);
	return <List items={props.users} renderItem={renderItem} />;
};

export default UserList;
