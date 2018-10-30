import * as React from 'react';
import { hot } from 'react-hot-loader';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

require('./style');

// later we can remove React as any
const Suspense = (React as any).Suspense;
const lazy = (React as any).lazy;
const memo = (React as any).memo;

const UsersPage = lazy(() => import(/* webpackMode: "lazy" */ 'pages/users'));

const App = () => (
	<main>
		<Router>
			<Suspense fallback={<div>Loading...</div>}>
				<Switch>
					<Redirect exact from="/" to="/users" />
					<Route path="/users" component={UsersPage} />
				</Switch>
			</Suspense>
		</Router>
	</main>
);

export default hot(module)(memo(App));
