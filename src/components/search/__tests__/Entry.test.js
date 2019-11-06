import React from 'react';
import { mount } from 'enzyme';
import Entry from '../Entry';
import { HashRouter } from 'react-router-dom';

describe('<Entry/>', () => {
	it('should display word', () => {
		const entry = mount(
			<HashRouter>
				<Entry data="hello" />
			</HashRouter>
		);
		expect(entry.find('CardText').length).toEqual(1);
		expect(entry.find('CardText').text()).toEqual('hello');
	});
});
