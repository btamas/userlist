import * as React from 'react';
import { IUser } from 'models/user';
import List from 'components/list';

const style = require('./style');

interface IUserListProps {
	users: IUser[];
}

const initialImage = (name: string) =>
	`https://ui-avatars.com/api/?size=32&rounded=true&background=fff&color=2185c1&name=${name}`;

const UserList: React.StatelessComponent<IUserListProps> = props => {
	const renderItem = (item: IUser) => (
		<span className={style.user}>
			<img src={initialImage(item.name)} />
			<span className={style.username}>{item.name}</span>
		</span>
	);
	return <List items={props.users} renderItem={renderItem} />;
};

export default UserList;
