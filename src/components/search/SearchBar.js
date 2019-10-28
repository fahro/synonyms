import React, { Component } from 'react';
import { Row, Col, Jumbotron, InputGroup, Input, Button } from 'reactstrap';

class SearchBar extends Component {
	_handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.props.search();
		}
	};

	render() {
		return (
			<Row>
				<Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
					<Jumbotron>
						<h4>Search Synonyms</h4>
						<InputGroup>
							<Input
								placeholder={'Type word...'}
								className={'search-bar'}
								onKeyPress={this._handleKeyPress}
								onChange={this.props.updateKeyword}
								value={this.props.searchKeyword}
							/>
							<Button
								color={'warning'}
								className={'search-btn'}
								onClick={() => {
									this.props.search();
								}}
							>
								Search
							</Button>
						</InputGroup>
					</Jumbotron>
				</Col>
			</Row>
		);
	}
}

export default SearchBar;
