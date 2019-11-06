import React from 'react';
import { mount } from 'enzyme';
import Footer from '../Footer';

describe('<Footer/>', () => {
	it('Renders  without crashing', () => {
		const footer = mount(<Footer />);
		expect(footer.find('Container span').text()).toEqual('Fahro | Powered by Reeinvent');
	});
});
