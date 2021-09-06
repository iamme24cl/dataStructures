/**
Queues - Time Complexity
Get, Search = O(n) avg | O(n) worst | O(n) space - worst
Insertion and Deletion = O(1) avg | O(1) worst
**/

class Queue {
	constructor() {
		this.queue = [];
	}

	enqueue(data) {
		this.queue.push(data);
	}

	dequeue() {
		return this.queue.shift();
	}

	printQueue() {
		let str = "";
		for (let i = 0; i < this.queue.length; i++) {
			str += this.queue[i] + " ";
		}
		return str;
	}
}

//create an object of type queue
let myQueue = new Queue();

//insert items into the queue
myQueue.enqueue(2);
myQueue.enqueue(3);
myQueue.enqueue(9);
myQueue.enqueue(1);

console.log("Your queue is:\n"+myQueue.printQueue());