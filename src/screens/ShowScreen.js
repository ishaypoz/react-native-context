import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';

const ShowScreen = ({ navigation }) => {
	const { state } = useContext(Context);
	//(name key for every key in the array)=> insert it the value of (id=id you get from navigation)
	const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'));
	return (
		<View>
			<Text>{blogPost.title}</Text>
			<Text>{blogPost.content}</Text>
		</View>
	);
};

ShowScreen.navigationOption = ({ navigation }) => {
	return {
		headerRight: (
			<TouchableOpacity
				onPress={() => {
					navigation.navigate('Edit', { id: navigation.getParm('id') });
				}}
			>
				<EvilIcons name="pencil" size={35}></EvilIcons>{' '}
			</TouchableOpacity>
		)
	};
};

const styles = StyleSheet.create({});

export default ShowScreen;
