import React, { Component } from 'react';
import Layout from './layout/Layout';
import Search from './search/Search';
import NotFound from './NotFound';
import { Route, Switch, Redirect } from 'react-router-dom';
import SynonymsDict from '../utilities/SynonymsDict';
class App extends Component {
	state = {
		dictionary: new SynonymsDict()
	};
	static _clean_word = (word) => {
		return word.trim().toLowerCase();
	};

	find_synonyms = (word) => {
		word = App._clean_word(word);
		let words = this.state.dictionary.getAllSynonymWords(word);
		console.log('riejci:', words);
		return words;
	};
	add_synonym = (word1, word2) => {
		word1 = App._clean_word(word1);
		word2 = App._clean_word(word2);
		let dict = this.state.dictionary;
		dict.pairSynonyms(word1, word2);
		this.setState({ dictionary: dict });
	};
	remove_synonym = (word1, word2) => {
		word1 = App._clean_word(word1);
		word2 = App._clean_word(word2);
		let dict = this.state.dictionary;
		dict.unpairSynonyms(word1, word2);
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
