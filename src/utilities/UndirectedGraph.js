/**
 * Undirected Graph data structure implemented with an adjacent list
 */
export default class UndirectedGraph {
	constructor() {
		this.nodes = new Map();
	}
	/**
	 * Add a node to the graph.
	 * @param {any} value node's value
	 */
	addVertex(value) {
		if (!this.nodes.has(value)) {
			this.nodes.set(value, new Set());
		}
	}

	/**
	 * Removes node from graph
	 * It also removes the reference of the deleted node from
	 *  anywhere it was adjacent to.
	 * @param {any} value node's value
	 */
	removeVertex(value) {
		if (this.nodes.has(value)) {
			this.nodes.delete(value);
		}
	}

	/**
	 * Create a connection between source node and destination node.
	 * Beacuse the graph is undirected it will also create the conneciton from destination to source.
	 * @param {any} source
	 * @param {any} destination
	 */
	addEdge(source, destination) {
		if (source === '' || destination === '') return; //skip empty strings
		this.addVertex(source);
		this.addVertex(destination);

		this.nodes.get(source).add(destination);
		this.nodes.get(destination).add(source);
	}

	/**
	 * Remove connection between source node and destination.
	 * Beacuse the graph is undirected it will also remove the conneciton from destination to source.
	 *
	 *
	 * @param {any} source
	 * @param {any} destination
	 */
	removeEdge(source, destination) {
		let sourceNodes = this.nodes.get(source);
		if (sourceNodes.has(destination)) {
			sourceNodes.delete(destination);
		}
		let destinationNodes = this.nodes.get(destination);
		if (destinationNodes.has(source)) {
			destinationNodes.delete(source);
		}
	}

	/**
	 * Graph search using depth-first search algorithm to get all connected nodes
	 * @param {string} first node to start 
	 * @returns {[string]} list of connected nodes to the first node
	 */
	graphSearchDFS(first) {
		const visited = new Set();
		const visitList = []; // using array as stack with push and pop methods

		visitList.push(first);

		while (visitList && visitList.length) {
			//while visitList is not empty
			const node = visitList.pop();
			if (node && !visited.has(node)) {
				visited.add(node);
				let synonymWords = this.nodes.get(node);
				if (synonymWords && synonymWords.size > 0) {
					synonymWords.forEach((connectedNode) => visitList.push(connectedNode));
				}
			}
		}

		return visited; //return as array
	}
}
