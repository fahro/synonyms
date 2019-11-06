import React from 'react';
import { mount } from 'enzyme';
import SearchBar from '../SearchBar';

describe('<SearchBar/>', () => {
	it('call updateKeyword and search methods', () => {
		var searchKeyword = 'Hey';
		const updateKeyword = (e) => {
			searchKeyword = e.target.value;
		};

		var searchedWord;
		const search = () => {
			searchedWord = searchKeyword;
		};

		const searchBar = mount(<SearchBar updateKeyword={updateKeyword} searchKeyword={'Hey'} search={search} />);

		expect(searchBar.find('input').props().value).toEqual('Hey');

		searchBar.find('input').simulate('change', { target: { value: 'Hello' } });
		expect(searchKeyword).toEqual('Hello');

		searchBar.find('button').simulate('click');
		expect(searchedWord).toEqual('Hello');
	});
});
