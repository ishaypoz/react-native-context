import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigator';
import IndexScreen from './src/screens/IndexScreen';
import { Provider as BlogProvider } from './src/context/BlogContext';

const navigator = createStackNavigator(
	{
		Index: IndexScreen
	},
	{
		initialRouteName: 'Index',
		defaultNavigationOptions: {
			title: 'Blogs'
		}
	}
);
const App = createAppContainer(navigator);
export default () => {
	return (
		<BlogProvider>
			<App />
		</BlogProvider>
	);
};
