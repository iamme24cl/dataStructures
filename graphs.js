/**
Graphs - Time Complexity
Get, Search, Insertion, Deletion = O(1) avg | O(n) worst | O(n) space - worst

Average - As we get the right location directly from the hash, we don't need to iterate over anything
Worst - It is possible that the user stores all items in one bucket, which we would then have to iterate through
**/

class Graph {
	constructor() {
		this.numberOfVertices = 0;
		this.adjList = new Map();
	}

	addVertex(vertex) {
		this.adjList.set(vertex, []);
		this.numberOfVertices++;
	}

	addEdge(vertex1, vertex2) {
		this.adjList.get(vertex1).push(vertex2);
		this.adjList.get(vertex2).push(vertex1);
	}

	print() {
		const keys = this.adjList.keys();
		for (let i of keys) {
			const values = this.adjList.get(i);
			let value = "";
			for (let j of values) {
				value += j + " ";
			}
			console.log(`${i} => ${value}`);
		}
	}

}

let graph = new Graph();
graph.addVertex(3);
graph.addVertex(5);

graph.addEdge(3, 5);

graph.print();


