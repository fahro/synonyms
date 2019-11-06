import React, { Component } from 'react';
import { Row, Col, Card, CardBody, InputGroup, Input, Button } from 'reactstrap';
import Entry from './Entry';
import ResultMessage from './ResultMessage';
class Result extends Component {
	state = { synonymWord: '' };
	_handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			this.props.add(this.props.keyword, this.state.synonymWord);
			this.setState({ synonymWord: '' });
		}
	};

	render() {
		let keyword = this.props.keyword;
		return (
			<Row>
				<Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
					<Card>
						<CardBody>
							<div className={'keyword-text'}>{keyword}</div>
							<InputGroup>
								<Input
									className="synonym-input"
									placeholder={'Type new synonym for ' + keyword.toLowerCase()}
									onKeyPress={this._handleKeyPress}
									onChange={(e) => {
										this.setState({ synonymWord: e.target.value });
									}}
									value={this.state.synonymWord}
									autoFocus
								/>
								<Button
									color={'success'}
									onClick={() => {
										this.props.add(keyword, this.state.synonymWord);
									}}
								>
									+
								</Button>
							</InputGroup>

							<hr />
							{this.props.synonyms && this.props.synonyms.length > 0 ? (
								<Row>
									{this.props.synonyms.map((entry, index) => (
										<Col md="4" key={index}>
											<Entry
												search={this.props.search}
												data={entry}
												remove={this.props.remove.bind(null, keyword)}
											/>
										</Col>
									))}
								</Row>
							) : (
								<ResultMessage
									message={
										'Sorry but there is no synonym found for the word: ' + keyword.toLowerCase()
									}
								/>
							)}
						</CardBody>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default Result;
