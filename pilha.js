class Stack {
    constructor() {
        this.count = 0;
        this.items = []
    }

    addItem(element) {
            this.items[this.count] = element;
            this.count++       
    }

    removeItem() {
        if(this.isEmpty()) {
            return 'A pilha está vazia e não há itens para remover'
        }
        delete this.items[this.count -1]
        this.count--;
        this.items.length = this.count;
        return 'Item removido com sucesso'
    }

    peekFirstItem() {
        if(this.isEmpty()) {
            return 'Não há elementos na pilha'
        }
        return `O primeiro item da pilha é o ${this.items[0]}`
    }

    clearStack() {
        if(this.isEmpty()) {
            return 'A pilha já está vazia e não há itens para remover'
        }
        this.items = [];
        this.count = 0;
        return 'Pilha limpa com sucesso'
    }

    stackSize() {
       return `A pilha contem o total de ${this.count} elemento(s)`
    }

    isEmpty() {
        if(this.count === 0) {
            return 'A pilha está vazia'
        }
    }
}

const pilha = new Stack()
pilha.addItem('Ayrton')
console.log(pilha.removeItem())

