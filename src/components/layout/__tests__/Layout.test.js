import React from 'react';
import { mount } from 'enzyme';
import Layout from '../Layout';
import { HashRouter } from 'react-router-dom';

describe('<Layout/>', () => {
	it('Renders  without crashing', () => {
		const layout = mount(
			<HashRouter>
				<Layout>Hello World</Layout>
			</HashRouter>
		);
		expect(layout.find('.container-fluid').text()).toEqual('Hello World');
		expect(layout.find('Header').length).toEqual(1);
		expect(layout.find('Footer').length).toEqual(1);
	});
});
