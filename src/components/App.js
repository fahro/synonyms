import React, { Component } from 'react';
import Layout from './layout/Layout';
import Search from './search/Search';
import NotFound from './NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
class App extends Component {
	state = {
		dictionary: new Map([
			[ 'clean', new Set([ 'washed', 'blank', 'clear' ]) ],
			[ 'washed', new Set([ 'clean' ]) ],
			[ 'blank', new Set([ 'clean' ]) ],
			[ 'clear', new Set([ 'clean' ]) ]
		])
	};
	_clean_word = (word) => {
		return word.trim().toLowerCase();
	};

	find_synonyms = (word) => {
		word = this._clean_word(word);
		return this.state.dictionary.get(word);
	};
	add_synonym = (word1, word2) => {
		word1 = this._clean_word(word1);
		word2 = this._clean_word(word2);
		let dict = this.state.dictionary;
		let synonyms1 = dict.get(word1);
		let synonyms2 = dict.get(word2);
		if (synonyms1) {
			synonyms1.add(word2);
		} else {
			dict.set(word1, new Set([ word2 ]));
		}
		if (synonyms2) {
			synonyms2.add(word1);
		} else {
			dict.set(word2, new Set([ word1 ]));
		}
		this.setState({ dictionary: dict });
	};
	remove_synonym = (word1, word2) => {
		word1 = this._clean_word(word1);
		word2 = this._clean_word(word2);
		let dict = this.state.dictionary;
		let synonyms1 = dict.get(word1);
		let synonyms2 = dict.get(word2);
		console.log(synonyms1);
		console.log(synonyms2);
		if (synonyms1) {
			synonyms1.delete(word2);
			if (synonyms1.size === 0) {
				dict.delete(word1);
			}
		}
		if (synonyms2) {
			synonyms2.delete(word1);
			if (synonyms2.size === 0) {
				dict.delete(word2);
			}
		}
		this.setState({ dictionary: dict });
	};

	render() {
		return (
			<Layout>
				<Switch>
					<Route
						path="/browse/:keyword?"
						component={(props) => (
							<Search
								{...props}
								dictionary={this.state.dictionary}
								add_synonym={this.add_synonym}
								remove_synonym={this.remove_synonym}
								find_synonyms={this.find_synonyms}
							/>
						)}
					/>
					<Redirect exact from="/" to="/browse" />
					<Route path="/404" component={NotFound} />
					<Redirect to="/404" />
				</Switch>
			</Layout>
		);
	}
}

export default App;
