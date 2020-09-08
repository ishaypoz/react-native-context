import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostForm = ({ onSumit, initialValues }) => {
	const [title, setTitle] = useState(initialValues.title);
	const [content, setContent] = useState(initialValues.content);
	<View>
		<Text style={styles.label}>Enter Title:</Text>
		<TextInput value={title} style={styles.input} onChnageText={(text) => setTitle(text)} />
		<Text style={styles.label}>Enter Content:</Text>
		<TextInput value={content} style={styles.input} onChangeText={(text) => setContent(text)} />
		<Button
			title="Save Blog Post"
			onPress={() => {
				onSumit(title, content);
			}}
		/>
	</View>;
};
//automtic chechk if initialvalue is not undifend if yes use this
BlogPostForm.defaultProps = {
	initialValues: { title: '', content: '' }
};
const styles = StyleSheet.create({
	input: { fontSize: 18, borderWidth: 1, borderColor: 'black', marginBottom: 15, margin: 5, padding: 5 },
	label: { fontSize: 20, marginBottom: 5, marginLeft: 5 }
});

export default BlogPostForm;
