import React, { Component } from 'react';
import { Row, Col, Card, CardBody } from 'reactstrap';

class ResultMessage extends Component {
	render() {
		return (
			<Row>
				<Col md={{ size: 8, offset: 2 }}>
					<Card>
						<CardBody className={'result-card-body'}>
							<h1 className={'result-message'}>{this.props.message}</h1>
						</CardBody>
					</Card>
				</Col>
			</Row>
		);
	}
}

export default ResultMessage;
