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
									placeholder={'Type new synonym for ' + keyword}
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
							<Row>
								{this.props.synonyms ? (
									this.props.synonyms.map((entry, index) => (
										<Col md="4" key={index}>
											<Entry
												search={this.props.search}
												data={entry}
												remove={this.props.remove.bind(null, keyword)}
											/>
										</Col>
									))
								) : (
									<ResultMessage
										message={'Sorry but there is no synonym found for the word: ' + keyword}
									/>
								)}
							</Row>
						</CardBody>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default Result;
