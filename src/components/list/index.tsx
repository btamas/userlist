import * as React from 'react';

const style = require('./style');

interface IListProps<T> {
	items: T[];
	renderItem: (item: T) => JSX.Element;
	className?: string;
}

export default class List<T> extends React.Component<IListProps<T>, {}> {
	render() {
		const { items, renderItem, className } = this.props;
		return (
			<div className={className}>
				<table className={style.table}>
					<tbody>
						{items.map((item, index) => (
							<tr key={index} className={style.row}>
								<td>{renderItem(item)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
