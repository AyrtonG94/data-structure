class Queue {

	constructor() {
		this.count = 0;
		this.lowestCount = 0
		this.items = {}

	}

	queue(element) {
		if (this.isEmpty()) {
			this.items[this.lowestCount] = element;
		}
		this.items[this.count] = element;
		this.count++;
	}

	enqueue() {
		if (this.isEmpty()) {
			return 'A lista está vazia e não há itens para remover';
		}

		delete this.items[this.lowestCount];
		this.lowestCount++
		this.count--
	}
	clear() {
		if (this.isEmpty()) {
			return 'A lista está vazia'
		}
		this.count = 0;
		this.items = {}
	}


	size() {
		if (this.isEmpty) {
			return 'A lista está vazia'
		}
		return `O tamanho da lista é de ${this.count} elementos`
	}

	peekFirstItem() {
		if (this.isEmpty) {
			return 'A lista está vazia'
		}
		return this.items[this.lowestCount]
	}

	isEmpty() {
		if (this.count == 0) {
			return 'A lista está vazia'
		}
		else {
			return `A lista não está vazia e contem um total de ${this.count} elemento(s)`
		}
	}

}
