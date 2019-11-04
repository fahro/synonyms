import UndirectedGraph from '../UndirectedGraph';

let g = new UndirectedGraph();
let arr = [ 'A', 'B', 'C', 'D', 'E', 'F' ];

for (let i = 0; i < arr.length; i++) {
	g.addVertex(arr[i]);
}

g.addEdge('A', 'A');
g.addEdge('A', 'D');
g.addEdge('A', 'E');
g.addEdge('B', 'C');
g.addEdge('D', 'E');
g.addEdge('E', 'F');
g.addEdge('E', 'C');
g.addEdge('C', 'F');

// TESTS FOR 'A'
test('test DFS', () => {
	expect([ ...g.graphSearchDFS('A') ]).toStrictEqual([ 'A', 'E', 'C', 'F', 'B', 'D' ]);
});
