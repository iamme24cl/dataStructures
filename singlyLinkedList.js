// Before we create a linked list, first we need to create the nodes.
// By default, the new node's next value is null, and its data is equal to
// the data we pass  as an argument.
function Node(data) {
	this.data = data;
	this.next = null;
}

// By default, the list doesn’t have any nodes, and the length is equal 
// to 0. If the list doesn’t have any nodes, both the head (the first node in the list)
// and the tail (the last node in the list) don’t exist, so their values are equal to null.
class SinglyLinkedList {
	cosntructor() {
		this.head = null;
		this.tail = null;
	}

	addNode(data) {
		const node = new Node(data);
		if (!this.head) {
			this.tail = node;
			this.head = node;
		} else {
			this.tail.next = node;
			this.tail = node;
		}
	}

	insertAfter(data, toNodeData) {
		let  current = this.head;
		while (current) {
			if (current.data === toNodeData) {
				const node = new Node(data);
				if (current === this.tail) {
					this.tail.next = node;
					this.tail = node;
				} else {
					node.next = current.next;
					current.next = node;
					break;
				}
			}
			current = current.next;
		}
	}

	removeNode(data) {
		let previous = this.head;
		let current = this.head;
		while (current) {
			if (current.data === data) {
				if (current === this.head) {
					this.head = this.head.next;
				}
				if (current === this.tail) {
					this.tail = previous
				} 
				previous.next = current.next;
			} else {
				previous = current;
			}
			currnet = current.next;
		}
	}
}

