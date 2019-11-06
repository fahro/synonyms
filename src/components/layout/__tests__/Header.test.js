import React from 'react';
import { mount } from 'enzyme';
import Header from '../Header';
import { HashRouter } from 'react-router-dom';

describe('<Layout/>', () => {
	it('Renders  without crashing', () => {
		const header = mount(
			<HashRouter>
				<Header />
			</HashRouter>
		);
		expect(header.find('Navbar Link').text()).toEqual('Synoyms Dictionary App');
	});
});
