import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultMessage from './ResultMessage';
import Result from './Result';

class Search extends Component {
	constructor(props) {
		super(props);
		let keyword = props.match.params.keyword;
		if (keyword === undefined) keyword = '';
		this.state = {
			currentWord: keyword,
			searchKeyword: keyword,
			dictionary: this.props.dictionary,
			results: null
		};
	}
	findWordSynonyms = (word) => {
		let results = this.props.find_synonyms(word);
		this.setState({
			currentWord: word,
			results
		});
	};

	loadingResults = () => {
		this.setState({ results: false });
	};

	componentDidUpdate(prevProps) {
		if (prevProps.match.params.keyword !== this.props.match.params.keyword) {
			this.setState({ searchKeyword: this.props.match.params.keyword }, () => {
				this._handleSearchWordSynonyms();
			});
		}
	}
	componentDidMount() {
		if (!!this.state.searchKeyword) {
			this._handleSearchWordSynonyms();
		}
	}

	_onSearchKeywordUpdate = (e) => {
		this.setState({ searchKeyword: e.target.value });
	};

	_handleSearchWordSynonyms = (word = '') => {
		this.loadingResults();
		let searchWord = word ? word : this.state.searchKeyword;
		if (searchWord) {
			this.findWordSynonyms(searchWord);
		}
	};
	_redirect = () => {
		if (!!this.state.searchKeyword) this.props.history.push('/browse/' + this.state.searchKeyword);
	};
	_renderResults = () => {
		if (this.state.results === false) {
			return <ResultMessage message={'Loading results please wait...'} />;
		} else if (this.state.results === null) {
			return <ResultMessage message={'Please type in a word to show synonyms.'} />;
		} else if (this.state.results === undefined || this.state.results.size === 0) {
			return (
				<Result
					keyword={this.state.currentWord}
					synonyms={undefined}
					search={this._redirect}
					remove={this.props.remove_synonym}
					add={this.props.add_synonym}
				/>
			);
		} else {
			return (
				<Result
					keyword={this.state.currentWord}
					synonyms={Array.from(this.state.results)}
					search={this._redirect}
					remove={this.props.remove_synonym}
					add={this.props.add_synonym}
				/>
			);
		}
	};

	render() {
		return (
			<div>
				<SearchBar
					searchKeyword={this.state.searchKeyword}
					search={this._redirect}
					updateKeyword={this._onSearchKeywordUpdate}
				/>
				{this._renderResults()}
			</div>
		);
	}
}

export default Search;
