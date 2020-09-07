import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
	switch (action.type) {
		case 'add_blogpost':
			return [...state, { title: `Blog Post ${blogPosts.length + 1}` }];
		default:
			return state;
	}
};

const addBlogPost = (dispatch) => {
	return () => {
		dispatch({ type: 'add_blogpost' });
	};
};
//we import createDataContext and extract from it Context and Provider
export const { Context, Provider } = createDataContext(blogReducer, { addBlogPost }, []);
