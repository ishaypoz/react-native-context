import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
	const { state, deleteBlogPost, getBlogPosts } = useContext(Context);
	//useEffect only called once we need it to fetch the data from server and not get infinte loop
	useEffect(() => {
		getBlogPosts();
		//did focus index screen is primpy screen on device will get invoked
		const listener = navigation.addListener('didFocus', () => {
			getBlogPosts();
		});
		return () => {
			//invoked if the index screen stop showing in the screen
			listener.remove();
		};
	}, []);
	return (
		<View>
			<FlatList
				data={state}
				keyExtractor={(blogPost) => blogPost.title}
				renderItem={({ item }) => {
					return (
						//can pass second argument in navigate
						<TouchableOpacity onPress={() => navigation.navigate('Show', { id: item.id })}>
							<View styls={styles.row}>
								<Text styls={styles.title}>
									{item.title} - {item.id}
								</Text>
								<TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
									<Feather style={styles.icon} name="trash" />
								</TouchableOpacity>
							</View>
						</TouchableOpacity>
					);
				}}
			/>
		</View>
	);
};
IndexScreen.navigationOptions = () => {
	return {
		headerRight: (
			<TouchableOpacity onPress={() => navigation.navigate('Create')}>
				<Feather name="plus" size={30} />
			</TouchableOpacity>
		)
	};
};
const styles = StyleSheet.create({
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingVertical: 20,
		paddingVertical: 10,
		borderTopWidth: 1,
		borderColor: 'grey'
	},
	title: { fontSize: 18 },
	icon: { fontSize: 24 }
});
export default IndexScreen;
