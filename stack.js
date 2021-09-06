/**
Stacks - Time Complexity
Get, Search = O(n) avg | O(n) worst | O(n) space - worst
Insertion and Deletion = O(1) avg | O(1) worst
**/

class Stack {
	constructor() {
		this.stack = [];
	}

	push(data) {
		this.stack.push(data);
	}

	pop() {
		return this.stack.pop();
	}

	printStack() {
		let str = "";
		for (let i = 0; i < this.stack.length; i++) {
			str += this.stack[i] + "\n";
		}
		return str;
	}
}

let myStack = new Stack(); //create item of type stack
//push elements to a stack
myStack.push(2);
myStack.push(3);
myStack.push(9);
myStack.push(1);

// myStack.pop();
//print stack
console.log("Your stack is:\n"+myStack.printStack());


let name = "CHANDRA";

function reverseWord(string) {
	let word = string.split("");
	let reversed = "";
	let stack = [];
	for (let i = 0; i < word.length; i++) {
		stack.push(word[i])
	}

	while (stack.length) {
		reversed += stack.pop();
	}

	return reversed;
}

console.log(reverseWord(name));
