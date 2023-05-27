class Stack {
    constructor() {
        this.count = 0;
        this.items = []
    }

    addItem(element) {
        if(this.isEmpty()) {
            this.items[this.count] = element
        } 
            this.items[element]
            this.count++       
    }

    removeItem() {
        if(this.isEmpty()) {
            return 'A lista está vazia'
        }
        delete this.items[this.count -1]
        this.count--;
        this.items.length = this.count;
    }

    peekFirstItem() {
        if(this.isEmpty()) {
            return 'A lista está vazia'
        }
        return this.items[0]
    }

    clearStack() {
        if(this.isEmpty()) {
            return 'A lista está vazia'
        }
        this.items = [];
        this.count = 0;
    }

    stackSize() {
        if(this.isEmpty()) {
            return 'A lista está vazia'
        }
        return `A lista contem o total de ${this.items.length} elemento(s)`
    }

    isEmpty() {
        if(this.items.length == 0) {
            return 'A lista está vazia'
        }
        return `A lista não está vazia e contem ${this.count} elementos`
    }
}

