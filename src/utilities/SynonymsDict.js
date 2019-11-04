import UndirectedGraph from './UndirectedGraph.js';

/**
 * Implementation of Synonym Word Dictionary using facade pattern to UndirectedGraph 
 * for readability of code
 */
export default class SynonymsDict {
	constructor() {
		this.graph = new UndirectedGraph();
	}

	/**
	 * Connect two words in graph
	 * @param {string} firstWord 
	 * @param {string} secondWord 
	 */
	pairSynonyms(firstWord, secondWord) {
		if (firstWord === secondWord) return; //skip pairing the same word
		this.graph.addEdge(firstWord, secondWord);
	}

	/**
	 * Disconnect two words in graph 
	 * @param {string} firstWord 
	 * @param {string} secondWord 
	 */
	unpairSynonyms(firstWord, secondWord) {
		if (firstWord === secondWord) return; //skip unpairing the same word

		let words = this.graph.graphSearchDFS(firstWord);
		if (words.has(firstWord)) {
			words.delete(firstWord);
		}
		if (words.has(secondWord)) {
			words.delete(secondWord);
		}
		//goal is to keep transitivity in unpairing words
		//e.g if A <-> B <-> C (<-> synonym with each other)
		// and if  A unpairs with B
		// result should be A<->C   and B is alone
		words.forEach((synonymWord) => {
			this.graph.addEdge(firstWord, synonymWord); //adding all synonyms of second word to first word
			this.graph.removeEdge(secondWord, synonymWord); // removing second word from its connected nodes
		});
		this.graph.removeEdge(firstWord, secondWord);
	}

	/**
	 * Connect two words in graph
	 * @param {string} word 
	 * @returns {Array[string]} list of synonym words
	 */
	getAllSynonymWords(word) {
		let words = this.graph.graphSearchDFS(word);
		words.delete(word);
		return [ ...words ];
	}
}
