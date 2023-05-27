class Queue {

	constructor() {
		this.count = 0;
		this.lowestCount = 0
		this.items = {}

	}

	addItem(element) {
			this.items[this.count] = element;
			this.count++;
	}

	removeItem() {
		if (this.isEmpty()) {
			return 'A lista está vazia e não há itens para remover';
		}

		delete this.items[this.lowestCount];
		this.lowestCount++
		this.count--
		return 'Item removido com sucesso'
	}
	clear() {
		if (this.isEmpty()) {
			return 'A lista já está vazia';
		}
		this.count = 0;
		this.items = {}

		return 'Lista limpa com sucesso'
	}


	size() {
		return `A fila tem o total de ${this.count} elementos`
	}

	peekFirstItem() {
		if (this.isEmpty()) {
			return 'A lista está vazia';
		}
		return `O primeiro item da fila é o ${this.items[this.lowestCount]}`
	}

	isEmpty() {
		if (this.count == 0) {
			return 'A lista está vazia'
		}
	}

}

const fila = new Queue()
fila.addItem('Ayrton')
fila.addItem('gomes')
console.log(fila.peekFirstItem())
