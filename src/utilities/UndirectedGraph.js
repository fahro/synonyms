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
	 * @returns {[GraphNode, GraphNode]} source/destination node pair
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
		this.addVertex(source);
		this.addVertex(destination);

		this.nodes.get(source).delete(destination);
		this.nodes.get(destination).delete(source);
	}

	/**
	 * Graph search using depth-first search algorithm to get all connected nodes
	 * @param {GraphNode} first node to start 
	 */
	graphSearchDFS(first) {
		const visited = new Set();
		const visitList = []; // using array as stack with push and pop methods

		visitList.push(first);

		while (visitList && visitList.length) {
			console.log(visitList);
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
		return visited;
	}
}
