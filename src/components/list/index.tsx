import * as React from 'react';
import classnames from 'classnames';

import './style';

interface IListProps<T> {
	items: T[];
	renderItem: (item: T) => JSX.Element;
	className?: string;
}

export default class List<T> extends React.Component<IListProps<T>, {}> {
	render() {
		const { items, renderItem, className } = this.props;
		return (
			<div className={classnames(className, 'list')}>
				<table className="list__container">
					<tbody>
						{items.map((item, index) => (
							<tr key={index} className="list__row">
								<td className="list__item">{renderItem(item)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
