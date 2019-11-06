import React from 'react';
import { mount } from 'enzyme';
import ResultMessage from '../ResultMessage';

describe('<ResultMessage/>', () => {
	it('should display message', () => {
		const resultMessage = mount(<ResultMessage message="hello" />);
		expect(resultMessage.find('CardBody').length).toEqual(1);
		expect(resultMessage.find('.result-message').text()).toEqual('hello');
	});
});
