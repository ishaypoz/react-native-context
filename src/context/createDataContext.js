import React, { useReducer } from 'react';
//action == addBlogPost from BlogContext (second argument)
export default (reducer, actions, initialState) => {
	const Context = React.createContext();
	//children is all the components we get inside the provider in APP
	const Provider = () => ({ children }) => {
		const [state, dispatch] = useReducer(reducer, initialState);
		const boundActions = {};
		//first key is boundAction.addBlogPost
		for (let key in actions) {
			boundActions[key] = actions[key](dispatch);
		}
		return <Context.Provider value={{ state, ...boundActions }}>{children}</Context.Provider>;
	};
	return { Context, Provider };
};
