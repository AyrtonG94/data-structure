class Queue {
	
	constructor() {
		this.count = 0;
		this.lowestCount = 0
		this.items = {}
		
	}
	
	queue(element) {
		if(this.isEmpty()) {
			this.items[this.lowestCount] = element;
		}	
		this.items[this.count] = element;
		this.count++;
	}
	
	enqueue() {
		if(this.isEmpty()) {
			return 'A lista está vazia e não há itens para remover';
		}
		
		delete this.items[this.lowestCount];
		this.lowestCount++
		this.count--
	}	
	clear() {
		this.count = 0;
		this.items = {}
	}
	isEmpty() {
		if(this.count == 0) {
		return 'A lista está vazia'
	}
		else {
			return `A lista não está vazia e contem um total de ${this.count} elemento(s)`
		}
	}
	
	size() {
		return `O tamanho da lista é de ${this.count} elementos`
	}
	
	peekFirstItem() {
		return this.items[this.lowestCount]
	}


}
