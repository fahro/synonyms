import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardText, CardGroup, CardTitle } from 'reactstrap';

class Entry extends Component {
	render() {
		let word = this.props.data;
		return (
			<CardGroup>
				<Card>
					<CardBody>
						<CardTitle>
							<Button
								close
								onClick={() => {
									this.props.remove(word);
								}}
							/>
						</CardTitle>
						<Link to={'/browse/' + word}>
							<CardText className={'synonym-text'}>{word}</CardText>
						</Link>
					</CardBody>
				</Card>
			</CardGroup>
		);
	}
}
export default Entry;
